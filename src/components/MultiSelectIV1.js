import React, { useState } from "react";
import { MultiSelect } from "react-multi-select-component";

const options = [
  { label: "Azure", value: "Azure" },
  { label: "Sentinel One", value: "Sentinel One" },
  { label: "Palo Alto", value: "Palo Alto" },
];

const MultiSelectIV1 = () => {
  const [selected, setSelected] = useState([]);

  return (
    <div>
      
      
      <MultiSelect
        options={options}
        value={selected}
        onChange={setSelected}
        labelledBy="Select"
      />
    </div>
  );
};
export default MultiSelectIV1

/*const MultiSelecter = () => {

    const [source, setSource] = useState([])
    const getSource = useCallback((id = "") => {
    fetch(`/api/asdata/?pk=${id}`)
        .then((response) => response.json())
        .then((result) => {
        setSource(
            result.map((record) => {
            return {
                value: record.id,
                text: record.rulename,
            }
            }),
        )
        })
    }, [])
    useEffect(() => {
    getSource()
    }, [getSource]) */

    
    

    