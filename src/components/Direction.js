import React from 'react';
import { makeStyles,Grid } from '@material-ui/core';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/swiper-bundle.css"
import "swiper/components/effect-coverflow";
import "swiper/components/pagination";
import "swiper/components/navigation";
import "./Direction.css";
import { Navigation,Pagination } from 'swiper';
import SwiperCore,{
  EffectCoverflow,
} from "swiper/core";
import { Header_emergency } from "./Header";
import { GetMyTrain } from "./GetMyTrain";
import { timeDp, timeDs } from "./TrainList";
import { whichDirection } from "../server-side-program/functions";

SwiperCore.use([EffectCoverflow,Pagination,Navigation]);

//ローカルcss
const useStyle = makeStyles(() => ({
  container:{
    width:"100%"
  },
  grid:{
    marginTop:"10vh",
  }
}))

export default function Direction() {
  const classes = useStyle()
  
  //方向によって画像を出し分けする関数
  const directionRender = () =>{
    //{timeDp}
    //{timeDs}
    let directionDom
    let result = whichDirection(timeDp,timeDs);
    //let result = <GetMyTrain timeDp={timeDp} timeDs={timeDs}/>
    if(result == true){
      directionDom = <img src={require('./image/direction_back.svg').default} alt="Front" />
    }else{
      directionDom = <img src={require('./image/direction.svg').default} alt="Back" />
    }
    return directionDom
  }

  //UI
  return (
    <div className="container">
      < Header_emergency />
      <Grid 
       container
       direction='column'
       alignItems='center'
       className={classes.grid}
      >
          {directionRender()}
          <Swiper
            navigation={true}
            centeredSlides={true}
            slidesPerView={1}
            loop={true}
            pagination={{
              clickable:true
            }}
            className={classes.mySwiper}
          >
            <SwiperSlide>
              <img src={require('./image/warning.svg').default} alt="electrical_emergency"/>
            </SwiperSlide>
            <SwiperSlide>
              <img src={require('./image/exits_place.svg').default} alt="exits_place"/>
            </SwiperSlide>
          </Swiper>
      </Grid>
      
    
  
     </div>

  );
}

