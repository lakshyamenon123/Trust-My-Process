// pulled out of ParentDashboard/ChildDevice — was copy-pasted in both, bit me
// once already when I edited one and not the other
export default function AlertRow({ alert }) {
  return (
    <div className={`alert-row alert-${alert.type}`}>
      <span className="alert-icon">{alert.type === 'warning' ? '⚠️' : 'ℹ️'}</span>
      <div>
        <div className="alert-text">{alert.text}</div>
        <div className="alert-time">{alert.time}</div>
      </div>
    </div>
  )
}
