function SessionBadge({ sessionType }) {
  const isFocus = sessionType === 'focus'

  return (
    <div className={`session-badge session-badge--${sessionType}`}>
      <span className="session-badge__dot" aria-hidden="true" />
      {isFocus ? 'Focus Time' : 'Break Time'}
    </div>
  )
}

export default SessionBadge
