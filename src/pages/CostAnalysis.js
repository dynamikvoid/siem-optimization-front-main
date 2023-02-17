import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./CostAnalysis.css";

const CostAnalysis = () => {
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

  const onGroupContainer33Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="cost-analysis">
      <div className="frame-div">
        <div className="alerts-enabled-by-your-budget-parent">
          <div className="alerts-enabled-by">Alerts enabled by your budget</div>
          <div className="candidates-for-data">
            Candidates for data offboarding
          </div>
          <div className="table-roi-chart-parent">
            <div className="table-roi-chart">
              <div className="roi-parent">
                <div className="roi">ROI</div>
                <div className="cost">Cost</div>
                <div className="value24">Value</div>
              </div>
              <div className="rectangle-container">
                <div className="group-child7" />
                <div className="m9">$14.5M</div>
              </div>
              <div className="table-1">Table 1</div>
              <div className="rectangle-parent1">
                <div className="group-child8" />
                <div className="m10">$2.5M</div>
              </div>
              <div className="rectangle-parent2">
                <div className="group-child9" />
                <div className="m11">$12.0M</div>
              </div>
              <div className="rectangle-parent3">
                <div className="group-child7" />
                <div className="m12">$14.7M</div>
              </div>
              <div className="table-2">Table 2</div>
              <div className="rectangle-parent4">
                <div className="group-child11" />
                <div className="m13">$3.5M</div>
              </div>
              <div className="rectangle-parent5">
                <div className="group-child9" />
                <div className="m14">$11.2M</div>
              </div>
              <div className="rectangle-parent6">
                <div className="group-child13" />
                <div className="m15">$16.2M</div>
              </div>
              <div className="table-3">Table 3</div>
              <div className="rectangle-parent7">
                <div className="group-child14" />
                <div className="m16">$5.5M</div>
              </div>
              <div className="rectangle-parent8">
                <div className="group-child9" />
                <div className="m17">$10.7M</div>
              </div>
              <div className="rectangle-parent9">
                <div className="group-child16" />
                <div className="m18">$13.0M</div>
              </div>
              <div className="table-4">Table 4</div>
              <div className="rectangle-parent10">
                <div className="group-child17" />
                <div className="m19">$4.5M</div>
              </div>
              <div className="rectangle-parent11">
                <div className="group-child9" />
                <div className="m19">$8.5M</div>
              </div>
              <div className="rectangle-parent12">
                <div className="group-child16" />
                <div className="m21">$13.0M</div>
              </div>
              <div className="table-5">Table 5</div>
              <div className="rectangle-parent13">
                <div className="group-child17" />
                <div className="m22">$4.5M</div>
              </div>
              <div className="rectangle-parent14">
                <div className="group-child9" />
                <div className="m22">$8.5M</div>
              </div>
              <div className="rectangle-parent15">
                <div className="group-child22" />
                <div className="m24">$12.0M</div>
              </div>
              <div className="table-6">Table 6</div>
              <div className="rectangle-parent16">
                <div className="group-child17" />
                <div className="m25">$4.5M</div>
              </div>
              <div className="rectangle-parent17">
                <div className="group-child9" />
                <div className="m26">$7.5M</div>
              </div>
              <div className="rectangle-parent18">
                <div className="group-child25" />
                <div className="m27">$10.0M</div>
              </div>
              <div className="table-7">Table 7</div>
              <div className="rectangle-parent19">
                <div className="group-child17" />
                <div className="m28">$4.5M</div>
              </div>
              <div className="rectangle-parent20">
                <div className="group-child9" />
                <div className="m29">$5.5M</div>
              </div>
              <div className="rectangle-parent21">
                <div className="group-child28" />
                <div className="m30">$5.0M</div>
              </div>
              <div className="table-8">Table 8</div>
              <div className="rectangle-parent22">
                <div className="group-child29" />
                <div className="m31">$5.0M</div>
              </div>
              <div className="rectangle-parent23">
                <div className="group-child9" />
                <div className="m32">$0.0M</div>
              </div>
              <div className="rectangle-parent24">
                <div className="group-child31" />
                <div className="m33">$1.5M</div>
              </div>
              <div className="table-9">Table 9</div>
              <div className="rectangle-parent25">
                <div className="group-child29" />
                <div className="m34">$5.0M</div>
              </div>
              <div className="rectangle-parent26">
                <div className="group-child9" />
                <div className="m35">-$3.5M</div>
              </div>
            </div>
            <div className="rectangle-parent27">
              <div className="instance-child11" />
              <div className="div2">$0</div>
              <div className="instance-child12" />
              <div className="instance-child13" />
              <div className="instance-child14" />
              <div className="instance-child15" />
              <div className="instance-child16" />
              <div className="instance-child17" />
              <div className="instance-child18" />
              <div className="instance-child19" />
              <div className="instance-child20" />
              <div className="value25">Value</div>
              <div className="cost1">Cost</div>
              <div className="instance-child21" />
              <div className="instance-child22" />
              <div className="m-table-1-container">
                <p className="blank-line">
                  <span>$12.0M</span>
                </p>
                <p className="blank-line">
                  <span>&nbsp;</span>
                </p>
                <p className="table-11">
                  <span>Table 1</span>
                </p>
              </div>
              <div className="m-table-2-container">
                <p className="blank-line">
                  <span>$11.2M</span>
                </p>
                <p className="blank-line">
                  <span>&nbsp;</span>
                </p>
                <p className="table-11">
                  <span>Table 2</span>
                </p>
              </div>
              <div className="m-table-3-container">
                <p className="blank-line">
                  <span>$10.7M</span>
                </p>
                <p className="blank-line">
                  <span>&nbsp;</span>
                </p>
                <p className="table-11">
                  <span>Table 3</span>
                </p>
              </div>
              <div className="m-table-4-container">
                <p className="blank-line">
                  <span>$8.5M</span>
                </p>
                <p className="blank-line">
                  <span>&nbsp;</span>
                </p>
                <p className="table-11">
                  <span>Table 4</span>
                </p>
              </div>
              <div className="m-table-5-container">
                <p className="blank-line">
                  <span>$8.5M</span>
                </p>
                <p className="blank-line">
                  <span>&nbsp;</span>
                </p>
                <p className="table-11">
                  <span>Table 5</span>
                </p>
              </div>
              <div className="m-table-6-container">
                <p className="blank-line">
                  <span>$7.5M</span>
                </p>
                <p className="blank-line">
                  <span>&nbsp;</span>
                </p>
                <p className="table-11">
                  <span>Table 6</span>
                </p>
              </div>
              <div className="m-table-7-container">
                <p className="blank-line">
                  <span>$5.5M</span>
                </p>
                <p className="blank-line">
                  <span>&nbsp;</span>
                </p>
                <p className="table-11">
                  <span>Table 7</span>
                </p>
              </div>
              <div className="m-table-8-container">
                <p className="blank-line">$0.0M</p>
                <p className="blank-line">&nbsp;</p>
                <p className="azure-diagnostics">Table 8</p>
              </div>
              <div className="m-table-9-container">
                <p className="blank-line">-$3.5M</p>
                <p className="blank-line">&nbsp;</p>
                <p className="azure-diagnostics">Table 9</p>
              </div>
              <div className="roi1">ROI</div>
              <img
                className="southfilled-icon"
                alt=""
                src="../southfilled.svg"
              />
              <div className="switch-wrapper">
                <div className="switch">
                  <div className="label24">ROI View</div>
                  <div className="switch1">
                    <div className="slide">
                      <div className="slide1" />
                    </div>
                    <div className="knob">
                      <img className="knob-icon" alt="" src="../knob.svg" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="iconbutton26">
                <img
                  className="skipnextfilled-icon"
                  alt=""
                  src="../skipnextfilled.svg"
                />
              </div>
            </div>
            <div className="risk-roi-cost">Risk ROI Cost Analysis</div>
            <div className="autocomplete">
              <div className="wrapper">
                <div className="field24">
                  <div className="prefix24">
                    <div className="icon24">
                      <img
                        className="closefilled-icon"
                        alt=""
                        src="../starfilled48.svg"
                      />
                    </div>
                  </div>
                  <div className="text-wrapper24">
                    <div className="values">
                      <div className="chip">
                        <div className="container9">
                          <div className="avatar">
                            <div className="avatar1">
                              <div className="op">OP</div>
                            </div>
                          </div>
                          <div className="typography25">
                            <div className="chip1">Chip</div>
                          </div>
                          <img
                            className="cancelfilled-icon"
                            alt=""
                            src="../cancelfilled.svg"
                          />
                        </div>
                      </div>
                      <div className="chip">
                        <div className="container9">
                          <div className="avatar">
                            <div className="avatar1">
                              <div className="op">OP</div>
                            </div>
                          </div>
                          <div className="typography25">
                            <div className="chip1">Chip</div>
                          </div>
                          <img
                            className="cancelfilled-icon"
                            alt=""
                            src="../cancelfilled1.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="value26">Table</div>
                  </div>
                  <div className="clear">
                    <div className="iconbutton27">
                      <img className="closefilled-icon" alt="" />
                    </div>
                  </div>
                  <div className="suffix24">
                    <div className="iconbutton28">
                      <img
                        className="closefilled-icon"
                        alt=""
                        src="../arrowdropdownfilled1.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="alignment">
                  <div className="basicmenu">
                    <div className="menuitem">
                      <div className="container11">
                        <div className="menuitembasicslot">
                          <div className="icon25">
                            <div className="icon26">
                              <img className="closefilled-icon" alt="" />
                            </div>
                          </div>
                          <div className="container12">
                            <div className="label24">Table</div>
                            <div className="right-content">
                              <div className="typography27">⌘X</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="divider6">
                        <div className="rectangle6" />
                      </div>
                    </div>
                    <div className="menuitem">
                      <div className="container11">
                        <div className="menuitembasicslot">
                          <div className="icon25">
                            <div className="icon26">
                              <img className="closefilled-icon" alt="" />
                            </div>
                          </div>
                          <div className="container12">
                            <div className="label24">Source System</div>
                            <div className="right-content">
                              <div className="typography27">⌘X</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="divider6">
                        <div className="rectangle6" />
                      </div>
                    </div>
                    <div className="menuitem2">
                      <div className="container11">
                        <div className="menuitembasicslot">
                          <div className="icon25">
                            <div className="icon26">
                              <img className="closefilled-icon" alt="" />
                            </div>
                          </div>
                          <div className="container12">
                            <div className="label24">Field Value</div>
                            <div className="right-content">
                              <div className="typography27">⌘X</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="divider6">
                        <div className="rectangle6" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="helper24">
                <div className="text56">Descriptive text</div>
              </div>
              <div className="label25">
                <div className="label-background24">
                  <div className="cutborder24" />
                  <div className="text57">Source</div>
                </div>
              </div>
            </div>
          </div>
          <div className="table1">
            <div className="tableheadrow1">
              <div className="tablehead5">
                <div className="mask10">
                  <img className="arrowdownwardfilled-icon10" alt="" />
                </div>
                <div className="head5">Source</div>
                <div className="mask10">
                  <img className="arrowdownwardfilled-icon10" alt="" />
                </div>
              </div>
              <div className="tablehead6">
                <div className="mask10">
                  <img className="arrowdownwardfilled-icon10" alt="" />
                </div>
                <div className="head5">Logging Cost</div>
                <div className="mask10">
                  <img className="arrowdownwardfilled-icon10" alt="" />
                </div>
              </div>
              <div className="tablehead7">
                <div className="mask10">
                  <img className="arrowdownwardfilled-icon10" alt="" />
                </div>
                <div className="head5">ROI</div>
                <div className="mask10">
                  <img className="arrowdownwardfilled-icon10" alt="" />
                </div>
              </div>
              <div className="tablehead8">
                <div className="mask10">
                  <img className="arrowdownwardfilled-icon10" alt="" />
                </div>
                <div className="head5">Alerts Enabled</div>
                <div className="mask10">
                  <img className="arrowdownwardfilled-icon10" alt="" />
                </div>
              </div>
              <div className="divider9">
                <div className="rectangle6" />
              </div>
            </div>
            <div className="tablecellrow5">
              <div className="tablehead5">
                <div className="typography30">
                  <div className="cell25">Configuration Data</div>
                </div>
              </div>
              <div className="tablehead6">
                <div className="typography30">
                  <div className="cell25">$$$</div>
                </div>
              </div>
              <div className="tablehead7">
                <div className="typography30">
                  <div className="cell25">$</div>
                </div>
              </div>
              <div className="tablehead8">
                <div className="typography30">
                  <div className="cell25">(none)</div>
                </div>
              </div>
              <div className="divider9">
                <div className="rectangle6" />
              </div>
            </div>
            <div className="tablecellrow5">
              <div className="tablehead5">
                <div className="typography30">
                  <div className="cell25">Behavior Analytics</div>
                </div>
              </div>
              <div className="tablehead6">
                <div className="typography30">
                  <div className="cell25">$$</div>
                </div>
              </div>
              <div className="tablehead7">
                <div className="typography30">
                  <div className="cell25">$</div>
                </div>
              </div>
              <div className="tablehead8">
                <div className="typography30">
                  <div className="cell25">{`Alert 5 `}</div>
                </div>
              </div>
              <div className="divider9">
                <div className="rectangle6" />
              </div>
            </div>
          </div>
          <div className="table2">
            <div className="tableheadrow1">
              <div className="tablehead5">
                <div className="mask10">
                  <img className="arrowdownwardfilled-icon10" alt="" />
                </div>
                <div className="head5">Source</div>
                <div className="mask10">
                  <img className="arrowdownwardfilled-icon10" alt="" />
                </div>
              </div>
              <div className="tablehead6">
                <div className="mask10">
                  <img className="arrowdownwardfilled-icon10" alt="" />
                </div>
                <div className="head5">Recovery Value</div>
                <div className="mask10">
                  <img className="arrowdownwardfilled-icon10" alt="" />
                </div>
              </div>
              <div className="tablehead11">
                <div className="mask10">
                  <img className="arrowdownwardfilled-icon10" alt="" />
                </div>
                <div className="head5">ROI</div>
                <div className="mask10">
                  <img className="arrowdownwardfilled-icon10" alt="" />
                </div>
              </div>
              <div className="tablehead8">
                <div className="mask10">
                  <img className="arrowdownwardfilled-icon10" alt="" />
                </div>
                <div className="head5">Required Tables</div>
                <div className="mask10">
                  <img className="arrowdownwardfilled-icon10" alt="" />
                </div>
              </div>
              <div className="divider12">
                <div className="rectangle6" />
              </div>
            </div>
            <div className="tablecellrow5">
              <div className="tablehead5">
                <div className="typography30">
                  <div className="cell25">Alert 1</div>
                </div>
              </div>
              <div className="tablehead6">
                <div className="typography30">
                  <div className="cell25">$$$</div>
                </div>
              </div>
              <div className="tablehead11">
                <div className="typography30">
                  <div className="cell25">$</div>
                </div>
              </div>
              <div className="tablehead8">
                <div className="typography30">
                  <div className="cell25">SecurityAlerts</div>
                </div>
              </div>
              <div className="divider12">
                <div className="rectangle6" />
              </div>
            </div>
            <div className="tablecellrow8">
              <div className="tablehead5">
                <div className="typography30">
                  <div className="cell25">Alert 2</div>
                </div>
              </div>
              <div className="tablehead6">
                <div className="typography30">
                  <div className="cell25">$$</div>
                </div>
              </div>
              <div className="tablehead11">
                <div className="typography30">
                  <div className="cell25">$</div>
                </div>
              </div>
              <div className="tablehead8">
                <div className="typography30">
                  <div className="cell25">
                    <p className="blank-line">{`SecurityAlerts, `}</p>
                    <p className="azure-diagnostics">Azure Diagnostics...</p>
                  </div>
                </div>
              </div>
              <div className="divider12">
                <div className="rectangle6" />
              </div>
            </div>
          </div>
        </div>
        <div className="group-frame">
          <div className="frame-parent">
            <div className="total-cost-parent">
              <div className="total-cost">Total Cost</div>
              <div className="jan">Jan</div>
              <div className="jun">Jun</div>
              <div className="dec">Dec</div>
              <img className="frame-child" alt="" src="../rectangle-10.svg" />
              <div className="yoy">{`YoY `}</div>
              <div className="m45">$39.5M</div>
              <div className="m46">-$27.5M</div>
            </div>
            <div className="total-roi-parent">
              <div className="total-cost">Total ROI</div>
              <div className="jan">Jan</div>
              <div className="jun">Jun</div>
              <div className="dec">Dec</div>
              <img className="frame-item" alt="" src="../rectangle-101.svg" />
              <div className="yoy">{`YoY `}</div>
              <div className="m45">$60.4M</div>
              <div className="m46">+$27.5M</div>
            </div>
            <div className="total-value-parent">
              <div className="total-cost">Total Value</div>
              <div className="jan">Jan</div>
              <div className="jun">Jun</div>
              <div className="dec">Dec</div>
              <img className="frame-inner" alt="" src="../rectangle-102.svg" />
              <div className="yoy">{`YoY `}</div>
              <div className="m45">$99.9M</div>
              <div className="m46">+$31.5M</div>
            </div>
          </div>
        </div>
        <div className="roi2">ROI</div>
        <div className="text-field24">
          <div className="field25">
            <div className="prefix25">
              <div className="icon24">
                <img
                  className="closefilled-icon"
                  alt=""
                  src="../starfilled49.svg"
                />
              </div>
            </div>
            <div className="text-wrapper25">
              <div className="value30">200,000,000</div>
            </div>
            <div className="suffix25">
              <div className="iconbutton29">
                <img
                  className="closefilled-icon"
                  alt=""
                  src="../starfilled50.svg"
                />
              </div>
            </div>
          </div>
          <div className="helper25">
            <div className="text58">
              Please place your total budget, we will then calculate the tables
              that provide the highest ROI
            </div>
          </div>
          <div className="label25">
            <div className="label-background24">
              <div className="cutborder24" />
              <div className="text57">Budget</div>
            </div>
          </div>
        </div>
        <img className="frame-child1" alt="" src="../group-29.svg" />
        <div className="autocomplete1">
          <div className="wrapper">
            <div className="field24">
              <div className="prefix24">
                <div className="icon24">
                  <img
                    className="closefilled-icon"
                    alt=""
                    src="../starfilled51.svg"
                  />
                </div>
              </div>
              <div className="text-wrapper24">
                <div className="values">
                  <div className="chip">
                    <div className="container9">
                      <div className="avatar">
                        <div className="avatar1">
                          <div className="op">OP</div>
                        </div>
                      </div>
                      <div className="typography25">
                        <div className="chip1">Chip</div>
                      </div>
                      <img
                        className="cancelfilled-icon"
                        alt=""
                        src="../cancelfilled2.svg"
                      />
                    </div>
                  </div>
                  <div className="chip">
                    <div className="container9">
                      <div className="avatar">
                        <div className="avatar1">
                          <div className="op">OP</div>
                        </div>
                      </div>
                      <div className="typography25">
                        <div className="chip1">Chip</div>
                      </div>
                      <img
                        className="cancelfilled-icon"
                        alt=""
                        src="../cancelfilled3.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="value26">All</div>
              </div>
              <div className="clear">
                <div className="iconbutton27">
                  <img className="closefilled-icon" alt="" />
                </div>
              </div>
              <div className="suffix24">
                <div className="iconbutton28">
                  <img
                    className="closefilled-icon"
                    alt=""
                    src="../arrowdropdownfilled2.svg"
                  />
                </div>
              </div>
            </div>
            <div className="alignment">
              <div className="basicmenu">
                <div className="menuitem">
                  <div className="container19">
                    <div className="menuitembasicslot3">
                      <div className="icon25">
                        <div className="icon26">
                          <img className="closefilled-icon" alt="" />
                        </div>
                      </div>
                      <div className="container12">
                        <div className="label24">Azure</div>
                        <div className="right-content">
                          <div className="typography27">⌘X</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="divider15">
                    <div className="rectangle6" />
                  </div>
                </div>
                <div className="menuitem">
                  <div className="container19">
                    <div className="menuitembasicslot3">
                      <div className="icon25">
                        <div className="icon26">
                          <img className="closefilled-icon" alt="" />
                        </div>
                      </div>
                      <div className="container12">
                        <div className="label24">OpsManager</div>
                        <div className="right-content">
                          <div className="typography27">⌘X</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="divider15">
                    <div className="rectangle6" />
                  </div>
                </div>
                <div className="menuitem">
                  <div className="container23">
                    <div className="menuitembasicslot3">
                      <div className="icon25">
                        <div className="icon26">
                          <img className="closefilled-icon" alt="" />
                        </div>
                      </div>
                      <div className="container12">
                        <div className="label24">Linux</div>
                        <div className="right-content">
                          <div className="typography27">⌘X</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="divider15">
                    <div className="rectangle6" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="helper26">
            <div className="text56">Descriptive text</div>
          </div>
          <div className="label25">
            <div className="label-background24">
              <div className="cutborder24" />
              <div className="text57">Source System</div>
            </div>
          </div>
        </div>
        <div className="autocomplete2">
          <div className="wrapper">
            <div className="field24">
              <div className="prefix24">
                <div className="icon24">
                  <img
                    className="closefilled-icon"
                    alt=""
                    src="../starfilled52.svg"
                  />
                </div>
              </div>
              <div className="text-wrapper24">
                <div className="values">
                  <div className="chip">
                    <div className="container9">
                      <div className="avatar">
                        <div className="avatar1">
                          <div className="op">OP</div>
                        </div>
                      </div>
                      <div className="typography25">
                        <div className="chip1">Chip</div>
                      </div>
                      <img
                        className="cancelfilled-icon"
                        alt=""
                        src="../cancelfilled4.svg"
                      />
                    </div>
                  </div>
                  <div className="chip">
                    <div className="container9">
                      <div className="avatar">
                        <div className="avatar1">
                          <div className="op">OP</div>
                        </div>
                      </div>
                      <div className="typography25">
                        <div className="chip1">Chip</div>
                      </div>
                      <img
                        className="cancelfilled-icon"
                        alt=""
                        src="../cancelfilled5.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="value26">All</div>
              </div>
              <div className="clear">
                <div className="iconbutton27">
                  <img className="closefilled-icon" alt="" />
                </div>
              </div>
              <div className="suffix24">
                <div className="iconbutton28">
                  <img
                    className="closefilled-icon"
                    alt=""
                    src="../arrowdropdownfilled3.svg"
                  />
                </div>
              </div>
            </div>
            <div className="alignment">
              <div className="basicmenu">
                <div className="menuitem">
                  <div className="container19">
                    <div className="menuitembasicslot3">
                      <div className="icon25">
                        <div className="icon26">
                          <img className="closefilled-icon" alt="" />
                        </div>
                      </div>
                      <div className="container12">
                        <div className="label24">Table 1....</div>
                        <div className="right-content">
                          <div className="typography27">⌘X</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="divider15">
                    <div className="rectangle6" />
                  </div>
                </div>
                <div className="menuitem">
                  <div className="container19">
                    <div className="menuitembasicslot3">
                      <div className="icon25">
                        <div className="icon26">
                          <img className="closefilled-icon" alt="" />
                        </div>
                      </div>
                      <div className="container12">
                        <div className="label24">Table ...n</div>
                        <div className="right-content">
                          <div className="typography27">⌘X</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="divider15">
                    <div className="rectangle6" />
                  </div>
                </div>
                <div className="menuitem2">
                  <div className="container23">
                    <div className="menuitembasicslot3">
                      <div className="icon25">
                        <div className="icon26">
                          <img className="closefilled-icon" alt="" />
                        </div>
                      </div>
                      <div className="container12">
                        <div className="label24">Field Value</div>
                        <div className="right-content">
                          <div className="typography27">⌘X</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="divider15">
                    <div className="rectangle6" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="helper26">
            <div className="text56">Descriptive text</div>
          </div>
          <div className="label25">
            <div className="label-background24">
              <div className="cutborder24" />
              <div className="text57">Table</div>
            </div>
          </div>
        </div>
      </div>
      <img className="downloadfilled-icon" alt="" src="../downloadfilled.svg" />
      <div className="navbar2">
        <div className="navbar-inner" />
        <div className="button8" onClick={onButtonContainerClick}>
          <div className="container33">
            <img className="prefix-icon8" alt="" src="../prefix8.svg" />
            <div className="text64">Payment Sel.</div>
            <img className="prefix-icon8" alt="" src="../suffix8.svg" />
          </div>
        </div>
        <div className="button119" onClick={onButtonContainer1Click}>
          <div className="container33">
            <img className="prefix-icon8" alt="" src="../prefix9.svg" />
            <div className="text64">Exploration</div>
            <img className="prefix-icon8" alt="" src="../suffix8.svg" />
          </div>
        </div>
        <div className="button10" onClick={onButtonContainer2Click}>
          <div className="container33">
            <img className="prefix-icon8" alt="" src="../prefix10.svg" />
            <div className="text64">Ingestion Volume</div>
            <img className="prefix-icon8" alt="" src="../suffix10.svg" />
          </div>
        </div>
        <div className="button11" onClick={onButtonContainer3Click}>
          <div className="container33">
            <img className="prefix-icon8" alt="" src="../prefix11.svg" />
            <div className="text64">Alert Summary</div>
            <img className="prefix-icon8" alt="" src="../suffix8.svg" />
          </div>
        </div>
        <div className="button12" onClick={onButtonContainer4Click}>
          <div className="container33">
            <img className="prefix-icon8" alt="" src="../prefix12.svg" />
            <div className="text68">Cost Analysis</div>
            <img className="prefix-icon8" alt="" src="../suffix12.svg" />
          </div>
        </div>
        <div className="ptimizer-container" onClick={onGroupContainer33Click}>
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
    </div>
  );
};

export default CostAnalysis;
