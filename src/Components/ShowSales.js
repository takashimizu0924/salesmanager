import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles({
    root: {
        width: '100%',      
    },
    container: {
        maxHeight: 440,
    },
});

const columns = [
    { id: 'completedDate',label:'完了日',minWidth:170 },
    { id: 'recieptNumber',label:'伝票番号',minWidth:170 },
    { id: 'name',label:'お客様名',minWidth:170 },
    { id: 'workItem',label:'工事内容',minWidth:170 },
    { id: 'quantity',label:'数量',minWidth:170 },
    { id: 'price',label:'金額',minWidth:170 },

];


const ShowSales = (rows) => {
    const classes = useStyles();
    console.log(rows.rows)
    
    return (
        <Paper className={classes.root}>
            <TableContainer className={classes.container}>
                <Table stickyHeader >
                    <TableHead>
                        <TableRow>
                            { columns.map((column) => (
                                <TableCell key={ column.id }
                                           style={{ minWidth: column.minWidth }}
                                >
                                    { column.label }
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.rows.map((row,index) => 
                        <TableRow key={ index } >
                            <TableCell>{ row.completedDate}</TableCell>
                            <TableCell>{ row.recieptNumber}</TableCell>
                            <TableCell>{ row.name}</TableCell>
                            <TableCell>{ row.workItem}</TableCell>
                            <TableCell>{ row.quantity}</TableCell>
                            <TableCell>{ row.price}</TableCell>
                        </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    )
}

export default ShowSales
