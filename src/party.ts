/** Адрес страницы внутри QR. Перед печатью замените на ссылку GitHub Pages. */
export const siteUrl = 'https://blondin322.github.io/alisa-einladung/'

export const party = {
  childName: 'Alisa',
  age: 11,
  weekday: 'Samstag',
  dateLabel: '7. November 2026',
  /** Kinder / QR-Einladung */
  timeLabel: '10:00–14:00 Uhr',
  /** Einladung für Erwachsene */
  adultsTimeLabel: '17:00 Uhr',
  placeLine: 'Königsberger Straße 12',
  placeTown: 'Germersheim',
  mapQuery: 'Königsberger Str. 12, 76726 Germersheim',
  whatsappPhone: '4915207629290',
  whatsappName: 'Iryna',
  whatsappText: 'Hi Alisa, ich möchte gerne zur Feier kommen.',
  adultsWhatsappText: 'Hi Alisa, ich möchte gerne abends zur Feier kommen.',
  siteUrl,
} as const

/**
 * Personalisierung über ?fuer=...
 * Ohne Parameter bleibt die allgemeine Einladung.
 */
export const guests = {
  'julia-daniel': {
    names: 'Julia und Daniel',
    form: 'plural',
  },
  'pascha-mascha-olivia': {
    names: 'Pascha, Mascha und Olivia',
    form: 'plural',
  },
  oma: {
    names: 'Oma',
    form: 'singular',
  },
} as const

export type GuestId = keyof typeof guests
export type Guest = (typeof guests)[GuestId]

export const siteUrlIsPlaceholder = siteUrl.includes('example.github.io')

export function getGuestIdFromSearch(search = window.location.search): GuestId | null {
  const value = new URLSearchParams(search).get('fuer')?.trim().toLowerCase()
  if (!value) return null
  return value in guests ? (value as GuestId) : null
}

export function invitationCopy(guest: Guest | null) {
  if (!guest) {
    return {
      salutation: null as string | null,
      inviteLine: 'Du bist eingeladen',
      closing: 'Wir freuen uns auf dich',
    }
  }

  if (guest.form === 'plural') {
    return {
      salutation: `Liebe ${guest.names}`,
      inviteLine: 'ihr seid eingeladen',
      closing: 'Wir freuen uns auf euch',
    }
  }

  return {
    salutation: `Liebe ${guest.names}`,
    inviteLine: 'du bist eingeladen',
    closing: 'Wir freuen uns auf dich',
  }
}

export function adultsWhatsappTextFor(guest: Guest | null) {
  if (!guest) return party.adultsWhatsappText
  if (guest.form === 'plural') {
    return `Hi Alisa, hier sind ${guest.names}. Wir möchten gerne abends zur Feier kommen.`
  }
  return `Hi Alisa, hier ist ${guest.names}. Ich möchte gerne abends zur Feier kommen.`
}

export function mapHref() {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(party.mapQuery)}`
}

export function whatsappHref(text: string = party.whatsappText) {
  return `https://wa.me/${party.whatsappPhone}?text=${encodeURIComponent(text)}`
}
