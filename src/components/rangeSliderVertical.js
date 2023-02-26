import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valueVtext(vvalue) {
  return `${vvalue}`;
}

export default function RangeSliderVertical() {
  const [value1, setValue1] = React.useState([0, 10000]);

  const handleVChange = (event, newvValue) => {
    setValue(newvValue);
  };

  return (
    <div style={{ height: 300, marginTop: 50 }}>
      <Slider
        getAriaLabel={() => 'Temperature range'}
        value={value1}
        onChange={handleVChange}
        valueLabelDisplay="auto"
        minvalue='0'
        maxvalue='10000'
        getAriaValueText={valueVtext}
        orientation="vertical"
       />
    </div>
  );
}