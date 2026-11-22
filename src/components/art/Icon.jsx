// small line icons for nav + info cards

const INK = 'currentColor'
const s = { fill: 'none', stroke: INK, strokeWidth: 2.2, strokeLinecap: 'round', strokeLinejoin: 'round' }

const PATHS = {
  home: <path d="M4 11L12 4l8 7v9H4z M10 20v-5h4v5" {...s} />,
  croissant: <path d="M3 15c1-5 5-8 9-8s8 3 9 8c-2-1-4 0-5 1-1-2-2-3-4-3s-3 1-4 3c-1-1-3-2-5-1z M9 8.5v5 M15 8.5v5" {...s} />,
  cake: <path d="M4 20V11l16-4v13z M4 14l16-4 M13 6.5c0-2 2-2 2 0" {...s} />,
  cup: <path d="M5 8h11l-1 12H6z M16 10c3 0 3 5 0 5 M8 3c1 1 0 2 0 3 M12 3c1 1 0 2 0 3" {...s} />,
  heart: <path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.5-7 10-7 10z" {...s} />,
  pin: <path d="M12 21s-6-6-6-11a6 6 0 0 1 12 0c0 5-6 11-6 11z M12 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" {...s} />,
  clock: <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z M12 7v5l3 2" {...s} />,
  bag: <path d="M5 8h14l-1 12H6z M9 8V6a3 3 0 0 1 6 0v2" {...s} />,
  shop: <path d="M4 10h16v10H4z M3 10l2-5h14l2 5 M9 20v-5h6v5" {...s} />,
  paw: <path d="M8 10a1.6 2 0 1 0 0-.1z M16 10a1.6 2 0 1 0 0-.1z M5 14a1.4 1.7 0 1 0 0-.1z M19 14a1.4 1.7 0 1 0 0-.1z M12 13c-3 0-5 3-5 5 0 2 2 2 5 1 3 1 5 1 5-1 0-2-2-5-5-5z" {...s} />,
  tray: <path d="M3 15h18 M5 15a7 7 0 0 1 14 0 M12 6v2 M2 18h20" {...s} />,
  close: <path d="M6 6l12 12M18 6L6 18" {...s} />,
}

export default function Icon({ name, size = 22 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true">
      {PATHS[name]}
    </svg>
  )
}
