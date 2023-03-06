import React from "react";
import { Line } from "react-chartjs-2";


const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true
        }
      }
    ]
  }
};

const LineChart = ({ data }) => (
  <>
    <div className="header">
      <h1 className="title">Line Chart</h1>
      
    </div>
    <Line data={data} options={options} />
  </>
);

export default LineChart;
