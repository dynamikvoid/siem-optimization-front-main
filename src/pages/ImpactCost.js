import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "@mui/material";
import { CardContent } from "semantic-ui-react";
import { TextField, MenuItem } from "@mui/material";

import "./ImpactCost.css";
import GetAsDataImpCost from "../components/GetTableDataImpCost";

const ImpactCost = () => {
  const navigate = useNavigate();

  const onButtonContainerClick = useCallback(() => {
    navigate("/07-pricing-structure");
  }, [navigate]);

  const onButtonContainer1Click = useCallback(() => {
    navigate("/06-impact-cost");
  }, [navigate]);

  const onGroupContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="impact-cost">
      <div className="navbar1">
        <div className="navbar-item" />
        <div className="button4" onClick={onButtonContainerClick}>
          <div className="container40">
            <img className="prefix-icon4" alt="" src="../prefix4.svg" />
            <div className="text44">Pricing Structure</div>
            <img className="prefix-icon4" alt="" src="../suffix4.svg" />
          </div>
        </div>
        <div className="button5" onClick={onButtonContainer1Click}>
          <div className="container40">
            <img className="prefix-icon4" alt="" src="../prefix5.svg" />
            <b className="text44">Impact Cost</b>
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
      
      <div className="impact-cost-settings-container">
        <b>{`Impact Cost Settings `}</b>
        <span>by Severity</span>
        <b>{` `}</b>
      </div>
      <div>
        <Card sx={{ minWidth: 200, maxWidth:1100, minHeight:250, marginTop:30,marginLeft:22, marginRight:-2}}>
          <CardContent>
            
          </CardContent>
        </Card>
      </div>
      <TextField
              helperText=""
              label="Info"
              id="outlined-size-small"
              defaultValue="$1.00"
              size="medium"
              style={{
                position: "absolute",
                marginLeft: 250,
                maxWidth: 150,
                marginTop: -100,
              }}
            />
      <TextField
              helperText=""
              label="Low"
              id="outlined-size-small"
              defaultValue="$250.00"
              size="medium"
              style={{
                position: "absolute",
                marginLeft: 490,
                maxWidth: 150,
                marginTop: -100,
              }}
            />
      <TextField
              helperText=""
              label="Medium"
              id="outlined-size-small"
              defaultValue="$2,500.00"
              size="medium"
              style={{
                position: "absolute",
                marginLeft: 730,
                maxWidth: 150,
                marginTop: -100,
              }}
            />
      <TextField
              helperText=""
              label="High"
              id="outlined-size-small"
              defaultValue="$20,000.00"
              size="medium"
              style={{
                position: "absolute",
                marginLeft: 980,
                maxWidth: 150,
                marginTop: -100,
              }}
            />                  
      
      
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
        
        <div className="alert-rule-values">Alert Rule Values</div>
        <div className="set-the-value">
          Set the value for an alert firing at each severity level for each
          specific alert rule.
        </div>
        
          
          <GetAsDataImpCost/>
        
        
      </div>
    </div>
  );
};

export default ImpactCost;
