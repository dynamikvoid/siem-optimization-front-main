import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./PaymentSel.css";

const PaymentSel = () => {
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

  const onGroupContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onCurrContainerClick = useCallback(() => {
    navigate("/05-payment-sel1");
  }, [navigate]);

  const onCurr2ContainerClick = useCallback(() => {
    navigate("/05-payment-sel1");
  }, [navigate]);

  return (
    <div className="payment-sel">
      <div className="navbar3">
        <div className="navbar-child1" />
        <div className="button13" onClick={onButtonContainerClick}>
          <div className="container38">
            <img className="prefix-icon13" alt="" src="../prefix13.svg" />
            <div className="text69">Payment Sel.</div>
            <img className="prefix-icon13" alt="" src="../suffix12.svg" />
          </div>
        </div>
        <div className="button14" onClick={onButtonContainer1Click}>
          <div className="container38">
            <img className="prefix-icon13" alt="" src="../prefix14.svg" />
            <div className="text70">Exploration</div>
            <img className="prefix-icon13" alt="" src="../suffix8.svg" />
          </div>
        </div>
        <div className="button15" onClick={onButtonContainer2Click}>
          <div className="container38">
            <img className="prefix-icon13" alt="" src="../prefix15.svg" />
            <div className="text70">Ingestion Volume</div>
            <img className="prefix-icon13" alt="" src="../suffix10.svg" />
          </div>
        </div>
        <div className="button16" onClick={onButtonContainer3Click}>
          <div className="container38">
            <img className="prefix-icon13" alt="" src="../prefix16.svg" />
            <div className="text70">Alert Summary</div>
            <img className="prefix-icon13" alt="" src="../suffix8.svg" />
          </div>
        </div>
        <div className="button17" onClick={onButtonContainer4Click}>
          <div className="container38">
            <img className="prefix-icon13" alt="" src="../prefix17.svg" />
            <div className="text70">Cost Analysis</div>
            <img className="prefix-icon13" alt="" src="../suffix8.svg" />
          </div>
        </div>
        <div className="ptimizer-parent1" onClick={onGroupContainerClick}>
          <div className="ptimizer3">Optimizer</div>
          <img className="node-icon18" alt="" src="../node18.svg" />
          <img className="node-icon19" alt="" src="../node19.svg" />
          <img className="node-icon20" alt="" src="../node20.svg" />
          <img className="node-icon21" alt="" src="../node21.svg" />
          <img className="node-icon22" alt="" src="../node22.svg" />
          <img className="instance-child31" alt="" src="../line-5.svg" />
          <div className="instance-child32" />
          <img className="instance-child33" alt="" src="../line-7.svg" />
          <img className="instance-child34" alt="" src="../line-83.svg" />
          <img className="node-icon23" alt="" src="../node23.svg" />
          <img className="instance-child35" alt="" src="../line-93.svg" />
          <img className="instance-child36" alt="" src="../group-773.svg" />
          <img className="instance-child37" alt="" src="../group-863.svg" />
          <img className="instance-child38" alt="" src="../group-873.svg" />
          <div className="siem3">SIEM</div>
        </div>
      </div>
      <div className="curr" onClick={onCurrContainerClick}>
        <div className="wrapper3">
          <div className="field28">
            <div className="prefix28">
              <div className="icon46">
                <img
                  className="starfilled-icon62"
                  alt=""
                  src="../starfilled53.svg"
                />
              </div>
            </div>
            <div className="text-wrapper28">
              <div className="values3">
                <div className="chip12">
                  <div className="container43">
                    <div className="avatar12">
                      <div className="avatar13">
                        <div className="op6">OP</div>
                      </div>
                    </div>
                    <div className="typography56">
                      <div className="chip13">Chip</div>
                    </div>
                    <img
                      className="cancelfilled-icon6"
                      alt=""
                      src="../cancelfilled6.svg"
                    />
                  </div>
                </div>
                <div className="chip12">
                  <div className="container43">
                    <div className="avatar12">
                      <div className="avatar13">
                        <div className="op6">OP</div>
                      </div>
                    </div>
                    <div className="typography56">
                      <div className="chip13">Chip</div>
                    </div>
                    <img
                      className="cancelfilled-icon6"
                      alt=""
                      src="../cancelfilled7.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="value39">Pay-as-you-go</div>
            </div>
            <div className="clear3">
              <div className="iconbutton34">
                <img className="starfilled-icon62" alt="" />
              </div>
            </div>
            <div className="suffix28">
              <div className="iconbutton35">
                <img
                  className="starfilled-icon62"
                  alt=""
                  src="../arrowdropdownfilled4.svg"
                />
              </div>
            </div>
          </div>
          <div className="alignment3">
            <div className="basicmenu3">
              <div className="menuitem9">
                <div className="container45">
                  <div className="menuitembasicslot9">
                    <div className="icon47">
                      <div className="icon48">
                        <img className="starfilled-icon62" alt="" />
                      </div>
                    </div>
                    <div className="container46">
                      <div className="value40">Table 1....</div>
                      <div className="right-content9">
                        <div className="typography58">⌘X</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="divider21">
                  <div className="rectangle21" />
                </div>
              </div>
              <div className="menuitem9">
                <div className="container45">
                  <div className="menuitembasicslot9">
                    <div className="icon47">
                      <div className="icon48">
                        <img className="starfilled-icon62" alt="" />
                      </div>
                    </div>
                    <div className="container46">
                      <div className="value40">Table ...n</div>
                      <div className="right-content9">
                        <div className="typography58">⌘X</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="divider21">
                  <div className="rectangle21" />
                </div>
              </div>
              <div className="menuitem11">
                <div className="container49">
                  <div className="menuitembasicslot9">
                    <div className="icon47">
                      <div className="icon48">
                        <img className="starfilled-icon62" alt="" />
                      </div>
                    </div>
                    <div className="container46">
                      <div className="value40">Field Value</div>
                      <div className="right-content9">
                        <div className="typography58">⌘X</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="divider21">
                  <div className="rectangle21" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="helper28">
          <div className="text74">Descriptive text</div>
        </div>
        <div className="label29">
          <div className="label-background28">
            <div className="cutborder28" />
            <div className="text75">Current Log Analytics Plan</div>
          </div>
        </div>
      </div>
      <div className="curr2" onClick={onCurr2ContainerClick}>
        <div className="wrapper3">
          <div className="field28">
            <div className="prefix28">
              <div className="icon46">
                <img
                  className="starfilled-icon62"
                  alt=""
                  src="../starfilled54.svg"
                />
              </div>
            </div>
            <div className="text-wrapper28">
              <div className="values3">
                <div className="chip12">
                  <div className="container43">
                    <div className="avatar12">
                      <div className="avatar13">
                        <div className="op6">OP</div>
                      </div>
                    </div>
                    <div className="typography56">
                      <div className="chip13">Chip</div>
                    </div>
                    <img
                      className="cancelfilled-icon6"
                      alt=""
                      src="../cancelfilled8.svg"
                    />
                  </div>
                </div>
                <div className="chip12">
                  <div className="container43">
                    <div className="avatar12">
                      <div className="avatar13">
                        <div className="op6">OP</div>
                      </div>
                    </div>
                    <div className="typography56">
                      <div className="chip13">Chip</div>
                    </div>
                    <img
                      className="cancelfilled-icon6"
                      alt=""
                      src="../cancelfilled9.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="value39">Pay-as-you-go</div>
            </div>
            <div className="clear3">
              <div className="iconbutton34">
                <img className="starfilled-icon62" alt="" />
              </div>
            </div>
            <div className="suffix28">
              <div className="iconbutton35">
                <img
                  className="starfilled-icon62"
                  alt=""
                  src="../arrowdropdownfilled5.svg"
                />
              </div>
            </div>
          </div>
          <div className="alignment3">
            <div className="basicmenu3">
              <div className="menuitem9">
                <div className="container45">
                  <div className="menuitembasicslot9">
                    <div className="icon47">
                      <div className="icon48">
                        <img className="starfilled-icon62" alt="" />
                      </div>
                    </div>
                    <div className="container46">
                      <div className="value40">Table 1....</div>
                      <div className="right-content9">
                        <div className="typography58">⌘X</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="divider21">
                  <div className="rectangle21" />
                </div>
              </div>
              <div className="menuitem9">
                <div className="container45">
                  <div className="menuitembasicslot9">
                    <div className="icon47">
                      <div className="icon48">
                        <img className="starfilled-icon62" alt="" />
                      </div>
                    </div>
                    <div className="container46">
                      <div className="value40">Table ...n</div>
                      <div className="right-content9">
                        <div className="typography58">⌘X</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="divider21">
                  <div className="rectangle21" />
                </div>
              </div>
              <div className="menuitem11">
                <div className="container49">
                  <div className="menuitembasicslot9">
                    <div className="icon47">
                      <div className="icon48">
                        <img className="starfilled-icon62" alt="" />
                      </div>
                    </div>
                    <div className="container46">
                      <div className="value40">Field Value</div>
                      <div className="right-content9">
                        <div className="typography58">⌘X</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="divider21">
                  <div className="rectangle21" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="helper28">
          <div className="text74">Descriptive text</div>
        </div>
        <div className="label29">
          <div className="label-background28">
            <div className="cutborder28" />
            <div className="text75">Current Sentinel Plan</div>
          </div>
        </div>
      </div>
      <div className="table3">
        <div className="wrapper3">
          <div className="field28">
            <div className="prefix28">
              <div className="icon46">
                <img
                  className="starfilled-icon62"
                  alt=""
                  src="../starfilled55.svg"
                />
              </div>
            </div>
            <div className="text-wrapper28">
              <div className="values3">
                <div className="chip12">
                  <div className="container43">
                    <div className="avatar12">
                      <div className="avatar13">
                        <div className="op6">OP</div>
                      </div>
                    </div>
                    <div className="typography56">
                      <div className="chip13">Chip</div>
                    </div>
                    <img
                      className="cancelfilled-icon6"
                      alt=""
                      src="../cancelfilled10.svg"
                    />
                  </div>
                </div>
                <div className="chip12">
                  <div className="container43">
                    <div className="avatar12">
                      <div className="avatar13">
                        <div className="op6">OP</div>
                      </div>
                    </div>
                    <div className="typography56">
                      <div className="chip13">Chip</div>
                    </div>
                    <img
                      className="cancelfilled-icon6"
                      alt=""
                      src="../cancelfilled11.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="value39">All</div>
            </div>
            <div className="clear3">
              <div className="iconbutton34">
                <img className="starfilled-icon62" alt="" />
              </div>
            </div>
            <div className="suffix28">
              <div className="iconbutton35">
                <img
                  className="starfilled-icon62"
                  alt=""
                  src="../arrowdropdownfilled6.svg"
                />
              </div>
            </div>
          </div>
          <div className="alignment3">
            <div className="basicmenu3">
              <div className="menuitem9">
                <div className="container61">
                  <div className="menuitembasicslot15">
                    <div className="icon47">
                      <div className="icon48">
                        <img className="starfilled-icon62" alt="" />
                      </div>
                    </div>
                    <div className="container46">
                      <div className="value40">Table 1....</div>
                      <div className="right-content9">
                        <div className="typography58">⌘X</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="divider27">
                  <div className="rectangle21" />
                </div>
              </div>
              <div className="menuitem9">
                <div className="container61">
                  <div className="menuitembasicslot15">
                    <div className="icon47">
                      <div className="icon48">
                        <img className="starfilled-icon62" alt="" />
                      </div>
                    </div>
                    <div className="container46">
                      <div className="value40">Table ...n</div>
                      <div className="right-content9">
                        <div className="typography58">⌘X</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="divider27">
                  <div className="rectangle21" />
                </div>
              </div>
              <div className="menuitem11">
                <div className="container49">
                  <div className="menuitembasicslot15">
                    <div className="icon47">
                      <div className="icon48">
                        <img className="starfilled-icon62" alt="" />
                      </div>
                    </div>
                    <div className="container46">
                      <div className="value40">Field Value</div>
                      <div className="right-content9">
                        <div className="typography58">⌘X</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="divider27">
                  <div className="rectangle21" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="helper30">
          <div className="text74">Descriptive text</div>
        </div>
        <div className="label29">
          <div className="label-background28">
            <div className="cutborder28" />
            <div className="text75">Log Source Tables</div>
          </div>
        </div>
      </div>
      <div className="change-search-parameters-container">
        <p className="change-search">{`Change Search `}</p>
        <p className="parameters">parameters</p>
      </div>
      <div className="payment-sel-child" />
      <div className="button18">
        <div className="container67">
          <img className="prefix-icon18" alt="" src="../prefix18.svg" />
          <div className="text80">Back</div>
          <img className="prefix-icon18" alt="" src="../suffix18.svg" />
        </div>
      </div>
      <div className="sentinel-tier-selection-container">
        <b>Sentinel</b>
        <span className="tier-selection"> Tier Selection</span>
      </div>
      <div className="log-analytics-tier-container">
        <b>Log Analytics</b>
        <span className="span">{` `}</span>
        <span className="tier-selection">Tier Selection</span>
      </div>
      <div className="rectangle-parent28">
        <div className="group-child34" />
        <div className="pay-as-you-go">Pay-as-you-go</div>
        <div className="group-child35" />
        <div className="div3">$1,984</div>
        <div className="congratulations-you-already-container">
          <p className="change-search">
            <span className="congratulations-you">Congratulations, you</span>
            <b className="congratulations-you"> already have the best plan</b>
            <span>{` `}</span>
          </p>
          <p className="change-search">
            <span>{`selected for Log analytics in your organization! `}</span>
          </p>
          <p className="change-search">
            <span>&nbsp;</span>
          </p>
          <p className="change-search">
            <span>{`No changes are needed at this time and we `}</span>
          </p>
          <p className="parameters">
            <span>recommend you keep the current plan you have.</span>
          </p>
        </div>
        <div className="current-projected-monthly-container">
          <p className="change-search">Current Projected</p>
          <p className="parameters"> Monthly Cost</p>
        </div>
      </div>
      <div className="rectangle-parent29">
        <div className="group-child34" />
        <div className="pay-as-you-go">Pay-as-you-go</div>
        <div className="group-child35" />
        <div className="div3">$1,984</div>
        <div className="congratulations-you-already-container">
          <p className="change-search">
            <span className="congratulations-you">Congratulations, you</span>
            <b className="congratulations-you"> already have the best plan</b>
            <span>{` `}</span>
          </p>
          <p className="change-search">
            <span>{`selected for Log analytics in your organization! `}</span>
          </p>
          <p className="change-search">
            <span>&nbsp;</span>
          </p>
          <p className="change-search">
            <span>{`No changes are needed at this time and we `}</span>
          </p>
          <p className="parameters">
            <span>recommend you keep the current plan you have.</span>
          </p>
        </div>
        <div className="current-projected-monthly-container">
          <p className="change-search">Current Projected</p>
          <p className="parameters"> Monthly Cost</p>
        </div>
      </div>
      <div className="rectangle-parent30">
        <div className="group-child38" />
        <div className="nov-12-2022">Nov 12, 2022</div>
        <div className="dec-12-2022">Dec 12, 2022</div>
        <div className="jan-12-2023">Jan 12, 2023</div>
        <img className="group-child39" alt="" src="../line-1.svg" />
        <div className="gb">11.2GB</div>
        <div className="gb1">16.9GB</div>
      </div>
      <div className="average-142-gb-container">
        <p className="change-search">Average 14.2 GB</p>
      </div>
      <div className="median-131-gb">Median 13.1 GB</div>
      <div className="overall-siem-ingestion">
        Overall SIEM Ingestion Volume
      </div>
      <div className="max-169-gb-container">
        <p className="change-search">Max 16.9 GB</p>
      </div>
      <div className="min-112-gb-container">
        <p className="change-search">Min 11.2 GB</p>
      </div>
      <img className="payment-sel-item" alt="" src="../polygon-1.svg" />
      <div className="curr1">
        <div className="wrapper3">
          <div className="field28">
            <div className="prefix28">
              <div className="icon46">
                <img
                  className="starfilled-icon62"
                  alt=""
                  src="../starfilled56.svg"
                />
              </div>
            </div>
            <div className="text-wrapper28">
              <div className="values3">
                <div className="chip12">
                  <div className="container43">
                    <div className="avatar12">
                      <div className="avatar13">
                        <div className="op6">OP</div>
                      </div>
                    </div>
                    <div className="typography56">
                      <div className="chip13">Chip</div>
                    </div>
                    <img
                      className="cancelfilled-icon6"
                      alt=""
                      src="../cancelfilled12.svg"
                    />
                  </div>
                </div>
                <div className="chip12">
                  <div className="container43">
                    <div className="avatar12">
                      <div className="avatar13">
                        <div className="op6">OP</div>
                      </div>
                    </div>
                    <div className="typography56">
                      <div className="chip13">Chip</div>
                    </div>
                    <img
                      className="cancelfilled-icon6"
                      alt=""
                      src="../cancelfilled13.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="value39">60 Days</div>
            </div>
            <div className="clear3">
              <div className="iconbutton34">
                <img className="starfilled-icon62" alt="" />
              </div>
            </div>
            <div className="suffix28">
              <div className="iconbutton35">
                <img
                  className="starfilled-icon62"
                  alt=""
                  src="../arrowdropdownfilled7.svg"
                />
              </div>
            </div>
          </div>
          <div className="alignment3">
            <div className="basicmenu3">
              <div className="menuitem9">
                <div className="container45">
                  <div className="menuitembasicslot9">
                    <div className="icon47">
                      <div className="icon48">
                        <img className="starfilled-icon62" alt="" />
                      </div>
                    </div>
                    <div className="container46">
                      <div className="value40">60 Days</div>
                      <div className="right-content9">
                        <div className="typography58">⌘X</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="divider21">
                  <div className="rectangle21" />
                </div>
              </div>
              <div className="menuitem9">
                <div className="container72">
                  <div className="menuitembasicslot19">
                    <div className="icon47">
                      <div className="icon48">
                        <img className="starfilled-icon62" alt="" />
                      </div>
                    </div>
                    <div className="container46">
                      <div className="value40">
                        <p className="change-search">90 Days</p>
                        <p className="change-search">180 Days</p>
                        <p className="parameters">365 Days</p>
                      </div>
                      <div className="right-content9">
                        <div className="typography58">⌘X</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="divider21">
                  <div className="rectangle21" />
                </div>
              </div>
              <div className="menuitem11">
                <div className="container49">
                  <div className="menuitembasicslot9">
                    <div className="icon47">
                      <div className="icon48">
                        <img className="starfilled-icon62" alt="" />
                      </div>
                    </div>
                    <div className="container46">
                      <div className="value40">Field Value</div>
                      <div className="right-content9">
                        <div className="typography58">⌘X</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="divider21">
                  <div className="rectangle21" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="helper28">
          <div className="text74">Descriptive text</div>
        </div>
        <div className="label29">
          <div className="label-background28">
            <div className="cutborder28" />
            <div className="text75">Forecast Window</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSel;
