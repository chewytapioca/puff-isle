import Icon from '../art/Icon'
import { CAFE } from '../../data/cafe'
import { useCafe } from '../../stores/useCafe'

export default function StampCard() {
  const { stamps, streak, redeem } = useCafe()
  const full = stamps >= CAFE.stampGoal
  return (
    <div className="card stamp-card">
      <p className="stamp-title">stamp card</p>
      <div className="stamps" role="img" aria-label={`${stamps} of ${CAFE.stampGoal} stamps`}>
        {Array.from({ length: CAFE.stampGoal }, (_, i) => (
          <span key={i} className={`stamp ${i < stamps ? 'stamp--on' : ''}`}>
            {i < stamps && <Icon name="paw" size={16} />}
          </span>
        ))}
      </div>
      {full ? (
        <button className="btn btn--small" onClick={redeem}>claim a free puff!</button>
      ) : (
        <small>one stamp per daily visit</small>
      )}
      {streak > 1 && <small className="streak">{streak} day streak ✧</small>}
    </div>
  )
}
