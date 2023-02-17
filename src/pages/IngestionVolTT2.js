import "./IngestionVolTT2.css";

const IngestionVolTT2 = () => {
  return (
    <div className="ingestion-vol-tt2">
      <div className="ingestion-vol-tt-child2" />
      <div className="interpretation">Interpretation:</div>
      <div className="ingestion-vol-tt-child3" />
      <div className="overall-siem-ingestion2">
        Overall SIEM Ingestion Volume
      </div>
      <b className="logging-cost3">Logging Cost | Feb 12, 2023</b>
      <div className="using-machine-learning-container">
        <span>
          <span>
            Using Machine Learning, the predicted value for the overall
            ingestion volume i
          </span>
          <span className="s">{`s `}</span>
        </span>
        <span className="s">
          <span>16.9 GB</span>
        </span>
        <span>
          <span className="s">{` `}</span>
          <span>with historical variation of</span>
          <span className="s">{` +/- `}</span>
        </span>
        <span className="s">
          <span> 0.8 GB</span>
          <span className="span4">{`. `}</span>
        </span>
      </div>
      <div className="predicted-value-upper-container">
        <p className="predicted-value">
          <span>{`Predicted value `}</span>
          <span className="span5">{` `}</span>
        </p>
        <p className="predicted-value">
          <span>Upper bound</span>
        </p>
        <p className="lower-bound">
          <span>Lower bound</span>
        </p>
      </div>
      <div className="gb-177-gb-container">
        <p className="predicted-value">16.9 GB</p>
        <p className="predicted-value">17.7 GB</p>
        <p className="lower-bound">16.1 GB</p>
      </div>
    </div>
  );
};

export default IngestionVolTT2;
