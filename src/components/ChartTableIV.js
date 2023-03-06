import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
//import LineChartIV from "./LineChartIV";

import { sum } from "d3";
import moment from "moment";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

/* 2/08/23 GetData API Call*/
const ChartTableIV = () => {
  const [ingdata, setIngdata] = useState([]);

  // Fetch data --> 1.)
  useEffect(() => {
    // Fetch the Payroll Data related to the logged in User
    const makeRequest = async () => {
      try {
        let response = await fetch("/api/ingvoldata");
        let json = await response.json();
        setIngdata(json);
      } catch (error) {
        console.log(error);
      }
    };
    makeRequest();
  }, []);

  let sourceObj = [];
  //  if(ingdata){
  //   for(const srcSys of ingdata){
  //     if(!sourceObj.includes(srcSys)){
  //       sourceObj = [];
  //       sourceObj= ingdata.filter(x => x.sourcesystem === srcSys.sourcesystem && x.sourceSystem !== null)
  //     .map(az => az.sourcesystem)
  //     console.log("sourceObj", sourceObj)
  //     }}}

  const options = {
    responsive: false,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
        text: "Chart.js Line Chart",
      },
    },
    scales: {
      // to remove the labels
      x: {
        ticks: {
          display: false,
          autoSkip: true,
          maxTicksLimit: 20,
        },
        grid: {
          drawBorder: false,
          display: false,
        },
      },
      y: {
        ticks: {
          display: false,
          beginAtZero: true,
        },
        // to remove the y-axis grid
        grid: {
          drawBorder: false,
          display: false,
        },
      },
    },
  };

  const sourceSys = ingdata.map((q) => q.sourcesystem);
  let startDateraw = ingdata
    .filter((x) => x.date === "2022-10-21T00:00:00Z")
    .slice(0, 1)
    .map((q) => q.date);
  const indisourceSys = sourceSys.filter(
    (q, idx) => sourceSys.indexOf(q) === idx
  );
  let startDate = new Date(startDateraw);
  let nextMonthdate = moment(
    startDate.setDate(startDate.getDate() + 10)
  ).format("DD-MM-YYYY");

  let fromDate = [];
  let toDate = [];
  let allDates = ingdata.map((x) => x.date);
  let dateNow = ingdata.filter((obj) => {
    return (
      moment(obj.date).format("DD-MM-YYYY") >=
        moment(startDate).format("DD-MM-YYYY") &&
      moment(obj.date).format("DD-MM-YYYY") <=
        moment(nextMonthdate).format("DD-MM-YYYY")
    );
  });

  console.log("new", dateNow);

  let sourceData = [];

  for (let srcSys of indisourceSys) {
    if (srcSys !== "") {
      let thisSource = [];
      let thissourceData = [];
      let sumsourceData = 0;
      let dailydataSize = 0;
      let d = {
        thisSource: srcSys,

        thissourceData: ingdata
          .filter(
            (x) =>
              x.sourcesystem === srcSys &&
              x.sourcesystem !== "" &&
              moment(x.date).format("DD-MM-YYYY") >=
                moment(startDate).format("DD-MM-YYYY") &&
              moment(x.date).format("DD-MM-YYYY") <=
                moment(nextMonthdate).format("DD-MM-YYYY")
          )
          .map((x) => x.daily_datasize_gb),

        sumsourceData: sum(
          ingdata
            .filter(
              (x) =>
                x.sourcesystem === srcSys &&
                x.sourcesystem !== "" &&
                moment(x.date).format("DD-MM-YYYY") >=
                  moment(startDate).format("DD-MM-YYYY") &&
                moment(x.date).format("DD-MM-YYYY") <=
                  moment(nextMonthdate).format("DD-MM-YYYY")
            )
            .map((x) => x.daily_datasize_gb)
        ),

        dailydataSize: sum(
          ingdata
            .filter(
              (x) =>
                x.date === "2022-10-26T00:00:00Z" &&
                x.date !== "" &&
                x.sourcesystem === srcSys
            )
            .map((x) => x.daily_datasize_gb)
        ),
      };
      //sourceData.push(thissourceData)
      //console.log("dated",d)
      sourceData.push(d);
    }
  }
  //const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  //const result = sourceData.reduce((a, v) => ({ ...a, [v]: v}), {});

  //console.log(sourceData);

  global.sourceSystem = ingdata.map((x) => x.sourcesystem);
  global.dataSizelinux = ingdata
    .filter((z) => z.sourcesystem === "Linux" && z.sourcesystem !== null)
    .map((x) => x.daily_datasize_gb);
  let sumData = Math.round(sum(global.dataSizelinux));

  // --> 2.)
  /*const runItemsRulename = asdata.map((run) =>
        <div key={run.id} className="flex justify-between p-2 text-lg text-base">
            <div>
                {run.rulename} 
            </div>
         </div>)
    const runItemsAnnValue = asdata.map((run) =>
    <div key={run.id} className="flex justify-between p-2 text-lg text-base">
        <div>
            $ {run.annualizedrecoveryvalue} 
        </div>
     </div>     
    );*/

  return (
    
      <TableContainer 
        
        style={{ minWidth: 1175, maxHeight: 360, marginLeft: -155}}
      >
        <Table
          style={{ minWidth: 800, marginLeft: -10 }}
          stickyHeader
          aria-label="sticky table"
        >
          <TableHead>
            <TableRow>
              <TableCell style={{ fontSize: 20 }} align="center">
                Source
              </TableCell>
              <TableCell style={{ fontSize: 20 }} align="left">
                Ingestion Volume
              </TableCell>
              <TableCell style={{ fontSize: 20 }} align="left">
                Today's Volume
              </TableCell>
              <TableCell style={{ fontSize: 20 }} align="left">
                Wow% Change
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sourceData.map((listValue, index) => {
              return (
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  key={index}
                >
                  <TableCell component="th" scope="row" align="center">
                    {listValue.thisSource}
                  </TableCell>
                  <TableCell align="right" width="30%">
                    <Line
                      options={options}
                      data={{
                        labels: listValue.thissourceData,
                        datasets: [
                          {
                            fill: true,
                            label: "Vol in Gb",
                            data: listValue.thissourceData,
                            borderColor: "#cc66ff",
                            backgroundColor: "#dd99ff",
                          },
                        ],
                      }}
                    />
                    {/* <AreaChart
      width={500}
      height={100}
      data={sourceData}
      margin={{
        top: 10,
        right: 40,
        left: 0,
        bottom: 0
      }}
    >
      <XAxis dataKey="date" />
      <YAxis />
      <Area
        type="monotone"
        dataKey="srcSys"
        stackId="1"
        stroke="#652ca8"
        fill="#652ca8"
      />
      </AreaChart> */}
                  </TableCell>
                  <TableCell align="left" width="20%">
                    {listValue.dailydataSize}
                  </TableCell>
                  <TableCell align="left">{listValue.dailydataSize}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    
  );
};

export default ChartTableIV;
