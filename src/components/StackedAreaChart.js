import { index, precisionRound, sum } from "d3";
import React from "react";
import { useState, useEffect, useCallback } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import moment from "moment";

const StackedAreaChart = () => {
  const [chartData, setchartData] = useState([]);

  useEffect(() => {
    const makeRequest = async () => {
      try {
        let response = await fetch("/api/ingvoldata");
        let json = await response.json();
        setchartData(json);
      } catch (error) {
        console.log(error);
      }
    };
    makeRequest();
  }, []);
  global.timeStamp = chartData.map((x) => moment(x.date).format("YYYY-MM-DD"));

  //global.timeStamp.forEach(element => {

  //});
  const sourceSys = chartData.map((q) => q.sourcesystem);
  const indisourceSys = sourceSys.filter(
    (q, idx) => sourceSys.indexOf(q) === idx
  );
  global.sourceSystem = chartData.map((x) => x.sourcesystem);
  global.dataSizeazure = chartData.map((v) =>
    v.sourcesystem === "Azure AD" && v.sourceSystem !== null
      ? v
      : v.daily_datasize_gb
  );
  global.dataSizelinux = chartData.map((z) =>
    z.sourcesystem === "Linux" && z.sourceSystem !== null
      ? z
      : z.daily_datasize_gb
  );
  global.dataSizeopsmanager = chartData.map((y) =>
    y.sourcesystem === "OpsManager" && y.sourceSystem !== null
      ? y
      : y.daily_datasize_gb
  );
  global.totalSizeazure = Math.round(sum(global.dataSizeazure));
  global.totalSizelinux = Math.round(sum(global.dataSizelinux));
  global.totalSizeopsmanager = Math.round(sum(global.dataSizeopsmanager));

  global.newAzure = chartData
    .filter(
      (azure) => azure.sourcesystem === "Azure" && azure.sourceSystem !== null
    )
    .map((az) => az.daily_datasize_gb);
  //console.log(newAzure)

  //const dateData = timeStamp.map(x =>({pv: x}))
  //const azureData = dataSizeazure.map(y =>({pw: y}))
  //const linuxData = dataSizelinux.map(z =>({pt: z}))
  //const opsmanData = dataSizeopsmanager.map(a =>({pq: a}))

  const data1 = [];
  global.rand = chartData.length;
  global.i = 0;
  //for (global.i = 0; i <= 1; i++) {
for (let srcSys of indisourceSys) {
  if (chartData.length > 100 && srcSys!=='') {
    for (let n = 0; n <= 100; n++) {
      let m = n + 1;
      let d = {
        date: chartData
          .slice(n, m)
          .map((x) => moment(x.date).format("YYYY-MM-DD")),

        srcSys: chartData
          .filter(
            (src) =>
              src.sourcesystem === srcSys && src.sourceSystem !== null
          )
          .slice(n, m)
          .map((az) => az.daily_datasize_gb),
        thisSource: srcSys,  
        // OpsManager: chartData
        //   .filter(
        //     (opsman) =>
        //       opsman.sourcesystem === "OpsManager" &&
        //       opsman.sourceSystem !== null
        //   )
        //   .slice(n, m)
        //   .map((az) => az.daily_datasize_gb),
        // Azure: chartData
        //   .filter(
        //     (azure) =>
        //       azure.sourcesystem === "Azure" && azure.sourceSystem !== null
        //   )
        //   .slice(n, m)
        //   .map((az) => az.daily_datasize_gb),
        //Linux: chartData.map(z => z.sourcesystem === "Linux" ? (z):(z.daily_datasize_gb)),
        // OpsManager: chartData.map(y => y.sourcesystem === "OpsManager" ? (y):(y.daily_datasize_gb)),
        // Azure: dataSizeazure.map(y => y.daily_datasize_gb),
      };

      
      //}
      data1.push(d);
    }
    //console.log(data1)
  }}

  const sortedData1 = data1?.map((obj) => {
    return { ...obj, date: new Date(obj.date) };
  });

  const sortedData = data1.sort(function compare(a, b) {
    var dateA = new Date(a.date);
    var dateB = new Date(b.date);
    return dateA - dateB;
  });

  //const sortedData = sortedData1.sort((a, b) => b.date - a.date)

  //console.log(sortedData1)

  //console.log(data1)

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="label">{`${label} : `}</p>
          <div>
            {payload.map((pld) => (
              <div style={{ display: "inline-block", padding: 30, border: 10 }}>
                <div style={{ color: pld.fill }}>{pld.value}</div>
                <div style={{ color: pld.fill }}>{pld.dataKey}</div>
              </div>
            ))}
          </div>
        </div>
      );
    }

    return null;
  };

 //console.log("sorted",sortedData)



var groups = {};
for (var i = 0; i < sortedData.length; i++) {
  var groupName = sortedData[i].thisSource;
  if (!groups[groupName]) {
    groups[groupName] = [];
  }
  groups[groupName].push({dailyData: sortedData[i].srcSys, date: sortedData[i].date});
  
}
let sortedData2 = [];
for (var groupName in groups) {
  sortedData2.push({source: groupName, srcSysdata: groups[groupName]});
}

let groupedData = sortedData2.map(x => x.srcSysdata)

console.log(data1)

  return (

    <AreaChart
      width={870}
      height={350}
      data={data1}
      margin={{
        top: 20,
        right: 40,
        left: -80,
        bottom: 0,
      }}
    >
      
        
        <>
          <XAxis dataKey="date" />
         <YAxis type="number" domain={[0,35]}/>
         <Tooltip content={CustomTooltip} />
         
          <Area
          type="linear"
          dataKey="srcSys"
          stackId="1"
          stroke="#652ca8"
          fill="#652ca8"
        />
        
         
         
          </>
        
         
         
      

      {/* <Area
        type="linear"
        dataKey="OpsManager"
        stackId="1"
        stroke="#8a38f5"
        fill="#8a38f5"
      />
      <Area
        type="linear"
        dataKey="Azure"
        stackId="1"
        stroke="#d1a8ff"
        fill="#d1a8ff"
      /> */
      
      // const areas = [
      //   {
      //     dataKey: "srcSys",
      //     stroke: "#652ca8",
      //     fill: "#652ca8",
      //   },
      //   {
      //     dataKey: "OpsManager",
      //     stroke: "#8a38f5",
      //     fill: "#8a38f5",
      //   },
      //   {
      //     dataKey: "Azure",
      //     stroke: "#d1a8ff",
      //     fill: "#d1a8ff",
      //   },
      //   // Add more objects as needed
      // ];
      
      // function Areas() {
      //   return (
      //     <>
      //       {areas.map((area, index) => (
      //         <Area
      //           key={index}
      //           type="linear"
      //           dataKey={area.dataKey}
      //           stackId="1"
      //           stroke={area.stroke}
      //           fill={area.fill}
      //         />
      //       ))}
      //     </>
      //   );
      // }
      
      
      
      
      }


    </AreaChart>

  );
};

export default StackedAreaChart;
