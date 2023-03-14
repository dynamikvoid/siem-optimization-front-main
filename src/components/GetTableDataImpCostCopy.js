import React, { useState, useEffect } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TablePagination from "@mui/material/TablePagination";
import Paper from '@mui/material/Paper';



/* 2/08/23 GetData API Call*/
const GetAsDataImpCost = () => {

    const [Asdata, setAsdata] = useState([]);
    const [pg, setpg] = React.useState(0);
    const [rpg, setrpg] = React.useState(5);

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
      
        
      
        function handleChangePage(event, newpage) {
            setpg(newpage);
        }
      
        function handleChangeRowsPerPage(event) {
            setrpg(parseInt(event.target.value, 10));
            setpg(0);
        }

    return (
        <Paper sx={{ width: '100%', overflow: 'hidden', marginLeft: 0, maxHeight:370 }}>
              <TableContainer component={Paper} style={{  minWidth: 1120, maxHeight: 370 }}>
                <Table style={{ minWidth: 800, marginLeft: -10 }} stickyHeader aria-label="sticky table">
                  <TableHead>
                    <TableRow>
                      <TableCell style={{ fontSize: 16 }}>Rule Name</TableCell>
                      <TableCell style={{ fontSize: 16 }} align="right">Info</TableCell>
                      <TableCell style={{ fontSize: 16 }} align="right">Low</TableCell>
                      <TableCell style={{ fontSize: 16 }} align="right">Medium</TableCell>
                      <TableCell style={{ fontSize: 16 }} align="right">High</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                  {Asdata.map(( listValue, index ) => {
                    return (
                      <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }} key={index}>
                        <TableCell component="th" scope="row">
                          {listValue.rulename}
                        </TableCell>
                        <TableCell align="right">$ 1.00</TableCell>
                        <TableCell align="right">$ 250.00</TableCell>
                        <TableCell align="right">$ 2,500.00</TableCell>
                        <TableCell align="right">$ 20,000.00</TableCell>
                        
                      </TableRow>
                    );})}
                  </TableBody>
                </Table>
              </TableContainer>
              <TablePagination
                rowsPerPageOptions={[2, 5, 10]}
                component="div"
                count={Asdata.length}
                rowsPerPage={rpg}
                page={pg}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
              </Paper>
            );
          }



    
    

export default GetAsDataImpCost