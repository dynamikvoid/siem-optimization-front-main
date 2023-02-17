import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage00.css";

const LandingPage = () => {
  const onLogoContainerClick = useCallback(() => {
    // Please sync "00 Landing Page" to the project
  }, []);

  return (
    <div className="landing-page2">
      <div className="logo" onClick={onLogoContainerClick}>
        <div className="Optimizer">Optimizer</div>
        <img className="node-icon" alt="" src="../node.svg" />
        <img className="node-icon1" alt="" src="../node1.svg" />
        <img className="node-icon2" alt="" src="../node2.svg" />
        <img className="node-icon3" alt="" src="../node3.svg" />
        <img className="node-icon4" alt="" src="../node4.svg" />
        <img className="logo-child" alt="" src="../line-5.svg" />
        <div className="logo-item" />
        <img className="logo-inner" alt="" src="../line-7.svg" />
        <img className="line-icon" alt="" src="../line-8.svg" />
        <img className="node-icon5" alt="" src="../node5.svg" />
        <img className="logo-child1" alt="" src="../line-9.svg" />
        <img className="group-icon" alt="" src="../group-77.svg" />
        <img className="logo-child2" alt="" src="../group-86.svg" />
        <img className="logo-child3" alt="" src="../group-87.svg" />
        <div className="siem">SIEM</div>
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
            <div className="value">3</div>
          </div>
          <div className="content2">
            <div className="primary">Pricing Structure</div>
            <div className="secondary">Optional</div>
          </div>
        </div>
      </div>
      <div className="group-parent">
        <div className="text-field-parent">
          <div className="text-field">
            <div className="field">
              <div className="prefix">
                <div className="icon">
                  <img
                    className="starfilled-icon"
                    alt=""
                    src="../starfilled.svg"
                  />
                </div>
              </div>
              <div className="text-wrapper">
                <div className="value1">$2.00</div>
              </div>
              <div className="suffix">
                <div className="iconbutton">
                  <img
                    className="starfilled-icon"
                    alt=""
                    src="../starfilled1.svg"
                  />
                </div>
              </div>
            </div>
            <div className="helper">
              <div className="text">Descriptive text</div>
            </div>
            <div className="label">
              <div className="label-background">
                <div className="cutborder" />
                <div className="text1">Pay-as-you-go</div>
              </div>
            </div>
          </div>
          <div className="text-field1">
            <div className="field">
              <div className="prefix">
                <div className="icon">
                  <img
                    className="starfilled-icon"
                    alt=""
                    src="../starfilled2.svg"
                  />
                </div>
              </div>
              <div className="text-wrapper">
                <div className="value1">$100</div>
              </div>
              <div className="suffix">
                <div className="iconbutton">
                  <img
                    className="starfilled-icon"
                    alt=""
                    src="../starfilled3.svg"
                  />
                </div>
              </div>
            </div>
            <div className="helper">
              <div className="text">Descriptive text</div>
            </div>
            <div className="label">
              <div className="label-background">
                <div className="cutborder" />
                <div className="text1">100/GB per day</div>
              </div>
            </div>
          </div>
          <div className="text-field2">
            <div className="field">
              <div className="prefix">
                <div className="icon">
                  <img
                    className="starfilled-icon"
                    alt=""
                    src="../starfilled4.svg"
                  />
                </div>
              </div>
              <div className="text-wrapper">
                <div className="value1">$180</div>
              </div>
              <div className="suffix">
                <div className="iconbutton">
                  <img
                    className="starfilled-icon"
                    alt=""
                    src="../starfilled5.svg"
                  />
                </div>
              </div>
            </div>
            <div className="helper">
              <div className="text">Descriptive text</div>
            </div>
            <div className="label">
              <div className="label-background">
                <div className="cutborder" />
                <div className="text1">200/GB per day</div>
              </div>
            </div>
          </div>
          <div className="text-field3">
            <div className="field">
              <div className="prefix">
                <div className="icon">
                  <img
                    className="starfilled-icon"
                    alt=""
                    src="../starfilled6.svg"
                  />
                </div>
              </div>
              <div className="text-wrapper">
                <div className="value1">$260</div>
              </div>
              <div className="suffix">
                <div className="iconbutton">
                  <img
                    className="starfilled-icon"
                    alt=""
                    src="../starfilled7.svg"
                  />
                </div>
              </div>
            </div>
            <div className="helper">
              <div className="text">Descriptive text</div>
            </div>
            <div className="label">
              <div className="label-background">
                <div className="cutborder" />
                <div className="text1">300/GB per day</div>
              </div>
            </div>
          </div>
          <div className="text-field4">
            <div className="field">
              <div className="prefix">
                <div className="icon">
                  <img
                    className="starfilled-icon"
                    alt=""
                    src="../starfilled8.svg"
                  />
                </div>
              </div>
              <div className="text-wrapper">
                <div className="value1">$334</div>
              </div>
              <div className="suffix">
                <div className="iconbutton">
                  <img
                    className="starfilled-icon"
                    alt=""
                    src="../starfilled9.svg"
                  />
                </div>
              </div>
            </div>
            <div className="helper">
              <div className="text">Descriptive text</div>
            </div>
            <div className="label">
              <div className="label-background">
                <div className="cutborder" />
                <div className="text1">400/GB per day</div>
              </div>
            </div>
          </div>
          <div className="text-field5">
            <div className="field">
              <div className="prefix">
                <div className="icon">
                  <img
                    className="starfilled-icon"
                    alt=""
                    src="../starfilled10.svg"
                  />
                </div>
              </div>
              <div className="text-wrapper">
                <div className="value1">$400</div>
              </div>
              <div className="suffix">
                <div className="iconbutton">
                  <img
                    className="starfilled-icon"
                    alt=""
                    src="../starfilled11.svg"
                  />
                </div>
              </div>
            </div>
            <div className="helper">
              <div className="text">Descriptive text</div>
            </div>
            <div className="label">
              <div className="label-background">
                <div className="cutborder" />
                <div className="text1">500/GB per day</div>
              </div>
            </div>
          </div>
          <div className="text-field6">
            <div className="field">
              <div className="prefix">
                <div className="icon">
                  <img
                    className="starfilled-icon"
                    alt=""
                    src="../starfilled12.svg"
                  />
                </div>
              </div>
              <div className="text-wrapper">
                <div className="value1">$780</div>
              </div>
              <div className="suffix">
                <div className="iconbutton">
                  <img
                    className="starfilled-icon"
                    alt=""
                    src="../starfilled13.svg"
                  />
                </div>
              </div>
            </div>
            <div className="helper">
              <div className="text">Descriptive text</div>
            </div>
            <div className="label">
              <div className="label-background">
                <div className="cutborder" />
                <div className="text1">1000/GB per day</div>
              </div>
            </div>
          </div>
          <div className="text-field7">
            <div className="field">
              <div className="prefix">
                <div className="icon">
                  <img
                    className="starfilled-icon"
                    alt=""
                    src="../starfilled14.svg"
                  />
                </div>
              </div>
              <div className="text-wrapper">
                <div className="value1">$1,480</div>
              </div>
              <div className="suffix">
                <div className="iconbutton">
                  <img
                    className="starfilled-icon"
                    alt=""
                    src="../starfilled15.svg"
                  />
                </div>
              </div>
            </div>
            <div className="helper">
              <div className="text">Descriptive text</div>
            </div>
            <div className="label">
              <div className="label-background">
                <div className="cutborder" />
                <div className="text1">2000/GB per day</div>
              </div>
            </div>
          </div>
          <div className="text-field8">
            <div className="field">
              <div className="prefix">
                <div className="icon">
                  <img
                    className="starfilled-icon"
                    alt=""
                    src="../starfilled16.svg"
                  />
                </div>
              </div>
              <div className="text-wrapper">
                <div className="value1">$3,500</div>
              </div>
              <div className="suffix">
                <div className="iconbutton">
                  <img
                    className="starfilled-icon"
                    alt=""
                    src="../starfilled17.svg"
                  />
                </div>
              </div>
            </div>
            <div className="helper">
              <div className="text">Descriptive text</div>
            </div>
            <div className="label">
              <div className="label-background">
                <div className="cutborder" />
                <div className="text1">5000/GB per day</div>
              </div>
            </div>
          </div>
        </div>
        <div className="sentinel-ingestion-cost-parent">
          <div className="sentinel-ingestion-cost">{`Sentinel Ingestion Cost `}</div>
          <div className="please-enter-the">
            Please enter the contracted retention cost in GB per month you have
            negotiated with your provider.
          </div>
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
