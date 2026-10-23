import {
  waitForEvenAppBridge,
  TextContainerProperty,
  CreateStartUpPageContainer,
  TextContainerUpgrade,
  OsEventTypeList,
} from '@evenrealities/even_hub_sdk'
import { WORDS, SITUATIONS } from './data/curriculum'
import { loadProgress, record, dueWords, newWords, forgotten, getWord, type Progress } from './logic/progress'

type Mode = 'home' | 'learn' | 'speak' | 'forgotten' | 'done'
type Phase = 'prompt' | 'hint1' | 'hint2' | 'reveal' | 'rate'

const progress: Record<string, Progress> = loadProgress()
let mode: Mode = 'home'
let queue: string[] = []
let qi = 0
let phase: Phase = 'prompt'
let hintLevel = 0
let showRomaji = true

function currentWord() {
  const id = queue[qi]
  return id ? getWord(id) : undefined
}

function line(): string {
  if (mode === 'home') {
    return [
      'KOTO',
      '',
      'tap  Speak!',
      'swipe  Learn new',
      'double-tap  exit',
      '',
      `${dueWords(progress).length} due`,
    ].join('\n')
  }
  if (mode === 'done') {
    return [
      'Done for now.',
      '',
      'tap  home',
      'double-tap  exit',
    ].join('\n')
  }
  const w = currentWord()
  if (!w) return 'No items.\ntap home'
  const sit = SITUATIONS.find(s => s.target === w.id)
  const prompt = mode === 'learn' ? `NEW  ${w.en}` : (sit?.en || w.en)

  if (phase === 'prompt') {
    return [
      prompt,
      '',
      'Say it.',
      'tap  I tried',
      'swipe  hint',
    ].join('\n')
  }
  if (phase === 'hint1') {
    return [
      prompt,
      '',
      `starts with  ${w.romaji[0]}`,
      'tap  more',
    ].join('\n')
  }
  if (phase === 'hint2') {
    return [
      prompt,
      '',
      w.jp.slice(0, 2) + '…',
      showRomaji ? w.romaji : '',
      'tap  answer',
    ].join('\n')
  }
  if (phase === 'reveal') {
    const ex = w.examples[0]
    return [
      w.jp,
      showRomaji ? w.romaji : '',
      ex.jp,
      showRomaji ? ex.romaji : '',
      ex.en,
      '',
      'tap  rate',
    ].join('\n')
  }
  // rate
  return [
    'How was it?',
    '',
    'tap  got it',
    'swipe up  almost',
    'swipe down  missed',
  ].join('\n')
}

function eventTypeOf(envelope?: { eventType?: OsEventTypeList }): OsEventTypeList | null {
  if (!envelope) return null
  return envelope.eventType ?? OsEventTypeList.CLICK_EVENT
}

const bridge = await waitForEvenAppBridge()

await bridge.createStartUpPageContainer(
  new CreateStartUpPageContainer({
    containerTotalNum: 1,
    textObject: [
      new TextContainerProperty({
        xPosition: 0,
        yPosition: 0,
        width: 576,
        height: 288,
        borderWidth: 0,
        borderColor: 5,
        paddingLength: 4,
        containerID: 1,
        containerName: 'main',
        content: line(),
        isEventCapture: 1,
      }),
    ],
  }),
)

function show() {
  bridge.textContainerUpgrade(
    new TextContainerUpgrade({
      containerID: 1,
      containerName: 'main',
      content: line(),
    }),
  )
  const el = document.getElementById('status')
  if (el) el.textContent = `${mode} ${qi + 1}/${queue.length || '-'} ${phase}`
}

function startSpeak() {
  const due = dueWords(progress, 6).map(w => w.id)
  const fresh = newWords(progress, 3).map(w => w.id)
  queue = [...due, ...fresh]
  if (queue.length === 0) queue = WORDS.slice(0, 5).map(w => w.id)
  qi = 0
  phase = 'prompt'
  hintLevel = 0
  mode = 'speak'
  show()
}

function startLearn() {
  const fresh = newWords(progress, 4).map(w => w.id)
  queue = fresh.length ? fresh : WORDS.slice(0, 4).map(w => w.id)
  qi = 0
  phase = 'prompt'
  mode = 'learn'
  show()
}

function startForgotten() {
  const ids = forgotten(progress, 8).map(w => w.id)
  queue = ids.length ? ids : dueWords(progress, 5).map(w => w.id)
  if (!queue.length) queue = WORDS.slice(0, 3).map(w => w.id)
  qi = 0
  phase = 'prompt'
  mode = 'forgotten'
  show()
}

function advance() {
  qi++
  if (qi >= queue.length) {
    mode = 'done'
    show()
    return
  }
  phase = 'prompt'
  hintLevel = 0
  show()
}

function rate(outcome: 'got' | 'almost' | 'missed') {
  const w = currentWord()
  if (w) record(progress, w.id, outcome)
  advance()
}

const unsubscribe = bridge.onEvenHubEvent(event => {
  const sys = eventTypeOf(event.sysEvent)
  const txt = eventTypeOf(event.textEvent)

  if (sys === OsEventTypeList.DOUBLE_CLICK_EVENT || txt === OsEventTypeList.DOUBLE_CLICK_EVENT) {
    bridge.shutDownPageContainer(1)
    return
  }

  const click = sys === OsEventTypeList.CLICK_EVENT || txt === OsEventTypeList.CLICK_EVENT
  const up = txt === OsEventTypeList.SCROLL_TOP_EVENT
  const down = txt === OsEventTypeList.SCROLL_BOTTOM_EVENT

  if (mode === 'home') {
    if (click) startSpeak()
    else if (up) startLearn()
    else if (down) startForgotten()
    return
  }
  if (mode === 'done') {
    if (click) { mode = 'home'; show() }
    return
  }

  if (phase === 'prompt') {
    if (click) { phase = 'reveal'; show() }
    else if (up || down) { phase = 'hint1'; show() }
    return
  }
  if (phase === 'hint1') {
    if (click) { phase = 'hint2'; show() }
    return
  }
  if (phase === 'hint2') {
    if (click) { phase = 'reveal'; show() }
    return
  }
  if (phase === 'reveal') {
    if (click) { phase = 'rate'; show() }
    return
  }
  if (phase === 'rate') {
    if (click) rate('got')
    else if (up) rate('almost')
    else if (down) rate('missed')
    return
  }

  if (sys === OsEventTypeList.SYSTEM_EXIT_EVENT || sys === OsEventTypeList.ABNORMAL_EXIT_EVENT) {
    unsubscribe()
  }
})

document.getElementById('status')!.textContent = 'KOTO ready'
