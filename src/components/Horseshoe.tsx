export function Horseshoe({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      {/* Classic horseshoe: closed toe at top, open heels at bottom */}
      <path
        fill="currentColor"
        d="M12 28c0-11.5 8.5-20 20-20s20 8.5 20 20v14a6 6 0 0 0 6 6h2v7h-2a13 13 0 0 1-13-13V28c0-7.7-6.3-14-14-14s-14 6.3-14 14v14a13 13 0 0 1-13 13H4v-7h2a6 6 0 0 0 6-6V28z"
      />
      <circle cx="18" cy="32" r="2" fill="var(--color-cream, #f7fbff)" />
      <circle cx="20" cy="40" r="2" fill="var(--color-cream, #f7fbff)" />
      <circle cx="24" cy="47" r="2" fill="var(--color-cream, #f7fbff)" />
      <circle cx="46" cy="32" r="2" fill="var(--color-cream, #f7fbff)" />
      <circle cx="44" cy="40" r="2" fill="var(--color-cream, #f7fbff)" />
      <circle cx="40" cy="47" r="2" fill="var(--color-cream, #f7fbff)" />
    </svg>
  )
}
