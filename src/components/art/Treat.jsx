// little bakery drawings. kinds:
// croissant | roll | bun | puff | cake | tart | pancake | cheesecake | cup

const INK = '#5a3520'
const s = { stroke: INK, strokeWidth: 3, strokeLinejoin: 'round', strokeLinecap: 'round' }

const DRAWINGS = {
  croissant: (
    <g>
      <path d="M12 62C14 44 30 34 50 34C70 34 86 44 88 62C80 58 74 60 70 66C64 56 58 54 50 54C42 54 36 56 30 66C26 60 20 58 12 62Z" fill="#e8a955" {...s} />
      <path d="M36 40C38 46 38 52 36 58M50 36V54M64 40C62 46 62 52 64 58" fill="none" {...s} strokeWidth="2.4" />
    </g>
  ),
  roll: (
    <g>
      <rect x="16" y="34" width="68" height="36" rx="16" fill="#e8a955" {...s} />
      <path d="M30 40v24M44 38v28M58 38v28M72 40v24" fill="none" stroke="#7a4524" strokeWidth="4" strokeLinecap="round" />
    </g>
  ),
  bun: (
    <g>
      <path d="M14 66C14 44 30 30 50 30C70 30 86 44 86 66Z" fill="#e5a35a" {...s} />
      <path d="M14 66h72" {...s} />
      <ellipse cx="50" cy="44" rx="14" ry="5" fill="#f6d8a8" opacity=".8" />
      <g fill="#fff6e8">
        <circle cx="40" cy="42" r="1.6" /><circle cx="56" cy="40" r="1.6" /><circle cx="48" cy="48" r="1.6" />
      </g>
    </g>
  ),
  puff: (
    <g>
      <path d="M16 56C14 42 28 30 50 30C72 30 86 42 84 56Z" fill="#e8b46a" {...s} />
      <path d="M14 56C24 50 40 52 50 50C62 52 76 50 86 56C84 62 78 66 70 64C64 68 58 68 50 66C42 68 36 68 30 64C22 66 16 62 14 56Z" fill="#fffaf0" {...s} />
      <path d="M18 64C20 74 34 78 50 78C66 78 80 74 82 64" fill="#e8b46a" {...s} />
      <g fill="#fff"><circle cx="34" cy="40" r="2" /><circle cx="60" cy="36" r="2" /><circle cx="70" cy="44" r="2" /></g>
    </g>
  ),
  cake: (
    <g>
      <path d="M20 46L80 46L80 78L20 78Z" fill="#fff6e8" {...s} />
      <path d="M20 58h60" stroke="#f4a3a3" strokeWidth="6" />
      <path d="M20 68h60" stroke="#f6d8a8" strokeWidth="4" />
      <path d="M20 46L80 46L80 78L20 78Z" fill="none" {...s} />
      <path d="M18 46C24 38 76 38 82 46" fill="#fffdf8" {...s} />
      <path d="M44 34C44 24 56 24 56 34C56 42 44 42 44 34Z" fill="#e85b5b" {...s} />
      <path d="M47 25L50 20L53 25" fill="#7fb069" stroke="#3d6b2a" strokeWidth="2" />
    </g>
  ),
  tart: (
    <g>
      <path d="M12 54L20 74H80L88 54Z" fill="#d9944a" {...s} />
      <ellipse cx="50" cy="54" rx="38" ry="10" fill="#fbe08a" {...s} />
      <path d="M30 50q6-12 12 0q6-12 12 0q6-12 12 0" fill="#fff6e8" {...s} strokeWidth="2.4" />
    </g>
  ),
  pancake: (
    <g>
      {[64, 52, 40].map((y) => (
        <ellipse key={y} cx="50" cy={y} rx="30" ry="9" fill="#efc07a" {...s} />
      ))}
      <rect x="42" y="26" width="16" height="10" rx="3" fill="#fff3c4" {...s} />
      <path d="M30 40q-2 10 2 14M70 42q2 8 -2 12" fill="none" stroke="#b5651d" strokeWidth="3" strokeLinecap="round" />
    </g>
  ),
  cheesecake: (
    <g>
      <path d="M18 44L82 44L82 76L18 76Z" fill="#fbe6b8" {...s} />
      <path d="M18 44C26 34 74 34 82 44" fill="#a65a22" {...s} />
      <path d="M18 44L82 44" stroke="#7a3d12" strokeWidth="5" />
    </g>
  ),
  cup: (
    <g>
      <path d="M22 40H72L66 78H28Z" fill="#fff6e8" {...s} />
      <path d="M72 48C86 48 86 66 70 66" fill="none" {...s} />
      <ellipse cx="47" cy="40" rx="25" ry="5" fill="#c08454" {...s} />
      <path d="M40 22q4 4 0 8M52 20q4 4 0 8" fill="none" stroke={INK} strokeWidth="2.4" strokeLinecap="round" opacity=".5" />
    </g>
  ),
}

export default function Treat({ kind = 'croissant', size = 64, className = '' }) {
  return (
    <svg viewBox="0 10 100 80" width={size} height={size * 0.8} className={className} aria-hidden="true">
      {DRAWINGS[kind] ?? DRAWINGS.croissant}
    </svg>
  )
}
