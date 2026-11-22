// everything the café sells. prices are in "shells" (the island currency)
// but display like dollars so it reads normally.
//
// `treat` picks the little drawing in <Treat />.
// `by` is the puff who makes it (see puffs.js).

export const PASTRIES = [
  { id: 'cloud-cream-puff', name: 'cloud cream puff', desc: 'choux shell, vanilla bean cream', price: 3.8, treat: 'puff', by: 'kumo', badge: 'house' },
  { id: 'classic-croissant', name: 'classic croissant', desc: 'buttery, flaky, golden', price: 3.6, treat: 'croissant', by: 'kinako' },
  { id: 'pain-au-chocolat', name: 'pain au chocolat', desc: 'rich chocolate, soft layers', price: 4.3, treat: 'roll', by: 'kinako' },
  { id: 'kinako-mochi-bun', name: 'kinako mochi bun', desc: 'chewy mochi, roasted soybean sugar', price: 3.9, treat: 'bun', by: 'kinako' },
  { id: 'red-bean-bun', name: 'red bean bun', desc: 'soft milk bread, sweet anko', price: 3.4, treat: 'bun', by: 'anko' },
  { id: 'honey-butter-roll', name: 'honey butter roll', desc: 'soft & fluffy, honey butter', price: 3.6, treat: 'roll', by: 'kinako' },
]

export const DESSERTS = [
  { id: 'strawberry-shortcake', name: 'strawberry shortcake', desc: 'fresh & light, chantilly cream', price: 5.5, treat: 'cake', by: 'momo', badge: 'best' },
  { id: 'yuzu-tart', name: 'yuzu tart', desc: 'bright citrus curd, toasted meringue', price: 5.2, treat: 'tart', by: 'yuzu' },
  { id: 'cloud-souffle', name: 'cloud soufflé pancakes', desc: 'three wobbly stacks, maple butter', price: 7.5, treat: 'pancake', by: 'kumo' },
  { id: 'basque-cheesecake', name: 'basque cheesecake', desc: 'creamy & caramelized', price: 4.8, treat: 'cheesecake', by: 'momo', badge: 'new' },
]

export const DRINKS = [
  {
    group: 'coffee',
    items: [
      { id: 'americano', name: 'americano', price: 3.2 },
      { id: 'latte', name: 'latte', price: 4.2 },
      { id: 'flat-white', name: 'flat white', price: 4.4 },
      { id: 'honey-oat-latte', name: 'honey oat latte', price: 4.8 },
    ],
  },
  {
    group: 'tea',
    items: [
      { id: 'island-matcha', name: 'island matcha', price: 4.6, by: 'mame' },
      { id: 'royal-milk-tea', name: 'royal milk tea', price: 4.4, by: 'yuki' },
      { id: 'hojicha', name: 'hojicha', price: 3.8 },
      { id: 'chamomile', name: 'chamomile', price: 3.4 },
    ],
  },
  {
    group: 'no coffee',
    items: [
      { id: 'strawberry-milk', name: 'strawberry milk', price: 4.2 },
      { id: 'hot-cocoa', name: 'hot cocoa', price: 3.8 },
      { id: 'yuzu-ade', name: 'yuzu ade', price: 4.0 },
      { id: 'peach-iced-tea', name: 'peach iced tea', price: 3.8 },
    ],
  },
  {
    group: 'puff signatures',
    signature: true,
    items: [
      { id: 'cloud-cream-latte', name: 'cloud cream latte', price: 5.4, by: 'kumo' },
      { id: 'sleepy-bear-mocha', name: 'sleepy bear mocha', price: 5.2, by: 'anko' },
      { id: 'pink-sky-soda', name: 'pink sky soda', price: 4.8, by: 'momo' },
    ],
  },
]

// today's specials rotate by weekday so the page feels alive
const SPECIAL_POOL = [
  ['strawberry-shortcake', 'cloud-souffle', 'basque-cheesecake'],
  ['yuzu-tart', 'cloud-cream-puff', 'kinako-mochi-bun'],
  ['basque-cheesecake', 'red-bean-bun', 'strawberry-shortcake'],
  ['cloud-souffle', 'yuzu-tart', 'pain-au-chocolat'],
  ['cloud-cream-puff', 'strawberry-shortcake', 'honey-butter-roll'],
  ['kinako-mochi-bun', 'basque-cheesecake', 'yuzu-tart'],
  ['cloud-souffle', 'cloud-cream-puff', 'strawberry-shortcake'],
]

const ALL = [...PASTRIES, ...DESSERTS, ...DRINKS.flatMap((g) => g.items)]
export const itemById = Object.fromEntries(ALL.map((i) => [i.id, i]))

export function todaysSpecials(date = new Date()) {
  return SPECIAL_POOL[date.getDay()].map((id) => itemById[id])
}

export const money = (n) => n.toFixed(1)
