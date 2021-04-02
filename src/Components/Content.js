import React, { useState, useEffect} from 'react'
import '../App.css'
import  { Grid, Typography }  from '@material-ui/core'
import { makeStyles} from '@material-ui/core/styles'

import  TotalGraph  from "./Maingraph";
import axios from 'axios';

const useStyles = makeStyles(() => ({
    root: {
        display: "flex",
        flexGrow: 10,
        backgroundColor: "#f5deb3",
    },
    contents: {
        backgroundColor: "#ffffe0" ,
        fontSize: 20,
        height: 380,
        margin: 5,
    },
    contents2: {
        backgroundColor: "#ffffe0" ,
        fontSize: 20,
        height: 200,
        margin: 5,
    },
    contents3: {
        backgroundColor: "#ffffe0" ,
        fontSize: 20,
        height: 250,
        margin: 5,
    },
    contents4: {
        backgroundColor: "#ffffe0" ,
        fontSize: 20,
        height: 250,
        margin: 5,
    },
    contents5: {
        backgroundColor: "#ffffe0" ,
        fontSize: 20,
        height: 250,
        margin: 5,
    },
}));



export default function Content(){
    const classes = useStyles()
        const [ salesData,setSalesData ] = useState([])
        const url = "http://localhost:8080/items"
        
        useEffect(() => {
            axios.get(url).then(res => {setSalesData(res.data)
            console.log(res.data)})
            .catch(error => console.log(error))
            
        },[])
    
    return (
        <Grid container className={classes.root} spacing={2} justify="space-around" >
            <Grid className={classes.contents2} item xs={3} sm={3} md={3}>
                <h3>総合計売上金額</h3>
            </Grid>
            <Grid className={classes.contents2} item xs={3} sm={3} md={3}>
                <h3>エアコン工事総売上金額</h3>
            </Grid>
            <Grid className={classes.contents2} item xs={3} sm={3} md={3}>
                <h3>その他総売上金額</h3>
            </Grid>
            <Grid className={classes.contents2} item xs={3} sm={3} md={2}>
                <h3>総経費金額</h3>
            </Grid>
            <Grid className={classes.titleCard} item xs={12} sm={12} md={12} >
                <div className={classes.contents}>総売上推移グラフ
                    <TotalGraph props={salesData}></TotalGraph>
                </div>
            </Grid>
            {/* <Grid className={classes.titleCard2} item xs={12} sm={4} md={3} >
                <div className={classes.contents2}>エアコン工事推移グラフ
                    <PieGraph></PieGraph>
                </div>
            </Grid>
            <Grid className={classes.titleCard3} item xs={12} sm={4} md={3} >
                <div className={classes.contents3}>アンテナ工事推移グラフ
                    <BarGraph></BarGraph>
                </div>
            </Grid>
            <Grid className={classes.titleCard} item xs={12} sm={4} md={3} >
                <div className={classes.contents4}>その他工事推移グラフ
                    <BarGraph></BarGraph>
                </div>
            </Grid>
            <Grid className={classes.titleCard} item xs={12} sm={4} md={3} >
                <div className={classes.contents5}>経費推移グラフ
                    <PieGraph></PieGraph>
                </div>
            </Grid> */}
        </Grid>
    )
}
