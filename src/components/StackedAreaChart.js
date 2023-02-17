import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";

const data = [
  {
    name: "Jun 12, 2023",
    Linux: 4000,
    OpsManager: 2400,
    Azure: 2400
  },
  {
    name: "Jul 12, 2023",
    Linux: 3000,
    OpsManager: 1398,
    Azure: 2210
  },
  {
    name: "Aug 12, 2023",
    Linux: 2000,
    OpsManager: 9800,
    Azure: 2290
  },
  {
    name: "Sep 12, 2023",
    Linux: 2780,
    OpsManager: 3908,
    Azure: 2000
  },
  {
    name: "Oct 12, 2023",
    Linux: 1890,
    OpsManager: 4800,
    Azure: 2181
  },
  {
    name: "Nov 12, 2023",
    Linux: 2390,
    OpsManager: 3800,
    Azure: 2500
  },
  {
    name: "Dec 12, 2023",
    Linux: 3490,
    OpsManager: 4300,
    Azure: 2100
  }
];

export default function StackedAreaChart() {
  return (
    <AreaChart
      width={800}
      height={300}
      data={data}
      margin={{
        top: 10,
        right: 30,
        left: -80,
        bottom: 0
      }}
    >
      
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Area
        type="monotone"
        dataKey="Linux"
        stackId="1"
        stroke="#652ca8"
        fill="#652ca8"
      />
      <Area
        type="monotone"
        dataKey="OpsManager"
        stackId="1"
        stroke="#8a38f5"
        fill="#8a38f5"
      />
      <Area
        type="monotone"
        dataKey="Azure"
        stackId="1"
        stroke="#d1a8ff"
        fill="#d1a8ff"
      />
    </AreaChart>
  );
}