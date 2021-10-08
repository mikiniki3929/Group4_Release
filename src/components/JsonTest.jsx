import timeTableGinza from "../open-data/timeTableGinzaToIkebukuro.json";

export const JsonTest = () => {
    console.log(timeTableGinza);
    return (
        <>
        {timeTableGinza[0]["odpt:stationTimetableObject"][0]["odpt:departureTime"]}
        </>
    );
}