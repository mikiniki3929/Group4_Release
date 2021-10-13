//APiによって取得したJSONファイルをダンプする関数　url:APIのURL
const getJsonData = (url) => {
    let apiData = [{}];
    fetch(url)
    .then(response => response.json())
    .then(data => {
        apiData.push(data);
        apiData.shift();
    });
    return apiData;
}

//ローカルに存在するJSOnファイルの読み込み data:読み込んだJSONファイル
const readLocalJson = (data) => {
    const jsonObject = JSON.parse(data);
    return jsonObject;
}

//importしたStationTimeTableJSONオブジェクト内の時間を配列に代入して返す関数
const getJsonTimeArray = (jsonObject) => {
    let array = [];
    for (let i=0; i<jsonObject["odpt:stationTimetableObject"].length; i++){
        //array = array.push(jsonObject["odpt:stationTimetableObject"][i]["odpt:departureTime"]);
        array.push(Object.values(jsonObject["odpt:stationTimetableObject"][i])[3]);
    }
    
    return array;
}

/**現在の日時から時間と分を "ab:cd"のstring値として取り出すプログラム 
 * const now = new Date;
 * let start_time = `${now.getHours()}:${now.getMinutes()}`;
 * 
 * 
 * ODから出発時間を配列に格納して取り出すプログラム
*/

//利用可能な電車の情報を出力する関数　t_a:発車時間のOD start_time: 予定している出発時間
const findOriginIndex = (t_a, start_time) => {
    let g_t = 0;
    for (let i=0; i<t_a.length;i++) {
        if (Number(start_time[0]==="0" ? start_time.slice(1) : start_time.slice(0,2)) === Number(t_a[i][0]==="0" ? t_a[i].slice(1) : t_a[i].slice(0,2))) {
            if (Number(start_time.slice(3,5)) < Number(t_a[i].slice(3,5))) {
                g_t = i;
                break;
            }
        } else if (Number(start_time[0]==="0" ? start_time.slice(1):start_time.slice(0,2)) < Number(t_a[i][0]==="0" ? t_a[i].slice(1):t_a[i].slice(0,2))) {
            g_t = i;
            break;
        }
    }
    return g_t;
}

//利用可能な電車の情報を出力する関数 g_t:開始インデックス
const trainListMaker = (g_t, t_a) => {
    const result = [];
    result.push(t_a.slice(g_t, g_t+5))
    return result;
}

//電車の運行情報から進行方向か逆方向のどちらに進むべきかの判定　c_t:現在時間, d_t:発車時間, a_t:到着時間
const whichDirection = (d_t, a_t) => {
    const now = new Date(getNowTime());
    const d = new Date(getTimeIncludeSec(d_t));
    const a = new Date(getTimeIncludeSec(a_t));
    const x = Math.abs(now.getTime() - d.getTime());
    const y = Math.abs(now.getTime() - a.getTime());
    return x < y ? true : false;
}

//現在時間を取得する関数
const getCurrentTime = () => {
    let c_t = new Date();
    let n_h = c_t.getHours(); // 時間を抜き出す
    let n_m  = c_t.getMinutes(); // 分数を抜き出す
    return `${n_h}:${n_m}`;
}

//現在の時間を取得する関数
const getNowTime = () => {
    let c_t = new Date();
    let Year = c_t.getFullYear();
    let Month =c_t.getMonth()+1;
    let Day = c_t.getDate();
    let Hour = c_t.getHours();
    let Min = c_t.getMinutes();
    let Sec = c_t.getSeconds();

    return `${Year}-${Month}-${Day} ${Hour}:${Min}:${Sec}`
}

//whichDirectionの時間計算用のデータ加工関数
const getTimeIncludeSec = (t) => {
    let c_t = new Date();
    let Year = c_t.getFullYear();
    let Month =c_t.getMonth()+1;
    let Day = c_t.getDate();
    let Sec = c_t.getSeconds();

    return `${Year}-${Month}-${Day} ${t}:${Sec}`
}

export { getJsonData, readLocalJson, getJsonTimeArray, findOriginIndex, trainListMaker, whichDirection, getCurrentTime, getNowTime, getTimeIncludeSec };