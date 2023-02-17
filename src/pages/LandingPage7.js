import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage7.css";

const LandingPage7 = () => {
  const navigate = useNavigate();

  const onButtonContainerClick = useCallback(() => {
    navigate("/05-payment-sel");
  }, [navigate]);

  const onButtonContainer1Click = useCallback(() => {
    navigate("/04-exploration");
  }, [navigate]);

  const onButtonContainer2Click = useCallback(() => {
    navigate("/02-logging-cost");
  }, [navigate]);

  const onButtonContainer3Click = useCallback(() => {
    navigate("/01-alert-summary");
  }, [navigate]);

  const onButtonContainer4Click = useCallback(() => {
    navigate("/03-cost-analysis");
  }, [navigate]);

  const onButtonContainer5Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="landing-page7">
      <div className="group-parent9">
        <div className="frame-group">
          <div className="total-roi-group">
            <div className="total-roi1">Total ROI</div>
            <div className="jan3">Jan</div>
            <div className="jun3">Jun</div>
            <div className="dec3">Dec</div>
            <img className="frame-child4" alt="" src="../rectangle-103.svg" />
            <div className="yoy3">{`YoY `}</div>
            <div className="m54">$60.4M</div>
            <div className="m55">+$27.5M</div>
          </div>
          <div className="total-value-group">
            <div className="total-roi1">Total Value</div>
            <div className="jan3">Jan</div>
            <div className="jun3">Jun</div>
            <div className="dec3">Dec</div>
            <img className="frame-child5" alt="" src="../rectangle-104.svg" />
            <div className="yoy3">{`YoY `}</div>
            <div className="m54">$99.9M</div>
            <div className="m55">+$31.5M</div>
          </div>
        </div>
        <div className="total-cost-group">
          <div className="total-roi1">Total Cost</div>
          <div className="jan3">Jan</div>
          <div className="jun3">Jun</div>
          <div className="dec3">Dec</div>
          <img className="frame-child6" alt="" src="../rectangle-105.svg" />
          <div className="yoy3">{`YoY `}</div>
          <div className="m54">$39.5M</div>
          <div className="m55">-$27.5M</div>
        </div>
      </div>
      <div className="navbar9">
        <div className="navbar-child7" />
        <div className="button56" onClick={onButtonContainerClick}>
          <div className="container267">
            <img className="prefix-icon56" alt="" src="../prefix56.svg" />
            <div className="text210">Payment Sel.</div>
            <img className="prefix-icon56" alt="" src="../suffix56.svg" />
          </div>
        </div>
        <div className="button57" onClick={onButtonContainer1Click}>
          <div className="container267">
            <img className="prefix-icon56" alt="" src="../prefix57.svg" />
            <div className="text210">Exploration</div>
            <img className="prefix-icon56" alt="" src="../suffix57.svg" />
          </div>
        </div>
        <div className="button58" onClick={onButtonContainer2Click}>
          <div className="container267">
            <img className="prefix-icon56" alt="" src="../prefix58.svg" />
            <div className="text210">Ingestion Volume</div>
            <img className="prefix-icon56" alt="" src="../suffix58.svg" />
          </div>
        </div>
        <div className="button59" onClick={onButtonContainer3Click}>
          <div className="container267">
            <img className="prefix-icon56" alt="" src="../prefix59.svg" />
            <div className="text210">Alert Summary</div>
            <img className="prefix-icon56" alt="" src="../suffix59.svg" />
          </div>
        </div>
        <div className="button60" onClick={onButtonContainer4Click}>
          <div className="container267">
            <img className="prefix-icon56" alt="" src="../prefix60.svg" />
            <div className="text210">Cost Analysis</div>
            <img className="prefix-icon56" alt="" src="../suffix60.svg" />
          </div>
        </div>
      </div>
      <div className="navbar10">
        <div className="navbar-child7" />
        <div className="button61">
          <div className="container267">
            <img className="prefix-icon56" alt="" src="../prefix61.svg" />
            <div className="text215">My Account</div>
            <img className="prefix-icon56" alt="" src="../suffix61.svg" />
          </div>
        </div>
        <div className="button62">
          <div className="container267">
            <img className="prefix-icon56" alt="" src="../prefix62.svg" />
            <div className="text215">Pricing Structure</div>
            <img className="prefix-icon56" alt="" src="../suffix62.svg" />
          </div>
        </div>
        <div className="ptimizer-container" onClick={onButtonContainer5Click}>
        <div className="ptimizer2">ptimizer</div>
          <img className="node-icon12" alt="" src="../node12.svg" />
          <img className="node-icon13" alt="" src="../node13.svg" />
          <img className="node-icon14" alt="" src="../node14.svg" />
          <img className="node-icon15" alt="" src="../node15.svg" />
          <img className="node-icon16" alt="" src="../node16.svg" />
          <img className="instance-child23" alt="" src="../line-5.svg" />
          <div className="instance-child24" />
          <img className="instance-child25" alt="" src="../line-7.svg" />
          <img className="instance-child26" alt="" src="../line-8.svg" />
          <img className="node-icon17" alt="" src="../node17.svg" />
          <img className="instance-child27" alt="" src="../line-92.svg" />
          <img className="instance-child28" alt="" src="../group-772.svg" />
          <img className="instance-child29" alt="" src="../group-862.svg" />
          <img className="instance-child30" alt="" src="../group-872.svg" />
          <div className="siem2">SIEM</div>
        </div>

      </div>
      <div className="welcome-back">Welcome back!</div>
      <div className="see-whats-going">
        See what’s going on in your organization by exploring your dashboards...
      </div>
    </div>
  );
};

export default LandingPage7;
