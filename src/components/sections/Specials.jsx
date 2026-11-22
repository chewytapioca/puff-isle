import Treat from '../art/Treat'
import Puff from '../art/Puff'
import { todaysSpecials, money } from '../../data/menu'
import { useCafe } from '../../stores/useCafe'

export default function Specials() {
  const add = useCafe((s) => s.add)
  const specials = todaysSpecials()
  return (
    <section className="card specials">
      <h2 className="pill pill--tab">today's specials</h2>
      <Puff kind="bear" size={52} className="peek peek--left" />
      <div className="specials-row">
        {specials.map((item, i) => (
          <div className="special" key={item.id}>
            <button className="special-card" onClick={() => add(item.id)} aria-label={`add ${item.name} to tray`}>
              {item.badge && <span className={`sticker sticker--${item.badge}`}>{item.badge}</span>}
              <Treat kind={item.treat} size={84} />
              <strong>{item.name}</strong>
              <small>{item.desc.split(',')[0]}</small>
            </button>
            <span className="special-price">{money(item.price)}</span>
            {i < specials.length - 1 && <span className="special-dash" aria-hidden="true" />}
          </div>
        ))}
      </div>
      <Puff kind="kitty" color="#fdf6ee" size={52} className="peek peek--right" />
      <p className="specials-note">specials change every day — tap one to add it to your tray</p>
    </section>
  )
}
