import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import  { Button, Grid, MenuItem, useFormControl }  from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

import { useForm } from 'react-hook-form';

import ShowSales from "./ShowSales";

import Data from '../workData/WorkItem.json'

// 作業項目選択
// import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';
// import InputLabel from '@material-ui/core/InputLabel';


const useStyles = makeStyles({
    root: {
        display: 'flex',  
        marginTop: 30,
    },
    carfContent:{
        padding:30,
    },
    card: {
        marginLeft: 1,
        marginRight:1,
    },
    formControl:{
        width:500,
    },
});

const workName = Data.data.work.airCon

const getJsonData = () => {
    workName.map((name) =>(
        console.log(name)
    ))
}

const workItems = [
    {
        value : 'エアコン工事',
        label : 'エアコン工事',
    },
    {
        value : 'アンテナ工事',
        label : 'アンテナ工事',
    },
    {
        value : 'ウォシュレット工事',
        label : 'ウォシュレット工事',
    },
    {
        value : '照明工事',
        label : '照明工事',
    },
    {
        value : 'その他工事',
        label : 'その他工事',
    },
];

const SelectWorkItem = () => {
    const [work, setWork] = React.useState('')
    
    const handleChange = (event) => {
        setWork(event.target.value)
    }
    return(
        <TextField
            variant="outlined"
            fullWidth
            select
            label="セレクト"
            value={work}
            onChange={handleChange}>
                {workItems.map((val) => (
                <MenuItem key={val.value} value={val.value} >
                    {val.label}
                </MenuItem>
    ))}
        </TextField>
    )
};



function DatePicker(){
    const [selectDate, setSelectDate] = React.useState(new Date());
    const handleDateChange = (date) =>{
        setSelectDate(date);
    };
    
    return(
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid item xs={12}>
                <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="yyyy/MM/dd"
                margin="normal"
                id="date-picker-inline"
                label="完了日"
                value={selectDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                    'aria-label': 'change date',
                }}
                />
            </Grid>
        </MuiPickersUtilsProvider>
    )
};

const rows = [
    { id:0,date:'2021/3/01',recipetNumber:'1017402004005',name:'清水',workItem:'2.2kﾋｮｳｼﾞｭﾝｺｳｼﾞ',quantity:1,price:'7700'},
    { id:0,date:'2021/3/01',recipetNumber:'1017402004005',name:'清水',workItem:'2.2kﾋｮｳｼﾞｭﾝｺｳｼﾞ',quantity:1,price:'7700'},
    { id:0,date:'2021/3/01',recipetNumber:'1017402004005',name:'清水',workItem:'2.2kﾋｮｳｼﾞｭﾝｺｳｼﾞ',quantity:1,price:'7700'},
    { id:0,date:'2021/3/01',recipetNumber:'1017402004005',name:'清水',workItem:'2.2kﾋｮｳｼﾞｭﾝｺｳｼﾞ',quantity:1,price:'7700'},
    { id:0,date:'2021/3/01',recipetNumber:'1017402004005',name:'清水',workItem:'2.2kﾋｮｳｼﾞｭﾝｺｳｼﾞ',quantity:1,price:'7700'},
    { id:0,date:'2021/3/01',recipetNumber:'1017402004005',name:'清水',workItem:'2.2kﾋｮｳｼﾞｭﾝｺｳｼﾞ',quantity:1,price:'7700'},
    { id:0,date:'2021/3/01',recipetNumber:'1017402004005',name:'清水',workItem:'2.2kﾋｮｳｼﾞｭﾝｺｳｼﾞ',quantity:1,price:'7700'},
    { id:0,date:'2021/3/01',recipetNumber:'1017402004005',name:'清水',workItem:'2.2kﾋｮｳｼﾞｭﾝｺｳｼﾞ',quantity:1,price:'7700'},
    { id:0,date:'2021/3/01',recipetNumber:'1017402004005',name:'清水',workItem:'2.2kﾋｮｳｼﾞｭﾝｺｳｼﾞ',quantity:1,price:'7700'},
    { id:0,date:'2021/3/01',recipetNumber:'1017402004005',name:'清水',workItem:'2.2kﾋｮｳｼﾞｭﾝｺｳｼﾞ',quantity:1,price:'7700'},
    { id:0,date:'2021/3/01',recipetNumber:'1017402004005',name:'清水',workItem:'2.2kﾋｮｳｼﾞｭﾝｺｳｼﾞ',quantity:1,price:'7700'},
    { id:0,date:'2021/3/01',recipetNumber:'1017402004005',name:'清水',workItem:'2.2kﾋｮｳｼﾞｭﾝｺｳｼﾞ',quantity:1,price:'7700'},
    { id:0,date:'2021/3/01',recipetNumber:'1017402004005',name:'清水',workItem:'2.2kﾋｮｳｼﾞｭﾝｺｳｼﾞ',quantity:1,price:'7700'},

];




const AddSales = () => {

    const AddItem = () => {
        console.log(name)
    }
    const classes = useStyles();
    const { handleSubmit } = useForm();
    const [name, setName ] = React.useState();
    getJsonData();

    return (
        <>
            <Grid container justify="center" className={classes.root}>
                <Grid item xs={8}>
                    <Card className={classes.carfContent} >
                        <CardContent>
                            <Typography variant="h5">
                                売上入力
                            </Typography>
                            <form onSubmit={handleSubmit(AddItem)}>
                                <Grid container spacing={2} justify="flex-end">
                                    <Grid item xs={3} >
                                        {/* <DatePicker /> */}
                                        <TextField type="date" fullWidth label="完了日" variant="outlined">
                                        </TextField>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <TextField fullWidth label="伝票番号" variant="outlined"></TextField>
                                    </Grid>
                                    <Grid item xs={5}>
                                        <TextField onInput={e => setName(e.target.value)} fullWidth label="お客様名" variant="outlined"></TextField>
                                    </Grid>
                                    <Grid item xs={4}>
                                        {/* <TextField fullWidth label="工事項目" variant="outlined"></TextField> */}
                                        <SelectWorkItem />
                                    </Grid>
                                    <Grid item xs={8}>
                                        <TextField fullWidth label="工事内容" variant="outlined"></TextField>
                                    </Grid>
                                        <Grid item xs={3}>
                                            <TextField fullWidth label="数量" variant="outlined"></TextField>
                                        </Grid>
                                        <Grid item xs={4}>
                                            <TextField fullWidth label="金額" variant="outlined"></TextField>
                                        </Grid>
                                        <Grid item xs={2} alignContent="center" alignItems="center">
                                            <Button variant="outlined" color="primary" size="large" type="submit">登録</Button>
                                        </Grid>
                                </Grid>
                            </form>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={8}>
                    <ShowSales rows={rows}/>
                </Grid>
            </Grid>
        </>
    )
}

export default AddSales;