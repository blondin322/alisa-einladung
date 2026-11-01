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
          <stop offset="0%" stopColor="#dceef8" />
          <stop offset="55%" stopColor="#eaf5fb" />
          <stop offset="100%" stopColor="#cfe6d8" />
        </linearGradient>
        <linearGradient id="bayCoat" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#8a5a3c" />
          <stop offset="45%" stopColor="#6f432b" />
          <stop offset="100%" stopColor="#4f2f1d" />
        </linearGradient>
        <linearGradient id="palominoCoat" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f0d7a8" />
          <stop offset="50%" stopColor="#e2c085" />
          <stop offset="100%" stopColor="#c9a066" />
        </linearGradient>
        <radialGradient id="sunGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fff6d8" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#fff6d8" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width="640" height="300" fill="url(#sky)" />
      <circle cx="520" cy="70" r="58" fill="url(#sunGlow)" />
      <circle cx="520" cy="70" r="28" fill="#ffe9a8" />

      <ellipse cx="170" cy="252" rx="220" ry="34" fill="#9fc49a" />
      <ellipse cx="470" cy="256" rx="230" ry="38" fill="#8fb88a" />
      <ellipse cx="320" cy="268" rx="280" ry="22" fill="#7fa97c" opacity="0.55" />

      <Horse
        transform="translate(46 58) scale(1.08)"
        coat="url(#bayCoat)"
        mane="#2a1c14"
        muzzle="#d7b09a"
        sock="#f4efe8"
      />
      <Horse
        transform="translate(318 78) scale(0.95)"
        coat="url(#palominoCoat)"
        mane="#f7f1e4"
        muzzle="#e8c7b0"
        sock="#fffaf3"
      />

      <Flower cx={88} cy={248} />
      <Flower cx={240} cy={258} />
      <Flower cx={430} cy={252} />
      <Flower cx={560} cy={262} />

      <path
        d="M36 270c16-14 28-12 40 0 12-16 26-14 38 2 14-16 28-14 40 2"
        fill="none"
        stroke="#5f8a5c"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M460 274c14-12 24-10 34 0 12-14 24-12 34 2"
        fill="none"
        stroke="#4f7a4f"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

function Flower({ cx, cy }: { cx: number; cy: number }) {
  return (
    <g transform={`translate(${cx} ${cy})`}>
      <line x1="0" y1="0" x2="0" y2="16" stroke="#5f8a5c" strokeWidth="2" />
      {[0, 60, 120, 180, 240, 300].map((angle) => (
        <ellipse
          key={angle}
          cx="0"
          cy="-6"
          rx="3"
          ry="5"
          fill="#dff0ff"
          transform={`rotate(${angle})`}
        />
      ))}
      <circle r="2.8" fill="#f2d27a" />
    </g>
  )
}

function Horse({
  transform,
  coat,
  mane,
  muzzle,
  sock,
}: {
  transform: string
  coat: string
  mane: string
  muzzle: string
  sock: string
}) {
  return (
    <g transform={transform}>
      {/* tail */}
      <path
        d="M54 108c-18 8-28 28-22 48 8-10 14-18 22-22 2 14 0 26-8 36 16-8 28-24 24-46-2-8-8-14-16-16z"
        fill={mane}
        opacity="0.92"
      />

      {/* hind legs */}
      <path d="M78 128c-2 18 0 34 2 46" fill="none" stroke={coat} strokeWidth="11" strokeLinecap="round" />
      <path d="M98 126c0 18 1 34 1 48" fill="none" stroke={coat} strokeWidth="11" strokeLinecap="round" />
      <ellipse cx="80" cy="176" rx="7" ry="4" fill={sock} />
      <ellipse cx="99" cy="176" rx="7" ry="4" fill={sock} />
      <ellipse cx="80" cy="180" rx="7.5" ry="3.2" fill="#2b2118" />
      <ellipse cx="99" cy="180" rx="7.5" ry="3.2" fill="#2b2118" />

      {/* forelegs */}
      <path d="M148 120c1 20 0 36-1 50" fill="none" stroke={coat} strokeWidth="11" strokeLinecap="round" />
      <path d="M168 118c2 20 1 36 0 50" fill="none" stroke={coat} strokeWidth="11" strokeLinecap="round" />
      <ellipse cx="147" cy="170" rx="7" ry="4" fill={sock} />
      <ellipse cx="168" cy="170" rx="7" ry="4" fill={sock} />
      <ellipse cx="147" cy="174" rx="7.5" ry="3.2" fill="#2b2118" />
      <ellipse cx="168" cy="174" rx="7.5" ry="3.2" fill="#2b2118" />

      {/* body */}
      <ellipse cx="124" cy="108" rx="58" ry="34" fill={coat} />
      <ellipse cx="136" cy="116" rx="36" ry="18" fill="#ffffff" opacity="0.12" />
      <ellipse cx="92" cy="118" rx="18" ry="14" fill="#000000" opacity="0.08" />

      {/* neck */}
      <path
        d="M156 96c18-10 34-28 38-48 2-8-2-14-10-12-14 4-28 18-38 34-4 6-6 14-4 22 4 4 8 6 14 4z"
        fill={coat}
      />

      {/* mane along neck */}
      <path
        d="M152 88c8-18 22-34 38-42-4 12-8 24-18 34-6 6-12 10-20 12 0-2 0-4 0-4z"
        fill={mane}
      />
      <path
        d="M148 72c6-10 14-18 24-24"
        fill="none"
        stroke={mane}
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path
        d="M156 64c8-8 16-14 26-18"
        fill="none"
        stroke={mane}
        strokeWidth="4"
        strokeLinecap="round"
        opacity="0.85"
      />

      {/* head */}
      <ellipse cx="198" cy="48" rx="24" ry="17" fill={coat} />
      <ellipse cx="214" cy="56" rx="14" ry="10" fill={muzzle} />
      <ellipse cx="214" cy="58" rx="8" ry="5" fill="#000000" opacity="0.06" />

      {/* ears */}
      <path d="M184 34l6-16 8 14z" fill={coat} />
      <path d="M188 32l4-10 5 9z" fill={muzzle} />
      <path d="M198 32l7-15 8 14z" fill={coat} />
      <path d="M202 30l4-9 5 8z" fill={muzzle} />

      {/* forelock */}
      <path d="M190 36c-2-8 4-16 12-18-6 6-8 12-8 18z" fill={mane} />

      {/* eye / nostril / mouth */}
      <circle cx="204" cy="46" r="3.2" fill="#1d1712" />
      <circle cx="205" cy="45.2" r="1" fill="#ffffff" />
      <ellipse cx="222" cy="56" rx="1.6" ry="2.2" fill="#6b4334" />
      <path
        d="M216 62c3 2 8 2 12-1"
        fill="none"
        stroke="#6b4334"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </g>
  )
}
