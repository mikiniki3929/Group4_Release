import { getCurrentTime, getJsonTimeArray, findOriginIndex, trainListMaker } from "../server-side-program/functions";
import timeTableGinza from "../open-data/timeTableGinzaToIkebukuro.json";
import timeTableTokyo from "../open-data/timeTableTokyoToIkebukuro.json";

const styleMaster = {
    border: "1px solid #000",
}
const styleDepthOne = {
    marginLeft: "10px",
}

export const TrainList = (props) => {
    const c_t = getCurrentTime();
    let ttGinza = getJsonTimeArray(timeTableGinza) || ["nodata"];
    let ttTokyo = getJsonTimeArray(timeTableTokyo);
    console.log(`here is open data c : ${ttGinza[0]}`);
    return(
        <div style={styleMaster}>
            {ttGinza[0]}

            <h2>{`From ${"銀座"} To ${"東京"}`}</h2>
            <hr />
            <div style={styleDepthOne}>
                <h4>{`From ${"10:00"} To ${"10:05"}`}</h4><button>これにする</button>
            </div>
            <hr />
            <div style={styleDepthOne}>
                <h4>{`From ${"10:00"} To ${"10:05"}`}</h4><button>これにする</button>
            </div>
            <hr />
            <div style={styleDepthOne}>
                <h4>{`From ${"10:00"} To ${"10:05"}`}</h4><button>これにする</button>
            </div>
            <hr />
            <div style={styleDepthOne}>
                <h4>{`From ${"10:00"} To ${"10:05"}`}</h4><button>これにする</button>
            </div>
            <hr />
            <div style={styleDepthOne}>
                <h4>{`From ${"10:00"} To ${"10:05"}`}</h4><button>これにする</button>
            </div>
            <hr />
        </div>
    );
}