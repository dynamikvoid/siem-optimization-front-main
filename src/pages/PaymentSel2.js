import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./PaymentSel2.css";

const PaymentSel2 = () => {
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

  return (
    <div className="payment-sel2">
      <div className="navbar5">
        <div className="navbar-child3" />
        <div className="button25" onClick={onButtonContainerClick}>
          <div className="container114">
            <img className="prefix-icon25" alt="" src="../prefix25.svg" />
            <div className="text97">Payment Sel.</div>
            <img className="prefix-icon25" alt="" src="../suffix12.svg" />
          </div>
        </div>
        <div className="button26" onClick={onButtonContainer1Click}>
          <div className="container114">
            <img className="prefix-icon25" alt="" src="../prefix26.svg" />
            <div className="text98">Exploration</div>
            <img className="prefix-icon25" alt="" src="../suffix8.svg" />
          </div>
        </div>
        <div className="button27" onClick={onButtonContainer2Click}>
          <div className="container40">
            <img className="prefix-icon25" alt="" src="../prefix27.svg" />
            <div className="text98">Ingestion Volume</div>
            <img className="prefix-icon25" alt="" src="../suffix10.svg" />
          </div>
        </div>
        <div className="button28" onClick={onButtonContainer3Click}>
          <div className="container114">
            <img className="prefix-icon25" alt="" src="../prefix28.svg" />
            <div className="text98">Alert Summary</div>
            <img className="prefix-icon25" alt="" src="../suffix8.svg" />
          </div>
        </div>
        <div className="button29" onClick={onButtonContainer4Click}>
          <div className="container114">
            <img className="prefix-icon25" alt="" src="../prefix29.svg" />
            <div className="text98">Cost Analysis</div>
            <img className="prefix-icon25" alt="" src="../suffix8.svg" />
          </div>
        </div>
        <div className="ptimizer-parent3" onClick={onGroupContainerClick}>
          <div className="ptimizer5">ptimizer</div>
          <img className="node-icon30" alt="" src="../node30.svg" />
          <img className="node-icon31" alt="" src="../node31.svg" />
          <img className="node-icon32" alt="" src="../node32.svg" />
          <img className="node-icon33" alt="" src="../node33.svg" />
          <img className="node-icon34" alt="" src="../node34.svg" />
          <img className="instance-child47" alt="" src="../line-5.svg" />
          <div className="instance-child48" />
          <img className="instance-child49" alt="" src="../line-7.svg" />
          <img className="instance-child50" alt="" src="../line-8.svg" />
          <img className="node-icon35" alt="" src="../node35.svg" />
          <img className="instance-child51" alt="" src="../line-91.svg" />
          <img className="instance-child52" alt="" src="../group-775.svg" />
          <img className="instance-child53" alt="" src="../group-865.svg" />
          <img className="instance-child54" alt="" src="../group-875.svg" />
          <div className="siem5">SIEM</div>
        </div>
      </div>
      <div className="rectangle-parent34">
        <div className="group-child46" />
        <div className="curr5">
          <div className="wrapper11">
            <div className="field36">
              <div className="prefix36">
                <div className="icon102">
                  <img
                    className="starfilled-icon94"
                    alt=""
                    src="../starfilled61.svg"
                  />
                </div>
              </div>
              <div className="text-wrapper36">
                <div className="values11">
                  <div className="chip44">
                    <div className="container119">
                      <div className="avatar44">
                        <div className="avatar45">
                          <div className="op22">OP</div>
                        </div>
                      </div>
                      <div className="typography96">
                        <div className="chip45">Chip</div>
                      </div>
                      <img
                        className="cancelfilled-icon22"
                        alt=""
                        src="../cancelfilled22.svg"
                      />
                    </div>
                  </div>
                  <div className="chip44">
                    <div className="container119">
                      <div className="avatar44">
                        <div className="avatar45">
                          <div className="op22">OP</div>
                        </div>
                      </div>
                      <div className="typography96">
                        <div className="chip45">Chip</div>
                      </div>
                      <img
                        className="cancelfilled-icon22"
                        alt=""
                        src="../cancelfilled23.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="value71">100/GB/day Tier</div>
              </div>
              <div className="clear11">
                <div className="iconbutton50">
                  <img className="starfilled-icon94" alt="" />
                </div>
              </div>
              <div className="suffix36">
                <div className="iconbutton51">
                  <img
                    className="starfilled-icon94"
                    alt=""
                    src="../arrowdropdownfilled12.svg"
                  />
                </div>
              </div>
            </div>
            <div className="alignment11">
              <div className="basicmenu11">
                <div className="menuitem33">
                  <div className="container121">
                    <div className="menuitembasicslot33">
                      <div className="icon103">
                        <div className="icon104">
                          <img className="starfilled-icon94" alt="" />
                        </div>
                      </div>
                      <div className="container122">
                        <div className="value72">Table 1....</div>
                        <div className="right-content33">
                          <div className="typography98">⌘X</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="divider45">
                    <div className="rectangle45" />
                  </div>
                </div>
                <div className="menuitem33">
                  <div className="container121">
                    <div className="menuitembasicslot33">
                      <div className="icon103">
                        <div className="icon104">
                          <img className="starfilled-icon94" alt="" />
                        </div>
                      </div>
                      <div className="container122">
                        <div className="value72">Table ...n</div>
                        <div className="right-content33">
                          <div className="typography98">⌘X</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="divider45">
                    <div className="rectangle45" />
                  </div>
                </div>
                <div className="menuitem35">
                  <div className="container125">
                    <div className="menuitembasicslot33">
                      <div className="icon103">
                        <div className="icon104">
                          <img className="starfilled-icon94" alt="" />
                        </div>
                      </div>
                      <div className="container122">
                        <div className="value72">Field Value</div>
                        <div className="right-content33">
                          <div className="typography98">⌘X</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="divider45">
                    <div className="rectangle45" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="helper36">
            <div className="text102">Descriptive text</div>
          </div>
          <div className="label37">
            <div className="label-background36">
              <div className="cutborder36" />
              <div className="text103">Current Log Analytics Plan</div>
            </div>
          </div>
        </div>
        <div className="curr22">
          <div className="wrapper11">
            <div className="field36">
              <div className="prefix36">
                <div className="icon102">
                  <img
                    className="starfilled-icon94"
                    alt=""
                    src="../starfilled62.svg"
                  />
                </div>
              </div>
              <div className="text-wrapper36">
                <div className="values11">
                  <div className="chip44">
                    <div className="container119">
                      <div className="avatar44">
                        <div className="avatar45">
                          <div className="op22">OP</div>
                        </div>
                      </div>
                      <div className="typography96">
                        <div className="chip45">Chip</div>
                      </div>
                      <img
                        className="cancelfilled-icon22"
                        alt=""
                        src="../cancelfilled24.svg"
                      />
                    </div>
                  </div>
                  <div className="chip44">
                    <div className="container119">
                      <div className="avatar44">
                        <div className="avatar45">
                          <div className="op22">OP</div>
                        </div>
                      </div>
                      <div className="typography96">
                        <div className="chip45">Chip</div>
                      </div>
                      <img
                        className="cancelfilled-icon22"
                        alt=""
                        src="../cancelfilled25.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="value71">100/GB/day Tier</div>
              </div>
              <div className="clear11">
                <div className="iconbutton50">
                  <img className="starfilled-icon94" alt="" />
                </div>
              </div>
              <div className="suffix36">
                <div className="iconbutton51">
                  <img
                    className="starfilled-icon94"
                    alt=""
                    src="../arrowdropdownfilled13.svg"
                  />
                </div>
              </div>
            </div>
            <div className="alignment11">
              <div className="basicmenu11">
                <div className="menuitem33">
                  <div className="container121">
                    <div className="menuitembasicslot33">
                      <div className="icon103">
                        <div className="icon104">
                          <img className="starfilled-icon94" alt="" />
                        </div>
                      </div>
                      <div className="container122">
                        <div className="value72">Table 1....</div>
                        <div className="right-content33">
                          <div className="typography98">⌘X</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="divider45">
                    <div className="rectangle45" />
                  </div>
                </div>
                <div className="menuitem33">
                  <div className="container121">
                    <div className="menuitembasicslot33">
                      <div className="icon103">
                        <div className="icon104">
                          <img className="starfilled-icon94" alt="" />
                        </div>
                      </div>
                      <div className="container122">
                        <div className="value72">Table ...n</div>
                        <div className="right-content33">
                          <div className="typography98">⌘X</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="divider45">
                    <div className="rectangle45" />
                  </div>
                </div>
                <div className="menuitem35">
                  <div className="container125">
                    <div className="menuitembasicslot33">
                      <div className="icon103">
                        <div className="icon104">
                          <img className="starfilled-icon94" alt="" />
                        </div>
                      </div>
                      <div className="container122">
                        <div className="value72">Field Value</div>
                        <div className="right-content33">
                          <div className="typography98">⌘X</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="divider45">
                    <div className="rectangle45" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="helper36">
            <div className="text102">Descriptive text</div>
          </div>
          <div className="label37">
            <div className="label-background36">
              <div className="cutborder36" />
              <div className="text103">Current Sentinel Plan</div>
            </div>
          </div>
        </div>
        <div className="table5">
          <div className="wrapper11">
            <div className="field36">
              <div className="prefix36">
                <div className="icon102">
                  <img
                    className="starfilled-icon94"
                    alt=""
                    src="../starfilled63.svg"
                  />
                </div>
              </div>
              <div className="text-wrapper36">
                <div className="values11">
                  <div className="chip44">
                    <div className="container119">
                      <div className="avatar44">
                        <div className="avatar45">
                          <div className="op22">OP</div>
                        </div>
                      </div>
                      <div className="typography96">
                        <div className="chip45">Chip</div>
                      </div>
                      <img
                        className="cancelfilled-icon22"
                        alt=""
                        src="../cancelfilled26.svg"
                      />
                    </div>
                  </div>
                  <div className="chip44">
                    <div className="container119">
                      <div className="avatar44">
                        <div className="avatar45">
                          <div className="op22">OP</div>
                        </div>
                      </div>
                      <div className="typography96">
                        <div className="chip45">Chip</div>
                      </div>
                      <img
                        className="cancelfilled-icon22"
                        alt=""
                        src="../cancelfilled27.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="value71">All</div>
              </div>
              <div className="clear11">
                <div className="iconbutton50">
                  <img className="starfilled-icon94" alt="" />
                </div>
              </div>
              <div className="suffix36">
                <div className="iconbutton51">
                  <img
                    className="starfilled-icon94"
                    alt=""
                    src="../arrowdropdownfilled14.svg"
                  />
                </div>
              </div>
            </div>
            <div className="alignment11">
              <div className="basicmenu11">
                <div className="menuitem33">
                  <div className="container137">
                    <div className="menuitembasicslot39">
                      <div className="icon103">
                        <div className="icon104">
                          <img className="starfilled-icon94" alt="" />
                        </div>
                      </div>
                      <div className="container122">
                        <div className="value72">Table 1....</div>
                        <div className="right-content33">
                          <div className="typography98">⌘X</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="divider51">
                    <div className="rectangle45" />
                  </div>
                </div>
                <div className="menuitem33">
                  <div className="container137">
                    <div className="menuitembasicslot39">
                      <div className="icon103">
                        <div className="icon104">
                          <img className="starfilled-icon94" alt="" />
                        </div>
                      </div>
                      <div className="container122">
                        <div className="value72">Table ...n</div>
                        <div className="right-content33">
                          <div className="typography98">⌘X</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="divider51">
                    <div className="rectangle45" />
                  </div>
                </div>
                <div className="menuitem35">
                  <div className="container125">
                    <div className="menuitembasicslot39">
                      <div className="icon103">
                        <div className="icon104">
                          <img className="starfilled-icon94" alt="" />
                        </div>
                      </div>
                      <div className="container122">
                        <div className="value72">Field Value</div>
                        <div className="right-content33">
                          <div className="typography98">⌘X</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="divider51">
                    <div className="rectangle45" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="helper38">
            <div className="text102">Descriptive text</div>
          </div>
          <div className="label37">
            <div className="label-background36">
              <div className="cutborder36" />
              <div className="text103">Log Source Tables</div>
            </div>
          </div>
        </div>
        <div className="sentinel-commitment-tier-container">
          <span className="sentinel-commitment">Sentinel Commitment</span>
          <span className="tier-optimizer"> Tier Optimizer</span>
        </div>
        <div className="search-for-the">
          Search for the optimal plan for your organization
        </div>
        <div className="button30">
          <div className="container143">
            <img className="prefix-icon30" alt="" src="../prefix30.svg" />
            <div className="text108">Search</div>
            <img className="prefix-icon30" alt="" src="../suffix30.svg" />
          </div>
        </div>
        <div className="curr6">
          <div className="wrapper11">
            <div className="field36">
              <div className="prefix36">
                <div className="icon102">
                  <img
                    className="starfilled-icon94"
                    alt=""
                    src="../starfilled64.svg"
                  />
                </div>
              </div>
              <div className="text-wrapper36">
                <div className="values11">
                  <div className="chip44">
                    <div className="container119">
                      <div className="avatar44">
                        <div className="avatar45">
                          <div className="op22">OP</div>
                        </div>
                      </div>
                      <div className="typography96">
                        <div className="chip45">Chip</div>
                      </div>
                      <img
                        className="cancelfilled-icon22"
                        alt=""
                        src="../cancelfilled28.svg"
                      />
                    </div>
                  </div>
                  <div className="chip44">
                    <div className="container119">
                      <div className="avatar44">
                        <div className="avatar45">
                          <div className="op22">OP</div>
                        </div>
                      </div>
                      <div className="typography96">
                        <div className="chip45">Chip</div>
                      </div>
                      <img
                        className="cancelfilled-icon22"
                        alt=""
                        src="../cancelfilled29.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="value71">60 Days</div>
              </div>
              <div className="clear11">
                <div className="iconbutton50">
                  <img className="starfilled-icon94" alt="" />
                </div>
              </div>
              <div className="suffix36">
                <div className="iconbutton51">
                  <img
                    className="starfilled-icon94"
                    alt=""
                    src="../arrowdropdownfilled15.svg"
                  />
                </div>
              </div>
            </div>
            <div className="alignment11">
              <div className="basicmenu11">
                <div className="menuitem33">
                  <div className="container121">
                    <div className="menuitembasicslot33">
                      <div className="icon103">
                        <div className="icon104">
                          <img className="starfilled-icon94" alt="" />
                        </div>
                      </div>
                      <div className="container122">
                        <div className="value72">60 Days</div>
                        <div className="right-content33">
                          <div className="typography98">⌘X</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="divider45">
                    <div className="rectangle45" />
                  </div>
                </div>
                <div className="menuitem33">
                  <div className="container148">
                    <div className="menuitembasicslot43">
                      <div className="icon103">
                        <div className="icon104">
                          <img className="starfilled-icon94" alt="" />
                        </div>
                      </div>
                      <div className="container122">
                        <div className="value72">
                          <p className="days6">90 Days</p>
                          <p className="days6">180 Days</p>
                          <p className="days8">365 Days</p>
                        </div>
                        <div className="right-content33">
                          <div className="typography98">⌘X</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="divider45">
                    <div className="rectangle45" />
                  </div>
                </div>
                <div className="menuitem35">
                  <div className="container125">
                    <div className="menuitembasicslot33">
                      <div className="icon103">
                        <div className="icon104">
                          <img className="starfilled-icon94" alt="" />
                        </div>
                      </div>
                      <div className="container122">
                        <div className="value72">Field Value</div>
                        <div className="right-content33">
                          <div className="typography98">⌘X</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="divider45">
                    <div className="rectangle45" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="helper36">
            <div className="text102">Descriptive text</div>
          </div>
          <div className="label37">
            <div className="label-background36">
              <div className="cutborder36" />
              <div className="text103">Forecast Window</div>
            </div>
          </div>
        </div>
      </div>
      <div className="payment-sel-child1" />
      <div className="this-tool-searches">
        This tool searches through all possible permutations of the plans that
        exist and cross references them with your organizations specific pricing
        to query an optimized set of plan options that will maximize operation
        efficiency. KPMG recommends the use of this tool anytime your
        organization is renegotiating with your provider.
      </div>
    </div>
  );
};

export default PaymentSel2;
