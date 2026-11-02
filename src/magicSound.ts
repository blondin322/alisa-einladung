type Ctx = BaseAudioContext

function hoof(ctx: Ctx, out: AudioNode, at: number, strength: number) {
  const length = 0.08
  const buffer = ctx.createBuffer(1, Math.floor(ctx.sampleRate * length), ctx.sampleRate)
  const data = buffer.getChannelData(0)
  for (let i = 0; i < data.length; i++) {
    data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / data.length, 3)
  }
  const noise = ctx.createBufferSource()
  noise.buffer = buffer
  const filter = ctx.createBiquadFilter()
  filter.type = 'bandpass'
  filter.frequency.value = 700 + Math.random() * 250
  filter.Q.value = 1.2
  const gain = ctx.createGain()
  gain.gain.setValueAtTime(0.28 * strength, at)
  gain.gain.exponentialRampToValueAtTime(0.001, at + length)
  noise.connect(filter).connect(gain).connect(out)
  noise.start(at)

  const thump = ctx.createOscillator()
  thump.frequency.setValueAtTime(120, at)
  thump.frequency.exponentialRampToValueAtTime(55, at + 0.08)
  const thumpGain = ctx.createGain()
  thumpGain.gain.setValueAtTime(0.22 * strength, at)
  thumpGain.gain.exponentialRampToValueAtTime(0.001, at + 0.1)
  thump.connect(thumpGain).connect(out)
  thump.start(at)
  thump.stop(at + 0.12)
}

function harp(ctx: Ctx, out: AudioNode, at: number, freq: number, level = 0.12, decay = 1.6) {
  for (const [ratio, mix, type] of [
    [1, 1, 'triangle'],
    [2, 0.35, 'sine'],
    [3, 0.12, 'sine'],
  ] as const) {
    const osc = ctx.createOscillator()
    osc.type = type
    osc.frequency.value = freq * ratio
    const gain = ctx.createGain()
    gain.gain.setValueAtTime(0.0001, at)
    gain.gain.exponentialRampToValueAtTime(level * mix, at + 0.008)
    gain.gain.exponentialRampToValueAtTime(0.0001, at + decay)
    osc.connect(gain).connect(out)
    osc.start(at)
    osc.stop(at + decay + 0.05)
  }
}

function twinkle(ctx: Ctx, out: AudioNode, at: number) {
  const osc = ctx.createOscillator()
  osc.type = 'sine'
  osc.frequency.value = 2200 + Math.random() * 2600
  const gain = ctx.createGain()
  gain.gain.setValueAtTime(0.0001, at)
  gain.gain.exponentialRampToValueAtTime(0.05, at + 0.005)
  gain.gain.exponentialRampToValueAtTime(0.0001, at + 0.35)
  osc.connect(gain).connect(out)
  osc.start(at)
  osc.stop(at + 0.4)
}

/** Harp glissando with sparkles, a soft gallop, and a warm final chord. */
export function playMagicSound(ctx: Ctx) {
  const master = ctx.createGain()
  master.gain.value = 0.9
  const echo = ctx.createDelay()
  echo.delayTime.value = 0.18
  const echoGain = ctx.createGain()
  echoGain.gain.value = 0.28
  master.connect(ctx.destination)
  master.connect(echo)
  echo.connect(echoGain).connect(echo)
  echoGain.connect(ctx.destination)

  const start = ctx.currentTime + 0.05

  const scale = [392, 440, 523.25, 587.33, 659.25, 783.99, 880, 1046.5, 1174.66, 1318.51, 1567.98]
  scale.forEach((freq, i) => harp(ctx, master, start + i * 0.07, freq, 0.09, 1.2))

  for (let n = 0; n < 28; n++) {
    twinkle(ctx, master, start + 0.2 + Math.random() * 4.2)
  }

  const stride = 0.4
  for (let n = 0; n < 6; n++) {
    const t = start + 0.9 + n * stride
    const fade = Math.sin(((n + 0.5) / 6) * Math.PI) * 0.7 + 0.3
    hoof(ctx, master, t, fade)
    hoof(ctx, master, t + 0.09, fade * 0.8)
    hoof(ctx, master, t + 0.18, fade * 0.9)
  }

  const chord = [261.63, 329.63, 392, 523.25, 659.25]
  chord.forEach((freq, i) => harp(ctx, master, start + 2.2 + i * 0.05, freq, 0.11, 2.8))
  harp(ctx, master, start + 2.55, 1046.5, 0.07, 2.4)

  return () => {
    const now = ctx.currentTime
    master.gain.cancelScheduledValues(now)
    master.gain.setValueAtTime(master.gain.value, now)
    master.gain.linearRampToValueAtTime(0, now + 0.15)
  }
}
