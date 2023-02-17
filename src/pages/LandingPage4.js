import { useCallback } from "react";
import "./LandingPage4.css";

const LandingPage4 = () => {
  const onLogoContainerClick = useCallback(() => {
    // Please sync "00 Landing Page" to the project
  }, []);

  return (
    <div className="landing-page4">
      <div className="logo4" onClick={onLogoContainerClick}>
        <div className="ptimizer11">ptimizer</div>
        <img className="node-icon66" alt="" src="../node66.svg" />
        <img className="node-icon67" alt="" src="../node67.svg" />
        <img className="node-icon68" alt="" src="../node68.svg" />
        <img className="node-icon69" alt="" src="../node69.svg" />
        <img className="node-icon70" alt="" src="../node70.svg" />
        <img className="logo-child30" alt="" src="../line-511.svg" />
        <div className="logo-child31" />
        <img className="logo-child32" alt="" src="../line-711.svg" />
        <img className="logo-child33" alt="" src="../line-811.svg" />
        <img className="node-icon71" alt="" src="../node71.svg" />
        <img className="logo-child34" alt="" src="../line-911.svg" />
        <img className="logo-child35" alt="" src="../group-7711.svg" />
        <img className="logo-child36" alt="" src="../group-8611.svg" />
        <img className="logo-child37" alt="" src="../group-8711.svg" />
        <div className="siem11">SIEM</div>
      </div>
      <div className="stepper4">
        <div className="step12">
          <div className="stepicon12">
            <div className="value132">1</div>
          </div>
          <div className="content12">
            <div className="primary12">Impact Cost Defaults</div>
            <div className="secondary12">Optional</div>
          </div>
        </div>
        <div className="step13">
          <div className="stepicon13">
            <div className="value132">2</div>
          </div>
          <div className="content13">
            <div className="primary13">Impact Cost Alert Rules</div>
            <div className="secondary13">Optional</div>
          </div>
        </div>
        <div className="step14">
          <div className="stepicon13">
            <div className="value132">3</div>
          </div>
          <div className="content13">
            <div className="primary13">Pricing Structure</div>
            <div className="secondary13">Optional</div>
          </div>
        </div>
      </div>
      <div className="text-field45">
        <div className="field65">
          <div className="prefix65">
            <div className="icon185">
              <img
                className="starfilled-icon170"
                alt=""
                src="../starfilled110.svg"
              />
            </div>
          </div>
          <div className="text-wrapper65">
            <div className="value135">$1.00</div>
          </div>
          <div className="suffix65">
            <div className="iconbutton90">
              <img
                className="starfilled-icon170"
                alt=""
                src="../starfilled111.svg"
              />
            </div>
          </div>
        </div>
        <div className="helper65">
          <div className="text174">Descriptive text</div>
        </div>
        <div className="label66">
          <div className="label-background65">
            <div className="cutborder65" />
            <div className="text175">Info</div>
          </div>
        </div>
      </div>
      <div className="text-field46">
        <div className="field65">
          <div className="prefix65">
            <div className="icon185">
              <img
                className="starfilled-icon170"
                alt=""
                src="../starfilled112.svg"
              />
            </div>
          </div>
          <div className="text-wrapper65">
            <div className="value135">$250.00</div>
          </div>
          <div className="suffix65">
            <div className="iconbutton90">
              <img
                className="starfilled-icon170"
                alt=""
                src="../starfilled113.svg"
              />
            </div>
          </div>
        </div>
        <div className="helper65">
          <div className="text174">Descriptive text</div>
        </div>
        <div className="label66">
          <div className="label-background65">
            <div className="cutborder65" />
            <div className="text175">Low</div>
          </div>
        </div>
      </div>
      <div className="text-field47">
        <div className="field65">
          <div className="prefix65">
            <div className="icon185">
              <img
                className="starfilled-icon170"
                alt=""
                src="../starfilled114.svg"
              />
            </div>
          </div>
          <div className="text-wrapper65">
            <div className="value135">$2,500.00</div>
          </div>
          <div className="suffix65">
            <div className="iconbutton90">
              <img
                className="starfilled-icon170"
                alt=""
                src="../starfilled115.svg"
              />
            </div>
          </div>
        </div>
        <div className="helper65">
          <div className="text174">Descriptive text</div>
        </div>
        <div className="label66">
          <div className="label-background65">
            <div className="cutborder65" />
            <div className="text175">Medium</div>
          </div>
        </div>
      </div>
      <div className="text-field48">
        <div className="field65">
          <div className="prefix65">
            <div className="icon185">
              <img
                className="starfilled-icon170"
                alt=""
                src="../starfilled116.svg"
              />
            </div>
          </div>
          <div className="text-wrapper65">
            <div className="value135">$20,000.00</div>
          </div>
          <div className="suffix65">
            <div className="iconbutton90">
              <img
                className="starfilled-icon170"
                alt=""
                src="../starfilled117.svg"
              />
            </div>
          </div>
        </div>
        <div className="helper65">
          <div className="text174">Descriptive text</div>
        </div>
        <div className="label66">
          <div className="label-background65">
            <div className="cutborder65" />
            <div className="text175">High</div>
          </div>
        </div>
      </div>
      <div className="set-the-default1">
        Set the default value for an alert firing at each severity level.
      </div>
      <div className="impact-cost-settings-container2">
        <b>Impact Cost Settings |</b>
        <span> Default Values</span>
      </div>
      <div className="button44">
        <div className="container206">
          <img className="prefix-icon44" alt="" src="../prefix44.svg" />
          <div className="text182">Next</div>
          <img className="prefix-icon44" alt="" src="../suffix44.svg" />
        </div>
      </div>
      <div className="button45">
        <div className="container206">
          <img className="prefix-icon44" alt="" src="../prefix45.svg" />
          <div className="text182">Back</div>
          <img className="prefix-icon44" alt="" src="../suffix45.svg" />
        </div>
      </div>
    </div>
  );
};

export default LandingPage4;
