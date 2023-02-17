import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./AlertSummary.css";
/*import MultiRangeSlider from "../components/MultiRangeSlider";*/
import AutoScale from 'react-auto-scale';

import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import 'bootstrap/dist/css/bootstrap.min.css';
const animatedComponents = makeAnimated();;

import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

import { useState,useEffect } from "react";
import GetAsData from '../components/GetTableData';
import GetData from "../components/GetData";

const AlertSummary = () => {
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

  const onButtonContainer5Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const Source = [
    { label: "All", value: 355 },
    { label: "Azure", value: 54 },
    { label: "Palo Alto", value: 43 },
    { label: "Sentinel One", value: 61 },
  ];



  return (
    <div className="alert-summary">
      <div className="navbar1">
        <div className="navbar-item" />
        <div className="button5" onClick={onButtonContainerClick}>
          <div className="container45">
            <img className="prefix-icon5" alt="" src="../prefix5.svg" />
            <div className="text14">Payment Sel.</div>
            <img className="prefix-icon5" alt="" src="../suffix.svg" />
          </div>
        </div>
        <div className="button6" onClick={onButtonContainer1Click}>
          <div className="container45">
            <img className="prefix-icon5" alt="" src="../prefix6.svg" />
            <div className="text14">Exploration</div>
            <img className="prefix-icon5" alt="" src="../suffix.svg" />
          </div>
        </div>
        <div className="button7" onClick={onButtonContainer2Click}>
          <div className="container45">
            <img className="prefix-icon5" alt="" src="../prefix7.svg" />
            <div className="text14">Ingestion Volume</div>
            <img className="prefix-icon5" alt="" src="../suffix7.svg" />
          </div>
        </div>
        <div className="button8" onClick={onButtonContainer3Click}>
          <div className="container45">
            <img className="prefix-icon5" alt="" src="../prefix8.svg" />
            <div className="text16">Alert Summary</div>
            <img className="prefix-icon5" alt="" src="../suffix8.svg" />
          </div>
        </div>
        <div className="button9" onClick={onButtonContainer4Click}>
          <div className="container45">
            <img className="prefix-icon5" alt="" src="../prefix9.svg" />
            <div className="text14">Cost Analysis</div>
            <img className="prefix-icon5" alt="" src="../suffix.svg" />
          </div>
        </div>
        <div className="iconbutton13" onClick={onButtonContainer5Click}>
         <img className="homefilled-icon1" alt="" src="../homefilled1.svg" />
        </div>
      </div>
       <div className="group-parent2">
        <div className="rectangle-parent6">
          <div className="group-child32" />
          <div className="fidelity3">Fidelity</div>
          <div className="parent2">
            <div className="div18">0</div>
            <div className="div19">0.5</div>
            <div className="div20">1</div>
          </div>
        
          <div className="frequency3">Frequency</div>
          <div className="k9">10K</div>
          <div className="k10">5K</div>
          <div className="div21">0</div>
          <img className="group-child33" alt="" src="../group-272.svg" />
          <div className="group-parent3">
            <div className="rectangle-parent7">
              <div className="group-child34" />
              <div className="high3">High</div>
            </div>
            <div className="rectangle-parent8">
              <div className="group-child35" />
              <div className="informational">Medium</div>
            </div>
            <div className="rectangle-parent9">
              <div className="group-child36" />
              <div className="informational">Low</div>
            </div>
            <div className="rectangle-parent10">
              <div className="group-child37" />
              <div className="informational">Informational</div>
            </div>
          </div>
          <img className="group-child38" alt="" src="../group-292.svg" />
          
           <title>RangeSlider demo — Material UI</title>
          <link 
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
          />
          
          <div id="root"></div>
          
          
          <img className="group-child39" alt="" src="../group-302.svg" />
          <div className="criticality2">{`Criticality `}</div>
        </div>
        <img
          className="playarrowfilled-icon"
          alt=""
          src="../playarrowfilled.svg"
        />
        <img
          className="skipnextfilled-icon"
          alt=""
          src="../skipnextfilled.svg"
        />
        <img
          className="skippreviousfilled-icon"
          alt=""
          src="../skippreviousfilled.svg"
        />
      </div>
      <div className="group-parent4">
        <img className="group-child40" alt="" src="../group-331.svg" />
        <div className="impact-cost2">Impact Cost</div>
      </div>
      <div className="table-parent">
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
              <div className="head">Rule Name</div>
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
              <div className="head">Head</div>
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
              <div className="head">Ann. Recovery Value</div>
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
              <div className="head">Head</div>
              <div className="mask">
                <img
                  className="arrowdownwardfilled-icon"
                  alt=""
                  src="../arrowdownwardfilled7.svg"
                />
              </div>
            </div>
            <div className="divider15">
              <div className="rectangle15" />
            </div>
          </div>
          <div className="tablecellrow">
            <div className="tablecell">
              <div className="typography25">
                <div className="cell">Advanced Multistage Attack Detection</div>
              </div>
            </div>
            <div className="tablehead1">
              <div className="typography25">
                <div className="cell">Cell</div>
              </div>
            </div>
            <div className="tablecell2">
              <div className="typography25">
                <div className="cell">$100M</div>
              </div>
            </div>
            <div className="tablehead3">
              <div className="typography25">
                <div className="cell">Cell</div>
              </div>
            </div>
            <div className="divider15">
              <div className="rectangle15" />
            </div>
          </div>
          <div className="tablecellrow1">
            <div className="tablecell4">
              <div className="typography25">
                <div className="cell">Cell</div>
              </div>
            </div>
            <div className="tablecell5">
              <div className="typography25">
                <div className="cell">Cell</div>
              </div>
            </div>
            <div className="tablecell6">
              <div className="typography25">
                <div className="cell">Cell</div>
              </div>
            </div>
            <div className="tablecell7">
              <div className="typography25">
                <div className="cell">Cell</div>
              </div>
            </div>
            <div className="divider17">
              <div className="rectangle15" />
            </div>
          </div>
          <div className="tablecellrow1">
            <div className="tablecell4">
              <div className="typography25">
                <div className="cell">Cell</div>
              </div>
            </div>
            <div className="tablecell5">
              <div className="typography25">
                <div className="cell">Cell</div>
              </div>
            </div>
            <div className="tablecell6">
              <div className="typography25">
                <div className="cell">Cell</div>
              </div>
            </div>
            <div className="tablecell7">
              <div className="typography25">
                <div className="cell">Cell</div>
              </div>
            </div>
            <div className="divider17">
              <div className="rectangle15" />
            </div>
          </div>
          <div className="tablecellrow">
            <div className="tablecell">
              <div className="typography25">
                <div className="cell">
                  Azure Active Directory Identity Protection
                </div>
              </div>
            </div>
            <div className="tablehead1">
              <div className="typography25">
                <div className="cell">Cell</div>
              </div>
            </div>
            <div className="tablecell2">
              <div className="typography25">
                <div className="cell">$100M</div>
              </div>
            </div>
            <div className="tablehead3">
              <div className="typography25">
                <div className="cell">Cell</div>
              </div>
            </div>
            <div className="divider15">
              <div className="rectangle15" />
            </div>
          </div>
          <div className="tablecellrow">
            <div className="tablecell">
              <div className="typography25">
                <div className="cell">Azure Advanced Threat Protection</div>
              </div>
            </div>
            <div className="tablehead1">
              <div className="typography25">
                <div className="cell">Cell</div>
              </div>
            </div>
            <div className="tablecell18">
              <div className="typography25">
                <div className="cell">$100M</div>
              </div>
            </div>
            <div className="tablehead3">
              <div className="typography25">
                <div className="cell">Cell</div>
              </div>
            </div>
            <div className="divider15">
              <div className="rectangle15" />
            </div>
          </div>
          <div className="tablefooter">
            <div className="container50">
              <div className="rows-per-page">Rows per page:</div>
              <div className="page">
                <div className="div22">10</div>
                <img
                  className="arrowdropdownfilled-icon5"
                  alt=""
                  src="../arrowdropdownfilled5.svg"
                />
              </div>
            </div>
            <div className="of-100">1-5 of 13</div>
            <div className="navigation">
              <div className="iconbutton14">
                <img
                  className="chevronleftfilled-icon"
                  alt=""
                  src="../chevronleftfilled.svg"
                />
              </div>
              <div className="iconbutton14">
                <img
                  className="chevronleftfilled-icon"
                  alt=""
                  src="../chevronrightfilled.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="group-child41" />
      </div>
      <div className="siem-alert-rule1">SIEM Alert Rule Summary</div>
      <div className="autocomplete5">
        <div className="wrapper5">
          <div className="field7">
            <div className="prefix7">
              <div className="icon37">
                <img
                  className="chevronleftfilled-icon"
                  alt=""
                  src="../starfilled9.svg"
                />
              </div>
            </div>
            <div className="text-wrapper7">
              <div className="values5">
                <div className="chip20">
                  <div className="container51">
                    <div className="avatar20">
                      <div className="avatar21">
                        <div className="op10">OP</div>
                      </div>
                    </div>
                    <div className="typography45">
                      <div className="chip21">Chip</div>
                    </div>
                    <img
                      className="cancelfilled-icon10"
                      alt=""
                      src="../cancelfilled9.svg"
                    />
                  </div>
                </div>
                <div className="chip20">
                  <div className="container51">
                    <div className="avatar20">
                      <div className="avatar21">
                        <div className="op10">OP</div>
                      </div>
                    </div>
                    <div className="typography45">
                      <div className="chip21">Chip</div>
                    </div>
                    <img
                      className="cancelfilled-icon10"
                      alt=""
                      src="../cancelfilled10.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="value22"><Select options={Source} isMulti /></div>
            </div>
            <div className="clear5">
              <div className="iconbutton16">
                <img className="chevronleftfilled-icon" alt="" />
              </div>
            </div>
            <div className="suffix7">
              </div>
          </div>
          <div className="alignment5">
            <div className="basicmenu5">
              <div className="menuitem15">
                <div className="container53">
                  <div className="menuitembasicslot15">
                    <div className="icon38">
                      <div className="navigation">
                        <img className="chevronleftfilled-icon" alt="" />
                      </div>
                    </div>
                    <div className="container54">
                      <div className="value23">Azure</div>
                      <div className="right-content15">
                        <div className="typography47">⌘X</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="divider21">
                  <div className="rectangle15" />
                </div>
              </div>
              <div className="menuitem15">
                <div className="container53">
                  <div className="menuitembasicslot15">
                    <div className="icon38">
                      <div className="navigation">
                        <img className="chevronleftfilled-icon" alt="" />
                      </div>
                    </div>
                    <div className="container54">
                      <div className="value23">Palo Alto</div>
                      <div className="right-content15">
                        <div className="typography47">⌘X</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="divider21">
                  <div className="rectangle15" />
                </div>
              </div>
              <div className="menuitem15">
                <div className="container53">
                  <div className="menuitembasicslot15">
                    <div className="icon38">
                      <div className="navigation">
                        <img className="chevronleftfilled-icon" alt="" />
                      </div>
                    </div>
                    <div className="container54">
                      <div className="value23">Sentinel One</div>
                      <div className="right-content15">
                        <div className="typography47">⌘X</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="divider21">
                  <div className="rectangle15" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="helper7">
          <div className="text24">Descriptive text</div>
        </div>
        <div className="label8">
          <div className="label-background7">
            <div className="cutborder7" />
            <div className="text25">Source</div>
          </div>
        </div>
      </div>
      <div className="annualized-recovery-value-container1">
        
        <div className="getdata">
          <GetData/>
          <GetAsData/>
        </div>
      </div>
      <div className="k11">$4K</div>
      <div className="div23">$0</div>
      <img
        className="downloadfilled-icon1"
        alt=""
        src="../downloadfilled1.svg"
      />
    </div>
  );
};

function valuetext(value) {
  return `${value}°C`;
}

/*export function RangeSlider() {
  const [value, setValue] = React.useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

}*/

export default AlertSummary;
