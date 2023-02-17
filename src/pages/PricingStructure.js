import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./PricingStructure.css";

const PricingStructure = () => {
  const navigate = useNavigate();

  const onButtonContainerClick = useCallback(() => {
    navigate("/07-pricing-structure");
  }, [navigate]);

  const onButtonContainer1Click = useCallback(() => {
    navigate("/06-impact-cost");
  }, [navigate]);

  const onGroupContainerClick = useCallback(() => {
    // Please sync "00 Landing Page" to the project
  }, []);

  return (
    <div className="pricing-structure">
      <div className="navbar">
        <div className="navbar-child" />
        <div className="button" onClick={onButtonContainerClick}>
          <div className="container">
            <img className="prefix-icon" alt="" src="../prefix.svg" />
            <b className="text">Pricing Structure</b>
            <img className="prefix-icon" alt="" src="../suffix.svg" />
          </div>
        </div>
        <div className="button1" onClick={onButtonContainer1Click}>
          <div className="container">
            <img className="prefix-icon" alt="" src="../prefix1.svg" />
            <div className="text">{`Impact Cost `}</div>
            <img className="prefix-icon" alt="" src="../suffix1.svg" />
          </div>
        </div>
        <div className="ptimizer-parent" onClick={onGroupContainerClick}>
          <div className="ptimizer">ptimizer</div>
          <img className="node-icon" alt="" src="../node.svg" />
          <img className="node-icon1" alt="" src="../node1.svg" />
          <img className="node-icon2" alt="" src="../node2.svg" />
          <img className="node-icon3" alt="" src="../node3.svg" />
          <img className="node-icon4" alt="" src="../node4.svg" />
          <img className="instance-child" alt="" src="../line-5.svg" />
          <div className="instance-item" />
          <img className="instance-inner" alt="" src="../line-7.svg" />
          <img className="line-icon" alt="" src="../line-8.svg" />
          <img className="node-icon5" alt="" src="../node5.svg" />
          <img className="instance-child1" alt="" src="../line-9.svg" />
          <img className="group-icon" alt="" src="../group-77.svg" />
          <img className="instance-child2" alt="" src="../group-86.svg" />
          <img className="instance-child3" alt="" src="../group-87.svg" />
          <div className="siem">SIEM</div>
        </div>
      </div>
      <div className="pricing-structure-child" />
      <b className="pricing-structure-settings">{`Pricing Structure Settings `}</b>
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
                <div className="value">$2.00</div>
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
              <div className="text2">Descriptive text</div>
            </div>
            <div className="label">
              <div className="label-background">
                <div className="cutborder" />
                <div className="text3">Pay-as-you-go</div>
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
                <div className="value">$100</div>
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
              <div className="text2">Descriptive text</div>
            </div>
            <div className="label">
              <div className="label-background">
                <div className="cutborder" />
                <div className="text3">100/GB per day</div>
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
                <div className="value">$180</div>
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
              <div className="text2">Descriptive text</div>
            </div>
            <div className="label">
              <div className="label-background">
                <div className="cutborder" />
                <div className="text3">200/GB per day</div>
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
                <div className="value">$260</div>
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
              <div className="text2">Descriptive text</div>
            </div>
            <div className="label">
              <div className="label-background">
                <div className="cutborder" />
                <div className="text3">300/GB per day</div>
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
                <div className="value">$334</div>
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
              <div className="text2">Descriptive text</div>
            </div>
            <div className="label">
              <div className="label-background">
                <div className="cutborder" />
                <div className="text3">400/GB per day</div>
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
                <div className="value">$400</div>
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
              <div className="text2">Descriptive text</div>
            </div>
            <div className="label">
              <div className="label-background">
                <div className="cutborder" />
                <div className="text3">500/GB per day</div>
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
                <div className="value">$780</div>
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
              <div className="text2">Descriptive text</div>
            </div>
            <div className="label">
              <div className="label-background">
                <div className="cutborder" />
                <div className="text3">1000/GB per day</div>
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
                <div className="value">$1,480</div>
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
              <div className="text2">Descriptive text</div>
            </div>
            <div className="label">
              <div className="label-background">
                <div className="cutborder" />
                <div className="text3">2000/GB per day</div>
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
                <div className="value">$3,500</div>
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
              <div className="text2">Descriptive text</div>
            </div>
            <div className="label">
              <div className="label-background">
                <div className="cutborder" />
                <div className="text3">5000/GB per day</div>
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
      <div className="group-container">
        <div className="group-wrapper">
          <div className="text-field-group">
            <div className="text-field">
              <div className="field">
                <div className="prefix">
                  <div className="icon">
                    <img
                      className="starfilled-icon"
                      alt=""
                      src="../starfilled18.svg"
                    />
                  </div>
                </div>
                <div className="text-wrapper">
                  <div className="value">$2.30</div>
                </div>
                <div className="suffix">
                  <div className="iconbutton">
                    <img
                      className="starfilled-icon"
                      alt=""
                      src="../starfilled19.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="helper">
                <div className="text2">Descriptive text</div>
              </div>
              <div className="label">
                <div className="label-background">
                  <div className="cutborder" />
                  <div className="text3">Pay-as-you-go</div>
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
                      src="../starfilled20.svg"
                    />
                  </div>
                </div>
                <div className="text-wrapper">
                  <div className="value">$196</div>
                </div>
                <div className="suffix">
                  <div className="iconbutton">
                    <img
                      className="starfilled-icon"
                      alt=""
                      src="../starfilled21.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="helper">
                <div className="text2">Descriptive text</div>
              </div>
              <div className="label">
                <div className="label-background">
                  <div className="cutborder" />
                  <div className="text3">100/GB per day</div>
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
                      src="../starfilled22.svg"
                    />
                  </div>
                </div>
                <div className="text-wrapper">
                  <div className="value">$368</div>
                </div>
                <div className="suffix">
                  <div className="iconbutton">
                    <img
                      className="starfilled-icon"
                      alt=""
                      src="../starfilled23.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="helper">
                <div className="text2">Descriptive text</div>
              </div>
              <div className="label">
                <div className="label-background">
                  <div className="cutborder" />
                  <div className="text3">200/GB per day</div>
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
                      src="../starfilled24.svg"
                    />
                  </div>
                </div>
                <div className="text-wrapper">
                  <div className="value">$540</div>
                </div>
                <div className="suffix">
                  <div className="iconbutton">
                    <img
                      className="starfilled-icon"
                      alt=""
                      src="../starfilled25.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="helper">
                <div className="text2">Descriptive text</div>
              </div>
              <div className="label">
                <div className="label-background">
                  <div className="cutborder" />
                  <div className="text3">300/GB per day</div>
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
                      src="../starfilled26.svg"
                    />
                  </div>
                </div>
                <div className="text-wrapper">
                  <div className="value">$704</div>
                </div>
                <div className="suffix">
                  <div className="iconbutton">
                    <img
                      className="starfilled-icon"
                      alt=""
                      src="../starfilled27.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="helper">
                <div className="text2">Descriptive text</div>
              </div>
              <div className="label">
                <div className="label-background">
                  <div className="cutborder" />
                  <div className="text3">400/GB per day</div>
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
                      src="../starfilled28.svg"
                    />
                  </div>
                </div>
                <div className="text-wrapper">
                  <div className="value">$865</div>
                </div>
                <div className="suffix">
                  <div className="iconbutton">
                    <img
                      className="starfilled-icon"
                      alt=""
                      src="../starfilled29.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="helper">
                <div className="text2">Descriptive text</div>
              </div>
              <div className="label">
                <div className="label-background">
                  <div className="cutborder" />
                  <div className="text3">500/GB per day</div>
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
                      src="../starfilled30.svg"
                    />
                  </div>
                </div>
                <div className="text-wrapper">
                  <div className="value">$1,700</div>
                </div>
                <div className="suffix">
                  <div className="iconbutton">
                    <img
                      className="starfilled-icon"
                      alt=""
                      src="../starfilled31.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="helper">
                <div className="text2">Descriptive text</div>
              </div>
              <div className="label">
                <div className="label-background">
                  <div className="cutborder" />
                  <div className="text3">1000/GB per day</div>
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
                      src="../starfilled32.svg"
                    />
                  </div>
                </div>
                <div className="text-wrapper">
                  <div className="value">$3,320</div>
                </div>
                <div className="suffix">
                  <div className="iconbutton">
                    <img
                      className="starfilled-icon"
                      alt=""
                      src="../starfilled33.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="helper">
                <div className="text2">Descriptive text</div>
              </div>
              <div className="label">
                <div className="label-background">
                  <div className="cutborder" />
                  <div className="text3">2000/GB per day</div>
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
                      src="../starfilled34.svg"
                    />
                  </div>
                </div>
                <div className="text-wrapper">
                  <div className="value">$8,050</div>
                </div>
                <div className="suffix">
                  <div className="iconbutton">
                    <img
                      className="starfilled-icon"
                      alt=""
                      src="../starfilled35.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="helper">
                <div className="text2">Descriptive text</div>
              </div>
              <div className="label">
                <div className="label-background">
                  <div className="cutborder" />
                  <div className="text3">5000/GB per day</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="log-analytics-ingestion-cost-parent">
          <div className="log-analytics-ingestion">{`Log Analytics Ingestion Cost `}</div>
          <div className="please-enter-the">
            Please enter the contracted ingestion cost in GB per month you have
            negotiated with your provider.
          </div>
        </div>
      </div>
      <div className="button2">
        <div className="container2">
          <img className="prefix-icon2" alt="" src="../prefix2.svg" />
          <div className="text38">Save</div>
          <img className="prefix-icon2" alt="" src="../suffix2.svg" />
        </div>
      </div>
      <div className="button3">
        <div className="container2">
          <img className="prefix-icon2" alt="" src="../prefix3.svg" />
          <div className="text38">Reset</div>
          <img className="prefix-icon2" alt="" src="../suffix2.svg" />
        </div>
      </div>
      <div className="text-field-container">
        <div className="text-field18">
          <div className="field">
            <div className="prefix">
              <div className="icon">
                <img
                  className="starfilled-icon"
                  alt=""
                  src="../starfilled36.svg"
                />
              </div>
            </div>
            <div className="text-wrapper">
              <div className="value">180</div>
            </div>
            <div className="suffix">
              <div className="iconbutton">
                <img
                  className="starfilled-icon"
                  alt=""
                  src="../starfilled37.svg"
                />
              </div>
            </div>
          </div>
          <div className="helper">
            <div className="text2">Descriptive text</div>
          </div>
          <div className="label">
            <div className="label-background">
              <div className="cutborder" />
              <div className="text3">Days</div>
            </div>
          </div>
        </div>
        <div className="retention-days-parent">
          <div className="retention-days">Retention Days</div>
          <div className="please-enter-the2">
            Please enter the contracted number of retention days you have with
            your provider.
          </div>
        </div>
      </div>
      <div className="group-div">
        <div className="text-field19">
          <div className="field">
            <div className="prefix">
              <div className="icon">
                <img
                  className="starfilled-icon"
                  alt=""
                  src="../starfilled38.svg"
                />
              </div>
            </div>
            <div className="text-wrapper">
              <div className="value">$0.12</div>
            </div>
            <div className="suffix">
              <div className="iconbutton">
                <img
                  className="starfilled-icon"
                  alt=""
                  src="../starfilled39.svg"
                />
              </div>
            </div>
          </div>
          <div className="helper">
            <div className="text2">Descriptive text</div>
          </div>
          <div className="label">
            <div className="label-background">
              <div className="cutborder" />
              <div className="text3">$/GB/Month</div>
            </div>
          </div>
        </div>
        <div className="retention-cost-parent">
          <div className="retention-cost">Retention Cost</div>
          <div className="please-enter-the3">
            Please enter the contracted retention cost in GB per month you have
            negotiated with your provider.
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingStructure;
