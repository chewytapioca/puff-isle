import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { itemById } from '../data/menu'
import { PUFFS } from '../data/puffs'
import { CAFE } from '../data/cafe'

const dayKey = (d = new Date()) => d.toISOString().slice(0, 10)
const yesterdayKey = () => dayKey(new Date(Date.now() - 864e5))

export const useCafe = create(
  persist(
    (set, get) => ({
      // ── order tray ─────────────────────────────
      tray: {}, // { itemId: qty }
      trayOpen: false,
      setTrayOpen: (trayOpen) => set({ trayOpen }),

      add: (id) => {
        set((s) => ({ tray: { ...s.tray, [id]: (s.tray[id] || 0) + 1 } }))
        get().toast(`${itemById[id].name} added to your tray ♡`)
      },
      remove: (id) =>
        set((s) => {
          const qty = (s.tray[id] || 0) - 1
          const tray = { ...s.tray }
          if (qty > 0) tray[id] = qty
          else delete tray[id]
          return { tray }
        }),

      // pickup tickets (demo only — there's no real kitchen behind this)
      tickets: [],
      placeOrder: () => {
        const { tray, tickets } = get()
        const lines = Object.entries(tray)
        if (!lines.length) return
        const total = lines.reduce((t, [id, q]) => t + itemById[id].price * q, 0)
        const puff = PUFFS[Math.floor(Math.random() * PUFFS.length)]
        const ticket = {
          no: 100 + tickets.length + 1,
          lines,
          total,
          puff: puff.id,
          at: Date.now(),
        }
        set({ tray: {}, tickets: [ticket, ...tickets].slice(0, 10) })
        return ticket
      },

      // ── stamp card (one stamp per day you visit) ─
      stamps: 0,
      streak: 0,
      lastVisit: null,
      rewards: 0,
      checkIn: () => {
        const { lastVisit, stamps, streak } = get()
        const today = dayKey()
        if (lastVisit === today) return
        set({
          lastVisit: today,
          stamps: Math.min(stamps + 1, CAFE.stampGoal),
          streak: lastVisit === yesterdayKey() ? streak + 1 : 1,
        })
        if (lastVisit) get().toast('welcome back! the puffs stamped your card ✧')
      },
      redeem: () => {
        if (get().stamps < CAFE.stampGoal) return
        set((s) => ({
          stamps: 0,
          rewards: s.rewards + 1,
          tray: { ...s.tray, 'cloud-cream-puff': (s.tray['cloud-cream-puff'] || 0) + 1 },
        }))
        get().toast('a free cloud cream puff is in your tray (ﾉ´ヮ`)ﾉ*:･ﾟ✧')
      },

      // ── toast ───────────────────────────────────
      message: null,
      toast: (text) => {
        const id = Date.now()
        set({ message: { text, id } })
        setTimeout(() => get().message?.id === id && set({ message: null }), 2400)
      },
    }),
    {
      name: 'puff-isle-cafe',
      partialize: ({ tray, tickets, stamps, streak, lastVisit, rewards }) => ({
        tray, tickets, stamps, streak, lastVisit, rewards,
      }),
    },
  ),
)

export const trayCount = (tray) => Object.values(tray).reduce((a, b) => a + b, 0)
export const trayTotal = (tray) =>
  Object.entries(tray).reduce((t, [id, q]) => t + itemById[id].price * q, 0)
