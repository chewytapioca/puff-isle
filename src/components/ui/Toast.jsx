import { useCafe } from '../../stores/useCafe'

export default function Toast() {
  const message = useCafe((s) => s.message)
  return (
    <div className="toast-wrap" aria-live="polite">
      {message && (
        <div key={message.id} className="toast">
          {message.text}
        </div>
      )}
    </div>
  )
}
