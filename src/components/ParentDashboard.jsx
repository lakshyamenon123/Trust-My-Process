import { useState } from 'react'
import { useApp } from '../context/AppContext'
import Header from './Header'
import AlertRow from './AlertRow'

export default function ParentDashboard() {
  const {
    alerts,
    dailyLimitHours,
    setDailyLimitHours,
    usedMinutes,
    blockedApps,
    connected,
    weeklyData,
    topApps,
    emergencyLock,
    emergencyLocked,
    unlockDevice,
  } = useApp()

  // local draft so the input isn't fighting the "real" value on every keystroke
  const [limitInput, setLimitInput] = useState(dailyLimitHours)

  const limitMinutes = dailyLimitHours * 60
  const pctUsed = Math.min(100, Math.round((usedMinutes / limitMinutes) * 100))
  const hours = Math.floor(usedMinutes / 60)
  const mins = usedMinutes % 60
  const avgMinutes = Math.round(weeklyData.reduce((s, d) => s + d.minutes, 0) / weeklyData.length)
  const maxMinutes = Math.max(...weeklyData.map((d) => d.minutes))

  // only show the first couple so the card doesn't blow out in height —
  // fine for the demo list, might need a "view all" if this grows
  const visibleBlocked = blockedApps.slice(0, 2)
  const moreCount = blockedApps.length - visibleBlocked.length

  return (
    <div className="dashboard">
      <Header />
      <div className="dashboard-grid">
        <div className="card">
          <h2>Child Device Status</h2>
          <div className="status-row">
            <span className="status-lock">🔒</span>
            <div>
              <div className="status-connected">
                <span className={`dot ${connected && !emergencyLocked ? 'dot-green' : 'dot-red'}`} />
                {emergencyLocked ? 'Locked by parent' : 'Connected & Monitoring'}
              </div>
              <div className="status-detail">iPhone 14 · iOS 17 · Last sync: now</div>
            </div>
          </div>
        </div>

        <div className="card">
          <h2>Today's Screen Time</h2>
          <div className="screen-time-row">
            <span className="screen-time-value">
              {hours}h {mins}m
            </span>
            <span className="screen-time-limit">{dailyLimitHours}h limit</span>
          </div>
          <div className="progress-track">
            <div className="progress-fill" style={{ width: `${pctUsed}%` }} />
          </div>
          <div className="progress-caption">{pctUsed}% of daily limit used</div>
        </div>

        <div className="card">
          <h2>This Week</h2>
          <div className="bar-chart">
            {weeklyData.map((d) => (
              <div className="bar-col" key={d.day}>
                <div
                  className="bar"
                  style={{ height: `${Math.max(10, (d.minutes / maxMinutes) * 100)}px` }}
                />
                <span className="bar-label">{d.day}</span>
              </div>
            ))}
          </div>
          <div className="progress-caption">
            Average: {Math.floor(avgMinutes / 60)}h {avgMinutes % 60}m/day
          </div>
        </div>

        <div className="card">
          <h2>Top Apps Used</h2>
          {topApps.map((app) => (
            <div className="app-row" key={app.name}>
              <div className="app-row-header">
                <span>{app.name}</span>
                <span>{app.label}</span>
              </div>
              <div className="progress-track">
                <div className="progress-fill progress-fill-dark" style={{ width: `${app.pct}%` }} />
              </div>
            </div>
          ))}
        </div>

        <div className="card">
          <h2>Recent Alerts</h2>
          <div className="alert-list">
            {alerts.map((a) => (
              <AlertRow alert={a} key={a.id} />
            ))}
          </div>
        </div>

        <div className="card">
          <h2>Controls</h2>
          <label className="control-label">Daily Screen Time Limit</label>
          <div className="limit-row">
            <input
              type="number"
              min="1"
              max="12"
              value={limitInput}
              onChange={(e) => setLimitInput(e.target.value)}
            />
            <span>hrs</span>
            <button className="btn-save" onClick={() => setDailyLimitHours(Number(limitInput) || 1)}>
              Save
            </button>
          </div>
          <div className="blocked-apps-line">
            <strong>Blocked Apps:</strong> {visibleBlocked.join(', ')}
            {moreCount > 0 && `, +${moreCount} more`}
          </div>
          {emergencyLocked ? (
            <button className="btn-unlock" onClick={unlockDevice}>
              🔓 Unlock Device
            </button>
          ) : (
            <button className="btn-emergency" onClick={emergencyLock}>
              🔒 Emergency Lock
            </button>
          )}
        </div>
      </div>
      <button className="help-fab">?</button>
    </div>
  )
}
