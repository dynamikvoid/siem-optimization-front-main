import "./AlertSumTT.css";

const AlertSumTT = () => {
  return (
    <div className="alert-sum-tt">
      <div className="alert-sum-tt-child" />
      <div className="alert-sum-tt-item" />
      <div className="advanced-multistage-attack">
        Advanced Multistage Attack Detection
      </div>
      <b className="siem-alert-rule">{`SIEM Alert Rule: `}</b>
      <div className="frequency-fidelity-criticality-container">
        <p className="frequency">Frequency</p>
        <p className="frequency">{`Fidelity `}</p>
        <p className="frequency">Criticality</p>
        <p className="frequency">Impact Cost</p>
        <p className="source2">Source</p>
      </div>
      <div className="k-001-high-container">
        <p className="frequency">7K</p>
        <p className="frequency">0.01</p>
        <p className="frequency">High</p>
        <p className="frequency">$1M</p>
        <p className="source2">Azure</p>
      </div>
      <div className="annualized-recovery-value-container">
        <p className="frequency">
          <span className="annualized-recovery-value1">
            Annualized Recovery Value
          </span>
        </p>
        <p className="source2">
          <span className="m53">$100M</span>
        </p>
      </div>
    </div>
  );
};

export default AlertSumTT;
