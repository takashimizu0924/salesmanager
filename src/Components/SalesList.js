import React,{ useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import { MenuItem, TextField } from '@material-ui/core';
import axios from 'axios';
const columns = [
    { id: 'completedDate',label:'完了日',minWidth:170 },
    { id: 'recipetNumber',label:'伝票番号',minWidth:170 },
    { id: 'name',label:'お客様名',minWidth:170 },
    { id: 'id',label:'工事内容',minWidth:170 },
    { id: 'quantity',label:'数量',minWidth:170 },
    { id: 'price',label:'金額',minWidth:170 },

];

const selectDate = [
    {
        value:"3月"
    },
    {
        value:"4月"
    },
    {
        value:"5月"
    },
    {
        value:"6月"
    },
    {
        value:"7月"
    },
    {
        value:"8月"
    },
]

const SalesList = () => {
    const [ salesData,setSalesData ] = useState([])
    const url = "http://localhost:8080/items"
    
    useEffect(() => {
        axios.get(url).then(res => {setSalesData(res.data)
        console.log(res.data)})
        .catch(error => console.log(error))
        
    },[])
    return (
        <Paper>
            <TableContainer>
                <Table>
                    <TableHead>
                        {/* <TextField fullWidth select >
                            { selectDate.map((val) =>(
                                <MenuItem key={val.value} value={val.value}>
                                    {val.value}
                                </MenuItem>
                            ))}
                        </TextField> */}
                        <TableRow>
                            { columns.map((column) => (
                                <TableCell key={ column.id }>
                                    { column.label }
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {salesData.map((saleData, index) => 
                        <TableRow key={ index }>
                            <TableCell> {saleData.completedDate} </TableCell>
                            <TableCell> {saleData.recieptNumber} </TableCell>
                            <TableCell> {saleData.name} </TableCell>
                            <TableCell> {saleData.id} </TableCell>
                            <TableCell> {saleData.quantity} </TableCell>
                            <TableCell> {saleData.price} </TableCell>
                        </TableRow>)}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    )
}

export default SalesList
