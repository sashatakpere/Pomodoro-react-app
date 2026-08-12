import { Link } from 'react-router-dom'
import { usePomodoro } from '../hooks/usePomodoro'
import Header from '../components/Header'
import SessionBadge from '../components/SessionBadge'
import TimerDisplay from '../components/TimerDisplay'
import TimerControls from '../components/TimerControls'
import StatsCard from '../components/StatsCard'
import './Pomodoro.css'

function Pomodoro() {
  // All existing timer logic is untouched — same hook, same state, same behavior.
  const {
    sessionType,
    timeLeft,
    isRunning,
    hasStarted,
    todayCount,
    progress,
    start,
    pause,
    resume,
    reset,
  } = usePomodoro()

  const todayLabel = todayCount === 1 ? 'session' : 'sessions'

  return (
    <div className="app">
      <main className="app__main">
        <Link to="/" className="back-link">
          <span aria-hidden="true">←</span> Back to Home
        </Link>

        <Header />

        <section className="timer-card" aria-label="Pomodoro timer">
          <SessionBadge sessionType={sessionType} />

          <TimerDisplay
            timeLeft={timeLeft}
            progress={progress}
            sessionType={sessionType}
          />

          <TimerControls
            isRunning={isRunning}
            hasStarted={hasStarted}
            onStart={start}
            onPause={pause}
            onResume={resume}
            onReset={reset}
          />
        </section>

        <StatsCard
          label="Completed Today"
          value={todayCount}
          unit={todayLabel}
        />
      </main>
    </div>
  )
}

export default Pomodoro
