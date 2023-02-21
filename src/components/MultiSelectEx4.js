import React, { useState } from "react";
import { MultiSelect } from "react-multi-select-component";

const options = [
  { label: "Azure", value: "Azure" },
  { label: "Ops Manager", value: "opsmanager" },
  { label: "Linux", value: "linux" }
];

const MultiSelectEx4 = () => {
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
export default MultiSelectEx4

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

    
    

    