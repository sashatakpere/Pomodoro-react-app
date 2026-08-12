import { formatTime } from '../utils/time'

function TimerDisplay({ timeLeft, progress, sessionType }) {
  // SVG circle progress ring
  const radius = 120
  const circumference = 2 * Math.PI * radius
  const strokeOffset = circumference * (1 - progress)

  return (
    <div className={`timer-display timer-display--${sessionType}`}>
      <svg className="timer-display__ring" viewBox="0 0 280 280" aria-hidden="true">
        <circle className="timer-display__ring-bg" cx="140" cy="140" r={radius} />
        <circle
          className="timer-display__ring-progress"
          cx="140"
          cy="140"
          r={radius}
          style={{
            strokeDasharray: circumference,
            strokeDashoffset: strokeOffset,
          }}
        />
      </svg>
      <time className="timer-display__time" dateTime={`PT${timeLeft}S`}>
        {formatTime(timeLeft)}
      </time>
    </div>
  )
}

export default TimerDisplay
