/**
 * Generic stat display card — reused on the Home page (all-time stats)
 * and the Pomodoro page (today's completed sessions).
 */
function StatsCard({ label, value, unit }) {
  return (
    <div className="stats-card">
      <p className="stats-card__label">{label}</p>
      <p className="stats-card__count">
        {value}
        {unit ? <span className="stats-card__unit">{unit}</span> : null}
      </p>
    </div>
  )
}

export default StatsCard
