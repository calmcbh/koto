import { WORDS, type Word } from '../data/curriculum'

export type Progress = {
  production: number   // 0-5 strength
  success: number
  fail: number
  last: number
  next: number
  introduced: boolean
}

const KEY = 'koto-progress-v1'
const DAY = 24 * 60 * 60 * 1000

export function loadProgress(): Record<string, Progress> {
  try {
    const raw = localStorage.getItem(KEY)
    if (raw) return JSON.parse(raw)
  } catch {}
  const init: Record<string, Progress> = {}
  for (const w of WORDS) {
    init[w.id] = { production: 0, success: 0, fail: 0, last: 0, next: 0, introduced: false }
  }
  return init
}

export function saveProgress(p: Record<string, Progress>) {
  localStorage.setItem(KEY, JSON.stringify(p))
}

function intervalFor(strength: number): number {
  if (strength <= 0) return 0
  if (strength === 1) return 4 * 60 * 60 * 1000      // 4h
  if (strength === 2) return DAY
  if (strength === 3) return 3 * DAY
  if (strength === 4) return 7 * DAY
  return 21 * DAY
}

export function record(p: Record<string, Progress>, id: string, outcome: 'got' | 'almost' | 'missed') {
  const cur = p[id] || { production: 0, success: 0, fail: 0, last: 0, next: 0, introduced: true }
  const now = Date.now()
  cur.last = now
  cur.introduced = true
  if (outcome === 'got') {
    cur.production = Math.min(5, cur.production + 1)
    cur.success++
  } else if (outcome === 'almost') {
    cur.production = Math.max(0, cur.production)
    cur.fail++
  } else {
    cur.production = Math.max(0, cur.production - 1)
    cur.fail++
  }
  cur.next = now + intervalFor(cur.production)
  p[id] = cur
  saveProgress(p)
}

export function dueWords(p: Record<string, Progress>, limit = 8): Word[] {
  const now = Date.now()
  return WORDS
    .filter(w => {
      const pr = p[w.id]
      if (!pr?.introduced) return false
      return pr.next <= now || pr.production <= 1
    })
    .sort((a, b) => (p[a.id]?.production ?? 0) - (p[b.id]?.production ?? 0))
    .slice(0, limit)
}

export function newWords(p: Record<string, Progress>, n = 4): Word[] {
  return WORDS.filter(w => !p[w.id]?.introduced).slice(0, n)
}

export function forgotten(p: Record<string, Progress>, limit = 10): Word[] {
  return WORDS
    .filter(w => (p[w.id]?.fail ?? 0) > (p[w.id]?.success ?? 0))
    .sort((a, b) => (p[b.id]?.fail ?? 0) - (p[a.id]?.fail ?? 0))
    .slice(0, limit)
}

export function getWord(id: string): Word | undefined {
  return WORDS.find(w => w.id === id)
}
