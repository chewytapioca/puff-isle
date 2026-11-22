import Puff from '../art/Puff'
import { PUFFS } from '../../data/puffs'
import { itemById } from '../../data/menu'

export default function Crew() {
  return (
    <section className="card crew" id="crew">
      <h2 className="pill pill--tab">meet the crew</h2>
      <p className="section-lede">seven puffs, one oven, zero bad days.</p>
      <ul className="crew-grid">
        {PUFFS.map((p, i) => (
          <li key={p.id} className="crew-card">
            <Puff kind={p.kind} color={p.color} size={88} className={`bob bob-${i % 4}`} title={p.name} />
            <h3>{p.name}</h3>
            <span className="role">{p.role}</span>
            <p>{p.bio}</p>
            <small>
              signature: <strong>{itemById[p.signature].name}</strong>
            </small>
          </li>
        ))}
      </ul>
    </section>
  )
}
