import "./IngestionVolTT.css";

const IngestionVolTT = () => {
  return (
    <div className="ingestion-vol-tt">
      <div className="ingestion-vol-tt-child" />
      <div className="ingestion-vol-tt-item" />
      <div className="date-range1">Date Range</div>
      <b className="logging-cost1">Logging Cost | Nov 21, 2022</b>
      <div className="charts-on-this-container1">
        <p className="charts-on-this-dashboard-will1">
          <span>Charts on this dashboard will</span>
        </p>
        <p className="charts-on-this-dashboard-will1">
          <span>display data from today until</span>
        </p>
        <p className="charts-on-this-dashboard-will1">
          <b className="days10">90 Days</b>
          <span> ago</span>
        </p>
        <p className="charts-on-this-dashboard-will1">
          <span>&nbsp;</span>
        </p>
        <p className="charts-on-this-dashboard-will1">
          <span>To change this type into the text box</span>
        </p>
        <p className="charts-on-this-dashboard-will1">
          <span>{`a different number or choose from `}</span>
        </p>
        <p className="charts-on-this-dashboard-will1">
          <span>the drop down menu to choose from</span>
        </p>
        <p className="days-months-or-years1">
          <span>Days, Months, or Years.</span>
        </p>
      </div>
    </div>
  );
};

export default IngestionVolTT;
