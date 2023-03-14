import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    borderCollapse: "separate",
    borderSpacing: "0 5px",
    borderBottom: "none"
  },
  tableRow: {
    cursor: "pointer",
    borderBottom: "none",
    marginTop: "8px",
  },
  tableCell: {
    marginTop: "-8px",
    borderBottom: "none",
    background: "red"
  },
});



function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Value", 159, 6.0, 24, 4.0, 3.4, 5.6, 3.3),
  createData("Cost", 237, 9.0, 37, 4.3, 3.4, 5.6, 3.3),
  createData("ROI", 262, 16.0, 24, 6.0, 3.4, 5.6, 3.3),
];

/* 2/08/23 GetData API Call*/
const GetAsDataCA = () => {
  const classes = useStyles();
  const [Asdata, setAsdata] = useState([]);

  // Fetch data --> 1.)
  useEffect(() => {
    // Fetch the Payroll Data related to the logged in User
    const makeRequest = async () => {
      try {
        let response = await fetch("/api/asdata");
        let json = await response.json();
        setAsdata(json);
      } catch (error) {
        console.log(error);
      }
    };
    makeRequest();
  }, []);
  global.ruleName = Asdata.map((x) => x.rulename);
  global.annRecval = Asdata.map((y) => y.annualizedrecoveryvalue);

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
    <TableContainer component={Paper} sx={{ marginTop: 81, maxHeight: 220, backgroundColor:'transparent', borderBottom:'none'}}>
      <Table className={classes.table} aria-label="simple table" sx={{borderBottom: "none"}}>
        <TableHead sx={{backgroundColor:'transparent', borderBottom: "none" }}>
          <TableRow sx={{borderBottom: "none"}}>
            <TableCell sx={{borderBottom: "none"}}> </TableCell>
            <TableCell align="right" sx={{borderBottom: "none"}}>Table 1</TableCell>
            <TableCell align="right" sx={{borderBottom: "none"}}>Table 2</TableCell>
            <TableCell align="right" sx={{borderBottom: "none"}}>Table 3</TableCell>
            <TableCell align="right" sx={{borderBottom: "none"}}>Table 4</TableCell>
            <TableCell align="right" sx={{borderBottom: "none"}}>Table 5</TableCell>
            <TableCell align="right" sx={{borderBottom: "none"}}>Table 6</TableCell>
            <TableCell align="right" sx={{borderBottom: "none"}}>Table 7</TableCell>
          </TableRow>
        </TableHead>
        <TableBody component={Paper} sx={{backgroundColor:'transparent', borderBottom: "none" }}>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              className={classes.tableRow}
              sx={{ marginTop: 8, borderBottom: "none" }}
            >
              <TableCell component="th" scope="row" style={{ width: 100, borderBottom: "none" }}>
                {row.name}
              </TableCell>
              <TableCell align="right" sx={{borderBottom: "none", maxWidth: "5px", backgroundColor: "green"}}>{row.calories}</TableCell>
              <TableCell align="right" sx={{borderBottom: "none"}}>{row.fat}</TableCell>
              <TableCell align="right" sx={{borderBottom: "none"}}>{row.carbs}</TableCell>
              <TableCell align="right" sx={{borderBottom: "none"}}>{row.protein}</TableCell>
              <TableCell align="right" sx={{borderBottom: "none"}}>{row.protein}</TableCell>
              <TableCell align="right" sx={{borderBottom: "none"}}>{row.protein}</TableCell>
              <TableCell align="right" sx={{borderBottom: "none"}}>{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default GetAsDataCA;
