import { STORAGE_KEY } from '../constants'
import { getTodayKey } from './time'

/**
 * Loads completed session counts from localStorage.
 * Returns an object like { "2026-06-25": 3, "2026-06-24": 1 }
 */
export function loadSessions() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    return saved ? JSON.parse(saved) : {}
  } catch {
    return {}
  }
}

/**
 * Saves session counts to localStorage
 */
export function saveSessions(sessions) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(sessions))
}

/**
 * Increments today's completed focus session count by 1
 */
export function incrementTodayCount(sessions) {
  const today = getTodayKey()
  return {
    ...sessions,
    [today]: (sessions[today] || 0) + 1,
  }
}

/**
 * Gets how many focus sessions were completed today
 */
export function getTodayCount(sessions) {
  return sessions[getTodayKey()] || 0
}

/**
 * Gets the total number of completed focus sessions across all days.
 * Used for all-time stats (e.g. on the Home page).
 */
export function getTotalSessionCount(sessions) {
  return Object.values(sessions).reduce((sum, count) => sum + count, 0)
}
