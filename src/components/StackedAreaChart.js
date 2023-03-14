import React from "react";
import { useState, useEffect } from "react";
import { AreaChart, Area, XAxis, YAxis, Tooltip, Legend } from "recharts";
import moment from "moment";

let mappedData = [];
let filterData = [];

const StackedAreaChart = (prop) => {
  console.log("prop", prop.value);
  const [srcKey, setSrcKey] = useState([]);
  useEffect(() => {
    const makeRequest = async () => {
      try {
        let response = await fetch("/api/ingvoldata");
        let json = await response.json();

        FilterData(json);
      } catch (error) {
        console.log(error);
      }
    };
    makeRequest();
  }, []);

  const FilterData = (json) => {
    mappedData = [];
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
    mappedData = Array.from(map.values());
    filterData = mappedData.slice(0, 10);
    //setData(data1);
  };
  //console.log("setData data", data);

  const valueRange = (pld) => {
    return pld.value.sort((a, b) => b - a).slice(0, 2);
  };

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="label">{`${label} : `}</p>
          <div>
            {payload.map((pld, index) => (
              <div
                key={index}
                style={{ display: "inline-block", padding: 30, border: 10 }}
              >
                <div style={{ color: pld.fill }}>{valueRange(pld)}</div>
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
      {mappedData.length > 0 && srcKey.length > 0 && (
        <AreaChart
          width={870}
          height={350}
          data={mappedData}
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
