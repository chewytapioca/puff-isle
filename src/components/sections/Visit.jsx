import Puff from '../art/Puff'
import Icon from '../art/Icon'
import { CAFE, pad } from '../../data/cafe'

export default function Visit() {
  return (
    <section className="card visit" id="visit">
      <h2 className="pill pill--tab">come visit</h2>
      <div className="visit-grid">
        <div className="island" aria-hidden="true">
          <div className="island-top">
            <Puff kind="cloud" color="#fff" size={60} className="bob bob-1" />
            <Puff kind="sprout" color="#d8e8b8" size={50} className="bob bob-2" />
            <Puff kind="zoomy" color="#fbe3a1" size={50} className="bob bob-3" />
          </div>
          <div className="island-rock" />
        </div>
        <dl className="visit-info">
          <div>
            <dt><Icon name="pin" /> where</dt>
            <dd>{CAFE.address[0]}<br />{CAFE.address[1]}</dd>
          </div>
          <div>
            <dt><Icon name="clock" /> when</dt>
            <dd>every day, {pad(CAFE.hours.open)} – {pad(CAFE.hours.close)}</dd>
          </div>
          <div>
            <dt><Icon name="heart" /> regulars</dt>
            <dd>visit once a day to fill your stamp card. ten stamps = a free cloud cream puff.</dd>
          </div>
        </dl>
      </div>
    </section>
  )
}
