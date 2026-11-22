```
        .  *  .      .  ✧    .   *
     ✧      .    puff isle     .    ✧
  .     *   a tiny floating world   .
        .      population: 7    *
     ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~

            /\_/\..---.._/\_/\
           (         ✿        )
          (   > ◡ <    > ◡ <   )
           (____,,,____,,,____)
         _.-'~ ~ ~ ~ ~ ~ ~ ~'-._
        (  ✿   ✿    ~    ✿   ✿  )
         '-.,__ ~ ~ ~ ~ ~ __,.-'
               '-.,_,_,.-'
                  \ | /
                   \|/
                    '
```

# puff isle café ♡ (⑅˘꒳˘)

a tiny bakery floating in a pink sky.
seven puffs knead, bake, steam and deliver —
and they remember every visitor.

**warm pastry. soft moments.**

---

## meet the crew ✿

```
   momo        kinako       mame        yuki
  (\ /)                      ,,
  ( ◡ )♡     ʕ ◡ ʔ        ( ◡ )       ∧,,∧
  bunny       bear        sprout      ( ◡ )  kitty

   anko        yuzu        kumo
  ʕ -‿- ʔ     ∧!!∧        ( ˘ω˘ )
  sleepy      zoomy       a cloud
```

| puff   | job               | signature               |
|--------|-------------------|-------------------------|
| momo   | pastry chef       | strawberry shortcake    |
| kinako | head baker        | kinako mochi bun        |
| mame   | tea master        | island matcha           |
| yuki   | barista           | royal milk tea          |
| anko   | oven warmer (naps)| red bean bun            |
| yuzu   | delivery puff     | yuzu tart               |
| kumo   | the original puff | cloud cream puff        |

the café is named after kumo — the cloud cream puff is the house special.

---

## things you can do ♡

```
  browse      ~  pastries, desserts, drinks
  specials    ~  three picks that change every day
  + button    ~  add a treat to your tray
  tray        ~  order for pickup, get a ticket + a puff
  stamp card  ~  one stamp per daily visit
  10 stamps   ~  a free cloud cream puff (ﾉ´ヮ`)ﾉ*: ･ﾟ✧
  hover       ~  puffs squish when you poke them
```

your tray, tickets and stamps save themselves (localStorage)
— the puffs will remember you tomorrow ( ˘͈ ᵕ ˘͈ )♡

ordering is a demo: no payments, no real kitchen. yet.

---

## run it (∩´∀`)∩

```bash
npm install
npm run dev
```

production build:

```bash
npm run build
npm run preview
```

---

## what it's made of ✿

```
  vite                ~  dev server + bundler
  react               ~  ui
  zustand (+ persist) ~  tray, tickets, stamp card
  svg by hand         ~  every puff and pastry is drawn in code
  fredoka + nunito    ~  the round, cozy type
```

## where everything lives

```
puff-isle/
├── .github/workflows/ci.yml       build check on push
├── public/favicon.svg
├── index.html
├── src/
│   ├── main.jsx                   entry
│   ├── App.jsx                    page layout
│   ├── styles/global.css          cream, caramel & cocoa
│   ├── data/
│   │   ├── menu.js                pastries, desserts, drinks, daily specials
│   │   ├── puffs.js               the crew
│   │   └── cafe.js                hours, address, stamp goal
│   ├── stores/useCafe.js          tray, tickets, stamps (saved)
│   └── components/
│       ├── art/                   Puff, Treat, Icon (all svg)
│       ├── layout/                Awning, Sidebar, InfoRail
│       ├── sections/              Hero, MenuList, Specials, Drinks,
│       │                          Crew, Visit, StampCard
│       └── ui/                    Tray, Toast
└── package.json
```

edit the menu in `src/data/menu.js` — prices, names, who bakes what.

---

## next little things (・_・;)

- a 3D floating-island hero (react three fiber) where the puffs wander
- real pickup orders would need a tiny backend
- seasonal menus (sakura in spring, chestnut in autumn)
- all seven puffs are original characters ♡

```
   thank you for visiting puff isle
        come back tomorrow ✧

      ~ the puffs are waiting ~

           (\_/)  ʕ·ᴥ·ʔ  ∧,,∧
           ( ♡ )  ( ♡ )  ( ♡ )
           /   \  /   \  /   \
     ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
```
