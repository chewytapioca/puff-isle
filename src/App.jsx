import { useEffect } from 'react'
import Awning from './components/layout/Awning'
import Sidebar from './components/layout/Sidebar'
import InfoRail from './components/layout/InfoRail'
import Hero from './components/sections/Hero'
import MenuList from './components/sections/MenuList'
import Specials from './components/sections/Specials'
import Drinks from './components/sections/Drinks'
import Crew from './components/sections/Crew'
import Visit from './components/sections/Visit'
import Tray from './components/ui/Tray'
import Toast from './components/ui/Toast'
import Puff from './components/art/Puff'
import { PASTRIES, DESSERTS } from './data/menu'
import { PUFFS } from './data/puffs'
import { useCafe } from './stores/useCafe'

export default function App() {
  const checkIn = useCafe((s) => s.checkIn)
  useEffect(() => checkIn(), [checkIn])

  return (
    <>
      <Awning />
      <div className="shell">
        <Sidebar />
        <main className="main">
          <Hero />
          <MenuList id="pastries" title="pastries" items={PASTRIES} />
          <Specials />
          <MenuList id="desserts" title="desserts" items={DESSERTS} />
          <Drinks />
          <Crew />
          <Visit />
        </main>
        <InfoRail />
      </div>

      <footer className="footer">
        <div className="footer-puffs" aria-hidden="true">
          {PUFFS.map((p) => (
            <Puff key={p.id} kind={p.kind} color={p.color} size={40} />
          ))}
        </div>
        <p>thank you for visiting puff isle · come back tomorrow ✧</p>
        <small>all seven puffs are original characters ♡</small>
      </footer>

      <Tray />
      <Toast />
    </>
  )
}
