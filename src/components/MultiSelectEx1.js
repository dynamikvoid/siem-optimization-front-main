import React, { useState } from "react";
import { MultiSelect } from "react-multi-select-component";

const options = [
  { label: "Source", value: "Source" },
  { label: "Table", value: "Table" },
  { label: "Alert Rule", value: "alertrule" },
  { label: "Incident", value: "Incident" }
];

const MultiSelectEx1 = () => {
  const [selected, setSelected] = useState([]);

  return (
    
      
      
      <MultiSelect
        options={options}
        value={selected}
        onChange={setSelected}
        labelledBy="Node1"
      />
    
  );
};
export default MultiSelectEx1

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

    
    

    