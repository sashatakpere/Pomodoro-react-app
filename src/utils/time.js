/**
 * Formats seconds into MM:SS display (e.g. 1500 → "25:00")
 */
export function formatTime(seconds) {
  const mins = Math.floor(seconds / 60)
  const secs = seconds % 60
  return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`
}

/**
 * Returns today's date as YYYY-MM-DD for grouping completed sessions
 */
export function getTodayKey() {
  return new Date().toISOString().split('T')[0]
}

/**
 * Formats a total number of minutes into a short "Xh Ym" / "Ym" display.
 * (e.g. 90 -> "1h 30m", 45 -> "45m")
 */
export function formatFocusDuration(totalMinutes) {
  const hours = Math.floor(totalMinutes / 60)
  const minutes = totalMinutes % 60

  if (hours === 0) return `${minutes}m`
  if (minutes === 0) return `${hours}h`
  return `${hours}h ${minutes}m`
}
