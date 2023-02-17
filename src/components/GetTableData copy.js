import React, { useState, useEffect} from 'react'
import AlertSummaryDataList from './AlertSummaryDataList'

/* 2/08/23 GetData API Call*/
const GetAsData = () => {

    let [asdata, setAsdata] = useState([])
    useEffect(()=> {
      getAsdata()
    },[])
  
    let getAsdata = async () => {
      let response = await fetch('/api/asdata/')
      let data = await response.json()
      /*console.log('DATA:', data)*/
      setAsdata(data)
    }

    return (
      <div class='card' style={{ border: '10px solid white', padding: '10px', width: '1140px', marginLeft: '-40px' }}>
      <table>
        <thead>
          <tr>
            <th style={{ fontSize: '18px' }}>Rule Name</th>
            <th style={{ fontSize: '18px' }}>Ann. Recovery Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{asdata.map((oneasdata, index) =>(
                    <AlertSummaryDataList key={asdata.id} oneasdata={oneasdata}/>
                ))}</td>
            <td>{asdata.map((oneasdata, index) =>(
                    <h3 key={asdata.id} style={{ fontSize: '18px' }}>${oneasdata.annualizedrecoveryvalue}</h3>
                ))}</td>
          </tr>
        </tbody>
      </table>
    </div>
    )}

export default GetAsData