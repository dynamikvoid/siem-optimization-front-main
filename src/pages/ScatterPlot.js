import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ScatterChartGraph from "../components/ScatterPlot"

const ScatterPlot = () => {
    const navigate = useNavigate();
  
    const onButtonContainerClick = useCallback(() => {
      // Please sync "05 Payment Sel" to the project
    }, []);
  
    const onButtonContainer1Click = useCallback(() => {
      // Please sync "04 Exploration" to the project
    }, []);
  
    const onButtonContainer2Click = useCallback(() => {
      navigate("/02-logging-cost");
    }, [navigate]);
  
    const onButtonContainer3Click = useCallback(() => {
      navigate("/01-alert-summary");
    }, [navigate]);
  
    const onButtonContainer4Click = useCallback(() => {
      // Please sync "03 - Cost Analysis" to the project
    }, []);

    const onButtonContainer5Click = useCallback(() => {
        navigate("/");
      }, [navigate]);

    return (
        <div className="alert-summary">
      <div className="navbar1">
        <div className="navbar-item" />
        <div className="button5" onClick={onButtonContainerClick}>
          <div className="container45">
            <img className="prefix-icon5" alt="" src="../prefix5.svg" />
            <div className="text14">Payment Sel.</div>
            <img className="prefix-icon5" alt="" src="../suffix.svg" />
          </div>
        </div>
        <div className="button6" onClick={onButtonContainer1Click}>
          <div className="container45">
            <img className="prefix-icon5" alt="" src="../prefix6.svg" />
            <div className="text14">Exploration</div>
            <img className="prefix-icon5" alt="" src="../suffix.svg" />
          </div>
        </div>
        <div className="button7" onClick={onButtonContainer2Click}>
          <div className="container45">
            <img className="prefix-icon5" alt="" src="../prefix7.svg" />
            <div className="text14">Ingestion Volume</div>
            <img className="prefix-icon5" alt="" src="../suffix7.svg" />
          </div>
        </div>
        <div className="button8" onClick={onButtonContainer3Click}>
          <div className="container45">
            <img className="prefix-icon5" alt="" src="../prefix8.svg" />
            <div className="text16">Alert Summary</div>
            <img className="prefix-icon5" alt="" src="../suffix8.svg" />
          </div>
        </div>
        <div className="button9" onClick={onButtonContainer4Click}>
          <div className="container45">
            <img className="prefix-icon5" alt="" src="../prefix9.svg" />
            <div className="text14">Cost Analysis</div>
            <img className="prefix-icon5" alt="" src="../suffix.svg" />
          </div>
        </div>
        <div className="iconbutton13" onClick={onButtonContainer5Click}>
         <img className="homefilled-icon1" alt="" src="../homefilled1.svg" />
         <div><ScatterChartGraph/></div>
        </div>
      </div>
      </div>
      );
    };
    
    export default ScatterPlot;