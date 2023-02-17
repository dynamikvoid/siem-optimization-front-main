import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./ImpactCost.css";

const ImpactCost = () => {
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
    <div className="impact-cost">
      <div className="navbar1">
        <div className="navbar-item" />
        <div className="button4" onClick={onButtonContainerClick}>
          <div className="container4">
            <img className="prefix-icon4" alt="" src="../prefix4.svg" />
            <div className="text44">Pricing Structure</div>
            <img className="prefix-icon4" alt="" src="../suffix4.svg" />
          </div>
        </div>
        <div className="button5" onClick={onButtonContainer1Click}>
          <div className="container4">
            <img className="prefix-icon4" alt="" src="../prefix5.svg" />
            <b className="text44">{`Impact Cost `}</b>
            <img className="prefix-icon4" alt="" src="../suffix1.svg" />
          </div>
        </div>
        <div className="ptimizer-group" onClick={onGroupContainerClick}>
          <div className="ptimizer1">ptimizer</div>
          <img className="node-icon6" alt="" src="../node6.svg" />
          <img className="node-icon7" alt="" src="../node7.svg" />
          <img className="node-icon8" alt="" src="../node8.svg" />
          <img className="node-icon9" alt="" src="../node9.svg" />
          <img className="node-icon10" alt="" src="../node10.svg" />
          <img className="instance-child4" alt="" src="../line-5.svg" />
          <div className="line-div" />
          <img className="instance-child5" alt="" src="../line-7.svg" />
          <img className="instance-child6" alt="" src="../line-8.svg" />
          <img className="node-icon11" alt="" src="../node11.svg" />
          <img className="instance-child7" alt="" src="../line-91.svg" />
          <img className="instance-child8" alt="" src="../group-771.svg" />
          <img className="instance-child9" alt="" src="../group-861.svg" />
          <img className="instance-child10" alt="" src="../group-871.svg" />
          <div className="siem1">SIEM</div>
        </div>
      </div>
      <div className="impact-cost-child" />
      <div className="impact-cost-settings-container">
        <b>{`Impact Cost Settings `}</b>
        <span>by Severity</span>
        <b>{` `}</b>
      </div>
      <div className="text-field20">
        <div className="field20">
          <div className="prefix20">
            <div className="icon20">
              <img
                className="chevronleftfilled-icon"
                alt=""
                src="../starfilled40.svg"
              />
            </div>
          </div>
          <div className="text-wrapper20">
            <div className="value20">$1.00</div>
          </div>
          <div className="suffix20">
            <div className="iconbutton20">
              <img
                className="chevronleftfilled-icon"
                alt=""
                src="../starfilled41.svg"
              />
            </div>
          </div>
        </div>
        <div className="helper20">
          <div className="text46">Descriptive text</div>
        </div>
        <div className="label20">
          <div className="label-background20">
            <div className="cutborder20" />
            <div className="text47">Info</div>
          </div>
        </div>
      </div>
      <div className="text-field21">
        <div className="field20">
          <div className="prefix20">
            <div className="icon20">
              <img
                className="chevronleftfilled-icon"
                alt=""
                src="../starfilled42.svg"
              />
            </div>
          </div>
          <div className="text-wrapper20">
            <div className="value20">$250.00</div>
          </div>
          <div className="suffix20">
            <div className="iconbutton20">
              <img
                className="chevronleftfilled-icon"
                alt=""
                src="../starfilled43.svg"
              />
            </div>
          </div>
        </div>
        <div className="helper20">
          <div className="text46">Descriptive text</div>
        </div>
        <div className="label20">
          <div className="label-background20">
            <div className="cutborder20" />
            <div className="text47">Low</div>
          </div>
        </div>
      </div>
      <div className="text-field22">
        <div className="field20">
          <div className="prefix20">
            <div className="icon20">
              <img
                className="chevronleftfilled-icon"
                alt=""
                src="../starfilled44.svg"
              />
            </div>
          </div>
          <div className="text-wrapper20">
            <div className="value20">$2,500.00</div>
          </div>
          <div className="suffix20">
            <div className="iconbutton20">
              <img
                className="chevronleftfilled-icon"
                alt=""
                src="../starfilled45.svg"
              />
            </div>
          </div>
        </div>
        <div className="helper20">
          <div className="text46">Descriptive text</div>
        </div>
        <div className="label20">
          <div className="label-background20">
            <div className="cutborder20" />
            <div className="text47">Medium</div>
          </div>
        </div>
      </div>
      <div className="text-field23">
        <div className="field20">
          <div className="prefix20">
            <div className="icon20">
              <img
                className="chevronleftfilled-icon"
                alt=""
                src="../starfilled46.svg"
              />
            </div>
          </div>
          <div className="text-wrapper20">
            <div className="value20">$20,000.00</div>
          </div>
          <div className="suffix20">
            <div className="iconbutton20">
              <img
                className="chevronleftfilled-icon"
                alt=""
                src="../starfilled47.svg"
              />
            </div>
          </div>
        </div>
        <div className="helper20">
          <div className="text46">Descriptive text</div>
        </div>
        <div className="label20">
          <div className="label-background20">
            <div className="cutborder20" />
            <div className="text47">High</div>
          </div>
        </div>
      </div>
      <div className="default-values">{`Default Values `}</div>
      <div className="set-the-default">
        Set the default value for an alert firing at each severity level.
      </div>
      <div className="button6">
        <div className="container6">
          <img className="prefix-icon6" alt="" src="../prefix6.svg" />
          <div className="head">Save</div>
          <img className="prefix-icon6" alt="" src="../suffix2.svg" />
        </div>
      </div>
      <div className="button7">
        <div className="container6">
          <img className="prefix-icon6" alt="" src="../prefix7.svg" />
          <div className="head">Reset</div>
          <img className="prefix-icon6" alt="" src="../suffix2.svg" />
        </div>
      </div>
      <div className="component-1">
        <div className="component-1-child" />
        <div className="alert-rule-values">{`Alert Rule Values `}</div>
        <div className="set-the-value">
          Set the value for an alert firing at each severity level for each
          specific alert rule.
        </div>
        <div className="table">
          <div className="tableheadrow">
            <div className="tablehead">
              <div className="mask">
                <img
                  className="arrowdownwardfilled-icon"
                  alt=""
                  src="../arrowdownwardfilled.svg"
                />
              </div>
              <div className="head">Alert Rule</div>
              <div className="mask">
                <img
                  className="arrowdownwardfilled-icon"
                  alt=""
                  src="../arrowdownwardfilled1.svg"
                />
              </div>
            </div>
            <div className="tablehead1">
              <div className="mask">
                <img
                  className="arrowdownwardfilled-icon"
                  alt=""
                  src="../arrowdownwardfilled2.svg"
                />
              </div>
              <div className="head">Info</div>
              <div className="mask">
                <img
                  className="arrowdownwardfilled-icon"
                  alt=""
                  src="../arrowdownwardfilled3.svg"
                />
              </div>
            </div>
            <div className="tablehead2">
              <div className="mask">
                <img
                  className="arrowdownwardfilled-icon"
                  alt=""
                  src="../arrowdownwardfilled4.svg"
                />
              </div>
              <div className="head">Low</div>
              <div className="mask">
                <img
                  className="arrowdownwardfilled-icon"
                  alt=""
                  src="../arrowdownwardfilled5.svg"
                />
              </div>
            </div>
            <div className="tablehead3">
              <div className="mask">
                <img
                  className="arrowdownwardfilled-icon"
                  alt=""
                  src="../arrowdownwardfilled6.svg"
                />
              </div>
              <div className="head">Medium</div>
              <div className="mask">
                <img
                  className="arrowdownwardfilled-icon"
                  alt=""
                  src="../arrowdownwardfilled7.svg"
                />
              </div>
            </div>
            <div className="tablehead4">
              <div className="mask">
                <img
                  className="arrowdownwardfilled-icon"
                  alt=""
                  src="../arrowdownwardfilled8.svg"
                />
              </div>
              <div className="head">High</div>
              <div className="mask">
                <img
                  className="arrowdownwardfilled-icon"
                  alt=""
                  src="../arrowdownwardfilled9.svg"
                />
              </div>
            </div>
            <div className="divider">
              <div className="rectangle" />
            </div>
          </div>
          <div className="tablecellrow">
            <div className="tablehead">
              <div className="typography">
                <div className="cell">Advanced Multistag...</div>
              </div>
            </div>
            <div className="tablehead1">
              <div className="typography">
                <div className="cell">$1.00</div>
              </div>
            </div>
            <div className="tablehead2">
              <div className="typography">
                <div className="cell">$250.00</div>
              </div>
            </div>
            <div className="tablehead3">
              <div className="typography">
                <div className="cell">$2,500.00</div>
              </div>
            </div>
            <div className="tablehead4">
              <div className="typography">
                <div className="cell">$20,000.00</div>
              </div>
            </div>
            <div className="divider">
              <div className="rectangle" />
            </div>
          </div>
          <div className="tablecellrow">
            <div className="tablehead">
              <div className="typography">
                <div className="cell">Azure Active Directory...</div>
              </div>
            </div>
            <div className="tablehead1">
              <div className="typography">
                <div className="cell">$1.00</div>
              </div>
            </div>
            <div className="tablehead2">
              <div className="typography">
                <div className="cell">$250.00</div>
              </div>
            </div>
            <div className="tablehead3">
              <div className="typography">
                <div className="cell">$2,500.00</div>
              </div>
            </div>
            <div className="tablehead4">
              <div className="typography">
                <div className="cell">$20,000.00</div>
              </div>
            </div>
            <div className="divider">
              <div className="rectangle" />
            </div>
          </div>
          <div className="tablecellrow">
            <div className="tablehead">
              <div className="typography">
                <div className="cell">Azure Advanced Threat...</div>
              </div>
            </div>
            <div className="tablehead1">
              <div className="typography">
                <div className="cell">$1.00</div>
              </div>
            </div>
            <div className="tablehead2">
              <div className="typography">
                <div className="cell">$250.00</div>
              </div>
            </div>
            <div className="tablehead3">
              <div className="typography">
                <div className="cell">$2,500.00</div>
              </div>
            </div>
            <div className="tablehead4">
              <div className="typography">
                <div className="cell">$20,000.00</div>
              </div>
            </div>
            <div className="divider">
              <div className="rectangle" />
            </div>
          </div>
          <div className="tablecellrow">
            <div className="tablehead">
              <div className="typography">
                <div className="cell">Azure Defender</div>
              </div>
            </div>
            <div className="tablehead1">
              <div className="typography">
                <div className="cell">$1.00</div>
              </div>
            </div>
            <div className="tablehead2">
              <div className="typography">
                <div className="cell">$250.00</div>
              </div>
            </div>
            <div className="tablehead3">
              <div className="typography">
                <div className="cell">$2,500.00</div>
              </div>
            </div>
            <div className="tablehead4">
              <div className="typography">
                <div className="cell">$20,000.00</div>
              </div>
            </div>
            <div className="divider">
              <div className="rectangle" />
            </div>
          </div>
          <div className="tablecellrow">
            <div className="tablehead">
              <div className="typography">
                <div className="cell">Azure Security Center</div>
              </div>
            </div>
            <div className="tablehead1">
              <div className="typography">
                <div className="cell">$1.00</div>
              </div>
            </div>
            <div className="tablehead2">
              <div className="typography">
                <div className="cell">$250.00</div>
              </div>
            </div>
            <div className="tablehead3">
              <div className="typography">
                <div className="cell">$2,500.00</div>
              </div>
            </div>
            <div className="tablehead4">
              <div className="typography">
                <div className="cell">$20,000.00</div>
              </div>
            </div>
            <div className="divider">
              <div className="rectangle" />
            </div>
          </div>
          <div className="tablefooter">
            <div className="container8">
              <div className="rows-per-page">Rows per page:</div>
              <div className="page">
                <div className="div">10</div>
                <img
                  className="arrowdropdownfilled-icon"
                  alt=""
                  src="../arrowdropdownfilled.svg"
                />
              </div>
            </div>
            <div className="of-100">1-5 of 13</div>
            <div className="navigation">
              <div className="iconbutton24">
                <img
                  className="chevronleftfilled-icon"
                  alt=""
                  src="../chevronleftfilled.svg"
                />
              </div>
              <div className="iconbutton24">
                <img
                  className="chevronleftfilled-icon"
                  alt=""
                  src="../chevronrightfilled.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="rectangle-parent">
          <div className="group-child" />
          <img className="searchfilled-icon" alt="" src="../searchfilled.svg" />
          <i className="search-for-an">Search for an alert rule...</i>
        </div>
      </div>
    </div>
  );
};

export default ImpactCost;
