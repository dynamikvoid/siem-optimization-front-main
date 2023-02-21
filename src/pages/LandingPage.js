import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
  const navigate = useNavigate();

  const onLogoContainerClick = useCallback(() => {
    // Please sync "00 Landing Page" to the project
  }, []);

  const onLogoContainer1Click = useCallback(() => {
    navigate("/00-landing-page1");
  }, [navigate]);

  const onLogoContainer2Click = useCallback(() => {
    navigate("/00-landing-page");
  }, [navigate]);
  return (
    <div className="landing-page">
      <div className="logo" onClick={onLogoContainerClick}>
        <div className="ptimizer7">ptimizer</div>
        <img className="node-icon42" alt="" src="../node42.svg" />
        <img className="node-icon43" alt="" src="../node43.svg" />
        <img className="node-icon44" alt="" src="../node44.svg" />
        <img className="node-icon45" alt="" src="../node45.svg" />
        <img className="node-icon46" alt="" src="../node46.svg" />
        <img className="logo-child" alt="" src="../line-57.svg" />
        <div className="logo-item" />
        <img className="logo-inner" alt="" src="../line-77.svg" />
        <img className="logo-child1" alt="" src="../line-87.svg" />
        <img className="node-icon47" alt="" src="../node47.svg" />
        <img className="logo-child2" alt="" src="../line-97.svg" />
        <img className="logo-child3" alt="" src="../group-777.svg" />
        <img className="logo-child4" alt="" src="../group-867.svg" />
        <img className="logo-child5" alt="" src="../group-877.svg" />
        <div className="siem7">SIEM</div>
      </div>
      <div className="stepper">
        <div className="step">
          <img className="stepicon" alt="" src="../stepicon.svg" />
          <div className="content">
            <div className="primary">Impact Cost Defaults</div>
            <div className="secondary">Optional</div>
          </div>
        </div>
        <div className="step1">
          <img className="stepicon" alt="" src="../stepicon1.svg" />
          <div className="content">
            <div className="primary">Impact Cost Alert Rules</div>
            <div className="secondary">Optional</div>
          </div>
        </div>
        <div className="step2">
          <div className="stepicon2">
            <div className="value107">3</div>
          </div>
          <div className="content2">
            <div className="primary">Pricing Structure</div>
            <div className="secondary">Optional</div>
          </div>
        </div>
      </div>
      <div className="group-parent1">
        <div className="text-field-parent1">
          <div className="text-field25">
            <div className="field45">
              <div className="prefix45">
                <div className="icon165">
                  <img
                    className="starfilled-icon130"
                    alt=""
                    src="../starfilled70.svg"
                  />
                </div>
              </div>
              <div className="text-wrapper45">
                <div className="value108">$2.00</div>
              </div>
              <div className="suffix45">
                <div className="iconbutton68">
                  <img
                    className="starfilled-icon130"
                    alt=""
                    src="../starfilled71.svg"
                  />
                </div>
              </div>
            </div>
            <div className="helper45">
              <div className="text126">Descriptive text</div>
            </div>
            <div className="label46">
              <div className="label-background45">
                <div className="cutborder45" />
                <div className="text127">Pay-as-you-go</div>
              </div>
            </div>
          </div>
          <div className="text-field26">
            <div className="field45">
              <div className="prefix45">
                <div className="icon165">
                  <img
                    className="starfilled-icon130"
                    alt=""
                    src="../starfilled72.svg"
                  />
                </div>
              </div>
              <div className="text-wrapper45">
                <div className="value108">$100</div>
              </div>
              <div className="suffix45">
                <div className="iconbutton68">
                  <img
                    className="starfilled-icon130"
                    alt=""
                    src="../starfilled73.svg"
                  />
                </div>
              </div>
            </div>
            <div className="helper45">
              <div className="text126">Descriptive text</div>
            </div>
            <div className="label46">
              <div className="label-background45">
                <div className="cutborder45" />
                <div className="text127">100/GB per day</div>
              </div>
            </div>
          </div>
          <div className="text-field27">
            <div className="field45">
              <div className="prefix45">
                <div className="icon165">
                  <img
                    className="starfilled-icon130"
                    alt=""
                    src="../starfilled74.svg"
                  />
                </div>
              </div>
              <div className="text-wrapper45">
                <div className="value108">$180</div>
              </div>
              <div className="suffix45">
                <div className="iconbutton68">
                  <img
                    className="starfilled-icon130"
                    alt=""
                    src="../starfilled75.svg"
                  />
                </div>
              </div>
            </div>
            <div className="helper45">
              <div className="text126">Descriptive text</div>
            </div>
            <div className="label46">
              <div className="label-background45">
                <div className="cutborder45" />
                <div className="text127">200/GB per day</div>
              </div>
            </div>
          </div>
          <div className="text-field28">
            <div className="field45">
              <div className="prefix45">
                <div className="icon165">
                  <img
                    className="starfilled-icon130"
                    alt=""
                    src="../starfilled76.svg"
                  />
                </div>
              </div>
              <div className="text-wrapper45">
                <div className="value108">$260</div>
              </div>
              <div className="suffix45">
                <div className="iconbutton68">
                  <img
                    className="starfilled-icon130"
                    alt=""
                    src="../starfilled77.svg"
                  />
                </div>
              </div>
            </div>
            <div className="helper45">
              <div className="text126">Descriptive text</div>
            </div>
            <div className="label46">
              <div className="label-background45">
                <div className="cutborder45" />
                <div className="text127">300/GB per day</div>
              </div>
            </div>
          </div>
          <div className="text-field29">
            <div className="field45">
              <div className="prefix45">
                <div className="icon165">
                  <img
                    className="starfilled-icon130"
                    alt=""
                    src="../starfilled78.svg"
                  />
                </div>
              </div>
              <div className="text-wrapper45">
                <div className="value108">$334</div>
              </div>
              <div className="suffix45">
                <div className="iconbutton68">
                  <img
                    className="starfilled-icon130"
                    alt=""
                    src="../starfilled79.svg"
                  />
                </div>
              </div>
            </div>
            <div className="helper45">
              <div className="text126">Descriptive text</div>
            </div>
            <div className="label46">
              <div className="label-background45">
                <div className="cutborder45" />
                <div className="text127">400/GB per day</div>
              </div>
            </div>
          </div>
          <div className="text-field30">
            <div className="field45">
              <div className="prefix45">
                <div className="icon165">
                  <img
                    className="starfilled-icon130"
                    alt=""
                    src="../starfilled80.svg"
                  />
                </div>
              </div>
              <div className="text-wrapper45">
                <div className="value108">$400</div>
              </div>
              <div className="suffix45">
                <div className="iconbutton68">
                  <img
                    className="starfilled-icon130"
                    alt=""
                    src="../starfilled81.svg"
                  />
                </div>
              </div>
            </div>
            <div className="helper45">
              <div className="text126">Descriptive text</div>
            </div>
            <div className="label46">
              <div className="label-background45">
                <div className="cutborder45" />
                <div className="text127">500/GB per day</div>
              </div>
            </div>
          </div>
          <div className="text-field31">
            <div className="field45">
              <div className="prefix45">
                <div className="icon165">
                  <img
                    className="starfilled-icon130"
                    alt=""
                    src="../starfilled82.svg"
                  />
                </div>
              </div>
              <div className="text-wrapper45">
                <div className="value108">$780</div>
              </div>
              <div className="suffix45">
                <div className="iconbutton68">
                  <img
                    className="starfilled-icon130"
                    alt=""
                    src="../starfilled83.svg"
                  />
                </div>
              </div>
            </div>
            <div className="helper45">
              <div className="text126">Descriptive text</div>
            </div>
            <div className="label46">
              <div className="label-background45">
                <div className="cutborder45" />
                <div className="text127">1000/GB per day</div>
              </div>
            </div>
          </div>
          <div className="text-field32">
            <div className="field45">
              <div className="prefix45">
                <div className="icon165">
                  <img
                    className="starfilled-icon130"
                    alt=""
                    src="../starfilled84.svg"
                  />
                </div>
              </div>
              <div className="text-wrapper45">
                <div className="value108">$1,480</div>
              </div>
              <div className="suffix45">
                <div className="iconbutton68">
                  <img
                    className="starfilled-icon130"
                    alt=""
                    src="../starfilled85.svg"
                  />
                </div>
              </div>
            </div>
            <div className="helper45">
              <div className="text126">Descriptive text</div>
            </div>
            <div className="label46">
              <div className="label-background45">
                <div className="cutborder45" />
                <div className="text127">2000/GB per day</div>
              </div>
            </div>
          </div>
          <div className="text-field33">
            <div className="field45">
              <div className="prefix45">
                <div className="icon165">
                  <img
                    className="starfilled-icon130"
                    alt=""
                    src="../starfilled86.svg"
                  />
                </div>
              </div>
              <div className="text-wrapper45">
                <div className="value108">$3,500</div>
              </div>
              <div className="suffix45">
                <div className="iconbutton68">
                  <img
                    className="starfilled-icon130"
                    alt=""
                    src="../starfilled87.svg"
                  />
                </div>
              </div>
            </div>
            <div className="helper45">
              <div className="text126">Descriptive text</div>
            </div>
            <div className="label46">
              <div className="label-background45">
                <div className="cutborder45" />
                <div className="text127">5000/GB per day</div>
              </div>
            </div>
          </div>
        </div>
        <div className="sentinel-ingestion-cost-group">
          <div className="sentinel-ingestion-cost1">{`Sentinel Ingestion Cost `}</div>
          <div className="please-enter-the4">
            Please enter the contracted retention cost in GB per month you have
            negotiated with your provider.
          </div>
        </div>
      </div>
      <div className="button36" onClick={onLogoContainer1Click}>
        <div className="container197">
          <img className="prefix-icon36" alt="" src="../prefix36.svg" />
          <div className="text144">Next</div>
          <img className="prefix-icon36" alt="" src="../suffix36.svg" />
        </div>
      </div>
      <div className="button37" onClick={onLogoContainer2Click}>
        <div className="container197">
          <img className="prefix-icon36" alt="" src="../prefix37.svg" />
          <div className="text144">Back</div>
          <img className="prefix-icon36" alt="" src="../suffix36.svg" />
        </div>
      </div>
      <div className="pricing-structure-container">
        <b>Pricing Structure</b>
        <span> | Sentinel</span>
      </div>
    </div>
  );
};

export default LandingPage;
