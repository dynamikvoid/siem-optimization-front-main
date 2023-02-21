import React, { useState } from "react";
import { MultiSelect } from "react-multi-select-component";

const options = [
  { label: "Table2", value: "Table2" },
  { label: "Table1", value: "Table1" },
  ,
];

const MultiSelectEx2 = () => {
  const [selected, setSelected] = useState([]);

  return (
    
      
      
      <MultiSelect
        options={options}
        value={selected}
        onChange={setSelected}
        labelledBy="Source"
      />
    
  );
};
export default MultiSelectEx2

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

    
    

    