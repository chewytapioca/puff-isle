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

# puff isle ♡ (⑅˘꒳˘)

a soft little 3D world that floats in a pink sky.
seven puffs live here. they wander, they hop, they
remember you. built with react three fiber.

---

## meet the puffs ✿

```
   momo        kinako       mame        yuki
  (\ /)                      ,,
  ( ◡ )♡     ʕ ◡ ʔ        ( ◡ )       ∧,,∧
  bunny       bear        sprout      ( ◡ )  kitty

   anko        yuzu        kumo
  ʕ -‿- ʔ     ∧!!∧        ( ˘ω˘ )
  sleepy      zoomy       a cloud
```

| puff   | who              | favorite gift |
|--------|------------------|---------------|
| momo   | the bunny puff   | strawberry    |
| kinako | the bear puff    | mochi         |
| mame   | just a puff      | tea           |
| yuki   | the kitty puff   | tea           |
| anko   | the sleepy puff  | mochi         |
| yuzu   | the zoomy puff   | strawberry    |
| kumo   | the cloud puff   | strawberry    |

give a puff its favorite for extra hearts (ﾉ´ヮ`)ﾉ*: ･ﾟ✧

---

## things you can do ♡

```
  drag        ~  orbit the island
  scroll      ~  zoom in close
  click       ~  say hi (puffs squash-jump!)
  wiggle      ~  pet a puff with your cursor  (´,,•ω•,,)♡
  gift bar    ~  hold a treat, click a puff to give it
  sun / moon  ~  toggle day and twilight
  hover       ~  see a puff's name and friendship level
```

friendship levels:
`new friend → acquaintance → buddy → bestie → soulmate`

visit every day to grow your streak ✧ everyone
gets a little happier when you come back.

your island saves itself (localStorage) — the puffs
will remember you tomorrow ( ˘͈ ᵕ ˘͈ )♡

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
  vite                    ~  dev server + bundler
  react three fiber       ~  react renderer for three.js
  drei                    ~  OrbitControls, Float, Sparkles, Html
  @react-three/postprocessing ~ the dreamy bloom glow
  zustand (+ persist)     ~  world state, saved per browser
```

## where everything lives

```
puff-isle/
├── .github/workflows/ci.yml     build check on push
├── public/favicon.svg
├── src/
│   ├── main.jsx                 entry
│   ├── App.jsx                  canvas + ui shell
│   ├── styles/global.css        pink overlay styles
│   ├── data/puffs.js            the cast, gifts, sky palettes
│   ├── stores/useWorld.js       zustand + localStorage save
│   └── components/
│       ├── canvas/              inside the 3D world
│       │   ├── Experience.jsx   lights, bloom, sky crossfade
│       │   ├── Island.jsx       torii, lanterns, sakura, pond
│       │   ├── Puff.jsx         wandering + petting + gifts
│       │   ├── Petals.jsx       falling sakura petals
│       │   ├── Hearts.jsx       heart particle pool
│       │   ├── Clouds.jsx       drifting clouds
│       │   └── NightStars.jsx   twilight stars
│       └── ui/                  floating on top
│           ├── Wordmark.jsx
│           ├── ModeToggle.jsx
│           ├── GiftBar.jsx
│           ├── CastList.jsx
│           └── Toast.jsx
├── index.html
└── package.json
```

---

## little notes (・_・;)

- saves are per-browser. a new device is a brand
  new island — real accounts would need a tiny backend.
- everything is three.js primitives. no models,
  no textures, just spheres with feelings.
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
