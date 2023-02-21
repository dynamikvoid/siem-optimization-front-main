import React, { useState, useEffect } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



/* 2/08/23 GetData API Call*/
const GetAsData = () => {

    const [Asdata, setAsdata] = useState([])

    // Fetch data --> 1.)
    useEffect(() => {

        // Fetch the Payroll Data related to the logged in User
        const makeRequest = async () => {
          try {
            let response = await fetch('/api/asdata');
            let json = await response.json();
            setAsdata(json);
          } catch (error) {
            console.log(error);
          }
        }
        makeRequest();
        
       },[]);
        global.ruleName = Asdata.map(x => x.rulename);
        global.annRecval = Asdata.map(y => y.annualizedrecoveryvalue);
      
    // --> 2.)
    /*const runItemsRulename = asdata.map((run) =>
        <div key={run.id} className="flex justify-between p-2 text-lg text-base">
            <div>
                {run.rulename} 
            </div>
         </div>)
    const runItemsAnnValue = asdata.map((run) =>
    <div key={run.id} className="flex justify-between p-2 text-lg text-base">
        <div>
            $ {run.annualizedrecoveryvalue} 
        </div>
     </div>     
    );*/

    return (
        <Paper sx={{ width: '100%', overflow: 'hidden', marginLeft: -5 }}>
              <TableContainer component={Paper} style={{  minWidth: 1175, maxHeight: 300 }}>
                <Table style={{ minWidth: 800, marginLeft: -10 }} stickyHeader aria-label="sticky table">
                  <TableHead>
                    <TableRow>
                      <TableCell style={{ fontSize: 20 }}>Rule Name</TableCell>
                      <TableCell style={{ fontSize: 20 }} align="right">Ann. Recovery Value</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                  {Asdata.map(( listValue, index ) => {
                    return (
                      <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }} key={index}>
                        <TableCell component="th" scope="row">
                          {listValue.rulename}
                        </TableCell>
                        <TableCell align="right">$ {listValue.annualizedrecoveryvalue}</TableCell>
                        
                      </TableRow>
                    );})}
                  </TableBody>
                </Table>
              </TableContainer>
              </Paper>
            );
          }



    
    

export default GetAsData