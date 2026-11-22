export const CAFE = {
  name: 'puff isle',
  tagline: ['warm pastry.', 'soft moments.'],
  intro:
    'a tiny bakery floating in a pink sky. seven puffs knead, bake, steam and deliver — and they remember every visitor.',
  hours: { open: 8, close: 20 }, // 24h, every day
  address: ['cloud 7, the pink sky', 'next to the big sakura tree'],
  stampGoal: 10,
}

export function isOpen(date = new Date()) {
  const h = date.getHours()
  return h >= CAFE.hours.open && h < CAFE.hours.close
}

export const pad = (h) => `${String(h).padStart(2, '0')}:00`
