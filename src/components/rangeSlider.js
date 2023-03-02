import * as React from 'react';
import { useQuery,Mutation } from '@tanstack/react-query';
import Slider from '@mui/material/Slider';
import axios from 'axios';
import ScatterChartGraph from './ScatterPlot';

global.updValue = [0,1];

function valuetext(value) {
  return `${value}`;
}


export function updateValue () {
   let v = global.updValue;
   return v;
}

export default function RangeSlider() {
  const [value, setValue] = React.useState([0, 35000]);

  /*const {data, isLoading} = useQuery(["id"], async ()=>{
    const res = await axios.get('/api/asdata');
    return res.data;
  });
    //console.log(data)

  if (isLoading) {
    return <p>Loading...</p>
  }*/

  //global.val = data.map(x => x.fidelity)

  const handleChange = (event, newValue) => {
    if (newValue === undefined) {
      global.updValue = [0,35000]
      setValue(global.updValue);
    }
    else {
      global.updValue = newValue;
      setValue(newValue);
      updateValue();
    }
    
  };

  
  

  //console.log(value)
 

  return (
    <div sx={{ width: 300 }}>
      <Slider
        getAriaLabel={() => 'Fidelity'}
        min={0}
        max={35000}
        step={1000}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
      />
    </div>
  );
}

