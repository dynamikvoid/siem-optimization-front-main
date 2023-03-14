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

let dataNew = [];
chartData.forEach((item) => {
  let obj = {};
  obj.date= moment(item.date).format("YYYY-MM-DD");
  obj[item.sourcesystem] = item.daily_datasize_gb;
  dataNew.push(obj);
  //console.log(obj)
});
console.log("dataNew",dataNew)





let combinedObj = {};

dataNew.forEach((obj) => {
  Object.entries(obj).forEach(([key, value]) => {
    if (combinedObj.hasOwnProperty(key)) {
      combinedObj[key].push(value);
    } else {
      combinedObj[key] = [value];
    }
  });
});



let arrayOfCombinedObjs = [];
arrayOfCombinedObjs.push(combinedObj);

console.log("dataNew1",(arrayOfCombinedObjs));
let dataNew1 = [];
//Map 


// let keys = Object.keys(arrayOfCombinedObjs[0]).filter(key => key !== "date");

// //loop through the date array to create a new object for each date
// for (let i = 0; i < arrayOfCombinedObjs.length; i++) {
//   let obj = { date: arrayOfCombinedObjs.date[i] };
  
//   // loop through the keys array to dynamically create the properties
//   for (let j = 0; j < keys.length; j++) {
//     obj[keys[j]] = arrayOfCombinedObjs[keys[j]][i];
//   }
  
//   dataNew1.push(obj);
// }

//console.log("dataNew1",(arrayOfCombinedObjs.date[0]));


  //console.log("Combined",arrayOfCombinedObjs);


  const data1 = [];
  global.rand = chartData.length;
  global.i = 0;
  for (global.i = 0; i <= 1; i++) {
  for (let srcSys of indisourceSys) {
    if (chartData.length > 100 && srcSys !== "") {
      for (let n = 0; n <= 30; n++) {
        let m = n + 1;
        let d = {
          date: chartData
            .slice(n, m)
            .map((x) => moment(x.date).format("YYYY-MM-DD")),

          // srcSys: chartData
          //   .filter(
          //     (src) => src.sourcesystem === srcSys && src.sourceSystem !== ''
          //   )
          //   .slice(n, m)
          //   .map((az) => az.daily_datasize_gb),
          // thisSource: srcSys,
          OpsManager: chartData
            .filter(
              (opsman) =>
                opsman.sourcesystem === "OpsManager" &&
                opsman.sourceSystem !== null
            )
            .slice(n, m)
            .map((az) => az.daily_datasize_gb),
          Azure: chartData
            .filter(
              (azure) =>
                azure.sourcesystem === "Azure" && azure.sourceSystem !== null
            )
            .slice(n, m)
            .map((az) => az.daily_datasize_gb),
          Linux: chartData.map(z => z.sourcesystem === "Linux" ? (z):(z.daily_datasize_gb)),
          // OpsManager: chartData.map(y => y.sourcesystem === "OpsManager" ? (y):(y.daily_datasize_gb)),
          // Azure: dataSizeazure.map(y => y.daily_datasize_gb),
        };
        data1.push(d);
        }
        
      }
      //console.log(data1)
    }
  }

  
  

  

  // const stackData = [];
  // for (let i = 0; i < 2; i++) {
  // for (let thisSys of indisourceSys) {
    
      
        
  //       let j = i + 1;
  //       let d = {
  //         date: data1
  //           .slice(i, j)
  //           .filter((em) => em.thisSource === thisSys && thisSys !== "" && em?.date)
  //           .flatMap((el) => el.date),
  //         [thisSys]: data1
  //           .slice(i, j)
  //           .filter((em) => em.thisSource === thisSys && thisSys !== "" && em?.srcSys)
  //           .map((em) => em.srcSys),
  //       };
        
  //       stackData.push(d);
      
  //   }
  // }
  //console.log("data1",data1);

//   function getUniqueListBy(arr, key) {
//     return [...new Map(arr.map(item => [item[key], item])).values()]
// }

// const arr1 = getUniqueListBy(data1, 'place')

  // const sortedData1 = data1?.map((obj) => {
  //   return { ...obj, date: new Date(obj.date) };
  // });

  // const sortedData = data1.sort(function compare(a, b) {
  //   var dateA = new Date(a.date);
  //   var dateB = new Date(b.date);
  //   return dateA - dateB;
  // });

  //const sortedData = sortedData1.sort((a, b) => b.date - a.date)

  //console.log(sortedData1)

  console.log("data1",data1)

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

  // var groups = {};
  // for (var i = 0; i < sortedData.length; i++) {
  //   var groupName = sortedData[i].thisSource;
  //   if (!groups[groupName]) {
  //     groups[groupName] = [];
  //   }
  //   groups[groupName].push({dailyData: sortedData[i].srcSys, date: sortedData[i].date});

  // }
  // let sortedData2 = [];
  // for (var groupName in groups) {
  //   sortedData2.push({source: groupName, srcSysdata: groups[groupName]});
  // }

  // let groupedData = sortedData2.map(x => x.srcSysdata)

  // const activityData = sortedData[0]
  // const srcID = sortedData.map(el=> Object.keys(el)[1])

  // const handleEvents = (array) => {
  // if(data1.length > 0){
  //   return data1.map(function(each){
  //     return( <Area
  //       type="linear"
  //       dataKey={each.srcSys}
  //       stackId="1"
  //       stroke="#652ca8"
  //       fill="#652ca8"
  //     />)
  //   })
  // } else {
  //   return []
  // }}

  // const createAreas = () => {

  //   const area = () => { for(let sScr of indisourceSys){
  //     sortedData.flatMap((id) => {
  //      (<Area key={`area_${id}`} dataKey={id.srcSys} stroke="#8884d8" type="linear" stackId="1" fill="#8884d8"/>)
  //   })
  // }};
  //   return area;
  // }

  
  
 

  const areaKeys = dataNew.map((el) => Object.keys(el)[1]);
  let newArray = areaKeys.filter((q, idx) => 
  areaKeys.indexOf(q) === idx);
  console.log("Area",newArray);

  // const areaKeys = stackData.map((el) => Object.keys(el)[1]);
  //Object.keys(stackData[1]).filter(key => key !== 'date')
  //console.log(areaKeys);

  return (
    <AreaChart
      width={870}
      height={350}
      data={dataNew}
      margin={{
        top: 20,
        right: 40,
        left: -80,
        bottom: 0,
      }}
    >
      
      <XAxis dataKey="date" />
      
      <YAxis type='numbers' domain={['0','.7']}/>
      <Tooltip content={CustomTooltip} />

       {/* { data1.map(function(nested){
        return data1.map(function(el){
          
        })
      })} */}
      {
        newArray.map((key) => (
          <Area
            key={key}
            type="monotone"
            dataKey={key}
            stackId="1"
            stroke={`#${Math.floor(Math.random() * 16777215).toString(16)}`} // random stroke color
            fill={`#${Math.floor(Math.random() * 16777215).toString(16)}`} // random fill color
          />
        ))
      } 

       {/* <Area
          type="linear"
          dataKey="Azure"
          stackId="1"
          stroke="#652ca8"
          fill="#652ca8"
        /> 

      <Area
        type="linear"
        dataKey="OpsManager"
        stackId="1"
        stroke="#8a38f5"
        fill="#8a38f5"
      />  */}
      {/* <Area
        type="linear"
        dataKey="Azure"
        stackId="1"
        stroke="#d1a8ff"
        fill="#d1a8ff"
      /> */}
    </AreaChart>
  );
};

export default StackedAreaChart;
