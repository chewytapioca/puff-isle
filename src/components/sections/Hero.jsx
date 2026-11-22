import Puff from '../art/Puff'
import Treat from '../art/Treat'
import { PUFFS } from '../../data/puffs'
import { CAFE } from '../../data/cafe'
import { useCafe } from '../../stores/useCafe'

export default function Hero() {
  const setTrayOpen = useCafe((s) => s.setTrayOpen)
  return (
    <section className="card hero" id="menu">
      <span className="pill">welcome to the island</span>
      <h1>
        a tiny bakery
        <br />
        in a <em>pink sky</em>
      </h1>
      <p className="lede">{CAFE.intro}</p>
      <div className="hero-actions">
        <a className="btn" href="#pastries">see the menu</a>
        <button className="btn btn--ghost" onClick={() => setTrayOpen(true)}>order for pickup</button>
      </div>

      {/* the display case: three shelves of treats + puffs peeking over */}
      <div className="case" aria-hidden="true">
        <div className="case-puffs">
          {PUFFS.slice(0, 4).map((p, i) => (
            <Puff key={p.id} kind={p.kind} color={p.color} size={58} className={`bob bob-${i}`} />
          ))}
        </div>
        <div className="shelf">
          <Treat kind="croissant" size={60} />
          <Treat kind="puff" size={60} />
          <Treat kind="bun" size={60} />
          <Treat kind="roll" size={60} />
        </div>
        <div className="shelf">
          <Treat kind="cake" size={56} />
          <Treat kind="tart" size={56} />
          <Treat kind="cheesecake" size={56} />
          <Treat kind="pancake" size={56} />
        </div>
      </div>
    </section>
  )
}
