import * as React from "react";
import Slider from "@mui/material/Slider";

function valuetext(value) {
  return `${value}`;
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
    setValue(newValue);
  };

  //console.log(value)

  return (
    <div sx={{ width: 300 }}>
      <Slider
        getAriaLabel={() => "Fidelity"}
        min={0}
        max={35000}
        step={100}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
      />
    </div>
  );
}
