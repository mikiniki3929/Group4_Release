//APiによって取得したJSONファイルをダンプする関数　url:APIのURL
const getJsonData = (url) => {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    var data = JSON.parse(xhr.response);
    console.log("f_suc")
    return data;
}

//ローカルに存在するJSOnファイルの読み込み data:読み込んだJSONファイル
const readLocalJson = (data) => {
    const jsonObject = JSON.parse(data);
    return jsonObject;
}

//読み込んだJSONオブジェクトの要素のうち配列として格納されているものを配列変数に代入 jsonObject:パースしたJSONオブジェクト　key:配列型になっている値のキー名
const throwJsonObjToList = (jsonObject, key) => {
    let list = [];
    let cnt = 0;
    while (jsonObject.key[cnt] !== "") {
        list.push(jsonObject.key[cnt]);
        cnt++;
    }
    return list;
}

//importしたStationTimeTableJSONオブジェクト内の時間を配列に代入して返す関数
const getJsonTimeArray = (jsonObject) => {
    let array = [];
    for (const obj in jsonObject) {
        for (const childObj in obj["odpt:stationTimetableObject"]) {
            array.push(childObj["odpt:departureTime"])
        }
    }
    return array;
}

//利用可能な電車の情報を出力する関数　t_a:発車時間のOD
const trainListMaker = (t_a, start_time) => {
    const result = [];
    const a = start_time;
    result.push(t_a.slice(a, a+5));
    return result;
}

//電車の運行情報から進行方向か逆方向のどちらに進むべきかの判定　c_t:現在時間, d_t:発車時間, a_t:到着時間
const whichDirection = (c_t, d_t, a_t) => {
    const a = Math.abs(c_t - d_t);
    const b = Math.abs(c_t - a_t);
    return a < b ? true : false;
}

//現在時間を取得する関数
const getCurrentTime = () => {
    let c_t = new Date();
    let n_h = c_t.getHours(); // 時間を抜き出す
    let n_m  = c_t.getMinutes(); // 分数を抜き出す
    return `${n_h}:${n_m}`;
}

export { getJsonData, readLocalJson, throwJsonObjToList, getJsonTimeArray, trainListMaker, whichDirection, getCurrentTime };