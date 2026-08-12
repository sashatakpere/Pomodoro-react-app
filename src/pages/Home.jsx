import { Link } from 'react-router-dom'
import { FOCUS_DURATION } from '../constants'
import { loadSessions, getTotalSessionCount } from '../utils/storage'
import { formatFocusDuration } from '../utils/time'
import TechniqueInfo from '../components/TechniqueInfo'
import StatsCard from '../components/StatsCard'
import './Home.css'

function Home() {
  // Reuses the same localStorage-backed session data as the timer page —
  // no new storage keys, no changes to how sessions are recorded.
  const sessions = loadSessions()
  const totalSessions = getTotalSessionCount(sessions)
  const totalFocusMinutes = Math.round((totalSessions * FOCUS_DURATION) / 60)
  const hasHistory = totalSessions > 0

  return (
    <div className="home">
      <main className="home__main">
        <section className="hero">
          <h1 className="hero__title">Pomodoro Study Timer</h1>
          <p className="hero__description">
            Focus better. Study smarter. Take better breaks.
          </p>
          <Link to="/pomodoro" className="btn btn--primary btn--large">
            Start Pomodoro
          </Link>
        </section>

        {hasHistory && (
          <section className="home-stats" aria-label="Your Pomodoro stats">
            <StatsCard
              label="Focus Sessions Completed"
              value={totalSessions}
              unit={totalSessions === 1 ? 'session' : 'sessions'}
            />
            <StatsCard
              label="Total Focus Time"
              value={formatFocusDuration(totalFocusMinutes)}
            />
          </section>
        )}

        <TechniqueInfo />
      </main>
    </div>
  )
}

export default Home
