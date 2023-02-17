import React, { useState,useEffect,useCallback } from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, ZAxis, CartesianGrid, Cell} from 'recharts';
import axios from 'axios';

const ScatterChartGraph = () => {
    
    const [chartData, setchartData] = useState({});
    let [xFidelity, setxFidelity] = useState([]);
    let [yFrequency, setyFrequency] = useState([]);


    const chart = () => {
      let xFid = [];
      let yFeq = [];
      axios.get('/api/asdata')
      .then(res => {
        //console.log(res)
        for(const dataObj of res.data){
          xFid.push(parseFloat(dataObj.fidelity))
          yFeq.push(parseInt(dataObj.frequency))
        }
        return(xFid,yFeq)
        
      })
      .catch(err => {
        console.log(err)
      });
      //console.log(xFid,yFeq)
      //console.log(xFid, yFeq)

      setxFidelity({
        x: xFid
      })
      setyFrequency({
       y : yFeq
      })
    }
    
    useEffect(() => {
      chart();
    }, []);

    
    // --> 2.)
    
    

   
        
  // Sample data
  const data = [
      { xFidelity, yFrequency },
      
  ];

  return (
      <ScatterChart width={850} height={300}>
          
          <XAxis type="number" dataKey="xFidelity" axisLine={false} tickLine={false} hide/>
          <YAxis type="number" dataKey="yFrequency" axisLine={false} tickLine={false} hide/>
          <ZAxis range={[500, 120]} axisLine={false} tickLine={false} hide/>
          <Scatter data={data}>
            {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.colourType ?? "#8884d8"} />
            ))}
            </Scatter>
      </ScatterChart>
  );
}

export default ScatterChartGraph