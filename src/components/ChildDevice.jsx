import { useEffect, useState } from 'react'
import { useApp } from '../context/AppContext'
import Header from './Header'
import AlertRow from './AlertRow'

const HOME_APPS = [
  { name: 'WhatsApp', icon: '📱', color: '#25d366' },
  { name: 'Camera', icon: '📷', color: '#3a3a3a' },
  { name: '', icon: '🔍', color: '#ffffff' }, // Spotlight-style search, no label on real iOS either
  { name: 'Facebook', icon: 'f', color: '#3b5998' },
  { name: 'Instagram', icon: '📸', color: 'gradient' },
  { name: 'TikTok', icon: '🎵', color: '#000000' },
  { name: 'YouTube', icon: '📺', color: '#ff0000' },
  { name: 'Gaming', icon: '🎮', color: '#7b2ff7' },
  { name: 'Email', icon: '✉️', color: '#2b6cb0' },
  { name: 'Settings', icon: '⚙️', color: '#e2e2e2' },
  { name: 'Private Browse', icon: '🔒', color: '#000000' },
]

const SCENARIOS = [
  { key: 'home', label: '🏠  Show Home Screen', color: '#2f3b52' },
  { key: 'instagram', label: '📷  Open Instagram (Normal Use)', color: 'gradient' },
  { key: 'private-blocked', label: '🔒  Try Private Browsing (Blocked)', color: '#3b73d6' },
  { key: 'inappropriate', label: '⚠️  Detect Inappropriate Content', color: '#e15b5b' },
  { key: 'limit-hit', label: '⏰  Screen Time Limit Hit', color: '#e08a2e' },
]

// this is basically a state machine but if/else reads fine for 5 cases —
// worth revisiting as a lookup table if we add more scenarios
function PhoneScreen({ app, emergencyLocked, onUnlockAttempt }) {
  if (emergencyLocked) {
    return (
      <div className="phone-blocked-screen">
        <div className="phone-blocked-icon">🔒</div>
        <div className="phone-blocked-title">Device Locked</div>
        <div className="phone-blocked-text">Your parent has locked this device.</div>
        <button className="phone-unlock-hint" onClick={onUnlockAttempt}>
          Ask a parent to unlock
        </button>
      </div>
    )
  }

  if (app === 'private-blocked') {
    return (
      <div className="phone-blocked-screen">
        <div className="phone-blocked-icon">🔒</div>
        <div className="phone-blocked-title">Private Browsing Blocked</div>
        <div className="phone-blocked-text">This feature is disabled by parental controls.</div>
      </div>
    )
  }

  if (app === 'inappropriate') {
    return (
      <div className="phone-blocked-screen">
        <div className="phone-blocked-icon">⚠️</div>
        <div className="phone-blocked-title">Content Blocked</div>
        <div className="phone-blocked-text">This content was flagged as inappropriate.</div>
      </div>
    )
  }

  if (app === 'limit-hit') {
    return (
      <div className="phone-blocked-screen">
        <div className="phone-blocked-icon">⏰</div>
        <div className="phone-blocked-title">Time's Up!</div>
        <div className="phone-blocked-text">Daily screen time limit reached.</div>
      </div>
    )
  }

  if (app === 'instagram') {
    return (
      <div className="phone-app-screen phone-app-instagram">
        <div className="phone-app-topbar">Instagram</div>
        <div className="phone-app-body">
          <div className="ig-story-row">
            {['You', 'mia', 'lee', 'sam', 'ava'].map((n) => (
              <div className="ig-story" key={n}>
                <div className="ig-story-ring" />
                <span>{n}</span>
              </div>
            ))}
          </div>
          <div className="ig-post" />
          <div className="ig-post" />
        </div>
      </div>
    )
  }

  return (
    <div className="phone-home">
      <div className="app-icon-grid">
        {HOME_APPS.map((a, i) => (
          <div className="app-icon" key={i}>
            <div
              className="app-icon-glyph"
              style={{
                background:
                  a.color === 'gradient'
                    ? 'linear-gradient(135deg,#f9ce34,#ee2a7b,#6228d7)'
                    : a.color,
                color: a.color === '#ffffff' || a.color === '#e2e2e2' ? '#333' : '#fff',
              }}
            >
              {a.icon}
            </div>
            <span>{a.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function ChildDevice() {
  const { alerts, currentApp, triggerScenario, emergencyLocked, addAlert } = useApp()
  const [now, setNow] = useState(new Date())

  // just for the fake status bar clock, doesn't need to be anywhere near real-time accurate
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(id)
  }, [])

  const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })

  return (
    <div className="dashboard">
      <Header />
      <div className="child-layout">
        <div className="phone-frame">
          <div className="phone-notch" />
          <div className="phone-statusbar">
            <span>{timeStr}</span>
            <span>📶 🔋 89%</span> {/* battery's just set dressing, not wired to anything */}
          </div>
          <PhoneScreen
            app={currentApp}
            emergencyLocked={emergencyLocked}
            onUnlockAttempt={() => addAlert('info', 'Child attempted to request unlock')}
          />
          {currentApp === 'home' && !emergencyLocked && (
            <div className="phone-dock">
              <span>📞</span>
              <span>💬</span>
              <span>📷</span>
              <span>⚙️</span>
            </div>
          )}
        </div>

        <div className="demo-panel">
          <h2>Demo Controls</h2>
          <p className="demo-subtitle">Simulate scenarios on the phone</p>
          {SCENARIOS.map((s) => (
            <button
              key={s.key}
              className={`demo-btn ${currentApp === s.key ? 'demo-btn-active' : ''}`}
              style={{
                background:
                  s.color === 'gradient'
                    ? 'linear-gradient(135deg,#ee2a7b,#6228d7)'
                    : s.color,
              }}
              onClick={() => triggerScenario(s.key)}
            >
              {s.label}
            </button>
          ))}

          <div className="current-state-box">
            <strong>Current state</strong>
            <div>App: {currentApp}</div>
          </div>

          <h2 className="alerts-heading">Recent Alerts</h2>
          <div className="alert-list">
            {alerts.map((a) => (
              <AlertRow alert={a} key={a.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
