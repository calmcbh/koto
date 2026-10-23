// Speech-to-text stub for KOTO.
// Official ASR template leaves this blank. Wire a real provider here.
// G2 mic: PCM s16le @ 16 kHz mono via bridge.audioControl(true) + audioEvent.audioPcm.
//
// Recommended: Deepgram Nova-3 (good Japanese) or Soniox.
// Do not embed the API key in the distributed bundle for public use.
// For private personal use, put the key in .env.local as VITE_STT_API_KEY.

export interface SttSnapshot {
  finalText: string
  interimText: string
  finished: boolean
}

export interface SttClient {
  sendPcm(chunk: Uint8Array): void
  close(): void
}

export function startSttStream(
  apiKey: string,
  onSnapshot: (snap: SttSnapshot) => void,
  onError?: (err: unknown) => void,
): SttClient {
  if (!apiKey) {
    onError?.(new Error('No STT key — use manual mode (tap when you have said it)'))
    return { sendPcm() {}, close() {} }
  }
  // Placeholder: implement Deepgram or Soniox WebSocket here.
  // See README for the exact wiring.
  onError?.(new Error('STT provider not wired — see src/asr/stt.ts and README'))
  return {
    sendPcm() {},
    close() {},
  }
}
