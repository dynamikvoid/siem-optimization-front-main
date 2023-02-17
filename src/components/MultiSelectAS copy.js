import { CMultiSelect } from '@coreui/react-pro'
import { useState, useEffect, useCallback} from 'react'
import "./MultiSelectAs.css"

const MultiSelecter = () => {

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
    }, [getSource])
    return (
    <CMultiSelect 
        
        options={source}
        onFilterChange={(value) => getSource(value)}
        text="Please select your user."
        virtualScroller
    />
    );
}

export default MultiSelecter