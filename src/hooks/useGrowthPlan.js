import { useCallback, useState } from 'react'
import { TOTAL_DAYS } from '@/data/growthPlanData'

function storageKey(skillId) {
  return `ttp_growth_plan_${skillId}`
}

function loadState(skillId) {
  try {
    const raw = localStorage.getItem(storageKey(skillId))
    if (!raw) return { completedDays: [], dayScores: {} }
    const parsed = JSON.parse(raw)
    return { completedDays: parsed.completedDays ?? [], dayScores: parsed.dayScores ?? {} }
  } catch {
    return { completedDays: [], dayScores: {} }
  }
}

function saveState(skillId, state) {
  try {
    localStorage.setItem(storageKey(skillId), JSON.stringify(state))
  } catch {
    // ignore write failures (private browsing, storage full, etc.)
  }
}

// longest run of consecutive completed days ending at the highest
// completed day number — a simple, date-free stand-in for a real streak
function computeStreak(completedDays) {
  if (completedDays.length === 0) return 0
  const set = new Set(completedDays)
  const maxDay = Math.max(...completedDays)
  let streak = 0
  let day = maxDay
  while (set.has(day)) {
    streak += 1
    day -= 1
  }
  return streak
}

export function useGrowthPlan(skillId) {
  const [loadedFor, setLoadedFor] = useState(skillId)
  const [state, setState] = useState(() => loadState(skillId))

  // if the skill changes while this hook stays mounted, reload from
  // storage for the new skill (React's supported "adjust state during
  // render" pattern — avoids an extra effect-driven render pass)
  if (skillId !== loadedFor) {
    setLoadedFor(skillId)
    setState(loadState(skillId))
  }

  const completeDay = useCallback(
    (day, correctCount) => {
      setState((prev) => {
        const completedDays = prev.completedDays.includes(day)
          ? prev.completedDays
          : [...prev.completedDays, day].sort((a, b) => a - b)
        const dayScores = { ...prev.dayScores, [day]: correctCount }
        const next = { completedDays, dayScores }
        saveState(skillId, next)
        return next
      })
    },
    [skillId]
  )

  const isDayComplete = useCallback((day) => state.completedDays.includes(day), [state.completedDays])

  const totalCompleted = state.completedDays.length
  const streak = computeStreak(state.completedDays)
  const progressPct = Math.round((totalCompleted / TOTAL_DAYS) * 100)
  const nextIncompleteDay = (() => {
    for (let d = 1; d <= TOTAL_DAYS; d++) {
      if (!state.completedDays.includes(d)) return d
    }
    return null
  })()
  const isComplete = totalCompleted >= TOTAL_DAYS

  return {
    completedDays: state.completedDays,
    dayScores: state.dayScores,
    completeDay,
    isDayComplete,
    totalCompleted,
    streak,
    progressPct,
    nextIncompleteDay,
    isComplete,
  }
}
