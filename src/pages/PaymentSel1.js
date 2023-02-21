import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./PaymentSel1.css";

const PaymentSel1 = () => {
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

  const onCurrContainer1Click = useCallback(() => {
    navigate("/05-payment-sel2");
  }, [navigate]);

  const onCurr2ContainerClick = useCallback(() => {
    navigate("/05-payment-sel2");
  }, [navigate]);

  return (
    <div className="payment-sel1">
      <div className="navbar4">
        <div className="navbar-child2" />
        <div className="button19" onClick={onButtonContainerClick}>
          <div className="container76">
            <img className="prefix-icon19" alt="" src="../prefix19.svg" />
            <div className="text83">Payment Sel.</div>
            <img className="prefix-icon19" alt="" src="../suffix12.svg" />
          </div>
        </div>
        <div className="button20" onClick={onButtonContainer1Click}>
          <div className="container76">
            <img className="prefix-icon19" alt="" src="../prefix20.svg" />
            <div className="text84">Exploration</div>
            <img className="prefix-icon19" alt="" src="../suffix8.svg" />
          </div>
        </div>
        <div className="button21" onClick={onButtonContainer2Click}>
          <div className="container40">
            <img className="prefix-icon19" alt="" src="../prefix21.svg" />
            <div className="text84">Ingestion Volume</div>
            <img className="prefix-icon19" alt="" src="../suffix10.svg" />
          </div>
        </div>
        <div className="button22" onClick={onButtonContainer3Click}>
          <div className="container76">
            <img className="prefix-icon19" alt="" src="../prefix22.svg" />
            <div className="text84">Alert Summary</div>
            <img className="prefix-icon19" alt="" src="../suffix8.svg" />
          </div>
        </div>
        <div className="button23" onClick={onButtonContainer4Click}>
          <div className="container76">
            <img className="prefix-icon19" alt="" src="../prefix23.svg" />
            <div className="text84">Cost Analysis</div>
            <img className="prefix-icon19" alt="" src="../suffix8.svg" />
          </div>
        </div>
        <div className="ptimizer-parent2" onClick={onGroupContainerClick}>
          <div className="ptimizer4">ptimizer</div>
          <img className="node-icon24" alt="" src="../node24.svg" />
          <img className="node-icon25" alt="" src="../node25.svg" />
          <img className="node-icon26" alt="" src="../node26.svg" />
          <img className="node-icon27" alt="" src="../node27.svg" />
          <img className="node-icon28" alt="" src="../node28.svg" />
          <img className="instance-child39" alt="" src="../line-5.svg" />
          <div className="instance-child40" />
          <img className="instance-child41" alt="" src="../line-7.svg" />
          <img className="instance-child42" alt="" src="../line-8.svg" />
          <img className="node-icon29" alt="" src="../node29.svg" />
          <img className="instance-child43" alt="" src="../line-91.svg" />
          <img className="instance-child44" alt="" src="../group-774.svg" />
          <img className="instance-child45" alt="" src="../group-864.svg" />
          <img className="instance-child46" alt="" src="../group-874.svg" />
          <div className="siem4">SIEM</div>
        </div>
      </div>
      <div className="curr3">
        <div className="wrapper7">
          <div className="field32">
            <div className="prefix32">
              <div className="icon74">
                <img
                  className="starfilled-icon78"
                  alt=""
                  src="../starfilled57.svg"
                />
              </div>
            </div>
            <div className="text-wrapper32">
              <div className="values7">
                <div className="chip28">
                  <div className="container81">
                    <div className="avatar28">
                      <div className="avatar29">
                        <div className="op14">OP</div>
                      </div>
                    </div>
                    <div className="typography76">
                      <div className="chip29">Chip</div>
                    </div>
                    <img
                      className="cancelfilled-icon14"
                      alt=""
                      src="../cancelfilled14.svg"
                    />
                  </div>
                </div>
                <div className="chip28">
                  <div className="container81">
                    <div className="avatar28">
                      <div className="avatar29">
                        <div className="op14">OP</div>
                      </div>
                    </div>
                    <div className="typography76">
                      <div className="chip29">Chip</div>
                    </div>
                    <img
                      className="cancelfilled-icon14"
                      alt=""
                      src="../cancelfilled15.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="value55">60 Days</div>
            </div>
            <div className="clear7">
              <div className="iconbutton42">
                <img className="starfilled-icon78" alt="" />
              </div>
            </div>
            <div className="suffix32">
              <div className="iconbutton43">
                <img
                  className="starfilled-icon78"
                  alt=""
                  src="../arrowdropdownfilled8.svg"
                />
              </div>
            </div>
          </div>
          <div className="alignment7">
            <div className="basicmenu7">
              <div className="menuitem21">
                <div className="container83">
                  <div className="menuitembasicslot21">
                    <div className="icon75">
                      <div className="icon76">
                        <img className="starfilled-icon78" alt="" />
                      </div>
                    </div>
                    <div className="container84">
                      <div className="value56">60 Days</div>
                      <div className="right-content21">
                        <div className="typography78">⌘X</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="divider33">
                  <div className="rectangle33" />
                </div>
              </div>
              <div className="menuitem21">
                <div className="container85">
                  <div className="menuitembasicslot22">
                    <div className="icon75">
                      <div className="icon76">
                        <img className="starfilled-icon78" alt="" />
                      </div>
                    </div>
                    <div className="container84">
                      <div className="value56">
                        <p className="add-some-details">90 Days</p>
                        <p className="add-some-details">180 Days</p>
                        <p className="plan-and-how">365 Days</p>
                      </div>
                      <div className="right-content21">
                        <div className="typography78">⌘X</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="divider33">
                  <div className="rectangle33" />
                </div>
              </div>
              <div className="menuitem23">
                <div className="container87">
                  <div className="menuitembasicslot21">
                    <div className="icon75">
                      <div className="icon76">
                        <img className="starfilled-icon78" alt="" />
                      </div>
                    </div>
                    <div className="container84">
                      <div className="value56">Field Value</div>
                      <div className="right-content21">
                        <div className="typography78">⌘X</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="divider33">
                  <div className="rectangle33" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="helper32">
          <div className="text88">Descriptive text</div>
        </div>
        <div className="label33">
          <div className="label-background32">
            <div className="cutborder32" />
            <div className="text89">Forecast Window</div>
          </div>
        </div>
      </div>
      <div className="curr4" onClick={onCurrContainer1Click}>
        <div className="wrapper7">
          <div className="field32">
            <div className="prefix32">
              <div className="icon74">
                <img
                  className="starfilled-icon78"
                  alt=""
                  src="../starfilled58.svg"
                />
              </div>
            </div>
            <div className="text-wrapper32">
              <div className="values7">
                <div className="chip28">
                  <div className="container81">
                    <div className="avatar28">
                      <div className="avatar29">
                        <div className="op14">OP</div>
                      </div>
                    </div>
                    <div className="typography76">
                      <div className="chip29">Chip</div>
                    </div>
                    <img
                      className="cancelfilled-icon14"
                      alt=""
                      src="../cancelfilled16.svg"
                    />
                  </div>
                </div>
                <div className="chip28">
                  <div className="container81">
                    <div className="avatar28">
                      <div className="avatar29">
                        <div className="op14">OP</div>
                      </div>
                    </div>
                    <div className="typography76">
                      <div className="chip29">Chip</div>
                    </div>
                    <img
                      className="cancelfilled-icon14"
                      alt=""
                      src="../cancelfilled17.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="value55">100/GB/day Tier</div>
            </div>
            <div className="clear7">
              <div className="iconbutton42">
                <img className="starfilled-icon78" alt="" />
              </div>
            </div>
            <div className="suffix32">
              <div className="iconbutton43">
                <img
                  className="starfilled-icon78"
                  alt=""
                  src="../arrowdropdownfilled9.svg"
                />
              </div>
            </div>
          </div>
          <div className="alignment7">
            <div className="basicmenu7">
              <div className="menuitem21">
                <div className="container83">
                  <div className="menuitembasicslot21">
                    <div className="icon75">
                      <div className="icon76">
                        <img className="starfilled-icon78" alt="" />
                      </div>
                    </div>
                    <div className="container84">
                      <div className="value56">Table 1....</div>
                      <div className="right-content21">
                        <div className="typography78">⌘X</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="divider33">
                  <div className="rectangle33" />
                </div>
              </div>
              <div className="menuitem21">
                <div className="container83">
                  <div className="menuitembasicslot21">
                    <div className="icon75">
                      <div className="icon76">
                        <img className="starfilled-icon78" alt="" />
                      </div>
                    </div>
                    <div className="container84">
                      <div className="value56">Table ...n</div>
                      <div className="right-content21">
                        <div className="typography78">⌘X</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="divider33">
                  <div className="rectangle33" />
                </div>
              </div>
              <div className="menuitem23">
                <div className="container87">
                  <div className="menuitembasicslot21">
                    <div className="icon75">
                      <div className="icon76">
                        <img className="starfilled-icon78" alt="" />
                      </div>
                    </div>
                    <div className="container84">
                      <div className="value56">Field Value</div>
                      <div className="right-content21">
                        <div className="typography78">⌘X</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="divider33">
                  <div className="rectangle33" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="helper32">
          <div className="text88">Descriptive text</div>
        </div>
        <div className="label33">
          <div className="label-background32">
            <div className="cutborder32" />
            <div className="text89">Current Log Analytics Plan</div>
          </div>
        </div>
      </div>
      <div className="curr21" onClick={onCurr2ContainerClick}>
        <div className="wrapper7">
          <div className="field32">
            <div className="prefix32">
              <div className="icon74">
                <img
                  className="starfilled-icon78"
                  alt=""
                  src="../starfilled59.svg"
                />
              </div>
            </div>
            <div className="text-wrapper32">
              <div className="values7">
                <div className="chip28">
                  <div className="container81">
                    <div className="avatar28">
                      <div className="avatar29">
                        <div className="op14">OP</div>
                      </div>
                    </div>
                    <div className="typography76">
                      <div className="chip29">Chip</div>
                    </div>
                    <img
                      className="cancelfilled-icon14"
                      alt=""
                      src="../cancelfilled18.svg"
                    />
                  </div>
                </div>
                <div className="chip28">
                  <div className="container81">
                    <div className="avatar28">
                      <div className="avatar29">
                        <div className="op14">OP</div>
                      </div>
                    </div>
                    <div className="typography76">
                      <div className="chip29">Chip</div>
                    </div>
                    <img
                      className="cancelfilled-icon14"
                      alt=""
                      src="../cancelfilled19.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="value55">100/GB/day Tier</div>
            </div>
            <div className="clear7">
              <div className="iconbutton42">
                <img className="starfilled-icon78" alt="" />
              </div>
            </div>
            <div className="suffix32">
              <div className="iconbutton43">
                <img
                  className="starfilled-icon78"
                  alt=""
                  src="../arrowdropdownfilled10.svg"
                />
              </div>
            </div>
          </div>
          <div className="alignment7">
            <div className="basicmenu7">
              <div className="menuitem21">
                <div className="container83">
                  <div className="menuitembasicslot21">
                    <div className="icon75">
                      <div className="icon76">
                        <img className="starfilled-icon78" alt="" />
                      </div>
                    </div>
                    <div className="container84">
                      <div className="value56">Table 1....</div>
                      <div className="right-content21">
                        <div className="typography78">⌘X</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="divider33">
                  <div className="rectangle33" />
                </div>
              </div>
              <div className="menuitem21">
                <div className="container83">
                  <div className="menuitembasicslot21">
                    <div className="icon75">
                      <div className="icon76">
                        <img className="starfilled-icon78" alt="" />
                      </div>
                    </div>
                    <div className="container84">
                      <div className="value56">Table ...n</div>
                      <div className="right-content21">
                        <div className="typography78">⌘X</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="divider33">
                  <div className="rectangle33" />
                </div>
              </div>
              <div className="menuitem23">
                <div className="container87">
                  <div className="menuitembasicslot21">
                    <div className="icon75">
                      <div className="icon76">
                        <img className="starfilled-icon78" alt="" />
                      </div>
                    </div>
                    <div className="container84">
                      <div className="value56">Field Value</div>
                      <div className="right-content21">
                        <div className="typography78">⌘X</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="divider33">
                  <div className="rectangle33" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="helper32">
          <div className="text88">Descriptive text</div>
        </div>
        <div className="label33">
          <div className="label-background32">
            <div className="cutborder32" />
            <div className="text89">Current Sentinel Plan</div>
          </div>
        </div>
      </div>
      <div className="table4">
        <div className="wrapper7">
          <div className="field32">
            <div className="prefix32">
              <div className="icon74">
                <img
                  className="starfilled-icon78"
                  alt=""
                  src="../starfilled60.svg"
                />
              </div>
            </div>
            <div className="text-wrapper32">
              <div className="values7">
                <div className="chip28">
                  <div className="container81">
                    <div className="avatar28">
                      <div className="avatar29">
                        <div className="op14">OP</div>
                      </div>
                    </div>
                    <div className="typography76">
                      <div className="chip29">Chip</div>
                    </div>
                    <img
                      className="cancelfilled-icon14"
                      alt=""
                      src="../cancelfilled20.svg"
                    />
                  </div>
                </div>
                <div className="chip28">
                  <div className="container81">
                    <div className="avatar28">
                      <div className="avatar29">
                        <div className="op14">OP</div>
                      </div>
                    </div>
                    <div className="typography76">
                      <div className="chip29">Chip</div>
                    </div>
                    <img
                      className="cancelfilled-icon14"
                      alt=""
                      src="../cancelfilled21.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="value55">All</div>
            </div>
            <div className="clear7">
              <div className="iconbutton42">
                <img className="starfilled-icon78" alt="" />
              </div>
            </div>
            <div className="suffix32">
              <div className="iconbutton43">
                <img
                  className="starfilled-icon78"
                  alt=""
                  src="../arrowdropdownfilled11.svg"
                />
              </div>
            </div>
          </div>
          <div className="alignment7">
            <div className="basicmenu7">
              <div className="menuitem21">
                <div className="container107">
                  <div className="menuitembasicslot30">
                    <div className="icon75">
                      <div className="icon76">
                        <img className="starfilled-icon78" alt="" />
                      </div>
                    </div>
                    <div className="container84">
                      <div className="value56">Table 1....</div>
                      <div className="right-content21">
                        <div className="typography78">⌘X</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="divider42">
                  <div className="rectangle33" />
                </div>
              </div>
              <div className="menuitem21">
                <div className="container107">
                  <div className="menuitembasicslot30">
                    <div className="icon75">
                      <div className="icon76">
                        <img className="starfilled-icon78" alt="" />
                      </div>
                    </div>
                    <div className="container84">
                      <div className="value56">Table ...n</div>
                      <div className="right-content21">
                        <div className="typography78">⌘X</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="divider42">
                  <div className="rectangle33" />
                </div>
              </div>
              <div className="menuitem23">
                <div className="container87">
                  <div className="menuitembasicslot30">
                    <div className="icon75">
                      <div className="icon76">
                        <img className="starfilled-icon78" alt="" />
                      </div>
                    </div>
                    <div className="container84">
                      <div className="value56">Field Value</div>
                      <div className="right-content21">
                        <div className="typography78">⌘X</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="divider42">
                  <div className="rectangle33" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="helper35">
          <div className="text88">Descriptive text</div>
        </div>
        <div className="label33">
          <div className="label-background32">
            <div className="cutborder32" />
            <div className="text89">Log Source Tables</div>
          </div>
        </div>
      </div>
      <div className="change-search-parameters-container1">
        <p className="add-some-details">{`Change Search `}</p>
        <p className="plan-and-how">parameters</p>
      </div>
      <div className="payment-sel-inner" />
      <div className="button24">
        <div className="container113">
          <img className="prefix-icon24" alt="" src="../prefix24.svg" />
          <div className="text96">Back</div>
          <img className="prefix-icon24" alt="" src="../suffix24.svg" />
        </div>
      </div>
      <div className="sentinel-tier-selection-container1">
        <b>Sentinel</b>
        <span className="tier-selection2"> Tier Selection</span>
      </div>
      <div className="rectangle-parent31">
        <div className="group-child40" />
        <div className="current-projected-monthly">
          Current Projected Monthly Cost
        </div>
        <div className="projected-cost-using">
          Projected cost using this suggested Tier
        </div>
        <div className="projected-monthly-savings">
          Projected monthly savings
        </div>
        <div className="optimizes-budget">Optimizes budget</div>
        <div className="pay-as-you-go2">Pay-as-you-go</div>
        <div className="group-child41" />
        <div className="div5">$8,880</div>
        <div className="div6">$1,984</div>
        <div className="div7">$6,896</div>
        <div className="add-some-details-container">
          <p className="add-some-details">{`Add some details `}</p>
          <p className="add-some-details">{`about this specific `}</p>
          <p className="plan-and-how">plan and how it works</p>
        </div>
      </div>
      <div className="log-analytics-tier-container1">
        <b>Log Analytics</b>
        <span className="span1">{` `}</span>
        <span className="tier-selection2">Tier Selection</span>
      </div>
      <div className="rectangle-parent32">
        <div className="group-child40" />
        <div className="current-projected-monthly">
          Current Projected Monthly Cost
        </div>
        <div className="projected-cost-using">
          Projected cost using this suggested Tier
        </div>
        <div className="projected-monthly-savings">
          Projected monthly savings
        </div>
        <div className="optimizes-budget">Optimizes budget</div>
        <div className="pay-as-you-go2">Pay-as-you-go</div>
        <div className="group-child41" />
        <div className="div5">$8,880</div>
        <div className="div6">$1,984</div>
        <div className="div7">$6,896</div>
        <div className="add-some-details-container">
          <p className="add-some-details">{`Add some details `}</p>
          <p className="add-some-details">{`about this specific `}</p>
          <p className="plan-and-how">plan and how it works</p>
        </div>
      </div>
      <div className="rectangle-parent33">
        <div className="group-child44" />
        <div className="nov-12-20221">Nov 12, 2022</div>
        <div className="dec-12-20221">Dec 12, 2022</div>
        <div className="jan-12-20231">Jan 12, 2023</div>
        <img className="group-child45" alt="" src="../line-11.svg" />
        <div className="gb2">11.2GB</div>
        <div className="gb3">16.9GB</div>
        <img className="polygon-icon" alt="" src="../polygon-1.svg" />
      </div>
      <div className="average-142-gb-container1">
        <p className="add-some-details">Average 14.2 GB</p>
      </div>
      <div className="median-131-gb1">Median 13.1 GB</div>
      <div className="overall-siem-ingestion1">
        Overall SIEM Ingestion Volume
      </div>
      <div className="max-169-gb-container1">
        <p className="add-some-details">Max 16.9 GB</p>
      </div>
      <div className="min-112-gb-container1">
        <p className="add-some-details">Min 11.2 GB</p>
      </div>
    </div>
  );
};

export default PaymentSel1;
