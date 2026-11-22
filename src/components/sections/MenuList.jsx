import Treat from '../art/Treat'
import { money } from '../../data/menu'
import { puffById } from '../../data/puffs'
import { useCafe } from '../../stores/useCafe'

// the "main menu" card from the reference: a title pill, a dotted rule,
// and rows of name / description / price. each row can be added to the tray.
export default function MenuList({ id, title, items }) {
  const add = useCafe((s) => s.add)
  return (
    <section className="card menu-card" id={id}>
      <h2 className="pill pill--tab">{title}</h2>
      <div className="dots">
        <span>• • •</span>
        <Treat kind={items[0].treat} size={34} />
        <span>• • •</span>
      </div>
      <ul className="menu-list">
        {items.map((item) => (
          <li key={item.id}>
            <Treat kind={item.treat} size={52} className="menu-thumb" />
            <div className="menu-text">
              <h3>
                {item.name}
                {item.badge && <span className={`badge badge--${item.badge}`}>{item.badge}</span>}
              </h3>
              <p>{item.desc}</p>
              {item.by && <small>made by {puffById[item.by].name}</small>}
            </div>
            <span className="price">{money(item.price)}</span>
            <button className="add" onClick={() => add(item.id)} aria-label={`add ${item.name} to tray`}>
              +
            </button>
          </li>
        ))}
      </ul>
    </section>
  )
}
