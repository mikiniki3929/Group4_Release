import * as React from 'react';
import { makeStyles } from '@material-ui/core';
import { Accordion, Button } from '@material-ui/core';
import { AccordionSummary } from '@material-ui/core';
import { AccordionDetails } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { getCurrentTime, getJsonTimeArray, findOriginIndex, trainListMaker } from "../server-side-program/functions";
import timeTableGinza from "../open-data/timeTableGinzaToIkebukuroWeekday.json";
import timeTableTokyo from "../open-data/timeTableTokyoToIkebukuroWeekday.json";

//ローカルcss
const useStyle = makeStyles(() => ({
    text:{
        width:"85%"
    },
    time:{
        marginLeft:15,
        marginRight:30,
        fontWeight:"bold"
    }
}))

//exportする変数
let timeDp = "";
let timeDs = "";
const myTrain = (dp,ds) =>{
    timeDp = dp;
    timeDs = ds;
}

export const TrainList = (props) => {
    const classes = useStyle()
    let ttGinza = getJsonTimeArray(timeTableGinza);
    let ttTokyo = getJsonTimeArray(timeTableTokyo);
    let start_time = getCurrentTime();
    let goodIndex = findOriginIndex(ttGinza,start_time);
    let goodIndex_arrival = findOriginIndex(ttTokyo,start_time);
    let goodTrainDp = trainListMaker(goodIndex,ttGinza);
    let goodTrainDs = trainListMaker(goodIndex_arrival,ttTokyo);

    return(
        <div>
            <Accordion>
                <AccordionSummary
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className={classes.text}>
                        次発.
                        <span className={classes.time}>{goodTrainDp[0][0]}</span>
                    </Typography>
                    <Button variant="outlined" size="small" onClick={()=>myTrain(goodTrainDp[0][0],goodTrainDs[0][0])}>乗る</Button>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        到着.
                        <span className={classes.time}>{goodTrainDs[0][0]}</span>
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography className={classes.text}>
                        次々発.
                        <span className={classes.time}>{goodTrainDp[0][1]}</span>
                    </Typography>
                    <Button variant="outlined" size="small" onClick={()=>myTrain(goodTrainDp[0][1],goodTrainDs[0][1])}>乗る</Button>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        到着.
                        <span className={classes.time}>{goodTrainDs[0][1]}</span>
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                >
                    <Typography className={classes.text}>
                        3.
                        <span className={classes.time}>{goodTrainDp[0][2]}</span>
                    </Typography>
                    <Button variant="outlined" size="small" onClick={()=>myTrain(goodTrainDp[0][2],goodTrainDs[0][2])}>乗る</Button>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        到着.
                        <span className={classes.time}>{goodTrainDs[0][2]}</span>
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                    aria-controls="panel4a-content"
                    id="panel4a-header"
                >
                    <Typography className={classes.text}>
                        4.
                        <span className={classes.time}>{goodTrainDp[0][3]}</span>
                    </Typography>
                    <Button variant="outlined" size="small" onClick={()=>myTrain(goodTrainDp[0][3],goodTrainDs[0][3])}>乗る</Button>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        到着.
                        <span className={classes.time}>{goodTrainDs[0][3]}</span>
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                    aria-controls="panel5a-content"
                    id="panel5a-header"
                >
                    <Typography className={classes.text}>
                        5.
                        <span className={classes.time}>{goodTrainDp[0][4]}</span>
                    </Typography>
                    <Button variant="outlined" size="small" onClick={()=>myTrain(goodTrainDp[0][4],goodTrainDs[0][4])}>乗る</Button>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        到着.
                        <span className={classes.time}>{goodTrainDs[0][4]}</span>
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    )

}

export {timeDp,timeDs}