import React, { useState } from 'react';
import ReactSwitch from 'react-switch';

function ToggleSwitch({checkedState}) {
  const [checked, setChecked] = useState(false);

  const handleChange = state => {
    console.log("handleChange", state);
    setChecked(state);
    checkedState(state);
  };

  return (
    
    <div className="app" style={{textAlign: "left", marginTop:-60}}>
      <ReactSwitch
        checked={checked}
        onChange={handleChange}
        onColor="#8304FF"
        uncheckedIcon={false}
        height={20}
      />
    </div>
  );
}

export default ToggleSwitch