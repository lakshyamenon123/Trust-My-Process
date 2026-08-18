import { useEffect, useState } from 'react'
import { useApp } from '../context/AppContext'

export default function Header() {
  const { view, setView } = useApp()
  const [now, setNow] = useState(new Date())

  // real clock, unlike the one on the phone mockup — this one's shown to the parent
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(id)
  }, [])

  const dateStr = now.toLocaleDateString([], { weekday: 'long', month: 'long', day: 'numeric' })
  const timeStr = now.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit', second: '2-digit' })

  return (
    <header className="app-header">
      <div className="header-title">
        <span className="header-icon">🛡️</span>
        <div>
          <h1>Trust the Process</h1>
          <span className="header-datetime">
            {dateStr} · {timeStr}
          </span>
        </div>
      </div>
      <div className="header-actions">
        <button className="btn-chip" onClick={() => setView(view === 'parent' ? 'child' : 'parent')}>
          {view === 'parent' ? '📱 Child View' : '📊 Parent View'}
        </button>
        <button className="btn-chip" onClick={() => setView('login')}>
          Logout
        </button>
      </div>
    </header>
  )
}
