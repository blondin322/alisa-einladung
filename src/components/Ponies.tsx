type PoniesProps = {
  className?: string
}

export function Ponies({ className }: PoniesProps) {
  return (
    <svg
      viewBox="0 0 640 300"
      className={className}
      role="img"
      aria-label="Zwei Ponys auf einer Wiese"
    >
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f7f3e8" />
          <stop offset="55%" stopColor="#e4f0dc" />
          <stop offset="100%" stopColor="#d5e6cc" />
        </linearGradient>
      </defs>
      <rect width="640" height="300" fill="url(#sky)" />
      <circle cx="520" cy="62" r="36" fill="#f6e2b3" />
      <circle cx="548" cy="48" r="22" fill="#f7f3e8" opacity="0.55" />

      <ellipse cx="168" cy="248" rx="210" ry="36" fill="#8eaf78" />
      <ellipse cx="470" cy="252" rx="220" ry="40" fill="#7ea36c" />

      <Pony transform="translate(78 78) scale(1.05)" coat="#8d4e34" mane="#f0d2a4" light="#c98668" />
      <Pony transform="translate(352 96) scale(0.92)" coat="#e4d2ae" mane="#6b4636" light="#f4e7cf" />

      <Daisy cx={96} cy={246} />
      <Daisy cx={250} cy={258} />
      <Daisy cx={430} cy={250} />
      <Daisy cx={560} cy={262} />

      <path
        d="M40 268c18-16 28-14 40 0 14-18 30-16 42 2 16-20 34-16 46 4"
        fill="none"
        stroke="#5f844c"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M470 272c16-14 26-12 36 0 12-16 28-14 38 2"
        fill="none"
        stroke="#4f7340"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  )
}

function Daisy({ cx, cy }: { cx: number; cy: number }) {
  return (
    <g transform={`translate(${cx} ${cy})`}>
      <line x1="0" y1="0" x2="0" y2="18" stroke="#5f844c" strokeWidth="2" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
        <ellipse
          key={angle}
          cx="0"
          cy="-7"
          rx="3.2"
          ry="5.2"
          fill="#fffaf3"
          transform={`rotate(${angle})`}
        />
      ))}
      <circle r="3.4" fill="#e2b34d" />
    </g>
  )
}

function Pony({
  transform,
  coat,
  mane,
  light,
}: {
  transform: string
  coat: string
  mane: string
  light: string
}) {
  return (
    <g transform={transform}>
      <path
        d="M46 92c-22 2-34 18-30 34 4 6 12 4 16-2 6 10 8 16 2 22"
        fill="none"
        stroke={mane}
        strokeWidth="7"
        strokeLinecap="round"
      />
      <path
        d="M52 96c-16 10-22 26-12 36"
        fill="none"
        stroke={mane}
        strokeWidth="5"
        strokeLinecap="round"
      />
      <ellipse cx="108" cy="104" rx="54" ry="32" fill={coat} />
      <ellipse cx="116" cy="112" rx="34" ry="16" fill={light} opacity="0.35" />
      <Leg x={72} coat={coat} />
      <Leg x={92} coat={coat} />
      <Leg x={128} coat={coat} />
      <Leg x={148} coat={coat} />
      <path d="M146 86c22-16 34-36 24-52-12 10-22 28-26 46z" fill={coat} />
      <ellipse cx="176" cy="48" rx="26" ry="18" fill={coat} />
      <ellipse cx="196" cy="54" rx="14" ry="10" fill={light} />
      <path d="M158 36l8-18 10 16z" fill={coat} />
      <path d="M162 34l5-10 6 9z" fill="#f1c7b6" />
      <path
        d="M150 44c-8 2-16 16-12 30 6-8 10-12 18-14-2-6-2-12-6-16z"
        fill={mane}
      />
      <path
        d="M146 28c-6 8-4 20 2 28"
        fill="none"
        stroke={mane}
        strokeWidth="6"
        strokeLinecap="round"
      />
      <circle cx="184" cy="44" r="3.3" fill="#3d291f" />
      <circle cx="185.2" cy="43" r="1.1" fill="#fffaf3" />
      <ellipse cx="204" cy="54" rx="1.5" ry="2.1" fill="#6b4334" />
      <path
        d="M198 60c3 3 8 3 11-1"
        fill="none"
        stroke="#6b4334"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </g>
  )
}

function Leg({ x, coat }: { x: number; coat: string }) {
  return (
    <g>
      <rect x={x} y="118" width="11" height="36" rx="5" fill={coat} />
      <rect x={x - 1} y="148" width="13" height="7" rx="2" fill="#3d291f" />
    </g>
  )
}
