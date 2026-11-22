// the seven puffs who run the café.
// `kind` picks the ears/shape in <Puff />, `signature` points at a menu item id.

export const PUFFS = [
  {
    id: 'momo',
    name: 'momo',
    kind: 'bunny',
    color: '#fbd3d3',
    role: 'pastry chef',
    signature: 'strawberry-shortcake',
    bio: 'hops between the oven and the fridge all day. if it has a strawberry on top, momo made it.',
  },
  {
    id: 'kinako',
    name: 'kinako',
    kind: 'bear',
    color: '#f3c98b',
    role: 'head baker',
    signature: 'kinako-mochi-bun',
    bio: 'up before the sun kneading dough. gives the warmest hugs (and the warmest buns).',
  },
  {
    id: 'mame',
    name: 'mame',
    kind: 'sprout',
    color: '#d8e8b8',
    role: 'tea master',
    signature: 'island-matcha',
    bio: 'just a puff. grows the tea leaves on its own head. please do not pick them.',
  },
  {
    id: 'yuki',
    name: 'yuki',
    kind: 'kitty',
    color: '#fdf6ee',
    role: 'barista',
    signature: 'royal-milk-tea',
    bio: 'draws a tiny cat face in every latte. very serious about foam.',
  },
  {
    id: 'anko',
    name: 'anko',
    kind: 'sleepy',
    color: '#d9b8a6',
    role: 'oven warmer',
    signature: 'red-bean-bun',
    bio: 'naps next to the oven so it stays cozy. technically this is a job.',
  },
  {
    id: 'yuzu',
    name: 'yuzu',
    kind: 'zoomy',
    color: '#fbe3a1',
    role: 'delivery puff',
    signature: 'yuzu-tart',
    bio: 'brings your takeout before you finish ordering it. has never once walked.',
  },
  {
    id: 'kumo',
    name: 'kumo',
    kind: 'cloud',
    color: '#ffffff',
    role: 'the original puff',
    signature: 'cloud-cream-puff',
    bio: 'the café is named after kumo. its cream puffs are as soft as it is.',
  },
]

export const puffById = Object.fromEntries(PUFFS.map((p) => [p.id, p]))
