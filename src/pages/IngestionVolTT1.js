import "./IngestionVolTT1.css";

const IngestionVolTT1 = () => {
  return (
    <div className="ingestion-vol-tt1">
      <div className="ingestion-vol-tt-inner" />
      <div className="note">Note:</div>
      <div className="ingestion-vol-tt-child1" />
      <div className="siem-ingestion-volume-container">
        <p className="siem-ingestion-volume">
          <span className="for">{`SIEM Ingestion Volume `}</span>
        </p>
        <p className="for-insights">
          <span className="for">{`for `}</span>
          <b className="insights">Insights</b>
        </p>
      </div>
      <b className="logging-cost2">Logging Cost| | Nov 21, 2022</b>
      <div className="some-note-here">
        Some note here about what to do if there is an issues with a data source
        and how to investigate it.
      </div>
      <div className="ingestion-vol-wow-container">
        <p className="siem-ingestion-volume">Ingestion Vol</p>
        <p className="for-insights">WoW % Change</p>
      </div>
      <div className="gb-2014">
        <p className="siem-ingestion-volume">1.1 GB</p>
        <p className="for-insights">+201.4%</p>
      </div>
    </div>
  );
};

export default IngestionVolTT1;
