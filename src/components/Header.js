import React from "react";
import { makeStyles } from "@material-ui/styles"
import { AppBar } from "@material-ui/core";
import { Box } from "@material-ui/core";
import { Toolbar } from "@material-ui/core";
import { Typography } from "@material-ui/core";

//ローカルcss
const useStyle = makeStyles(() => ({
  appbar:{
   backgroundColor:'#8bc24a', 
  },
  appbar_emergency:{
    backgroundColor:'#8bc24a', 
    alignItems:"center"
  }
}))

//時刻表検索のヘッダー
export function Header() {
  const classes = useStyle()
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed" className={classes.appbar}>
          <Toolbar>
            <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
              時刻表検索
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    );
  }

  //方向指示のヘッダー
  export function Header_emergency(){
    const classes = useStyle()
    return(
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed" className={classes.appbar_emergency}>
          <Toolbar>
            <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
              最寄りの駅の方向に<br />避難してください
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    );
  }