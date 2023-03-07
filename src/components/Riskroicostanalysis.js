import React, { useEffect } from "react";
import {BarChart,Bar,XAxis,YAxis,CartesianGrid,Tooltip,Legend,ResponsiveContainer,ReferenceLine,} from "recharts";

import Axios from 'axios';
import { useState } from "react";

function Riskroicostanalysis(){
    const [data, setData] = useState([]) 
    useEffect(() => {
        Axios.get('/api/GetCostAnalysisData/')
        .then(res => {
            setData(res.data)
        }).catch(err=>console.log(err))
    }, []);
    

    /*if (!data) return "No post!" */
    const riskdata = [];
    for (let n = 0; n <= 40; n++) {
        let m = n+1;
        let d = {
            table: data.slice(n,m).map(x => x.Table ),
            cost: data.slice(n,m).map(az => az.Cost),
            roi : -(data.slice(n,m).map(az => az.ROI)),
        };
    riskdata.push(d);
    }
console.log("Risk Data from page",riskdata)
return (
    <BarChart
      width={900}
      height={400}
      data={riskdata}
      stackOffset="sign"
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="table" />
      <YAxis />
      <Tooltip />
      <Legend />
      <ReferenceLine y={0} stroke="#000" />
      <Bar dataKey="cost" fill="#cc00ff" stackId="stack" />
      <Bar dataKey="roi" fill="#000000" stackId="stack" />
    </BarChart>
  );
}

export default Riskroicostanalysis;
