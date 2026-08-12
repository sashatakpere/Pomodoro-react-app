import { useState, useEffect, useCallback } from 'react'
import { FOCUS_DURATION, BREAK_DURATION } from '../constants'
import {
  loadSessions,
  saveSessions,
  incrementTodayCount,
  getTodayCount,
} from '../utils/storage'

/**
 * Custom hook that manages all Pomodoro timer logic:
 * countdown, session switching, and completed session tracking.
 */
export function usePomodoro() {
  const [sessionType, setSessionType] = useState('focus')
  const [timeLeft, setTimeLeft] = useState(FOCUS_DURATION)
  const [isRunning, setIsRunning] = useState(false)
  const [hasStarted, setHasStarted] = useState(false)
  const [completedSessions, setCompletedSessions] = useState(loadSessions)

  const sessionDuration = sessionType === 'focus' ? FOCUS_DURATION : BREAK_DURATION
  const todayCount = getTodayCount(completedSessions)

  // Persist completed sessions whenever they change
  useEffect(() => {
    saveSessions(completedSessions)
  }, [completedSessions])

  // Countdown: subtract 1 second every tick while the timer is running
  useEffect(() => {
    if (!isRunning) return

    const intervalId = setInterval(() => {
      setTimeLeft((prev) => prev - 1)
    }, 1000)

    return () => clearInterval(intervalId)
  }, [isRunning])

  // When time reaches 0, complete the session and switch to the next one
  useEffect(() => {
    if (timeLeft > 0 || !hasStarted) return

    if (sessionType === 'focus') {
      // Focus finished → count it and start a break
      setCompletedSessions((prev) => incrementTodayCount(prev))
      setSessionType('break')
      setTimeLeft(BREAK_DURATION)
    } else {
      // Break finished → start a new focus session
      setSessionType('focus')
      setTimeLeft(FOCUS_DURATION)
    }

    // Keep the timer running automatically for the next session
    setHasStarted(true)
    setIsRunning(true)
  }, [timeLeft, hasStarted, sessionType])

  const start = useCallback(() => {
    setIsRunning(true)
    setHasStarted(true)
  }, [])

  const pause = useCallback(() => {
    setIsRunning(false)
  }, [])

  const resume = useCallback(() => {
    setIsRunning(true)
  }, [])

  const reset = useCallback(() => {
    setIsRunning(false)
    setHasStarted(false)
    setTimeLeft(sessionDuration)
  }, [sessionDuration])

  // Progress from 0 (empty) to 1 (full) for the visual ring
  const progress = 1 - timeLeft / sessionDuration

  return {
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
  }
}
