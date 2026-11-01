/** Адрес страницы внутри QR. Перед печатью замените на ссылку GitHub Pages. */
export const siteUrl = 'https://example.github.io/alisa/'

export const party = {
  childName: 'Alisa',
  age: 11,
  weekday: 'Samstag',
  dateLabel: '7. November 2026',
  timeLabel: '10:00–14:00 Uhr',
  placeLine: 'Königsberger Straße',
  placeTown: 'Germersheim',
  mapQuery: 'Königsberger Str. 12, 76726 Germersheim',
  whatsappPhone: '4915153290040',
  whatsappName: 'Iryna',
  whatsappText:
    'Hallo Iryna, ich möchte zur Feier von Alisa am 7. November kommen.',
  siteUrl,
} as const

export const siteUrlIsPlaceholder = siteUrl.includes('example.github.io')

export function mapHref() {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(party.mapQuery)}`
}

export function whatsappHref() {
  return `https://wa.me/${party.whatsappPhone}?text=${encodeURIComponent(party.whatsappText)}`
}
