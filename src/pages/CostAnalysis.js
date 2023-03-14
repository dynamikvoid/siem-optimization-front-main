import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CostAnalysis.css";
import { Card, CardContent } from "@mui/material";
import BarChartCA from "../components/BarChartCA";
import BarChartROIViewCA from "../components/BarChartROIViewCA";
import ToggleSwitchCA from "../components/ToggleSwitchCA";
import GetAsDataCA from "../components/GetTableDataCA";

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

  const [toggle, setToggle] = useState("");
  const checkedState = (val) => {
    setToggle(val);
    //console.log("checkedState ", val);
  };

  return (
    <div className="cost-analysis">
      <div className="frame-div">
        <div className="alerts-enabled-by-your-budget-parent">
          <div className="alerts-enabled-by">Alerts enabled by your budget</div>
          <div className="candidates-for-data">
            Candidates for data offboarding
          </div>
          <div className="table-roi-chart-parent">
            <div className="astableca">
              <GetAsDataCA/>
            </div>
            <div className="rectangle-parent27">
              <Card
                sx={{
                  minWidth: 200,
                  maxWidth: 1210,
                  minHeight: 480,
                  marginTop: 1,
                  marginLeft: 0,
                  marginRight: -2,
                }}
              >
                <CardContent>
                  <p style={{ fontSize: 14, marginLeft: 0, marginTop: 2, position: 'absolute' }}>
                    ROI View
                  </p>
                  <div>
                    <ToggleSwitchCA checkedState={checkedState} />
                    {toggle ? (
                      <div>
                        <BarChartROIViewCA />
                        

                        <div className="switch-container1">
                          <div className="switch21"></div>
                        </div>
                      </div>
                    ) : (
                      <div>
                        <BarChartCA />
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
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
          <div className="container40">
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
