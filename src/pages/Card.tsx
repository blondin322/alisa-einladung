import { QRCodeSVG } from 'qrcode.react'
import { Horseshoe } from '../components/Horseshoe.tsx'
import { party, siteUrlIsPlaceholder } from '../party.ts'

export function Card() {
  return (
    <main className="print-stage safe-center mx-auto flex min-h-dvh w-full max-w-lg flex-col items-center px-4 py-8">
      <div className="no-print mb-6 w-full max-w-[105mm] text-center">
        <p className="text-sm text-chestnut">
          Drucken: Papierformat A6, Ränder auf „Keine“.
        </p>
        {siteUrlIsPlaceholder ? (
          <p className="mt-3 rounded-2xl bg-hay px-4 py-3 text-sm leading-relaxed text-ink">
            QR пока ведёт на заглушку. Перед печатью впишите адрес GitHub Pages в{' '}
            <span className="font-semibold">src/party.ts</span>, в поле siteUrl.
          </p>
        ) : null}
        <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            className="inline-flex min-h-11 cursor-pointer items-center justify-center rounded-full bg-meadow px-5 font-bold text-white hover:bg-[#345a3a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-meadow"
            onClick={() => window.print()}
          >
            Drucken
          </button>
          <a
            className="inline-flex min-h-11 items-center justify-center rounded-full border-2 border-chestnut/30 px-5 font-bold text-chestnut hover:bg-white"
            href="../"
          >
            Zur Einladung
          </a>
        </div>
      </div>

      <article className="print-sheet flex flex-col items-center bg-cream px-[8mm] py-[8mm] text-center text-ink shadow-[0_24px_60px_rgba(61,41,31,0.14)]">
        <Horseshoe className="h-8 w-8 text-chestnut" />
        <p className="mt-2 text-[10px] font-bold tracking-[0.18em] text-meadow uppercase">
          Du bist eingeladen
        </p>
        <h1 className="mt-2 font-display text-4xl leading-none">
          {party.childName}
          <span className="mt-1 block text-2xl italic text-chestnut">wird {party.age}</span>
        </h1>
        <p className="mt-4 font-display text-lg leading-snug">
          {party.weekday}, {party.dateLabel}
          <span className="mt-1 block text-chestnut">{party.timeLabel}</span>
        </p>
        <div className="mt-auto mb-1 rounded-2xl bg-white p-2">
          <QRCodeSVG
            value={party.siteUrl}
            size={256}
            level="Q"
            marginSize={1}
            bgColor="#ffffff"
            fgColor="#3d291f"
            title="QR-Code zur Einladung"
            style={{ width: '36mm', height: '36mm' }}
          />
        </div>
        <p className="text-sm font-semibold text-chestnut">Einfach scannen</p>
      </article>
    </main>
  )
}
