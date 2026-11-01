import { Horseshoe } from '../components/Horseshoe.tsx'
import { Ponies } from '../components/Ponies.tsx'
import { mapHref, party, whatsappHref } from '../party.ts'

export function Invitation() {
  return (
    <main className="safe-center mx-auto flex min-h-dvh w-full max-w-md flex-col px-4 py-8 sm:py-12">
      <article className="relative overflow-hidden rounded-[2rem] bg-cream shadow-[0_24px_60px_rgba(36,59,85,0.14)]">
        <div className="pointer-events-none absolute inset-3 rounded-[1.45rem] border border-chestnut/15" />
        <Ponies className="block w-full" />
        <div className="relative px-6 pb-8 pt-6 text-center sm:px-8">
          <Horseshoe className="mx-auto mb-3 h-9 w-9 text-chestnut" />
          <p className="text-xs font-bold tracking-[0.18em] text-meadow uppercase">
            Du bist eingeladen
          </p>
          <h1 className="mt-3 font-display text-6xl leading-none text-ink">
            {party.childName}
            <span className="mt-2 block font-display text-3xl italic text-chestnut">
              wird {party.age}
            </span>
          </h1>
          <p className="mt-4 text-lg text-chestnut">Gefeiert wird am Samstag.</p>

          <dl className="mt-6 space-y-4 border-t border-chestnut/15 pt-6">
            <div>
              <dt className="text-xs font-bold tracking-[0.16em] text-meadow uppercase">
                Wann
              </dt>
              <dd className="mt-1 font-display text-[1.7rem] leading-snug text-ink">
                <span className="block">{party.weekday}</span>
                <span className="block">{party.dateLabel}</span>
                <span className="mt-1 block text-xl text-chestnut">{party.timeLabel}</span>
              </dd>
            </div>
            <div>
              <dt className="text-xs font-bold tracking-[0.16em] text-meadow uppercase">
                Wo
              </dt>
              <dd className="mt-1 font-display text-[1.7rem] leading-snug text-balance text-ink">
                {party.placeLine}
                <span className="mt-1 block text-xl text-chestnut">{party.placeTown}</span>
              </dd>
            </div>
          </dl>

          <div className="mt-7 flex flex-col gap-3">
            <a
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-meadow px-5 py-3 text-center text-base font-bold text-white shadow-sm transition hover:bg-[#5a89a6] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-meadow"
              href={mapHref()}
              target="_blank"
              rel="noopener noreferrer"
            >
              Wegbeschreibung
            </a>
            <a
              className="inline-flex min-h-12 items-center justify-center rounded-full border-2 border-meadow bg-white px-5 py-3 text-center text-base font-bold text-meadow transition hover:bg-leaf focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-meadow"
              href={whatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
            >
              Per WhatsApp schreiben
            </a>
          </div>

          <p className="mt-8 font-display text-xl italic text-chestnut">Wir freuen uns auf dich.</p>
        </div>
      </article>
    </main>
  )
}
