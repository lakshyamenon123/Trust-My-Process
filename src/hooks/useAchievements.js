import { useCallback, useState } from 'react'

const STORAGE_KEY = 'ttp_custom_achievements'

function load() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

function save(entries) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(entries))
  } catch {
    // ignore write failures (private browsing, storage full, etc.)
  }
}

// student-added achievements/activities, layered on top of the static
// progress.achievements list — persisted locally so both the child and
// parent views see the same entries
export function useAchievements() {
  const [entries, setEntries] = useState(() => load())

  const addEntry = useCallback((title, note) => {
    setEntries((prev) => {
      const next = [{ id: Date.now(), title, note, date: 'Just added' }, ...prev]
      save(next)
      return next
    })
  }, [])

  const removeEntry = useCallback((id) => {
    setEntries((prev) => {
      const next = prev.filter((e) => e.id !== id)
      save(next)
      return next
    })
  }, [])

  return { entries, addEntry, removeEntry }
}
