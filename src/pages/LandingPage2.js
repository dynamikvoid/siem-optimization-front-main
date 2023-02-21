import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage2.css";

const LandingPage2 = () => {
  const navigate = useNavigate();

  const onLogoContainerClick = useCallback(() => {
    // Please sync "00 Landing Page" to the project
  }, []);

  const onLogoContainer1Click = useCallback(() => {
    navigate("/00-landing-page");
  }, [navigate]);

  const onLogoContainer2Click = useCallback(() => {
    navigate("/00-landing-page3");
  }, [navigate]);

  return (
    <div className="landing-page2">
      <div className="logo2" onClick={onLogoContainerClick}>
        <div className="ptimizer9">ptimizer</div>
        <img className="node-icon54" alt="" src="../node54.svg" />
        <img className="node-icon55" alt="" src="../node55.svg" />
        <img className="node-icon56" alt="" src="../node56.svg" />
        <img className="node-icon57" alt="" src="../node57.svg" />
        <img className="node-icon58" alt="" src="../node58.svg" />
        <img className="logo-child14" alt="" src="../line-57.svg" />
        <div className="logo-child15" />
        <img className="logo-child16" alt="" src="../line-77.svg" />
        <img className="logo-child17" alt="" src="../line-89.svg" />
        <img className="node-icon59" alt="" src="../node59.svg" />
        <img className="logo-child18" alt="" src="../line-99.svg" />
        <img className="logo-child19" alt="" src="../group-779.svg" />
        <img className="logo-child20" alt="" src="../group-869.svg" />
        <img className="logo-child21" alt="" src="../group-879.svg" />
        <div className="siem9">SIEM</div>
      </div>
      <div className="stepper2">
        <div className="step6">
          <img className="stepicon6" alt="" src="../stepicon4.svg" />
          <div className="content6">
            <div className="primary6">Impact Cost Defaults</div>
            <div className="secondary6">Optional</div>
          </div>
        </div>
        <div className="step7">
          <img className="stepicon6" alt="" src="../stepicon5.svg" />
          <div className="content6">
            <div className="primary6">Impact Cost Alert Rules</div>
            <div className="secondary6">Optional</div>
          </div>
        </div>
        <div className="step8">
          <div className="stepicon8">
            <div className="value127">3</div>
          </div>
          <div className="content8">
            <div className="primary6">Pricing Structure</div>
            <div className="secondary6">Optional</div>
          </div>
        </div>
      </div>
      <div className="text-field-parent3">
        <div className="text-field43">
          <div className="field63">
            <div className="prefix63">
              <div className="icon183">
                <img
                  className="starfilled-icon166"
                  alt=""
                  src="../starfilled106.svg"
                />
              </div>
            </div>
            <div className="text-wrapper63">
              <div className="value128">180</div>
            </div>
            <div className="suffix63">
              <div className="iconbutton86">
                <img
                  className="starfilled-icon166"
                  alt=""
                  src="../starfilled107.svg"
                />
              </div>
            </div>
          </div>
          <div className="helper63">
            <div className="text166">Descriptive text</div>
          </div>
          <div className="label64">
            <div className="label-background63">
              <div className="cutborder63" />
              <div className="text167">Days</div>
            </div>
          </div>
        </div>
        <div className="retention-days-group">
          <div className="retention-days1">Retention Days</div>
          <div className="please-enter-the6">
            Please enter the contracted number of retention days you have with
            your provider.
          </div>
        </div>
      </div>
      <div className="text-field-parent4">
        <div className="text-field44">
          <div className="field63">
            <div className="prefix63">
              <div className="icon183">
                <img
                  className="starfilled-icon166"
                  alt=""
                  src="../starfilled108.svg"
                />
              </div>
            </div>
            <div className="text-wrapper63">
              <div className="value128">$0.12</div>
            </div>
            <div className="suffix63">
              <div className="iconbutton86">
                <img
                  className="starfilled-icon166"
                  alt=""
                  src="../starfilled109.svg"
                />
              </div>
            </div>
          </div>
          <div className="helper63">
            <div className="text166">Descriptive text</div>
          </div>
          <div className="label64">
            <div className="label-background63">
              <div className="cutborder63" />
              <div className="text167">$/GB/Month</div>
            </div>
          </div>
        </div>
        <div className="retention-cost-group">
          <div className="retention-cost1">Retention Cost</div>
          <div className="please-enter-the7">
            Please enter the contracted retention cost in GB per month you have
            negotiated with your provider.
          </div>
        </div>
      </div>
      <div className="button40" onClick={onLogoContainer1Click}>
        <div className="container201">
          <img className="prefix-icon40" alt="" src="../prefix40.svg" />
          <div className="text170">Next</div>
          <img className="prefix-icon40" alt="" src="../suffix36.svg" />
        </div>
      </div>
      <div className="button41" onClick={onLogoContainer2Click}>
        <div className="container201">
          <img className="prefix-icon40" alt="" src="../prefix41.svg" />
          <div className="text170">Back</div>
          <img className="prefix-icon40" alt="" src="../suffix2.svg" />
        </div>
      </div>
      <div className="pricing-structure-container2">
        <b>Pricing Structure</b>
        <span> | Retention</span>
      </div>
    </div>
  );
};

export default LandingPage2;
