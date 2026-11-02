import { useEffect, useRef, useState } from 'react'
import { playMagicSound } from '../magicSound.ts'
import { party } from '../party.ts'
import { Sparkles } from './Sparkles.tsx'

const INTRO_MS = 5200
const EXIT_MS = 800

type MagicIntroProps = {
  onDone: () => void
}

export function MagicIntro({ onDone }: MagicIntroProps) {
  const reduceMotion =
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const [run, setRun] = useState(0)
  const [leaving, setLeaving] = useState(false)
  const [soundOn, setSoundOn] = useState(false)
  const ctxRef = useRef<AudioContext | null>(null)
  const stopRef = useRef<(() => void) | null>(null)

  useEffect(() => {
    const total = reduceMotion ? 1800 : INTRO_MS
    const exit = window.setTimeout(() => setLeaving(true), total - EXIT_MS)
    const done = window.setTimeout(onDone, total)
    return () => {
      window.clearTimeout(exit)
      window.clearTimeout(done)
    }
  }, [run, onDone, reduceMotion])

  useEffect(() => {
    if (reduceMotion) return
    const ctx = new AudioContext()
    ctxRef.current = ctx
    ctx
      .resume()
      .then(() => {
        if (ctx.state === 'running' && ctxRef.current === ctx) {
          stopRef.current = playMagicSound(ctx)
          setSoundOn(true)
        }
      })
      .catch(() => {})
    return () => {
      stopRef.current?.()
      stopRef.current = null
      ctxRef.current = null
      window.setTimeout(() => void ctx.close(), 300)
    }
  }, [reduceMotion])

  function replayWithSound() {
    const ctx = ctxRef.current ?? new AudioContext()
    ctxRef.current = ctx
    void ctx.resume().then(() => {
      stopRef.current?.()
      stopRef.current = playMagicSound(ctx)
      setSoundOn(true)
      setLeaving(false)
      setRun((n) => n + 1)
    })
  }

  function skip() {
    stopRef.current?.()
    onDone()
  }

  return (
    <div
      className={`magic-intro fixed inset-0 z-50 overflow-hidden bg-night ${leaving ? 'magic-intro-leave' : ''}`}
      role="presentation"
    >
      <div key={run} className="absolute inset-0">
        <div
          className="magic-intro-art absolute inset-0 bg-cover bg-center landscape:hidden"
          style={{ backgroundImage: `url(${import.meta.env.BASE_URL}img/magic-horses-intro.webp)` }}
        />
        <div
          className="magic-intro-art absolute inset-0 hidden bg-cover bg-[50%_30%] landscape:block"
          style={{ backgroundImage: `url(${import.meta.env.BASE_URL}img/magic-horses-card.webp)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-night/70 via-transparent to-night/50" />
        <Sparkles className="absolute inset-0 h-full w-full" density={1.6} />
        <div className="magic-intro-flash absolute inset-0" />

        <div className="magic-intro-title absolute inset-x-0 top-[9%] px-6 text-center">
          <p className="font-caps text-xs tracking-[0.4em] text-gold-soft uppercase sm:text-sm">
            Du bist eingeladen
          </p>
          <p className="magic-name mt-1 font-script text-[6.5rem] leading-[1.05] sm:text-[8rem]">
            {party.childName}
          </p>
          <p className="-mt-2 font-caps text-2xl tracking-[0.2em] text-moon sm:text-3xl">
            wird {party.age}
          </p>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 px-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
        {soundOn ? (
          <span />
        ) : (
          <button
            type="button"
            onClick={replayWithSound}
            className="inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-full border border-gold/40 bg-night/60 px-4 text-sm font-bold text-moon backdrop-blur hover:bg-night/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
          >
            <SpeakerIcon />
            Mit Ton
          </button>
        )}
        <button
          type="button"
          onClick={skip}
          className="inline-flex min-h-11 cursor-pointer items-center rounded-full px-4 text-sm font-bold text-moon/80 hover:text-moon focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
        >
          Überspringen
        </button>
      </div>
    </div>
  )
}

function SpeakerIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      <path d="M4 9h4l5-4v14l-5-4H4z" fill="currentColor" />
      <path
        d="M16 8.5a5 5 0 0 1 0 7M18.5 6a8.5 8.5 0 0 1 0 12"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}
