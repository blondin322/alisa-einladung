import { useCallback, useState } from 'react'
import { MagicIntro } from '../components/MagicIntro.tsx'
import { Sparkles } from '../components/Sparkles.tsx'
import { mapHref, party, whatsappHref } from '../party.ts'

export function Invitation() {
  const [introDone, setIntroDone] = useState(false)
  const finishIntro = useCallback(() => setIntroDone(true), [])

  return (
    <div className="magic-page relative min-h-dvh overflow-hidden">
      <Sparkles className="pointer-events-none fixed inset-0 h-full w-full opacity-70" density={0.6} />

      {introDone ? (
        <main className="safe-center relative mx-auto flex min-h-dvh w-full max-w-md flex-col px-4 py-8 sm:py-12">
          <article className="card-enter magic-card relative overflow-hidden rounded-[2rem]">
            <div className="relative">
              <img
                src={`${import.meta.env.BASE_URL}img/magic-horses-card.webp`}
                alt="Zwei Pferde in einer verzauberten Blumenwiese unter dem Sternenhimmel"
                className="block aspect-[16/10] w-full object-cover"
                width={1280}
                height={720}
              />
              <Sparkles className="pointer-events-none absolute inset-0 h-full w-full" density={1.4} />
              <div className="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-b from-transparent via-plum/70 to-[#3a2470]" />
            </div>

            <div className="relative -mt-8 px-6 pb-9 text-center sm:px-8">
              <p className="font-caps text-[0.7rem] tracking-[0.42em] text-gold-soft uppercase [text-shadow:0_1px_8px_rgba(20,10,50,0.9)]">
                Du bist eingeladen
              </p>
              <h1 className="mt-1">
                <span className="magic-name block font-script text-[5.5rem] leading-[1.1]">
                  {party.childName}
                </span>
                <span className="-mt-1 block font-caps text-2xl tracking-[0.2em] text-moon">
                  wird {party.age}
                </span>
              </h1>
              <p className="mt-4 text-lg text-lilac">Gefeiert wird am Samstag.</p>

              <Ornament />

              <dl className="space-y-6">
                <div>
                  <dt className="font-caps text-[0.7rem] tracking-[0.36em] text-gold-soft uppercase">
                    Wann
                  </dt>
                  <dd className="mt-2 text-moon">
                    <span className="block font-caps text-xl tracking-wide">{party.weekday}</span>
                    <span className="block font-caps text-2xl tracking-wide">{party.dateLabel}</span>
                    <span className="mt-1 block text-lg font-semibold text-rose">{party.timeLabel}</span>
                  </dd>
                </div>
                <div>
                  <dt className="font-caps text-[0.7rem] tracking-[0.36em] text-gold-soft uppercase">
                    Wo
                  </dt>
                  <dd className="mt-2 text-moon">
                    <span className="block font-caps text-2xl tracking-wide text-balance">
                      {party.placeLine}
                    </span>
                    <span className="mt-1 block text-lg font-semibold text-rose">{party.placeTown}</span>
                  </dd>
                </div>
              </dl>

              <div className="mt-8 flex flex-col gap-3">
                <a
                  className="magic-button-gold inline-flex min-h-12 items-center justify-center rounded-full px-5 py-3 text-center text-base font-bold text-night transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                  href={mapHref()}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Wegbeschreibung
                </a>
                <a
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-rose/60 bg-white/5 px-5 py-3 text-center text-base font-bold text-moon backdrop-blur transition hover:bg-rose/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose"
                  href={whatsappHref()}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Per WhatsApp schreiben
                </a>
              </div>

              <p className="mt-9 font-script text-4xl text-rose">Wir freuen uns auf dich</p>
            </div>
          </article>
        </main>
      ) : null}

      {introDone ? null : <MagicIntro onDone={finishIntro} />}
    </div>
  )
}

function Ornament() {
  return (
    <div className="my-7 flex items-center gap-3" aria-hidden="true">
      <span className="h-px flex-1 bg-gradient-to-r from-transparent to-gold/60" />
      <svg viewBox="0 0 24 24" className="h-5 w-5 text-gold">
        <path
          d="M12 1.5l2.2 7.1 7.3 1-5.8 4.6 2 7.3L12 17.2l-5.7 4.3 2-7.3L2.5 9.6l7.3-1z"
          fill="currentColor"
        />
      </svg>
      <span className="h-px flex-1 bg-gradient-to-l from-transparent to-gold/60" />
    </div>
  )
}
