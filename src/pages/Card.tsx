import { QrSticker } from '../components/QrSticker.tsx'
import { siteUrlIsPlaceholder } from '../party.ts'

export function Card() {
  return (
    <main className="print-stage print-sticker-page safe-center mx-auto flex min-h-dvh w-full max-w-lg flex-col items-center px-4 py-8">
      <div className="no-print mb-6 w-full max-w-[105mm] text-center text-ink">
        <h1 className="font-caps text-xl tracking-wide text-plum">Aufkleber mit QR-Code</h1>
        <p className="mt-2 text-sm leading-relaxed text-chestnut">
          Eine Nadel / ein Aufkleber: oben der Name, in der Mitte der Code, unten der Hinweis zum
          Scannen. Für mehrere Stück auf einmal den Foto-Bogen 10×15&nbsp;cm nutzen.
        </p>
        {siteUrlIsPlaceholder ? (
          <p className="mt-3 rounded-2xl bg-hay px-4 py-3 text-sm leading-relaxed">
            QR пока ведёт на заглушку. Перед печатью проверьте{' '}
            <span className="font-semibold">src/party.ts</span>, поле siteUrl.
          </p>
        ) : (
          <p className="mt-3 text-xs break-all text-chestnut/80">QR öffnet die Einladung online.</p>
        )}
        <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            className="magic-button-gold inline-flex min-h-11 cursor-pointer items-center justify-center rounded-full px-5 font-bold text-night focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
            onClick={() => window.print()}
          >
            Aufkleber drucken
          </button>
          <a
            className="inline-flex min-h-11 items-center justify-center rounded-full border-2 border-plum/25 px-5 font-bold text-plum hover:bg-white"
            href="bogen/"
          >
            Foto 10×15 mit mehreren
          </a>
          <a
            className="inline-flex min-h-11 items-center justify-center rounded-full px-5 font-bold text-chestnut hover:text-ink"
            href="../"
          >
            Zur Einladung
          </a>
        </div>
      </div>

      <QrSticker large className="shadow-[0_18px_40px_rgba(26,16,56,0.18)]" />
    </main>
  )
}
