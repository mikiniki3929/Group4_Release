import './App.css';
import * as React from "react";
import { BrowserRouter,Route,Switch,Link,useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import { Box } from '@material-ui/core';
import { BottomNavigation } from '@material-ui/core';
import { BottomNavigationAction } from '@material-ui/core';
import { AccessTime } from '@material-ui/icons';
import { PriorityHigh } from '@material-ui/icons';
import { Paper } from '@material-ui/core';
import { Timetable } from './components/Timetable';
import Direction from './components/Direction';
import Select_Emergency from './components/Select_emergency';

//Footerのローカルcss
const useStyle = makeStyles(() => ({
  bottomnavigation:{
      width:"100%",
      position:"fixed",
      bottom:0,
      backgroundColor:'#8bc24a',
  },
  icon:{
      color:"#09410b",
      "&.Mui-selected":{
          color:"white"
      }
  }
}))

const App = () => {
  const [value,setValue] = React.useState(0);
  const classes = useStyle();

    //Footer
    return(
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Timetable} />
          <Route  path="/selectemergency" component={Direction} />
        </Switch>
        <Box className={classes.box}>
            <Paper elevation={3}>
                <BottomNavigation
                    showLabels
                    value={value}
                    onChange={(event,newValue) =>{
                      setValue(newValue);
                    }}
                    className={classes.bottomnavigation}   
                >
                    <BottomNavigationAction 
                      component={Link}
                      to="/"
                      label="時刻表"
                      icon={<AccessTime/>} 
                      className={classes.icon}/>
                    <BottomNavigationAction
                      component={Link}
                      to="/selectemergency/" 
                      label="緊急避難" 
                      icon={<PriorityHigh />} 
                      className={classes.icon}/>
                    </BottomNavigation> 
            </Paper>
        </Box>
      </BrowserRouter>
    );
  
}

export default App;