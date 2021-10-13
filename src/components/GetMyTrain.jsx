import { whichDirection,getNowTime } from "../server-side-program/functions";

export const GetMyTrain = (props) => {
    const {timeDp,timeDs} = props;
    const w_d = whichDirection(timeDp,timeDs);
    console.log(w_d);
    return(
        w_d
    );
}