// function getGeoCode(){
export default async function getGeoCode(){

    const url = "https://map.yahooapis.jp/geocode/V1/geoCoder";
    let rp = require('request-promise-native');
    var options = {
      url : url,
      headers : {
        'User-Agent': 'Yahoo AppID:dj00aiZpPUFjQzFjbjNvemRPayZzPWNvbnN1bWVyc2VjcmV0Jng9MzQ-',
        'Access-Control-Allow-Origin': '*'
      },
        query : "東京都千代田区丸の内１丁目",
        output : 'json',
        json : true
    };

    rp(encodeURI(url))
    .then(function (parsedBody) {
      // POST succeeded...
      let geometry = JSON.parse(body).Feature[0].Geometry.Coordinates;
      geometry = geometry.split(",");
      let latitude = geometry[0];
      let longitude = geometry[1];
      console.log({"latitude":latitude, "longitude":longitude});
      return {"latitude":latitude, "longitude":longitude};
    })
    .catch(function (err) {
      // POST failed...
      console.log(err);
    });

  // nodejsのfetchはrequireする必要がある
//   const fetch = require('node-fetch');
//   let url = "https://map.yahooapis.jp/geocode/V1/geoCoder";
//   url += "?appid=";
//   url += "dj00aiZpPUFjQzFjbjNvemRPayZzPWNvbnN1bWVyc2VjcmV0Jng9MzQ-";
//   url += "&query=";
//   url += "東京都千代田区丸の内１丁目";
//   url += "&output=";
// const geometry = await json.Feature[0].Geometry.Coordinates;
//   url += "json";
//
//   require("http").createServer((req, res) => {
// 	const referrer = url.parse(req.headers.referer)
// 	res.writeHead(200, {
// 		"Content-Type": "application/json",
// 		"Access-Control-Allow-Origin": "*",
// 	}).fetch(req.url.substr(1))
// 		.then(res => res.text())
// 		.then(res.end.bind(res))
// }).listen(4567)
//
//   // async, waitで書き直すことができるか
// //   return fetch(encodeURI(url))
// //   .then(res => res.json())
// //   .then(json => json.Feature[0].Geometry.Coordinates)
// //   .then(geometry => geometry.split(","))
// //   .then(geometries => { return {"latitude":geometries[0], "longitude":geometries[1]}
// // });
//
// const meta = [
//    ['Access-Control-Allow-Origin','*'],
//    ['User-Agent','Yahoo AppID:dj00aiZpPUFjQzFjbjNvemRPayZzPWNvbnN1bWVyc2VjcmV0Jng9MzQ-']
// ];
// const headers = new Headers(meta);
// const options = {
//   credentials: 'include',
//   // headers: true,
//   headers: {'Access-Control-Allow-Origin': '*', 'User-Agent': 'Yahoo AppID:dj00aiZpPUFjQzFjbjNvemRPayZzPWNvbnN1bWVyc2VjcmV0Jng9MzQ-'},
//   mode: 'cors'
// };
//
// const res = await fetch(encodeURI(url), options);
// const json = await res.json();
// const geometries = await geometry.split(",");
// return {"latitude":geometries[0], "longitude":geometries[1]};

// fetch(encodeURI(url)).then(onLoadFunc);


  // let res = await fetch(encodeURI(url));
  // await console.log(res.json());
  // let geometry = res.json().Feature[0].Geometry.Coordinates;
  // geometry = geometry.split(",");
  // let latitude = geometry[0];
  // let longitude = geometry[1];
  // await console.log({"latitude":latitude, "longitude":longitude});
  // return {"latitude":latitude, "longitude":longitude};

  // return await res.json();

  // .then(res => res.json());



  // const url = "https://map.yahooapis.jp/geocode/V1/geoCoder";
  // let rp = require('request-promise-native');
  // var options = {
  //   url : url,
  //   headers : {
  //     'User-Agent': 'Yahoo AppID:dj00aiZpPUFjQzFjbjNvemRPayZzPWNvbnN1bWVyc2VjcmV0Jng9MzQ-'
  //   },
  //     query : "東京都千代田区丸の内１丁目",
  //     output : 'json',
  //     json : true
  // };
  //
  // rp(encodeURI(url))
  // .then(function (parsedBody) {
  //   // POST succeeded...
  //   let geometry = JSON.parse(body).Feature[0].Geometry.Coordinates;
  //   geometry = geometry.split(",");
  //   let latitude = geometry[0];
  //   let longitude = geometry[1];
  //   console.log({"latitude":latitude, "longitude":longitude});
  //   return {"latitude":latitude, "longitude":longitude};
  // })
  // .catch(function (err) {
  //   // POST failed...
  //   console.log(err);
  // });


  // これでもできるが、request_promiseを使った書き方にしたい
  // https://github.com/request/request-promise
  // let callback = function(err, res, body){
  //   if(!err){
  //     // console.log(body);
  //     // console.log(JSON.parse(body).Feature[0].Geometry.Coordinates);
  //     let geometry = JSON.parse(body).Feature[0].Geometry.Coordinates;
  //     geometry = geometry.split(",");
  //     let latitude = geometry[0];
  //     let longitude = geometry[1];
  //     console.log({"latitude":latitude, "longitude":longitude});
  //     return {"latitude":latitude, "longitude":longitude};
  //   }
  // }
  // request.post(options, callback);
}
// getGeoCode();
