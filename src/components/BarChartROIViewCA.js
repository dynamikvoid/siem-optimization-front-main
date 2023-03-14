import React, { Component } from "react";
import { Bar } from "react-chartjs-2";
import Chart from 'chart.js/auto';
import 'chartjs-plugin-datalabels';

const UserData = [
    {
        id: 1,
        year: 'Table 1',
        userGain: 90000,
        userLost: 823,
        label: 80000
    },
    {
        id: 2,
        year: 'Table 2',
        userGain: 65677,
        userLost: 345,
        label: 45677
    },
    {
        id: 3,
        year: 'Table 3',
        userGain: 88888,
        userLost: 555,
    },
    {
        id: 4,
        year: 'Table 4',
        userGain: 100000,
        userLost: 4555,
    },
    {
        id: 5,
        year: 'Table 5',
        userGain: 31300,
        userLost: 234,
    },
    {
        id: 6,
        year: 'Table 6',
        userGain: 66100,
        userLost: 234,
    },
    {
        id: 7,
        year: 'Table 7',
        userGain: 65300,
        userLost: 234,
    },
]

const roiData = [
  {},{},{},{},{},{},
    {
        id: 7,
        year: 'Table 7',
        userGain: -44300,
        userLost: 234,
    },
]

class BarChartROIViewCA extends Component {
  constructor() {
    super();
    this.state = {
      data: {
        labels: UserData.map(o => o.year),
        datasets: [
          {
            label: 'Cost',
            backgroundColor: '#652ca8',
            borderColor: '#652ca8',
            borderWidth: 1,
            data: UserData.map(o => o.userGain),
            stack: 'Stack 0',
          },
          {
            label: 'ROI',
            backgroundColor: '#e8d7f5',
            borderColor: '#e8d7f5',
            borderWidth: 1,
            data: roiData.map(o => o.userGain),
            stack: 'Stack 0',
          }
        ]
      },
      options: {
        plugins: {
            datalabels: {
                display: true,
                color: 'black'
             },
            legend:{
                position: 'top',
                align: 'end',
                labels:{
                    boxWidth:20,
                    boxHeight: 20
                }
            },
          title: {
            display: true,
            text: 'ROI ↓',
            position:'top',
            align: 'end'
          },
        },
        responsive: true,
        interaction: {
        intersect: false,
    },
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
      }
      }
    };
  }

  render() {
    return (
        <div style={{
            position: "relative",
            margin: "auto",
            width: "1100px",
            height: "350px",
          }}>
      <Bar width="1800%"
        height="600%"
        data={this.state.data}
        options={this.state.options}
      />
      </div>
    );
  }
}

export default BarChartROIViewCA