import React from "react";
import { Line } from "react-chartjs-2";

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  datasets: [
    {
      label: "Forcasted Upper Bound",
      data: [NaN, NaN, NaN, NaN, NaN, 13, 29],
      fill: 1,
      borderColor: "transparent",
      tension: 0.1,
      backgroundColor: "#e8d7f5",
      order: 1,
    },
    {
      label: "Current Data",
      data: [10, 12, 14, 11, 16, 13, 18],
      fill: false,
      borderColor: "#652ca8",
      tension: 0.1,
      order: 0,
    },
    {
      label: "Forcasted Lower Bound",
      data: [NaN, NaN, NaN, NaN, NaN, 13, 6],
      fill: 1,
      borderColor: "transparent",
      tension: 0.1,
      backgroundColor: "#e8d7f5",
      order: 1,
    },
  ],
};

const LineChartIV = () => {
  return (
    <div
      style={{
        position: "relative",
        margin: "auto",
        width: "1000px",
        height: "290px",
      }}
    >
      <Line
        data={data}
        width="1800%"
        height="500%"
        options={{
          scales: {
            x: {
              grid: {
                drawOnChartArea: false,
              },
              border:{
                display:false
              },
              ticks: {
                display: true,
              },
            },
            y: {
              grid: {
                drawOnChartArea: false,
                display: false,
              },
              ticks: {
                display: false,
              },
              border:{
                display:false
              }
            },
          },
        }}
      />
    </div>
  );
};

export default LineChartIV;
