export default function getGeoCode(){
  let request = require('request');
  let url = "https://map.yahooapis.jp/geocode/V1/geoCoder";
  const appId = "dj00aiZpPUFjQzFjbjNvemRPayZzPWNvbnN1bWVyc2VjcmV0Jng9MzQ-";
  var options = {
    url : url,
    headers : {
      'User-Agent': 'Yahoo AppID:dj00aiZpPUFjQzFjbjNvemRPayZzPWNvbnN1bWVyc2VjcmV0Jng9MzQ-'
    },
    form : {
      appid : "dj00aiZpPUFjQzFjbjNvemRPayZzPWNvbnN1bWVyc2VjcmV0Jng9MzQ-",
      query : "東京都千代田区丸の内１丁目",
      output : 'jsonp'
    }
  };
  // これでもできるが、request_promiseを使った書き方にしたい
  // https://github.com/request/request-promise
  let callback = function(err, res, body){
    if(!err){
      // console.log(body);
      // console.log(JSON.parse(body).Feature[0].Geometry.Coordinates);
      let geometry = JSON.parse(body).Feature[0].Geometry.Coordinates;
      geometry = geometry.split(",");
      let latitude = geometry[0];
      let longitude = geometry[1];
      console.log({"latitude":latitude, "longitude":longitude});
      return {"latitude":latitude, "longitude":longitude};
    }
  }
  request.post(options, callback);
}
