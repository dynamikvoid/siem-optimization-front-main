import React, { useState } from "react";
import { MultiSelect } from "react-multi-select-component";

const options = [
  { label: "Tabl1", value: "table1" },
  { label: "Table2", value: "table2" },
  { label: "Table3", value: "table3" },
];

const MultiSelectIV2 = () => {
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
export default MultiSelectIV2

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

    
    

    