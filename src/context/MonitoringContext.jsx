import { createContext, useContext, useEffect, useState } from 'react'
import { monitoring } from '@/data/studentData'

const MonitoringContext = createContext(null)

export function MonitoringProvider({ children }) {
  const [alerts, setAlerts] = useState(monitoring.alerts)
  const [activeScenario, setActiveScenario] = useState(null)
  const [toast, setToast] = useState(null)

  function triggerScenario(trigger) {
    setActiveScenario(trigger.id)
    setAlerts((prev) => [
      { level: 'active', title: trigger.label, detail: trigger.detail, time: 'Just now' },
      ...prev,
    ])
    setToast({ title: `Instant alert: ${trigger.label}`, detail: trigger.detail })
  }

  useEffect(() => {
    if (!toast) return
    const id = setTimeout(() => setToast(null), 4000)
    return () => clearTimeout(id)
  }, [toast])

  return (
    <MonitoringContext.Provider
      value={{ alerts, activeScenario, toast, triggerScenario, dismissToast: () => setToast(null) }}
    >
      {children}
    </MonitoringContext.Provider>
  )
}

export function useMonitoring() {
  const ctx = useContext(MonitoringContext)
  if (!ctx) throw new Error('useMonitoring must be used within a MonitoringProvider')
  return ctx
}
