import { useApp } from '../context/AppContext'

export default function Login() {
  const { setView } = useApp()

  // no actual auth here — this screen just picks which demo you want to see
  return (
    <div className="login-screen">
      <div className="login-card">
        <div className="login-icon">🛡️</div>
        <h1>Trust the Process</h1>
        <p className="login-subtitle">Parental monitoring &amp; family safety</p>
        <button className="btn btn-primary" onClick={() => setView('parent')}>
          👨‍💼 Parent Login
        </button>
        <button className="btn btn-secondary" onClick={() => setView('child')}>
          👧 Child Device (Demo)
        </button>
      </div>
    </div>
  )
}
