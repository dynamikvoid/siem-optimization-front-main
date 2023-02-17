import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value) {
  return `${value}`;
}

export default function RangeSliderVertical() {
  const [value, setValue] = React.useState([0, 10000]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div style={{ height: 300, marginTop: 50 }}>
      <Slider
        getAriaLabel={() => 'Temperature range'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        minvalue='0'
        maxvalue='10000'
        getAriaValueText={valuetext}
        orientation="vertical"
       />
    </div>
  );
}