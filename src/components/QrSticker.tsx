import { QRCodeSVG } from 'qrcode.react'
import { party } from '../party.ts'

type QrStickerProps = {
  className?: string
  /** Larger QR for a single sticker print. */
  large?: boolean
}

export function QrSticker({ className = '', large = false }: QrStickerProps) {
  const qrMm = large ? 34 : 28

  return (
    <article className={`qr-sticker ${large ? 'qr-sticker-large' : ''} ${className}`.trim()}>
      <header className="qr-sticker-head">
        <p className="qr-sticker-name">{party.childName}</p>
        <p className="qr-sticker-age">wird {party.age}</p>
      </header>

      <div className="qr-sticker-code">
        <QRCodeSVG
          value={party.siteUrl}
          size={256}
          level="Q"
          marginSize={1}
          bgColor="#ffffff"
          fgColor="#1a1038"
          title="QR-Code zur Einladung"
          style={{ width: `${qrMm}mm`, height: `${qrMm}mm` }}
        />
      </div>

      <p className="qr-sticker-hint">Einfach scannen</p>
    </article>
  )
}
