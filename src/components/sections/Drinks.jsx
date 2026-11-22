import Puff from '../art/Puff'
import Treat from '../art/Treat'
import { DRINKS, money } from '../../data/menu'
import { useCafe } from '../../stores/useCafe'

export default function Drinks() {
  const add = useCafe((s) => s.add)
  return (
    <section className="card drinks" id="drinks">
      <h2 className="pill pill--tab">drinks</h2>
      <Puff kind="kitty" color="#fdf6ee" size={56} className="peek peek--top" />
      <div className="drink-boards">
        {DRINKS.map((g) => (
          <div key={g.group} className={`board ${g.signature ? 'board--signature' : ''}`}>
            <h3>{g.group}</h3>
            <ul>
              {g.items.map((d) => (
                <li key={d.id}>
                  <button onClick={() => add(d.id)}>
                    <span>{d.name}</span>
                    <span className="leader" />
                    <span className="price">{money(d.price)}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <Treat kind="cup" size={48} className="drinks-cup" />
    </section>
  )
}
