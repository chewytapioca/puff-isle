import { useEffect, useState } from 'react'
import Puff from '../art/Puff'
import Icon from '../art/Icon'
import { CAFE } from '../../data/cafe'

export const NAV = [
  { id: 'menu', label: 'menu', icon: 'home' },
  { id: 'pastries', label: 'pastries', icon: 'croissant' },
  { id: 'desserts', label: 'desserts', icon: 'cake' },
  { id: 'drinks', label: 'drinks', icon: 'cup' },
  { id: 'crew', label: 'the crew', icon: 'paw' },
  { id: 'visit', label: 'visit', icon: 'pin' },
]

function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0])
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        const hit = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0]
        if (hit) setActive(hit.target.id)
      },
      { rootMargin: '-30% 0px -60% 0px' },
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) io.observe(el)
    })
    return () => io.disconnect()
  }, [ids])
  return active
}

const IDS = NAV.map((n) => n.id)

export default function Sidebar() {
  const active = useActiveSection(IDS)
  return (
    <aside className="sidebar">
      <a href="#menu" className="logo" aria-label="puff isle home">
        <div className="logo-art">
          <Puff kind="cloud" color="#fffaf3" size={92} className="logo-cloud" />
          <Puff kind="bear" size={70} className="logo-bear" />
        </div>
        <span className="wordmark">puff isle</span>
        <span className="wordmark-sub">café &amp; bakery</span>
      </a>

      <div className="dots">
        <span>• • •</span> <Icon name="croissant" size={20} /> <span>• • •</span>
      </div>

      <p className="tagline">
        {CAFE.tagline[0]}
        <br />
        {CAFE.tagline[1]}
      </p>

      <nav className="nav" aria-label="sections">
        {NAV.map((n) => (
          <a key={n.id} href={`#${n.id}`} className={active === n.id ? 'active' : ''}>
            <span className="nav-icon">
              <Icon name={n.icon} />
            </span>
            {n.label}
          </a>
        ))}
      </nav>

      <div className="card thanks-card">
        <Puff kind="bear" size={54} />
        <div>
          <strong>thank you!</strong>
          <small>have a cozy day ♡</small>
        </div>
      </div>
    </aside>
  )
}
