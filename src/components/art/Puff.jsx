// a puff: a round soft blob with feelings.
// kinds: plain | bunny | bear | kitty | sprout | sleepy | zoomy | cloud

const INK = '#5a3520'
const BLUSH = '#f4a3a3'
const BODY = 'M50 30C77 30 92 47 92 65C92 84 74 92 50 92C26 92 8 84 8 65C8 47 23 30 50 30Z'

function Ears({ kind, color }) {
  const s = { stroke: INK, strokeWidth: 3, strokeLinejoin: 'round' }
  switch (kind) {
    case 'bunny':
      return (
        <g>
          <ellipse cx="34" cy="20" rx="8" ry="18" fill={color} {...s} transform="rotate(-10 34 20)" />
          <ellipse cx="66" cy="20" rx="8" ry="18" fill={color} {...s} transform="rotate(10 66 20)" />
          <ellipse cx="34" cy="22" rx="3.5" ry="11" fill={BLUSH} transform="rotate(-10 34 22)" />
          <ellipse cx="66" cy="22" rx="3.5" ry="11" fill={BLUSH} transform="rotate(10 66 22)" />
        </g>
      )
    case 'bear':
    case 'sleepy':
      return (
        <g>
          <circle cx="24" cy="38" r="11" fill={color} {...s} />
          <circle cx="76" cy="38" r="11" fill={color} {...s} />
          <circle cx="24" cy="38" r="5" fill={BLUSH} opacity=".7" />
          <circle cx="76" cy="38" r="5" fill={BLUSH} opacity=".7" />
        </g>
      )
    case 'kitty':
      return (
        <g>
          <path d="M18 46L22 20L42 34Z" fill={color} {...s} />
          <path d="M82 46L78 20L58 34Z" fill={color} {...s} />
          <path d="M24 38L25 28L33 34Z" fill={BLUSH} />
          <path d="M76 38L75 28L67 34Z" fill={BLUSH} />
        </g>
      )
    case 'sprout':
      return (
        <g>
          <path d="M50 32C50 24 50 18 50 14" fill="none" stroke={INK} strokeWidth="3" strokeLinecap="round" />
          <path d="M50 18C42 8 32 10 30 14C34 20 44 22 50 18Z" fill="#9cc47a" {...s} />
          <path d="M50 16C58 6 68 8 70 12C66 18 56 20 50 16Z" fill="#b5d690" {...s} />
        </g>
      )
    case 'cloud':
      return (
        <g fill={color} {...s}>
          <circle cx="22" cy="52" r="15" />
          <circle cx="40" cy="36" r="16" />
          <circle cx="62" cy="36" r="16" />
          <circle cx="80" cy="52" r="15" />
        </g>
      )
    default:
      return null
  }
}

function Face({ mood }) {
  const line = { fill: 'none', stroke: INK, strokeWidth: 3, strokeLinecap: 'round' }
  let eyes
  if (mood === 'sleepy') eyes = <path d="M32 63h10M58 63h10" {...line} />
  else if (mood === 'dot')
    eyes = (
      <g fill={INK}>
        <circle cx="37" cy="62" r="3.4" />
        <circle cx="63" cy="62" r="3.4" />
      </g>
    )
  else eyes = <path d="M32 64q5-6 10 0M58 64q5-6 10 0" {...line} />

  return (
    <g>
      {eyes}
      <ellipse cx="26" cy="72" rx="6" ry="3.8" fill={BLUSH} />
      <ellipse cx="74" cy="72" rx="6" ry="3.8" fill={BLUSH} />
      <path d="M45 70q2.5 3.5 5 0q2.5 3.5 5 0" {...line} strokeWidth="2.6" />
    </g>
  )
}

export default function Puff({ kind = 'plain', color = '#f3c98b', size = 72, mood, className = '', title }) {
  const m = mood ?? (kind === 'sleepy' ? 'sleepy' : kind === 'zoomy' || kind === 'plain' ? 'dot' : 'happy')
  return (
    <svg
      viewBox="-10 0 110 100"
      width={size}
      height={size}
      className={`puff ${className}`}
      role={title ? 'img' : 'presentation'}
      aria-label={title}
    >
      {kind === 'zoomy' && (
        <path d="M-6 56h12M-8 68h14M-4 80h10" fill="none" stroke={INK} strokeWidth="3" strokeLinecap="round" opacity=".5" />
      )}
      <Ears kind={kind} color={color} />
      <path d={BODY} fill={color} stroke={INK} strokeWidth="3" />
      {kind === 'cloud' && <path d="M20 54q30 -6 60 0" fill="none" stroke={color} strokeWidth="6" />}
      <Face mood={m} />
      {kind === 'sleepy' && (
        <text x="80" y="30" fontFamily="Fredoka" fontWeight="700" fontSize="16" fill={INK} opacity=".6">
          z
        </text>
      )}
    </svg>
  )
}
