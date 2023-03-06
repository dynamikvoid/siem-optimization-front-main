import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoggingCost.css";
import MultiSelectIV1 from "../components/MultiSelectIV1";
import MultiSelectIV2 from "../components/MultiSelectIV2";
import MultiSelectIV3 from "../components/MultiSelectIV3";
import RangeSlider from "../components/rangeSlider";
import StackedAreaChart from "../components/StackedAreaChart";
import ToggleSwitch from "../components/ToggleSwitch";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import RM from "../components/SwitchTab";
import LineChartIV from "../components/LineChartIV";
import ScatterChartGraph from "../components/ScatterPlot";
import { TextField, MenuItem } from "@mui/material";
import ChartTableIV from "../components/ChartTableIV";

const currencies = [
  {
    value: "Days",
    label: "Days",
  },
  {
    value: "Months",
    label: "Months",
  },
  {
    value: "Years",
    label: "Years",
  },
];

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const LoggingCost = () => {
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

  const [toggle, setToggle] = useState("");
  const checkedState = (val) => {
    setToggle(val);
    console.log("checkedState ", val);
  };

  return (
    <div className="logging-cost4">
      <div className="siem-ingestion-volume-by-parent">
        <div className="siem-ingestion-volume2">{`SIEM Ingestion Volume by `}</div>
        <div
          className="value22"
          style={{ width: 150, marginLeft: 750, marginTop: -6 }}
        >
          {" "}
          Source Systems
          <MultiSelectIV1 />
        </div>
        <div
          className="value22"
          style={{ width: 150, marginLeft: 550, marginTop: -63 }}
        >
          {" "}
          Table
          <MultiSelectIV2 />
        </div>
        <div className="overall-siem-ingestion-volume-parent">
          <div className="overall-siem-ingestion3" style={{ marginTop: -50 }}>
            Overall SIEM Ingestion Volume
          </div>
          <div>
            <TextField
              helperText="Forecast&nbsp;the&nbsp;Next"
              label="No. of"
              id="outlined-size-small"
              defaultValue="90"
              size="small"
              style={{
                position: "absolute",
                marginLeft: 900,
                maxWidth: 100,
                marginTop: -42,
              }}
            />
            <TextField
              id="outlined-select"
              size="small"
              select
              label="Select"
              defaultValue="Days"
              style={{
                position: "absolute",
                marginLeft: 1010,
                minWidth: 100,
                marginTop: -42,
              }}
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </div>
          <Card
            sx={{
              minWidth: 200,
              maxWidth: 1200,
              minHeight: 700,
              marginTop: 3,
              marginLeft: -4,
            }}
          >
            <CardContent>
              <LineChartIV />
            </CardContent>
          </Card>
        </div>
        <div></div>
        <div
          style={{
            width: 200,
            position: "absolute",
            marginLeft: 950,
            marginTop: 50,
          }}
        >
          <RangeSlider />
        </div>
        <div className="gb13">35GB</div>
        <div className="gb14" style={{ marginLeft: -100 }}>
          GB/Day 0GB
        </div>
        <div>
          <TextField
            label="See the Last"
            id="outlined-size-small"
            defaultValue="90"
            size="small"
            style={{
              position: "absolute",
              marginLeft: 950,
              maxWidth: 100,
              marginTop: -42,
            }}
          />
          <TextField
            id="outlined-select"
            size="small"
            select
            label="Select"
            defaultValue="Days"
            style={{
              position: "absolute",
              marginLeft: 1060,
              minWidth: 100,
              marginTop: -42,
            }}
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div>
        <div
          className="value22"
          style={{ width: 150, marginLeft: 470, marginTop: 27 }}
        >
          {" "}
          Sources
          <MultiSelectIV3 />
        </div>

        <Card className="cardiv"
          sx={{
            minWidth: 200,
            maxWidth: 1200,
            minHeight: 450,
            marginTop: 1,
            marginLeft: 2,
          }}
        >
          <CardContent style={{ minWidth: 900 }}>
            <p style={{ fontSize: 14, marginLeft: 40, marginTop: 6 }}>
              Detailed View
            </p>

            <div className="vector-parent">
              <ToggleSwitch checkedState={checkedState} />
              {toggle ? (
                <div>
                  <ChartTableIV />
                  <div className="instance-child63" />

                  <div className="switch-container">
                    <div className="switch2"></div>
                  </div>
                </div>
              ) : (
                <div>
                  <StackedAreaChart />
                </div>
              )}
              <div  style={{}}>0 GB</div>
              <div  style={{}}>35 GB</div>
              <b className="azure"></b>
              <b className="opsmanager"></b>
              <b className="linux1"></b>
            </div>

            <div className="switch-container">
              <div className="switch2"></div>
            </div>
          </CardContent>
        </Card>
      </div>

      <img
        className="downloadfilled-icon3"
        alt=""
        src="../downloadfilled2.svg"
      />
      <div className="navbar7">
        <div className="navbar-child5" />
        <div className="button46" onClick={onButtonContainerClick}>
          <div className="container248">
            <img className="prefix-icon46" alt="" src="../prefix46.svg" />
            <div className="text198">Payment Sel.</div>
            <img className="prefix-icon46" alt="" src="../suffix8.svg" />
          </div>
        </div>
        <div className="button47" onClick={onButtonContainer1Click}>
          <div className="container248">
            <img className="prefix-icon46" alt="" src="../prefix47.svg" />
            <div className="text198">Exploration</div>
            <img className="prefix-icon46" alt="" src="../suffix8.svg" />
          </div>
        </div>
        <div className="button48" onClick={onButtonContainer2Click}>
          <div className="container40">
            <img className="prefix-icon46" alt="" src="../prefix48.svg" />
            <div className="text200">Ingestion Volume</div>
            <img className="prefix-icon46" alt="" src="../suffix48.svg" />
          </div>
        </div>
        <div className="button49" onClick={onButtonContainer3Click}>
          <div className="container248">
            <img className="prefix-icon46" alt="" src="../prefix49.svg" />
            <div className="text198">Alert Summary</div>
            <img className="prefix-icon46" alt="" src="../suffix8.svg" />
          </div>
        </div>
        <div className="button50" onClick={onButtonContainer4Click}>
          <div className="container248">
            <img className="prefix-icon46" alt="" src="../prefix50.svg" />
            <div className="text198">Cost Analysis</div>
            <img className="prefix-icon46" alt="" src="../suffix8.svg" />
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
    </div>
  );
};

export default LoggingCost;
