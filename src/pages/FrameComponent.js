import "./FrameComponent.css";

const FrameComponent = () => {
  return (
    <div className="rectangle-root">
      <div className="frame-child2" />
      <div className="frame-child3" />
      <div className="date-range">Date Range</div>
      <b className="logging-cost">Logging Cost | Nov 21, 2022</b>
      <div className="charts-on-this-container">
        <p className="charts-on-this-dashboard-will">
          <span>Charts on this dashboard will</span>
        </p>
        <p className="charts-on-this-dashboard-will">
          <span>display data from today until</span>
        </p>
        <p className="charts-on-this-dashboard-will">
          <b className="days9">90 Days</b>
          <span> ago</span>
        </p>
        <p className="charts-on-this-dashboard-will">
          <span>&nbsp;</span>
        </p>
        <p className="charts-on-this-dashboard-will">
          <span>To change this type into the text box</span>
        </p>
        <p className="charts-on-this-dashboard-will">
          <span>{`a different number or choose from `}</span>
        </p>
        <p className="charts-on-this-dashboard-will">
          <span>the drop down menu to choose from</span>
        </p>
        <p className="days-months-or-years">
          <span>Days, Months, or Years.</span>
        </p>
      </div>
    </div>
  );
};

export default FrameComponent;
