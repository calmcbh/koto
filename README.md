# KOTO — Personal Japanese Speaking Companion for Even G2

Private Even Hub plugin. Glasses are the primary interface.

## What this version does

- **Speak!** — English situation → you say it → progressive hints → reveal → self-rate (got / almost / missed)
- **Learn new** — introduce 3–4 new words, then produce them
- **Forgotten** — words you have missed more than succeeded
- **Spaced retrieval** — success lengthens the interval; misses bring the word back sooner
- **Persistent progress** — saved in the phone’s localStorage, survives app restarts
- **Glanceable text** — short lines, hiragana + optional romaji, no mandatory kanji

## Speech recognition

The official ASR template leaves STT as a stub. This build uses **manual self-assessment** so the full learning loop works without any API key or network.

To add real Japanese STT later:

1. Choose a provider (Deepgram Nova-3 or Soniox recommended for Japanese).
2. Implement `startSttStream` in `src/asr/stt.ts` using their WebSocket.
3. Add a network permission in `app.json` with the provider host whitelist.
4. Put your key in `.env.local` as `VITE_STT_API_KEY=...` (never commit it).
5. G2 mic format: PCM s16le @ 16 kHz mono via `bridge.audioControl(true)` and `audioEvent.audioPcm`.

## Controls

| Gesture | Action |
|---------|--------|
| Tap | Primary (start Speak, “I tried”, next hint, reveal, “got it”) |
| Swipe up | Learn new (home) / almost (rate) / hint |
| Swipe down | Forgotten (home) / missed (rate) |
| Double-tap | Exit |

## Build & install (private use)

On your Mac:

```bash
git clone https://github.com/calmcbh/koto.git
cd koto
npm install
npm run pack
```

This creates `koto.ehpk`.

Then:

1. Go to [hub.evenrealities.com](https://hub.evenrealities.com)
2. Create a new project and upload `koto.ehpk`
3. Click the Private tag → **Beta** → **Promote to Beta**
4. Testing group → add your email → accept the invite so status is **Active**
5. In the Even app: **Me → Beta tester** → install

Private builds alone show “test version expired”. Beta + Active tester is the supported way for personal installs that survive phone lock.

## Simulator (optional)

```bash
npm run dev
npx evenhub-simulator http://localhost:5173
```

## Curriculum

~70 beginner words and 15 speaking situations covering food/drinks, numbers/prices, time, places, feelings, and social Japanese. Standard Japanese first; Osaka contexts appear naturally (station, yen, cafe) without forced dialect.

## Next steps after this works

- Wire real STT
- Tiny conversation mode
- Surprise challenges
- Hide romaji toggle
- Expand curriculum from the same pattern
