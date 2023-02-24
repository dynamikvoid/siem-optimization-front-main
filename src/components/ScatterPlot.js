import React, { useState,useEffect,useCallback } from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, ZAxis, CartesianGrid, Cell, Tooltip} from 'recharts';
import axios from 'axios';
import { namespace, zoom } from 'd3';
import { borderColor } from '@mui/system';
import { Popover, Zoom } from '@mui/material';
import RangeSlider from './rangeSlider';




const ScatterChartGraph = () => {
  
    const [chartData, setchartData] = useState([]);
    
    useEffect(() =>{
      
      

      const makeRequest = async () => {
        try {
          let response = await fetch('/api/asdata');
          let json = await response.json();
          setchartData(json);
        } catch (error) {
          console.log(error);
        }
      }
      makeRequest();
      
     },[]);
      global.xFidelity = chartData.map(x => x.fidelity);
      global.yFrequency = chartData.map(y => y.frequency);
      //console.log(chartData)
      //console.log(global.yFrequency)
    const data1 = [];
     
      for (let n = 0; n <= chartData.length; n++) {
        let m = n+1;
        let d = {
          x: chartData.slice(n,m).map(x => x.fidelity),
          y: chartData.slice(n,m).map(y => y.frequency),
          z: chartData.slice(n,m).filter(v => {
            return (v?.severity_medium || v?.severity_high || v?.severity_low || v?.severity_informational)
          }).map(v => (v?.severity_medium || v?.severity_high || v?.severity_low || v?.severity_informational))
           
      };
      data1.push(d);
    }
    /*console.log(chartData.slice(0,1).filter(v => {
      return (v?.severity_medium || v?.severity_high || v?.severity_low || v?.severity_informational)
    }).map(v =>  {
      return (v?.severity_medium || v?.severity_high || v?.severity_low || v?.severity_informational)}))*/
    /*console.log(chartData.slice(0,1).filter(v => {
      return (v?.severity_medium || v?.severity_high || v?.severity_low || v?.severity_informational)
    }).map(v => (v?.severity_medium || v?.severity_high || v?.severity_low || v?.severity_informational)))*/
      
      /*const data = [
      { x: global.xFidelity[0], y: global.yFrequency[0], colourType:"rgba(214, 0, 0, 0.75)" },
      { x: global.xFidelity[1], y: global.yFrequency[1], colourType: "rgba(214, 0, 0, 0.75)" },
      { x: global.xFidelity[2], y: global.yFrequency[2], colourType:"rgba(214, 0, 0, 0.75)" },
      { x: global.xFidelity[3], y: global.yFrequency[3], colourType:"rgba(214, 0, 0, 0.75)" },
      { x: global.xFidelity[4], y: global.yFrequency[4], colourType:"rgba(255, 122, 0, 0.75)" },
      { x: global.xFidelity[5], y: global.yFrequency[5], colourType:"rgba(255, 122, 0, 0.75)" },
      { x: global.xFidelity[6], y: global.yFrequency[6], colourType:"rgba(255, 122, 0, 0.75)" },
      { x: global.xFidelity[7], y: global.yFrequency[7], colourType:"rgba(255, 122, 0, 0.75)" },
      { x: global.xFidelity[8], y: global.yFrequency[8], colourType:"rgba(255, 122, 0, 0.75)" },
      { x: global.xFidelity[9], y: global.yFrequency[9], colourType:"rgba(255, 122, 0, 0.75)" },
      { x: global.xFidelity[10], y: global.yFrequency[10], colourType:"rgba(232, 252, 0, 0.75)" },
      { x: global.xFidelity[11], y: global.yFrequency[11], colourType:"rgba(232, 252, 0, 0.75)" },
      { x: global.xFidelity[12], y: global.yFrequency[12], colourType:"rgba(232, 252, 0, 0.75)" },
      { x: global.xFidelity[13], y: global.yFrequency[13], colourType:"rgba(232, 252, 0, 0.75)" },
      { x: global.xFidelity[14], y: global.yFrequency[14], colourType:"rgba(232, 252, 0, 0.75)" },
      { x: global.xFidelity[15], y: global.yFrequency[15], colourType:"rgba(232, 252, 0, 0.75)" },
      { x: global.xFidelity[16], y: global.yFrequency[16], colourType:"rgba(232, 252, 0, 0.75)" },
      { x: global.xFidelity[17], y: global.yFrequency[17], colourType:"rgba(214, 0, 0, 0.75)" },
      { x: global.xFidelity[18], y: global.yFrequency[18], colourType:"rgba(232, 252, 0, 0.75)" },
      { x: global.xFidelity[19], y: global.yFrequency[19], colourType:"rgba(214, 0, 0, 0.75)" },
      { x: global.xFidelity[20], y: global.yFrequency[20], colourType:"rgba(232, 252, 0, 0.75)" },
      { x: global.xFidelity[21], y: global.yFrequency[21], colourType:"rgba(214, 0, 0, 0.75)" },
      { x: global.xFidelity[22], y: global.yFrequency[22], colourType:"rgba(232, 252, 0, 0.75)" },
      { x: global.xFidelity[23], y: global.yFrequency[23], colourType:"rgba(214, 0, 0, 0.75)" },
      { x: global.xFidelity[24], y: global.yFrequency[24], colourType:"rgba(214, 0, 0, 0.75)" },
      { x: global.xFidelity[25], y: global.yFrequency[25], colourType:"rgba(232, 252, 0, 0.75)" }
      ];*/
    

    const CustomTooltip = ({ active, payload, label }) => {
      if (active && payload && payload.length) {
        return (
          <div className="custom-tooltip">
            <pre>
            <p className="desc" style={{ textAlign:'center' }}>Fidelity vs Frequency <br/><br/></p>
            
            <ul className="label" style={{ textAlign:'center' }}><br/>{`Fidelity : ${payload[0].value}`}<br/></ul>
            <ul className="label" style={{ paddingTop:30, textAlign:'center' }}><br/>{`Frequency : ${payload[1].value}`}<br/></ul>
            </pre>
            
            
          </div>
        );
      }
      return null;
    };


  return (
    
      <ScatterChart width={850} height={300}>
          { chartData && chartData.result && chartData.map((item, index) => <p key={index}>{item.id}</p>)}
          <XAxis type="number" dataKey="x" axisLine={false} tickLine={false} hide/>
          <YAxis type="number" dataKey="y" axisLine={false} tickLine={false} hide/>
          <ZAxis range={[500, 120]} axisLine={false} tickLine={false} hide/>
          <Tooltip content={<CustomTooltip />} wrapperStyle={{ borderWidth: 0, paddingLeft: "10px", paddingRight: "10px" }}/>
          <Scatter data={data1} stroke="#5A5A5A" strokeWidth={1}>
            {data1.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.colourType ?? "#8884d8"} />
            ))}
            </Scatter>
      </ScatterChart>
  );
   
   

}
export default ScatterChartGraph