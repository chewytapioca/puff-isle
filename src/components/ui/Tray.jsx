import { useState } from 'react'
import Icon from '../art/Icon'
import Puff from '../art/Puff'
import Treat from '../art/Treat'
import { itemById, money } from '../../data/menu'
import { puffById } from '../../data/puffs'
import { useCafe, trayCount, trayTotal } from '../../stores/useCafe'

export default function Tray() {
  const { tray, trayOpen, setTrayOpen, add, remove, placeOrder } = useCafe()
  const [ticket, setTicket] = useState(null)
  const count = trayCount(tray)
  const lines = Object.entries(tray)

  const order = () => {
    const t = placeOrder()
    if (t) setTicket(t)
  }
  const close = () => {
    setTrayOpen(false)
    setTicket(null)
  }

  return (
    <>
      <button className="tray-fab" onClick={() => setTrayOpen(true)} aria-label={`open tray, ${count} items`}>
        <Icon name="tray" size={26} />
        {count > 0 && <span className="tray-count">{count}</span>}
      </button>

      {trayOpen && <div className="scrim" onClick={close} />}
      <aside className={`tray ${trayOpen ? 'tray--open' : ''}`} aria-hidden={!trayOpen} aria-label="your tray">
        <header>
          <h2>your tray</h2>
          <button className="icon-btn" onClick={close} aria-label="close tray">
            <Icon name="close" />
          </button>
        </header>

        {ticket ? (
          <div className="ticket">
            <Puff kind={puffById[ticket.puff].kind} color={puffById[ticket.puff].color} size={96} className="bob bob-0" />
            <p className="ticket-no">ticket #{ticket.no}</p>
            <p>
              <strong>{ticket.puff}</strong> is packing your order! pick it up at the counter ♡
            </p>
            <p className="ticket-total">{money(ticket.total)}</p>
            <button className="btn" onClick={close}>yay, thank you</button>
          </div>
        ) : lines.length === 0 ? (
          <div className="tray-empty">
            <Puff kind="sleepy" color="#d9b8a6" size={84} />
            <p>your tray is empty.<br />anko is napping on it.</p>
          </div>
        ) : (
          <>
            <ul className="tray-lines">
              {lines.map(([id, qty]) => {
                const item = itemById[id]
                return (
                  <li key={id}>
                    <Treat kind={item.treat ?? 'cup'} size={40} />
                    <span className="tray-name">{item.name}</span>
                    <span className="qty">
                      <button onClick={() => remove(id)} aria-label={`remove one ${item.name}`}>–</button>
                      {qty}
                      <button onClick={() => add(id)} aria-label={`add one ${item.name}`}>+</button>
                    </span>
                    <span className="price">{money(item.price * qty)}</span>
                  </li>
                )
              })}
            </ul>
            <footer>
              <div className="tray-total">
                <span>total</span>
                <strong>{money(trayTotal(tray))}</strong>
              </div>
              <button className="btn btn--wide" onClick={order}>order for pickup</button>
              <small>demo only — no real payment, just puff vibes</small>
            </footer>
          </>
        )}
      </aside>
    </>
  )
}
