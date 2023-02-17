import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Exploration.css";

const Exploration = () => {
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

  const onGroupContainer3Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="exploration">
      <div className="downloadfilled-parent">
        <img className="downloadfilled-icon1" alt="" />
        <div className="autocomplete3">
          <div className="wrapper15">
            <div className="field40">
              <div className="prefix40">
                <div className="icon130">
                  <img
                    className="starfilled-icon110"
                    alt=""
                    src="../starfilled65.svg"
                  />
                </div>
              </div>
              <div className="text-wrapper40">
                <div className="values15">
                  <div className="chip60">
                    <div className="container152">
                      <div className="avatar60">
                        <div className="avatar61">
                          <div className="op30">OP</div>
                        </div>
                      </div>
                      <div className="typography116">
                        <div className="chip61">Chip</div>
                      </div>
                      <img
                        className="cancelfilled-icon30"
                        alt=""
                        src="../cancelfilled30.svg"
                      />
                    </div>
                  </div>
                  <div className="chip60">
                    <div className="container152">
                      <div className="avatar60">
                        <div className="avatar61">
                          <div className="op30">OP</div>
                        </div>
                      </div>
                      <div className="typography116">
                        <div className="chip61">Chip</div>
                      </div>
                      <img
                        className="cancelfilled-icon30"
                        alt=""
                        src="../cancelfilled31.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="value87">All</div>
              </div>
              <div className="clear15">
                <div className="iconbutton58">
                  <img className="starfilled-icon110" alt="" />
                </div>
              </div>
              <div className="suffix40">
                <div className="iconbutton59">
                  <img
                    className="starfilled-icon110"
                    alt=""
                    src="../arrowdropdownfilled16.svg"
                  />
                </div>
              </div>
            </div>
            <div className="alignment15">
              <div className="basicmenu15">
                <div className="menuitem45">
                  <div className="container154">
                    <div className="menuitembasicslot45">
                      <div className="icon131">
                        <div className="icon132">
                          <img className="starfilled-icon110" alt="" />
                        </div>
                      </div>
                      <div className="container155">
                        <div className="value88">Azure</div>
                        <div className="right-content45">
                          <div className="typography118">⌘X</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="divider57">
                    <div className="rectangle57" />
                  </div>
                </div>
                <div className="menuitem45">
                  <div className="container154">
                    <div className="menuitembasicslot45">
                      <div className="icon131">
                        <div className="icon132">
                          <img className="starfilled-icon110" alt="" />
                        </div>
                      </div>
                      <div className="container155">
                        <div className="value88">OpsManager</div>
                        <div className="right-content45">
                          <div className="typography118">⌘X</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="divider57">
                    <div className="rectangle57" />
                  </div>
                </div>
                <div className="menuitem45">
                  <div className="container158">
                    <div className="menuitembasicslot45">
                      <div className="icon131">
                        <div className="icon132">
                          <img className="starfilled-icon110" alt="" />
                        </div>
                      </div>
                      <div className="container155">
                        <div className="value88">Linux</div>
                        <div className="right-content45">
                          <div className="typography118">⌘X</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="divider57">
                    <div className="rectangle57" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="helper40">
            <div className="text111">Descriptive text</div>
          </div>
          <div className="label41">
            <div className="label-background40">
              <div className="cutborder40" />
              <div className="text112">Source System</div>
            </div>
          </div>
        </div>
        <div className="autocomplete4">
          <div className="wrapper15">
            <div className="field40">
              <div className="prefix40">
                <div className="icon130">
                  <img
                    className="starfilled-icon110"
                    alt=""
                    src="../starfilled66.svg"
                  />
                </div>
              </div>
              <div className="text-wrapper40">
                <div className="values15">
                  <div className="chip60">
                    <div className="container152">
                      <div className="avatar60">
                        <div className="avatar61">
                          <div className="op30">OP</div>
                        </div>
                      </div>
                      <div className="typography116">
                        <div className="chip61">Chip</div>
                      </div>
                      <img
                        className="cancelfilled-icon30"
                        alt=""
                        src="../cancelfilled32.svg"
                      />
                    </div>
                  </div>
                  <div className="chip60">
                    <div className="container152">
                      <div className="avatar60">
                        <div className="avatar61">
                          <div className="op30">OP</div>
                        </div>
                      </div>
                      <div className="typography116">
                        <div className="chip61">Chip</div>
                      </div>
                      <img
                        className="cancelfilled-icon30"
                        alt=""
                        src="../cancelfilled33.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="value87">All</div>
              </div>
              <div className="clear15">
                <div className="iconbutton58">
                  <img className="starfilled-icon110" alt="" />
                </div>
              </div>
              <div className="suffix40">
                <div className="iconbutton59">
                  <img
                    className="starfilled-icon110"
                    alt=""
                    src="../arrowdropdownfilled17.svg"
                  />
                </div>
              </div>
            </div>
            <div className="alignment15">
              <div className="basicmenu15">
                <div className="menuitem45">
                  <div className="container154">
                    <div className="menuitembasicslot45">
                      <div className="icon131">
                        <div className="icon132">
                          <img className="starfilled-icon110" alt="" />
                        </div>
                      </div>
                      <div className="container155">
                        <div className="value88">Azure</div>
                        <div className="right-content45">
                          <div className="typography118">⌘X</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="divider57">
                    <div className="rectangle57" />
                  </div>
                </div>
                <div className="menuitem45">
                  <div className="container154">
                    <div className="menuitembasicslot45">
                      <div className="icon131">
                        <div className="icon132">
                          <img className="starfilled-icon110" alt="" />
                        </div>
                      </div>
                      <div className="container155">
                        <div className="value88">OpsManager</div>
                        <div className="right-content45">
                          <div className="typography118">⌘X</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="divider57">
                    <div className="rectangle57" />
                  </div>
                </div>
                <div className="menuitem45">
                  <div className="container158">
                    <div className="menuitembasicslot45">
                      <div className="icon131">
                        <div className="icon132">
                          <img className="starfilled-icon110" alt="" />
                        </div>
                      </div>
                      <div className="container155">
                        <div className="value88">Linux</div>
                        <div className="right-content45">
                          <div className="typography118">⌘X</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="divider57">
                    <div className="rectangle57" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="helper40">
            <div className="text111">Descriptive text</div>
          </div>
          <div className="label41">
            <div className="label-background40">
              <div className="cutborder40" />
              <div className="text112">Alert Rule</div>
            </div>
          </div>
        </div>
        <div className="autocomplete5">
          <div className="wrapper15">
            <div className="field40">
              <div className="prefix40">
                <div className="icon130">
                  <img
                    className="starfilled-icon110"
                    alt=""
                    src="../starfilled67.svg"
                  />
                </div>
              </div>
              <div className="text-wrapper40">
                <div className="values15">
                  <div className="chip60">
                    <div className="container152">
                      <div className="avatar60">
                        <div className="avatar61">
                          <div className="op30">OP</div>
                        </div>
                      </div>
                      <div className="typography116">
                        <div className="chip61">Chip</div>
                      </div>
                      <img
                        className="cancelfilled-icon30"
                        alt=""
                        src="../cancelfilled34.svg"
                      />
                    </div>
                  </div>
                  <div className="chip60">
                    <div className="container152">
                      <div className="avatar60">
                        <div className="avatar61">
                          <div className="op30">OP</div>
                        </div>
                      </div>
                      <div className="typography116">
                        <div className="chip61">Chip</div>
                      </div>
                      <img
                        className="cancelfilled-icon30"
                        alt=""
                        src="../cancelfilled35.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="value87">All</div>
              </div>
              <div className="clear15">
                <div className="iconbutton58">
                  <img className="starfilled-icon110" alt="" />
                </div>
              </div>
              <div className="suffix40">
                <div className="iconbutton59">
                  <img
                    className="starfilled-icon110"
                    alt=""
                    src="../arrowdropdownfilled18.svg"
                  />
                </div>
              </div>
            </div>
            <div className="alignment15">
              <div className="basicmenu15">
                <div className="menuitem45">
                  <div className="container154">
                    <div className="menuitembasicslot45">
                      <div className="icon131">
                        <div className="icon132">
                          <img className="starfilled-icon110" alt="" />
                        </div>
                      </div>
                      <div className="container155">
                        <div className="value88">Azure</div>
                        <div className="right-content45">
                          <div className="typography118">⌘X</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="divider57">
                    <div className="rectangle57" />
                  </div>
                </div>
                <div className="menuitem45">
                  <div className="container154">
                    <div className="menuitembasicslot45">
                      <div className="icon131">
                        <div className="icon132">
                          <img className="starfilled-icon110" alt="" />
                        </div>
                      </div>
                      <div className="container155">
                        <div className="value88">OpsManager</div>
                        <div className="right-content45">
                          <div className="typography118">⌘X</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="divider57">
                    <div className="rectangle57" />
                  </div>
                </div>
                <div className="menuitem45">
                  <div className="container158">
                    <div className="menuitembasicslot45">
                      <div className="icon131">
                        <div className="icon132">
                          <img className="starfilled-icon110" alt="" />
                        </div>
                      </div>
                      <div className="container155">
                        <div className="value88">Linux</div>
                        <div className="right-content45">
                          <div className="typography118">⌘X</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="divider57">
                    <div className="rectangle57" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="helper40">
            <div className="text111">Descriptive text</div>
          </div>
          <div className="label41">
            <div className="label-background40">
              <div className="cutborder40" />
              <div className="text112">Incident</div>
            </div>
          </div>
        </div>
        <div className="autocomplete6">
          <div className="wrapper15">
            <div className="field40">
              <div className="prefix40">
                <div className="icon130">
                  <img
                    className="starfilled-icon110"
                    alt=""
                    src="../starfilled68.svg"
                  />
                </div>
              </div>
              <div className="text-wrapper40">
                <div className="values15">
                  <div className="chip60">
                    <div className="container152">
                      <div className="avatar60">
                        <div className="avatar61">
                          <div className="op30">OP</div>
                        </div>
                      </div>
                      <div className="typography116">
                        <div className="chip61">Chip</div>
                      </div>
                      <img
                        className="cancelfilled-icon30"
                        alt=""
                        src="../cancelfilled36.svg"
                      />
                    </div>
                  </div>
                  <div className="chip60">
                    <div className="container152">
                      <div className="avatar60">
                        <div className="avatar61">
                          <div className="op30">OP</div>
                        </div>
                      </div>
                      <div className="typography116">
                        <div className="chip61">Chip</div>
                      </div>
                      <img
                        className="cancelfilled-icon30"
                        alt=""
                        src="../cancelfilled37.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="value87">All</div>
              </div>
              <div className="clear15">
                <div className="iconbutton58">
                  <img className="starfilled-icon110" alt="" />
                </div>
              </div>
              <div className="suffix40">
                <div className="iconbutton59">
                  <img
                    className="starfilled-icon110"
                    alt=""
                    src="../arrowdropdownfilled19.svg"
                  />
                </div>
              </div>
            </div>
            <div className="alignment15">
              <div className="basicmenu15">
                <div className="menuitem45">
                  <div className="container154">
                    <div className="menuitembasicslot45">
                      <div className="icon131">
                        <div className="icon132">
                          <img className="starfilled-icon110" alt="" />
                        </div>
                      </div>
                      <div className="container155">
                        <div className="value88">Table 1....</div>
                        <div className="right-content45">
                          <div className="typography118">⌘X</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="divider57">
                    <div className="rectangle57" />
                  </div>
                </div>
                <div className="menuitem45">
                  <div className="container154">
                    <div className="menuitembasicslot45">
                      <div className="icon131">
                        <div className="icon132">
                          <img className="starfilled-icon110" alt="" />
                        </div>
                      </div>
                      <div className="container155">
                        <div className="value88">Table ...n</div>
                        <div className="right-content45">
                          <div className="typography118">⌘X</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="divider57">
                    <div className="rectangle57" />
                  </div>
                </div>
                <div className="menuitem56">
                  <div className="container158">
                    <div className="menuitembasicslot45">
                      <div className="icon131">
                        <div className="icon132">
                          <img className="starfilled-icon110" alt="" />
                        </div>
                      </div>
                      <div className="container155">
                        <div className="value88">Field Value</div>
                        <div className="right-content45">
                          <div className="typography118">⌘X</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="divider57">
                    <div className="rectangle57" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="helper40">
            <div className="text111">Descriptive text</div>
          </div>
          <div className="label41">
            <div className="label-background40">
              <div className="cutborder40" />
              <div className="text112">Table</div>
            </div>
          </div>
        </div>
        <div className="rectangle-parent35">
          <div className="group-child47" />
          <b className="source">Source</b>
          <div className="table6">Table</div>
          <div className="alert-rule">
            <p className="azure">Alert Rule</p>
          </div>
          <div className="incident">
            <p className="azure">Incident</p>
          </div>
          <div className="group-child48" />
          <div className="azure-527">
            <p className="azure">
              <b>Azure</b>
            </p>
            <p className="p">
              <span>52.7%</span>
            </p>
          </div>
          <div className="group-child49" />
          <div className="group-child50" />
          <div className="linux-171">
            <p className="azure">
              <b>Linux</b>
            </p>
            <p className="p">
              <span>17.1%</span>
            </p>
          </div>
          <div className="opsmanagement-302">
            <p className="azure">
              <b>OpsManagement</b>
            </p>
            <p className="p">
              <span>30.2%</span>
            </p>
          </div>
        </div>
        <div className="rectangle-parent36">
          <div className="group-child51" />
          <div className="dimensional-relationships">
            Dimensional Relationships
          </div>
          <div className="image-1">
            <img className="image-1-icon" alt="" src="../image-1@2x.png" />
          </div>
          <div className="autocomplete7">
            <div className="wrapper15">
              <div className="field40">
                <div className="prefix40">
                  <div className="icon130">
                    <img
                      className="starfilled-icon110"
                      alt=""
                      src="../starfilled69.svg"
                    />
                  </div>
                </div>
                <div className="text-wrapper40">
                  <div className="values15">
                    <div className="chip60">
                      <div className="container152">
                        <div className="avatar60">
                          <div className="avatar61">
                            <div className="op30">OP</div>
                          </div>
                        </div>
                        <div className="typography116">
                          <div className="chip61">Chip</div>
                        </div>
                        <img
                          className="cancelfilled-icon30"
                          alt=""
                          src="../cancelfilled38.svg"
                        />
                      </div>
                    </div>
                    <div className="chip60">
                      <div className="container152">
                        <div className="avatar60">
                          <div className="avatar61">
                            <div className="op30">OP</div>
                          </div>
                        </div>
                        <div className="typography116">
                          <div className="chip61">Chip</div>
                        </div>
                        <img
                          className="cancelfilled-icon30"
                          alt=""
                          src="../cancelfilled39.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="value87">Source</div>
                </div>
                <div className="clear15">
                  <div className="iconbutton58">
                    <img className="starfilled-icon110" alt="" />
                  </div>
                </div>
                <div className="suffix40">
                  <div className="iconbutton59">
                    <img
                      className="starfilled-icon110"
                      alt=""
                      src="../arrowdropdownfilled20.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="alignment15">
                <div className="basicmenu15">
                  <div className="menuitem45">
                    <div className="container186">
                      <div className="menuitembasicslot57">
                        <div className="icon131">
                          <div className="icon132">
                            <img className="starfilled-icon110" alt="" />
                          </div>
                        </div>
                        <div className="container155">
                          <div className="value88">No Selection</div>
                          <div className="right-content45">
                            <div className="typography118">⌘X</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="divider69">
                      <div className="rectangle57" />
                    </div>
                  </div>
                  <div className="menuitem45">
                    <div className="container188">
                      <div className="menuitembasicslot58">
                        <div className="icon131">
                          <div className="icon132">
                            <img className="starfilled-icon110" alt="" />
                          </div>
                        </div>
                        <div className="container155">
                          <div className="value88">
                            <p className="azure">Source</p>
                            <p className="azure">Table</p>
                            <p className="azure">Alert Rule</p>
                            <p className="p">Incident</p>
                          </div>
                          <div className="right-content45">
                            <div className="typography118">⌘X</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="divider69">
                      <div className="rectangle57" />
                    </div>
                  </div>
                  <div className="menuitem56">
                    <div className="container158">
                      <div className="menuitembasicslot57">
                        <div className="icon131">
                          <div className="icon132">
                            <img className="starfilled-icon110" alt="" />
                          </div>
                        </div>
                        <div className="container155">
                          <div className="value88">Alert Rule</div>
                          <div className="right-content45">
                            <div className="typography118">⌘X</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="divider69">
                      <div className="rectangle57" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="helper44">
              <div className="text111">
                <p className="azure">{`This should be `}</p>
                <p className="p">a multi select</p>
              </div>
            </div>
            <div className="label41">
              <div className="label-background40">
                <div className="cutborder40" />
                <div className="text112">Node 1</div>
              </div>
            </div>
          </div>
          <div className="rectangle-parent37">
            <div className="group-child52" />
            <div className="group-child53" />
            <div className="div11">+</div>
            <div className="div12">-</div>
          </div>
        </div>
        <img
          className="fullscreenfilled-icon"
          alt=""
          src="../fullscreenfilled.svg"
        />
      </div>
      <div className="navbar6">
        <div className="navbar-child4" />
        <div className="button31" onClick={onButtonContainerClick}>
          <div className="container192">
            <img className="prefix-icon31" alt="" src="../prefix31.svg" />
            <div className="text121">Payment Sel.</div>
            <img className="prefix-icon31" alt="" src="../suffix8.svg" />
          </div>
        </div>
        <div className="button32" onClick={onButtonContainer1Click}>
          <div className="container192">
            <img className="prefix-icon31" alt="" src="../prefix32.svg" />
            <div className="text122">Exploration</div>
            <img className="prefix-icon31" alt="" src="../suffix8.svg" />
          </div>
        </div>
        <div className="button33" onClick={onButtonContainer2Click}>
          <div className="container192">
            <img className="prefix-icon31" alt="" src="../prefix33.svg" />
            <div className="text121">Ingestion Volume</div>
            <img className="prefix-icon31" alt="" src="../suffix10.svg" />
          </div>
        </div>
        <div className="button34" onClick={onButtonContainer3Click}>
          <div className="container192">
            <img className="prefix-icon31" alt="" src="../prefix34.svg" />
            <div className="text121">Alert Summary</div>
            <img className="prefix-icon31" alt="" src="../suffix8.svg" />
          </div>
        </div>
        <div className="button35" onClick={onButtonContainer4Click}>
          <div className="container192">
            <img className="prefix-icon31" alt="" src="../prefix35.svg" />
            <div className="text121">Cost Analysis</div>
            <img className="prefix-icon31" alt="" src="../suffix8.svg" />
          </div>
        </div>
        <div className="ptimizer-parent4" onClick={onGroupContainer3Click}>
          <div className="ptimizer6">ptimizer</div>
          <img className="node-icon36" alt="" src="../node36.svg" />
          <img className="node-icon37" alt="" src="../node37.svg" />
          <img className="node-icon38" alt="" src="../node38.svg" />
          <img className="node-icon39" alt="" src="../node39.svg" />
          <img className="node-icon40" alt="" src="../node40.svg" />
          <img className="instance-child55" alt="" src="../line-5.svg" />
          <div className="instance-child56" />
          <img className="instance-child57" alt="" src="../line-76.svg" />
          <img className="instance-child58" alt="" src="../line-86.svg" />
          <img className="node-icon41" alt="" src="../node41.svg" />
          <img className="instance-child59" alt="" src="../line-92.svg" />
          <img className="instance-child60" alt="" src="../group-776.svg" />
          <img className="instance-child61" alt="" src="../group-866.svg" />
          <img className="instance-child62" alt="" src="../group-876.svg" />
          <div className="siem6">SIEM</div>
        </div>
      </div>
      <img
        className="downloadfilled-icon2"
        alt=""
        src="../downloadfilled1.svg"
      />
    </div>
  );
};

export default Exploration;
