import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ToggleSwitch from '../components/ToggleSwitch';
import "./LoggingCost.css";
import StackedAreaChart from "../components/StackedAreaChart";

const LoggingCost = () => {
  const navigate = useNavigate();

  const onButtonContainerClick = useCallback(() => {
    // Please sync "05 Payment Sel" to the project
  }, []);

  const onButtonContainer1Click = useCallback(() => {
    // Please sync "04 Exploration" to the project
  }, []);

  const onButtonContainer2Click = useCallback(() => {
    navigate("/02-logging-cost");
  }, [navigate]);

  const onButtonContainer3Click = useCallback(() => {
    navigate("/01-alert-summary");
  }, [navigate]);

  const onButtonContainer4Click = useCallback(() => {
    // Please sync "03 - Cost Analysis" to the project
  }, []);

  return (
    <div className="logging-cost4">
      <div className="siem-ingestion-volume-by-parent">
        <div className="siem-ingestion-volume2">{`SIEM Ingestion Volume by `}</div>
        <div className="autocomplete">
          <div className="wrapper">
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
                <div className="values">
                  <div className="chip">
                    <div className="container">
                      <div className="avatar">
                        <div className="avatar1">
                          <div className="op">OP</div>
                        </div>
                      </div>
                      <div className="typography">
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
                    <div className="container">
                      <div className="avatar">
                        <div className="avatar1">
                          <div className="op">OP</div>
                        </div>
                      </div>
                      <div className="typography">
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
                <div className="value">All</div>
              </div>
              <div className="clear">
                <div className="iconbutton">
                  <img className="starfilled-icon" alt="" />
                </div>
              </div>
              <div className="suffix">
                <div className="iconbutton1">
                  <img
                    className="starfilled-icon"
                    alt=""
                    src="../arrowdropdownfilled.svg"
                  />
                </div>
              </div>
            </div>
            <div className="alignment">
              <div className="basicmenu">
                <div className="menuitem">
                  <div className="container2">
                    <div className="menuitembasicslot">
                      <div className="icon1">
                        <div className="icon2">
                          <img className="starfilled-icon" alt="" />
                        </div>
                      </div>
                      <div className="container3">
                        <div className="value1"></div>
                        <div className="right-content">
                          <div className="typography2">⌘X</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="divider">
                    <div className="rectangle" />
                  </div>
                </div>
                <div className="menuitem">
                  <div className="container2">
                    <div className="menuitembasicslot">
                      <div className="icon1">
                        <div className="icon2">
                          <img className="starfilled-icon" alt="" />
                        </div>
                      </div>
                      <div className="container3">
                        <div className="value1"></div>
                        <div className="right-content">
                          <div className="typography2">⌘X</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="divider">
                    <div className="rectangle" />
                  </div>
                </div>
                <div className="menuitem">
                  <div className="container6">
                    <div className="menuitembasicslot">
                      <div className="icon1">
                        <div className="icon2">
                          <img className="starfilled-icon" alt="" />
                        </div>
                      </div>
                      <div className="container3">
                        <div className="value1"></div>
                        <div className="right-content">
                          <div className="typography2">⌘X</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="divider">
                    <div className="rectangle" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="helper">
            <div className="text">Descriptive text</div>
          </div>
          <div className="label">
            <div className="label-background">
              <div className="cutborder" />
              <div className="text1">Source System</div>
            </div>
          </div>
        </div>
        <div className="autocomplete1">
          <div className="wrapper">
            <div className="field">
              <div className="prefix">
                <div className="icon">
                  <img
                    className="starfilled-icon"
                    alt=""
                    src="../starfilled1.svg"
                  />
                </div>
              </div>
              <div className="text-wrapper">
                <div className="values">
                  <div className="chip">
                    <div className="container">
                      <div className="avatar">
                        <div className="avatar1">
                          <div className="op">OP</div>
                        </div>
                      </div>
                      <div className="typography">
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
                    <div className="container">
                      <div className="avatar">
                        <div className="avatar1">
                          <div className="op">OP</div>
                        </div>
                      </div>
                      <div className="typography">
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
                <div className="value">All</div>
              </div>
              <div className="clear">
                <div className="iconbutton">
                  <img className="starfilled-icon" alt="" />
                </div>
              </div>
              <div className="suffix">
                <div className="iconbutton1">
                  <img
                    className="starfilled-icon"
                    alt=""
                    src="../arrowdropdownfilled1.svg"
                  />
                </div>
              </div>
            </div>
            <div className="alignment">
              <div className="basicmenu">
                <div className="menuitem">
                  <div className="container2">
                    <div className="menuitembasicslot">
                      <div className="icon1">
                        <div className="icon2">
                          <img className="starfilled-icon" alt="" />
                        </div>
                      </div>
                      <div className="container3">
                        <div className="value1">Table 1....</div>
                        <div className="right-content">
                          <div className="typography2">⌘X</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="divider">
                    <div className="rectangle" />
                  </div>
                </div>
                <div className="menuitem">
                  <div className="container2">
                    <div className="menuitembasicslot">
                      <div className="icon1">
                        <div className="icon2">
                          <img className="starfilled-icon" alt="" />
                        </div>
                      </div>
                      <div className="container3">
                        <div className="value1">Table ...n</div>
                        <div className="right-content">
                          <div className="typography2">⌘X</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="divider">
                    <div className="rectangle" />
                  </div>
                </div>
                <div className="menuitem5">
                  <div className="container6">
                    <div className="menuitembasicslot">
                      <div className="icon1">
                        <div className="icon2">
                          <img className="starfilled-icon" alt="" />
                        </div>
                      </div>
                      <div className="container3">
                        <div className="value1">Field Value</div>
                        <div className="right-content">
                          <div className="typography2">⌘X</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="divider">
                    <div className="rectangle" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="helper">
            <div className="text">Descriptive text</div>
          </div>
          <div className="label">
            <div className="label-background">
              <div className="cutborder" />
              <div className="text1">Table</div>
            </div>
          </div>
        </div>
        <div className="overall-siem-ingestion-volume-parent">
          <div className="overall-siem-ingestion1">
            Overall SIEM Ingestion Volume
          </div>
          <div className="group-child13" />
          <div className="nov-12-2022">Nov 12, 2022</div>
          <div className="dec-12-2022">Dec 12, 2022</div>
          <div className="jan-12-2023">Jan 12, 2023</div>
          <div className="feb-12-2023">Feb 12, 2023</div>
          <img className="line-icon" alt="" src="../line-1.svg" />
          <img className="polygon-icon" alt="" src="../polygon-1.svg" />
          <div className="gb6">11.2GB</div>
          <div className="gb7">16.4GB</div>
          <div className="gb8">16.9GB</div>
          <div className="autocomplete-parent">
            <div className="autocomplete2">
              <div className="wrapper">
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
                    <div className="values">
                      <div className="chip">
                        <div className="container">
                          <div className="avatar">
                            <div className="avatar1">
                              <div className="op">OP</div>
                            </div>
                          </div>
                          <div className="typography">
                            <div className="chip1">Chip</div>
                          </div>
                          <img
                            className="cancelfilled-icon"
                            alt=""
                            src="../cancelfilled4.svg"
                          />
                        </div>
                      </div>
                      <div className="chip10">
                        <div className="container">
                          <div className="avatar">
                            <div className="avatar1">
                              <div className="op">OP</div>
                            </div>
                          </div>
                          <div className="typography">
                            <div className="chip1">Chip</div>
                          </div>
                          <img className="cancelfilled-icon" alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="value">Days</div>
                  </div>
                  <div className="clear">
                    <div className="iconbutton">
                      <img className="starfilled-icon" alt="" />
                    </div>
                  </div>
                  <div className="suffix">
                    <div className="iconbutton1">
                      <img
                        className="starfilled-icon"
                        alt=""
                        src="../arrowdropdownfilled2.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="alignment">
                  <div className="basicmenu">
                    <div className="menuitem">
                      <div className="container18">
                        <div className="menuitembasicslot6">
                          <div className="icon1">
                            <div className="icon2">
                              <img className="starfilled-icon" alt="" />
                            </div>
                          </div>
                          <div className="container3">
                            <div className="value1">Days</div>
                            <div className="right-content">
                              <div className="typography2">⌘X</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="divider6">
                        <div className="rectangle" />
                      </div>
                    </div>
                    <div className="menuitem">
                      <div className="container18">
                        <div className="menuitembasicslot6">
                          <div className="icon1">
                            <div className="icon2">
                              <img className="starfilled-icon" alt="" />
                            </div>
                          </div>
                          <div className="container3">
                            <div className="value1">Months</div>
                            <div className="right-content">
                              <div className="typography2">⌘X</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="divider6">
                        <div className="rectangle" />
                      </div>
                    </div>
                    <div className="menuitem">
                      <div className="container6">
                        <div className="menuitembasicslot6">
                          <div className="icon1">
                            <div className="icon2">
                              <img className="starfilled-icon" alt="" />
                            </div>
                          </div>
                          <div className="container3">
                            <div className="value1">Years</div>
                            <div className="right-content">
                              <div className="typography2">⌘X</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="divider6">
                        <div className="rectangle" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="helper2">
                <div className="text">Descriptive text</div>
              </div>
              <div className="label2">
                <div className="label-background">
                  <div className="cutborder" />
                  <div className="text5">Source</div>
                </div>
              </div>
            </div>
            <div className="text-field">
              <div className="field3">
                <div className="prefix3">
                  <div className="icon">
                    <img
                      className="starfilled-icon"
                      alt=""
                      src="../starfilled3.svg"
                    />
                  </div>
                </div>
                <div className="text-wrapper3">
                  <div className="value12">30</div>
                </div>
                <div className="suffix3">
                  <div className="iconbutton6">
                    <img
                      className="starfilled-icon"
                      alt=""
                      src="../starfilled4.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="helper3">
                <div className="text6">Blue</div>
              </div>
              <div className="label2">
                <div className="label-background">
                  <div className="cutborder" />
                  <div className="text5">Date Range</div>
                </div>
              </div>
            </div>
            <div className="forecast-the-next">Forecast the next</div>
            <div className="ellipse-group">
              <img className="group-child14" alt="" src="../ellipse-132.svg" />
              <div className="div4">?</div>
            </div>
          </div>
        </div>
        <div className="group-parent">
          <img className="group-icon" alt="" src="../group-33.svg" />
          <div className="gbday">GB/Day</div>
        </div>
        <div className="gb9">35GB</div>
        <div className="gb10">0GB</div>
        <div className="text-field1">
          <div className="field3">
            <div className="prefix3">
              <div className="icon">
                <img
                  className="starfilled-icon"
                  alt=""
                  src="../starfilled5.svg"
                />
              </div>
            </div>
            <div className="text-wrapper3">
              <div className="value12">90</div>
            </div>
            <div className="suffix3">
              <div className="iconbutton6">
                <img
                  className="starfilled-icon"
                  alt=""
                  src="../starfilled6.svg"
                />
              </div>
            </div>
          </div>
          <div className="helper3">
            <div className="text6">Blue</div>
          </div>
          <div className="label2">
            <div className="label-background">
              <div className="cutborder" />
              <div className="text5">Date Range</div>
            </div>
          </div>
        </div>
        <div className="rectangle-group">
          <div className="instance-child" />
          <div className="vector-parent">
            <StackedAreaChart/>
            <b className="azure1"></b>
            <b className="opsmanager"></b>
            <b className="linux"></b>
          </div>
          
          
          <div className="switch-wrapper">
            <div className="switch">
              <div className="value1" style={{ marginBottom: 10,fontSize: 16 }}>Detailed View</div>
              <div className="switch1">
                <div>
                <ToggleSwitch/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="autocomplete3">
          <div className="wrapper">
            <div className="field">
              <div className="prefix">
                <div className="icon">
                  <img
                    className="starfilled-icon"
                    alt=""
                    src="../starfilled7.svg"
                  />
                </div>
              </div>
              <div className="text-wrapper">
                <div className="values">
                  <div className="chip">
                    <div className="container">
                      <div className="avatar">
                        <div className="avatar1">
                          <div className="op">OP</div>
                        </div>
                      </div>
                      <div className="typography">
                        <div className="chip1">Chip</div>
                      </div>
                      <img
                        className="cancelfilled-icon"
                        alt=""
                        src="../cancelfilled5.svg"
                      />
                    </div>
                  </div>
                  <div className="chip">
                    <div className="container">
                      <div className="avatar">
                        <div className="avatar1">
                          <div className="op">OP</div>
                        </div>
                      </div>
                      <div className="typography">
                        <div className="chip1">Chip</div>
                      </div>
                      <img
                        className="cancelfilled-icon"
                        alt=""
                        src="../cancelfilled6.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="value">Source System</div>
              </div>
              <div className="clear">
                <div className="iconbutton">
                  <img className="starfilled-icon" alt="" />
                </div>
              </div>
              <div className="suffix">
                <div className="iconbutton1">
                  <img
                    className="starfilled-icon"
                    alt=""
                    src="../arrowdropdownfilled3.svg"
                  />
                </div>
              </div>
            </div>
            <div className="alignment">
              <div className="basicmenu">
                <div className="menuitem">
                  <div className="container2">
                    <div className="menuitembasicslot">
                      <div className="icon1">
                        <div className="icon2">
                          <img className="starfilled-icon" alt="" />
                        </div>
                      </div>
                      <div className="container3">
                        <div className="value1">Table</div>
                        <div className="right-content">
                          <div className="typography2">⌘X</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="divider">
                    <div className="rectangle" />
                  </div>
                </div>
                <div className="menuitem">
                  <div className="container2">
                    <div className="menuitembasicslot">
                      <div className="icon1">
                        <div className="icon2">
                          <img className="starfilled-icon" alt="" />
                        </div>
                      </div>
                      <div className="container3">
                        <div className="value1">Source System</div>
                        <div className="right-content">
                          <div className="typography2">⌘X</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="divider">
                    <div className="rectangle" />
                  </div>
                </div>
                <div className="menuitem5">
                  <div className="container6">
                    <div className="menuitembasicslot">
                      <div className="icon1">
                        <div className="icon2">
                          <img className="starfilled-icon" alt="" />
                        </div>
                      </div>
                      <div className="container3">
                        <div className="value1">Field Value</div>
                        <div className="right-content">
                          <div className="typography2">⌘X</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="divider">
                    <div className="rectangle" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="helper">
            <div className="text">Descriptive text</div>
          </div>
          <div className="label2">
            <div className="label-background">
              <div className="cutborder" />
              <div className="text5">Source</div>
            </div>
          </div>
        </div>
      </div>
      <div className="logging-cost-inner">
        <div className="group-wrapper">
          <div className="group-wrapper">
            <div className="group-wrapper">
              <div className="autocomplete2">
                <div className="wrapper">
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
                      <div className="values">
                        <div className="chip">
                          <div className="container">
                            <div className="avatar">
                              <div className="avatar1">
                                <div className="op">OP</div>
                              </div>
                            </div>
                            <div className="typography">
                              <div className="chip1">Chip</div>
                            </div>
                            <img
                              className="cancelfilled-icon"
                              alt=""
                              src="../cancelfilled7.svg"
                            />
                          </div>
                        </div>
                        <div className="chip">
                          <div className="container">
                            <div className="avatar">
                              <div className="avatar1">
                                <div className="op">OP</div>
                              </div>
                            </div>
                            <div className="typography">
                              <div className="chip1">Chip</div>
                            </div>
                            <img
                              className="cancelfilled-icon"
                              alt=""
                              src="../cancelfilled8.svg"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="value">Days</div>
                    </div>
                    <div className="clear">
                      <div className="iconbutton">
                        <img className="starfilled-icon" alt="" />
                      </div>
                    </div>
                    <div className="suffix">
                      <div className="iconbutton1">
                        <img
                          className="starfilled-icon"
                          alt=""
                          src="../arrowdropdownfilled4.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="alignment">
                    <div className="basicmenu">
                      <div className="menuitem">
                        <div className="container18">
                          <div className="menuitembasicslot6">
                            <div className="icon1">
                              <div className="icon2">
                                <img className="starfilled-icon" alt="" />
                              </div>
                            </div>
                            <div className="container3">
                              <div className="value1">Days</div>
                              <div className="right-content">
                                <div className="typography2">⌘X</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="divider6">
                          <div className="rectangle" />
                        </div>
                      </div>
                      <div className="menuitem">
                        <div className="container18">
                          <div className="menuitembasicslot6">
                            <div className="icon1">
                              <div className="icon2">
                                <img className="starfilled-icon" alt="" />
                              </div>
                            </div>
                            <div className="container3">
                              <div className="value1">Months</div>
                              <div className="right-content">
                                <div className="typography2">⌘X</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="divider6">
                          <div className="rectangle" />
                        </div>
                      </div>
                      <div className="menuitem">
                        <div className="container6">
                          <div className="menuitembasicslot6">
                            <div className="icon1">
                              <div className="icon2">
                                <img className="starfilled-icon" alt="" />
                              </div>
                            </div>
                            <div className="container3">
                              <div className="value1">Years</div>
                              <div className="right-content">
                                <div className="typography2">⌘X</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="divider6">
                          <div className="rectangle" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="helper2">
                  <div className="text">Descriptive text</div>
                </div>
                <div className="label2">
                  <div className="label-background">
                    <div className="cutborder" />
                    <div className="text5">Source</div>
                  </div>
                </div>
              </div>
              <div className="frame-div" />
              <div className="forecast-the-next">{`See the last `}</div>
              <img className="group-child17" alt="" src="../ellipse-132.svg" />
              <div className="div5">?</div>
            </div>
          </div>
        </div>
      </div>
      <img className="downloadfilled-icon" alt="" src="../downloadfilled.svg" />
      <div className="navbar">
        <div className="navbar-child" />
        <div className="button" onClick={onButtonContainerClick}>
          <div className="container40">
            <img className="prefix-icon" alt="" src="../prefix.svg" />
            <div className="text14">Payment Sel.</div>
            <img className="prefix-icon" alt="" src="../suffix.svg" />
          </div>
        </div>
        <div className="button1" onClick={onButtonContainer1Click}>
          <div className="container40">
            <img className="prefix-icon" alt="" src="../prefix1.svg" />
            <div className="text14">Exploration</div>
            <img className="prefix-icon" alt="" src="../suffix.svg" />
          </div>
        </div>
        <div className="button2" onClick={onButtonContainer2Click}>
          <div className="container40">
            <img className="prefix-icon" alt="" src="../prefix2.svg" />
            <div className="text16">Ingestion Volume</div>
            <img className="prefix-icon" alt="" src="../suffix2.svg" />
          </div>
        </div>
        <div className="button3" onClick={onButtonContainer3Click}>
          <div className="container40">
            <img className="prefix-icon" alt="" src="../prefix3.svg" />
            <div className="text14">Alert Summary</div>
            <img className="prefix-icon" alt="" src="../suffix.svg" />
          </div>
        </div>
        <div className="button4" onClick={onButtonContainer4Click}>
          <div className="container40">
            <img className="prefix-icon" alt="" src="../prefix4.svg" />
            <div className="text14">Cost Analysis</div>
            <img className="prefix-icon" alt="" src="../suffix.svg" />
          </div>
        </div>
        <div className="iconbutton12">
          <img className="homefilled-icon" alt="" src="../homefilled.svg" />
        </div>
      </div>
    </div>
  );
};

export default LoggingCost;
