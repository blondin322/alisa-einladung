import { QrSticker } from '../components/QrSticker.tsx'

const COPIES = 6

export function PhotoSheet() {
  return (
    <main className="print-stage print-photo-page safe-center mx-auto flex min-h-dvh w-full max-w-xl flex-col items-center px-4 py-8">
      <div className="no-print mb-6 w-full max-w-[100mm] text-center text-ink">
        <h1 className="font-caps text-xl tracking-wide text-plum">Foto-Bogen 10×15&nbsp;cm</h1>
        <p className="mt-2 text-sm leading-relaxed text-chestnut">
          Sechs Aufkleber auf einem Foto 10×15&nbsp;cm. Ausdrucken, entlang der gestrichelten Linien
          zerschneiden und an die Kinder geben.
        </p>
        <p className="mt-2 text-xs text-chestnut/80">
          Druckdialog: Papier 10×15&nbsp;cm (oder 4×6&nbsp;Zoll), Ränder „Keine“, Farbe an.
        </p>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            className="magic-button-gold inline-flex min-h-11 cursor-pointer items-center justify-center rounded-full px-5 font-bold text-night focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
            onClick={() => window.print()}
          >
            Foto-Bogen drucken
          </button>
          <a
            className="inline-flex min-h-11 items-center justify-center rounded-full border-2 border-plum/25 px-5 font-bold text-plum hover:bg-white"
            href="../"
          >
            Ein Aufkleber
          </a>
          <a
            className="inline-flex min-h-11 items-center justify-center rounded-full px-5 font-bold text-chestnut hover:text-ink"
            href="../../"
          >
            Zur Einladung
          </a>
        </div>
      </div>

      <section className="photo-sheet" aria-label="Sechs QR-Aufkleber auf 10 mal 15 Zentimeter">
        {Array.from({ length: COPIES }, (_, index) => (
          <div key={index} className="photo-cell">
            <QrSticker />
          </div>
        ))}
      </section>
    </main>
  )
}
