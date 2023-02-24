import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./AlertSummary.css";
/*import MultiRangeSlider from "../components/MultiRangeSlider";*/


import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import 'bootstrap/dist/css/bootstrap.min.css';
const animatedComponents = makeAnimated();;

import * as React from 'react';
import RangeSlider from '../components/rangeSlider';
import RangeSliderVertical from '../components/rangeSliderVertical';
import ScatterChartGraph from "../components/ScatterPlot";


import { useState,useEffect } from "react";
import GetAsData from '../components/GetTableData';
import GetData from "../components/GetData";
import MultiSelectAS from '../components/MultiSelectAS';
import { Card } from "@mui/material";
import { CardContent } from "semantic-ui-react";


const AlertSummary = () => {
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

  const onButtonContainer5Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const Source = [
    { label: "Sentinel One", value: 24 },
    { label: "Sentinel 2", value: 25 },
    { label: "All", value: 26 },
    { label: "Azure", value: 27 },
    { label: "Palo Alto", value: 28 },
  ];



  return (
    <div className="alert-summary">
      <div className="navbar1">
        <div className="navbar-item" />
        <div className="button5" onClick={onButtonContainerClick}>
          <div className="container40">
            <img className="prefix-icon5" alt="" src="../prefix5.svg" />
            <div className="text14">Payment Sel.</div>
            <img className="prefix-icon5" alt="" src="../suffix.svg" />
          </div>
        </div>
        <div className="button116" onClick={onButtonContainer1Click}>
          <div className="container40">
            <img className="prefix-icon5" alt="" src="../prefix6.svg" />
            <div className="text14">Exploration</div>
            <img className="prefix-icon5" alt="" src="../suffix.svg" />
          </div>
        </div>
        <div className="button117" onClick={onButtonContainer2Click}>
          <div className="container40">
            <img className="prefix-icon5" alt="" src="../prefix7.svg" />
            <div className="text14">Ingestion Volume</div>
            <img className="prefix-icon5" alt="" src="../suffix7.svg" />
          </div>
        </div>
        <div className="button118" onClick={onButtonContainer3Click}>
          <div className="container45">
            <img className="prefix-icon5" alt="" src="../prefix8.svg" />
            <div className="text200">Alert Summary</div>
            <img className="prefix-icon5" alt="" src="../suffix8.svg" />
          </div>
        </div>
        <div className="button9" onClick={onButtonContainer4Click}>
          <div className="container40">
            <img className="prefix-icon5" alt="" src="../prefix9.svg" />
            <div className="text14">Cost Analysis</div>
            <img className="prefix-icon5" alt="" src="../suffix.svg" />
          </div>
        </div>
        <div className="ptimizer-container" onClick={onButtonContainer5Click}>
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
       <div className="group-parent2">
        <div>
          <Card sx={{ minWidth: 200, maxWidth:1210, minHeight:480, marginTop:1,marginLeft:0, marginRight:-2}}>
            <CardContent><div className="fidelity3">Fidelity</div>
          <div className="parent2">
            <div className="div18" style={{marginTop:20}}></div>
            <div className="div19" style={{marginTop:20}}></div>
            <div className="div20" style={{marginTop:20}}></div>
          </div>
        
          <div className="frequency3">Frequency</div>
          <div className="k9"></div>
          <div className="k10"></div>
          <div className="div21"></div>
          <div className="group-child33" alt="" style={{ height: '100px'}}>
            <ScatterChartGraph/>
          </div>
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
          <div className="group-child388">
          <RangeSlider/>
          </div>
          <div id="root"></div>
          <div className="group-child39" alt="">
          <RangeSliderVertical/>
          </div>
          <div className="criticality2">{`Criticality `}</div></CardContent></Card>
          
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
        <div className="group-child40" alt="" style={{ top:'-1px' }}>
          <RangeSlider/>
          </div>
        <div className="impact-cost112">Impact Cost</div>
      </div>
      
      <div className="siem-alert-rule1">SIEM Alert Rule Summary</div>
      <div className="autocomplete5">
      <div className="value22" style={{width:150, marginTop:0, marginLeft:0}}><MultiSelectAS /></div>
        <div className="helper7">
          <div className="text24">Descriptive text</div>
        </div>
        <div className="label8">
          <div className="label-background7">
            <div className="text25" style={{ top:'-15px', right:'15px' }}>Source</div>
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



/*export function RangeSlider() {
  const [value, setValue] = React.useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

}*/

export default AlertSummary;
