import Icon from '../art/Icon'
import Puff from '../art/Puff'
import StampCard from '../sections/StampCard'
import { CAFE, isOpen, pad } from '../../data/cafe'

export default function InfoRail() {
  const open = isOpen()
  return (
    <aside className="rail">
      <div className="card info-card">
        <span className="info-icon"><Icon name="shop" size={40} /></span>
        <p>
          baked with <em>love</em>
          <br />
          every day
        </p>
        <span className="heart">♥</span>
      </div>

      <div className="card info-card info-card--peach">
        <span className="info-icon"><Icon name="bag" size={40} /></span>
        <p>
          takeout
          <br />
          available
        </p>
        <small>yuzu delivers ✧</small>
      </div>

      <div className="card info-card">
        <span className="info-icon"><Icon name="clock" size={40} /></span>
        <p>open daily</p>
        <span className="time">{pad(CAFE.hours.open)}</span>
        <span className="time-line" />
        <span className="time">{pad(CAFE.hours.close)}</span>
        <span className={`status ${open ? 'status--open' : ''}`}>
          {open ? 'open now ✧' : 'the puffs are sleeping'}
        </span>
      </div>

      <StampCard />

      <div className="card info-card">
        <Puff kind="cloud" color="#fffaf3" size={84} />
        <p className="mini-wordmark">puff isle</p>
        <small>thank you!</small>
        <span className="heart">♥</span>
      </div>
    </aside>
  )
}
