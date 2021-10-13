import '../App.css';
import * as React from "react";
import { FormControl, InputLabel, Select, MenuItem,Typography, Grid,Button } from "@material-ui/core";
import {ArrowDownward} from '@material-ui/icons';
import { Search } from '@material-ui/icons';
import { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Header } from './Header';
import { TrainList } from './TrainList';

//ローカルcss
const useStyle = makeStyles(() => ({
  root:{
    width:"100%",
  },
  grid:{
    height:"160vh",
    marginTop:"20vh",
  },
  formcontrol:{
   width:250, 
  },
  select:{
    '&:after':{
      borderColor:"#8bc24a"
    }
  },
  inputlabel:{
    "&.Mui-focused":{
      color:"#8bc24a"
    }
  }
}))

export const Timetable = () => {
  //ローカルcssの宣言
  const classes = useStyle()
  //電車リスト表示用のステートを定義
  const [searchBool, setSearchBool] = useState(false);
  //選んだ路線を保持
  const [origin,setOrigin] = useState('');
  const [destination,setDestination] = useState('');
  const originhandleChange = (event) =>{
    setOrigin(event.target.value);
  }
  const destinationhandleChange = (event) =>{
    setDestination(event.target.value);
  }
  //検索ボタンを引き金に電車リストの表示/非表示を切り替え
  const onClickSearch = () => {
    setSearchBool(!searchBool);
  }
  //UI
  return (
    <div className={classes.root}>
    <Header />
    <Grid
      container
      direction='column'
      alignItems='center'
      className={classes.grid}
    >
      <Typography variant='h6' align="center">
        出発駅
      </Typography>

      <FormControl className={classes.formcontrol}>
        <InputLabel id="from" className={classes.inputlabel}>From</InputLabel>
        <Select
          labelId="from"
          label="From"
          id="select-origin"
          value={origin}
          className={classes.select}
          onChange={originhandleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"Ginza"}>丸の内線　銀座駅</MenuItem>
        </Select>
      </FormControl>

      <br />
        <div>
          <ArrowDownward fontSize="large"/>
        </div>
      <br />

      <Typography variant='h6' align="center">
        到着駅
      </Typography>  

      <FormControl className={classes.formcontrol}>
        <InputLabel id="to" className={classes.inputlabel}>To</InputLabel>
        <Select
            labelId="to"
            label="To"
            id="select-destination"
            value={destination}
            className={classes.select}
            onChange={destinationhandleChange}
          >
            <MenuItem value="">
            <em>None</em>
            </MenuItem>
            <MenuItem value={"Tokyo"}>丸の内線　東京駅</MenuItem>
        </Select>
      </FormControl>

      <br />
      <Button variant="contained" endIcon={<Search />} className={classes.button} onClick={() => onClickSearch()}>
        検索
      </Button>
      <br />
      {searchBool && <TrainList className={classes.accordionlist}/>}

    </Grid>
   </div>
  );
}