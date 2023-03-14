import React, { useState,useEffect } from 'react'
import { Paper, makeStyles, TableBody, TableRow, TableCell, Toolbar, InputAdornment } from '@material-ui/core';
import useTable from "./useTable";

import Controls from "./controls/Controls";
import { Search } from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(2),
        width: 1000,
        overflow: 'hidden'
        
    },
    searchInput: {
        width: '50%',
        height: '50px',
        marginLeft:500
    }
}))


const headCells = [
    { id: 'rulename', label: 'Rule Name' },
    { id: 'info', label: 'Info' },
    { id: 'low', label: 'Low' },
    { id: 'medium', label: 'Medium', disableSorting: true },
    { id: 'high', label: 'High'},
]

export default function GetAsDataImpCost() {

    const classes = useStyles();
    const [records, setRecords] = useState()
    const [filterFn, setFilterFn] = useState({ fn: items => { return items; } })

    useEffect(() => {

        // Fetch the Payroll Data related to the logged in User
        const makeRequest = async () => {
          try {
            let response = await fetch('/api/asdata');
            let json = await response.json();
            setRecords(json);
          } catch (error) {
            console.log(error);
          }
        }
        makeRequest();
        
       },[]);

    const {
        TblContainer,
        TblHead,
        TblPagination,
        recordsAfterPagingAndSorting
    } = useTable(records, headCells, filterFn);

    const handleSearch = e => {
        let target = e.target;
        setFilterFn({
            fn: items => {
                if (target.value == "")
                    return items;
                else
                    return items.filter(x => x.rulename.toLowerCase().includes(target.value))
            }
        })
    }

    return (
        <>
            
            <Paper className={classes.pageContent} sx={{overflow: 'hidden'}}>
                {/* <Alert Rule Values /> */}
                <Toolbar>
                    <Controls.Input
                        label="Search for an alert rule..."
                        className={classes.searchInput}
                        InputProps={{
                            startAdornment: (<InputAdornment position="start">
                                <Search />
                            </InputAdornment>)
                        }}
                        onChange={handleSearch}
                    />
                </Toolbar>
                <TblContainer>
                    <TblHead />
                    <TableBody>
                        {
                            recordsAfterPagingAndSorting()?.map(item =>
                                (<TableRow key={item.id}>
                                    <TableCell>{item.rulename}</TableCell>
                                    <TableCell>$ 1.00</TableCell>
                                    <TableCell>$ 250.00</TableCell>
                                    <TableCell>$ 2,500.00</TableCell>
                                    <TableCell>$ 20,000.00</TableCell>
                                </TableRow>)
                            )
                        }
                    </TableBody>
                </TblContainer>
                <TblPagination />
            </Paper>
        </>
    )
}