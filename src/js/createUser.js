// import fetch from 'node-fetch';

export const createUser = async () => {
  let url = "https://map.yahooapis.jp/geocode/V1/geoCoder";
  url += "?appid=";
  url += "dj00aiZpPUFjQzFjbjNvemRPayZzPWNvbnN1bWVyc2VjcmV0Jng9MzQ-";
  url += "&query=";
  // url += location;
  url += "東京都千代田区丸の内１丁目";
  url += "&output=";
  url += "json";
  url += "&datum=";
  url += "wgs";


  const fetch = require('node-fetch');
  let res = await fetch(encodeURI(url));
  // let json = await res.json();
  await console.log(res);
  // let geometry = json.Feature[0].Geometry.Coordinates;
  // geometry = geometry.split(",");
  // let latitude = geometry[0];
  // let longitude = geometry[1];
  // return {"latitude":latitude, "longitude":longitude};

  // const response = await fetch('http://geoapi.heartrails.com/api/json?method=getPrefectures',
  //  {method: 'GET'});
  //  await console.log(response);
  // const userId = await response.text();
  // return userId;
};
