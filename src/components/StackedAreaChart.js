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
  Legend,
} from "recharts";
import moment from "moment";

let data1 = [];
let filterData = [];

const StackedAreaChart = () => {
  const [excelData, setData] = useState();
  const [srcKey, setSrcKey] = useState([]);
  useEffect(() => {
    const makeRequest = async () => {
      try {
        let response = await fetch("/api/ingvoldata");
        let json = await response.json();

        //global.timeStamp = json.map((x) => moment(x.date).format("YYYY-MM-DD"));

        // global.sourceSystem = json.map((x) => x.sourcesystem);
        // global.dataSizeazure = json.map((v) =>
        //   v.sourcesystem === "Azure AD" && v.sourceSystem !== null
        //     ? v
        //     : v.daily_datasize_gb
        // );
        // global.dataSizelinux = json.map((z) =>
        //   z.sourcesystem === "Linux" && z.sourceSystem !== null
        //     ? z
        //     : z.daily_datasize_gb
        // );
        // global.dataSizeopsmanager = json.map((y) =>
        //   y.sourcesystem === "OpsManager" && y.sourceSystem !== null
        //     ? y
        //     : y.daily_datasize_gb
        // );
        // global.totalSizeazure = Math.round(sum(global.dataSizeazure));
        // global.totalSizelinux = Math.round(sum(global.dataSizelinux));
        // global.totalSizeopsmanager = Math.round(sum(global.dataSizeopsmanager));

        // global.newAzure = json
        //   .filter(
        //     (azure) =>
        //       azure.sourcesystem === "Azure" && azure.sourceSystem !== null
        //   )
        //   .map((az) => az.daily_datasize_gb);

        FilterData(json);
      } catch (error) {
        console.log(error);
      }
    };
    makeRequest();
  }, []);

  const FilterData = (json) => {
    data1 = [];
    global.rand = json.length;
    global.i = 0;

    const map = new Map();
    let keyArray = [];
    for (let srcSys of json) {
      if (!keyArray.includes(srcSys.sourcesystem)) {
        keyArray.push(srcSys.sourcesystem);
      }

      if (map.has(srcSys.date)) {
        const dataObj = map.get(srcSys.date);
        if (dataObj[srcSys.sourcesystem]) {
          let sArr = dataObj[srcSys.sourcesystem];
          sArr.push(srcSys.daily_datasize_gb);
          dataObj[srcSys.sourcesystem] = sArr;
        } else {
          dataObj[srcSys.sourcesystem] = [srcSys.daily_datasize_gb];
        }
      } else {
        map.set(srcSys.date, {
          date: srcSys.date,
          [srcSys.sourcesystem]: [srcSys.daily_datasize_gb],
        });
      }
    }

    setSrcKey(keyArray);
    data1 = Array.from(map.values());
    filterData = data1.slice(0, 10);
    //setData(data1);
  };
  //console.log("setData data", data);

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

  return (
    <>
      {data1.length > 0 && srcKey.length > 0 && (
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
          <XAxis dataKey="date" />
          <YAxis type="number" domain={[0, 1]} />
          <Tooltip content={CustomTooltip} />
          <Legend />
          {srcKey.map((key) => (
            <Area
              key={key}
              type="linear"
              dataKey={key}
              stackId="1"
              stroke={`#${Math.floor(Math.random() * 16777215).toString(16)}`}
              fill={`#${Math.floor(Math.random() * 16777215).toString(16)}`}
            />
          ))}
        </AreaChart>
      )}
    </>
  );
};

export default StackedAreaChart;
