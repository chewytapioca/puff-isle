export default function Awning() {
  return (
    <div className="awning" aria-hidden="true">
      {Array.from({ length: 14 }, (_, i) => (
        <span key={i} />
      ))}
    </div>
  )
}
