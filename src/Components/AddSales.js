import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import  { Button, Grid, MenuItem, Select, useFormControl }  from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

import { useForm } from 'react-hook-form';

import ShowSales from "./ShowSales";

import Data from '../workData/WorkItem.json'

import axios from 'axios';



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
        width:600,
    },
});



var quantity_clickFlg = false;

var quantity_data = 0;
var price_data = 0;
var addRows = [];
var rows = [];

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


var workName = Data.data.work.root


// 工事内容判別用関数
const WorkContents = (workItem) => {
    var result_map_data;
    // グローバル変数に格納
   

    if (workItem === 'エアコン工事'){
        workName = Data.data.work.エアコン工事

    }else if (workItem === 'アンテナ工事'){
        workName = Data.data.work.アンテナ工事
    
    }else{
        workName = Data.data.work.other
    }

    return workName
}

// Price情報取得関数
const GetPriceData = (quantity, arg_name, arg_contents) => {
    // Json解析オブジェクト生成
    const obj_from_root = Data.data;
    var obj_name = obj_from_root.work[arg_name];
    var property;
    var calc_data;
    var flag = GetPriceFlag();
    quantity_data = quantity;
    
    for(var idx in obj_name){
        property = Object.keys(obj_name[idx]);
        for(var k in property){
            if(obj_name[idx][property[k]] == arg_contents){
                price_data = obj_name[idx][property[++k]];
                break;
            }
        }
    }
    
    if(flag == false){
        calc_data = price_data * quantity_data;
        // console.log(flag);
    }else{
        SetPriceFlag(false);
        calc_data = price_data;
        console.log(flag);
    }  
    return calc_data;
}

// 金額入力フラグ設定関数
const SetPriceFlag = (flg) => {
    return quantity_clickFlg = flg;
}

// 金額入力フラグ取得関数
const GetPriceFlag = () => {
    return quantity_clickFlg;
}

// データベース登録 "POSTrequest"
const AddDataBase = async() => {
    
    const url = "http://localhost:8080/item"
    await axios.post(url,addRows).then(res => {
        console.log(res)
    })
    // addRows = []
}

const AddSales =() => {
    const classes = useStyles();
    const { handleSubmit } = useForm();
    const [date, setDate ] = React.useState("");
    const [reciept, setReciept ] = React.useState("");
    const [name, setName ] = React.useState("");
    const [workItem, setWorkItem] = React.useState("");
    const [work, setWork] = React.useState("");
    const [quantity, setQuantity ] = React.useState();
    const [price, setPrice] = React.useState();
    const handleChange = (event) => {setWorkItem(event.target.value)};
    const handleWorkChange = (event) => {setWork(event.target.value)};
    const handleDateChange = (event) => {setDate(event.target.value)};
    const handleRecieptChange = (event) => {setReciept(event.target.value)};
    const handlenNameChange = (event) => {setName(event.target.value)};
    const handleQuantityChange = (event) => {setQuantity(event.target.value)};
    const handlePriceChange = (event) => {setPrice(event.target.value)};

    const handlePriceFlgChange = () => {SetPriceFlag(true)};

    // 数量を監視し、金額を計算する
    const calcPrice = () => {
        var totalPrice = 0;
        totalPrice = quantity * price
        return totalPrice
    }
    var d = calcPrice();
    console.log(d)

    // 登録内容を追加する場合のオブジェクト格納用
        // addRowsに格納する
        // *******TODO********
        // PriceがString型になっているためInt型にする

    var data_object = {
        // id:id_data,
        completedDate:date,
        recieptNumber:reciept,
        name:name,
        workItem:workItem,
        quantity:quantity,
        price:price
        };
        const AddItem = () => {
            addRows.push(data_object)
            console.log(addRows)
        };

    
    
    

    return (
        <>
            <Grid container justify="center" className={classes.root}>
                <Grid item xs={10}>
                    <Card className={classes.carfContent} >
                        <CardContent>
                            <Typography variant="h5">
                                売上入力
                            </Typography>
                            <form onSubmit={handleSubmit(AddItem)}>
                                <Grid container spacing={2} justify="flex-end">
                                    <Grid item xs={3} >
                                        {/* <DatePicker /> */}
                                        <TextField type="date" onChange={handleDateChange} variant="outlined">
                                        </TextField>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <TextField onChange={handleRecieptChange} fullWidth label="伝票番号" variant="outlined"></TextField>
                                    </Grid>
                                    <Grid item xs={5}>
                                        <TextField onChange={handlenNameChange} fullWidth label="お客様名" variant="outlined"></TextField>
                                    </Grid>
                                    <Grid item xs={4}>
                                    <TextField
                                        variant="outlined"
                                        fullWidth
                                        select
                                        label="セレクト"
                                        value={workItem}
                                        onChange={handleChange}
                                        onInput={e => setWorkItem(e.target.value)}>
                                            {workItems.map((val) => (
                                            <MenuItem key={val.value} value={val.value} >
                                                {val.label}
                                            </MenuItem>))}
                                    </TextField>
                                        {/* <SelectWorkItem /> */}
                                    </Grid>
                                    <Grid item xs={8}>
                                    <TextField
                                        variant="outlined"
                                        fullWidth
                                        select
                                        label="工事内容"
                                        value={work}
                                        onInput={e => setWork(e.target.value)}
                                        onChange={handleWorkChange}>
                                            {WorkContents(workItem).map((val) =>(
                                                <MenuItem key = {val.name} value={val.name}>
                                                    {val.name}
                                                </MenuItem>
                                            ))}
                                    </TextField>
                                        {/* <SelectWork /> */}
                                    </Grid>
                                        <Grid item xs={3}>
                                            <TextField onInput={e => price_data = GetPriceData(e.target.value, workItem, work)} onChange={handleQuantityChange} fullWidth label="数量" variant="outlined"></TextField>
                                        </Grid>
                                        <Grid item xs={4}>
                                            {/* {WorkContents(workItem).map((val) =>(          
                                            
                                            ))} */}
                                            <TextField
                                                fullWidth label="金額" 
                                                //value={price_data}
                                                onClick={handlePriceFlgChange}
                                                onChange={handlePriceChange}
                                                onInput={e => price_data = e.target.value}
                                                variant="outlined">
                                            </TextField>
                                            
                                        </Grid>
                                        <Grid item xs={2} alignContent="center" alignItems="center">
                                            <Button variant="outlined" color="primary" size="large" type="submit">登録</Button>
                                        </Grid>
                                </Grid>
                            </form>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={10}>
                    <ShowSales rows={addRows}/>
                </Grid>
                <Grid item xs={4} justify="center">
                    <Button variant="outlined" onClick={AddDataBase} >プッシュ</Button>
                </Grid>
            </Grid>
        </>
    )
}

export default AddSales;
