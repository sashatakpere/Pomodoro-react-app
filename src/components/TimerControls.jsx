function TimerControls({ isRunning, hasStarted, onStart, onPause, onResume, onReset }) {
  // Determine which buttons are active based on timer state
  const canStart = !hasStarted
  const canPause = isRunning
  const canResume = hasStarted && !isRunning

  return (
    <div className="timer-controls">
      <button
        type="button"
        className="btn btn--primary"
        onClick={onStart}
        disabled={!canStart}
      >
        Start
      </button>

      <button
        type="button"
        className="btn btn--secondary"
        onClick={onPause}
        disabled={!canPause}
      >
        Pause
      </button>

      <button
        type="button"
        className="btn btn--secondary"
        onClick={onResume}
        disabled={!canResume}
      >
        Resume
      </button>

      <button
        type="button"
        className="btn btn--ghost"
        onClick={onReset}
      >
        Reset
      </button>
    </div>
  )
}

export default TimerControls
