import React, { Component } from 'react'
import Chart from 'react-google-charts'


export const data = [
    ["From", "To", "Weight"],
    ["Azure", "Table1", 5],
    ["Azure", "Table2", 1],
    ["Azure", "2", 1],
    ["Linux", "Table2", 1],
    ["Linux", "Multistage Attack", 5],
    ["Linux", "3", 1],
    ["OpsManagment", "Table1", 1],
    ["OpsManagment", "Table2", 1],
    ["OpsManagment", "Outskirts", 1],
    ["OpsManagment", "1", 5],
    ["Table1", "Multistage Attack", 1],
    ["Table1", "Changes to PIM sesttings", 3],
    ["Table1", "Outskirts", 3],
    ["Table1", "1", 3],
    ["Table1", "4", 1],
    ["Multistage Attack", "1", 1],
    ["Multistage Attack", "2", 3],
    ["Multistage Attack", "4", 1],
    ["Table2", "Multistage Attack", 5],
    ["Table2", "Changes to PIM sesttings", 1],
    ["Table2", "4", 3],
    ["Multistage Attack", "2", 5],
    ["Changes to PIM sesttings", "1", 1],
    ["Changes to PIM sesttings", "2", 3],
    ["Outskirts", "1", 5],
    ["Outskirts", "3", 1],
    ["Outskirts", "4", 3],
    ];

    var colors_link = ['#95A5A6','#008080', '#2874A6', ]
    

    var colors_node =['#2874A6', '#76D7C4', '#F5CBA7', '#D2B4DE', '#A569BD', '#FFBB33','#C5E01C','#40E01C','#1CBFE0', '#1C4CE0',
    '#6B66C2','#C2668A']
    
  export const options = {
    sankey: {
    link: { colorMode: 'source',
    colors: colors_link },
    node: {
        colors: colors_node,
    },
  },
  };


class SankeyChart extends Component {
  render() {
    return (
      <div className="container mt-5">
        
        <Chart
          width={940}
          height={'350px'}
          chartType="Sankey"
          loader={<div>Loading Chart</div>}
          data={data}
          options={options}
          rootProps={{ 'data-testid': '1' }}
        />
      </div>
    )
  }
}
export default SankeyChart