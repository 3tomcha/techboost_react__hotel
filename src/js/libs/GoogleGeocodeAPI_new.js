class GoogleGeocodeAPI_new{

  fetchDetailPlan(){
    console.log('fetchDetailPlanが動きました');
    let url = "https://map.yahooapis.jp/geocode/V1/geoCoder";
    url += "?appid=";
    url += "dj00aiZpPUFjQzFjbjNvemRPayZzPWNvbnN1bWVyc2VjcmV0Jng9MzQ-";
    url += "&query=";
    url += "東京都千代田区丸の内１丁目";
    url += "&output=";
    url += "json";

    var httpRequest = new XMLHttpRequest;
    httpRequest.onreadyStatechange = function(){
      try {
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
          if (httpRequest.status ===200 ) {
            console.log("成功です");
          }else{
            console.log("リクエストに問題が発生しました");
          }
        }
      } catch (e) {
        console.log(e.getMesssage());
      }
    };
    httpRequest.open('GET', url, true);
    httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    httpRequest.setRequestHeader('Access-Control-Allow-Origin', 'http://localhost:8080/');
    httpRequest.setRequestHeader('Access-Control-Allow-Credentials', true);
    httpRequest.send();




    //
    //   let response = await fetch(url,{
    //     mode : 'cors',
    //     credentials: "include",
    //     headers: {
    //       "Content-Type":"application/json; charset=utf-8",
    //       "Access-Control-Allow-Origin":"*"
    //     },
    //   });
    //   let json = await response.json();
    //   await console.log(json);
    //   return await JSON.stringify(json);
    // }
  }
}
export default GoogleGeocodeAPI_new;


















// export default async function getGeoCode(){

// nodejsのfetchはrequireする必要がある
//   const fetch = require('node-fetch');
// let url = "https://map.yahooapis.jp/geocode/V1/geoCoder";
// url += "?appid=";
// url += "dj00aiZpPUFjQzFjbjNvemRPayZzPWNvbnN1bWVyc2VjcmV0Jng9MzQ-";
// url += "&query=";
// url += "東京都千代田区丸の内１丁目";
// url += "&output=";
// url += "json";
//
// var fs = require("fs");
// var host = "127.0.0.1";
// var port = 1337;
// var express = require("express") ,http = require("http");
//
// var app = express();
// var server = http.createServer(app);
// app.get(url, function(request, response){
//   response.send("hello");
// });


// const url = "https://qiita.com/api/v2/items";
// let url = "https://map.yahooapis.jp/geocode/V1/geoCoder";
// url += "?appid=";
// url += "dj00aiZpPUFjQzFjbjNvemRPayZzPWNvbnN1bWVyc2VjcmV0Jng9MzQ-";
// url += "&query=";
// url += "東京都千代田区丸の内１丁目";
// url += "&output=";
// url += "json";
//
//   const axios = require("axios");
//   axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
//   let getApi = (path, headers) => {
//
//     if (!headers) {
//       headers = {};
//     }
//     return axios.get(path, {
//       method: 'GET',
//       mode: 'cors',
//       Access-Control-Request-Headers: {'Access-Control-Allow-Origin': '*'}
//     });
//   };
//
//
//   let url = "https://map.yahooapis.jp/geocode/V1/geoCoder";
//   url += "?appid=";
//   url += "dj00aiZpPUFjQzFjbjNvemRPayZzPWNvbnN1bWVyc2VjcmV0Jng9MzQ-";
//   url += "&query=";
//   url += "東京都千代田区丸の内１丁目";
//   url += "&output=";
//   url += "json";
//
// console.log("動くかな");
//   // let res = getApi(url,"Access-Control-Allow-Origin: *");
//   return getApi(url,"Access-Control-Allow-Origin: *");
// console.log(res);
// console.log("動かないかも");
// await console.log(data);

// async function main() {
//   try {
//     const instance = axios.create({
//       xsrfHeaderName: 'X-CSRF-Token',
//       withCredentials: true,
//       headers:{
//         'Access-Control-Allow-Origin': '*',
//         'X-Requested-With': 'XMLHttpRequest'
//       }});
//       const res = await instance.get(url);
//       const items = res.data;
//       console.log(items);
//       // for (const item of items) {
//       //   console.log(`${item.user.id}: \t${item.title}`);
//       // }
//     } catch (error) {
//       const {
//         status,
//         statusText
//       } = error.response;
//       console.log(`Error! HTTP Status: ${status} ${statusText}`);
//     }
//   }
//
//   main();






// var server = http.createServer(app);
// app.get("/", function(request, response){
//   response.send("hello");
// });
// var server = app.listen(port, host);
// server.on('error', function(err) {
//   console.log('error:' + err);
// });
// server.on('listening', function(){
//   console.log('server is up, all is well');
// });

// var express = require('express')
// var cors = require('cors')
// var app = express()
//
// app.use(cors())
//
// app.get(url, function (req, res, next) {
//   res.json({msg: 'This is CORS-enabled for all origins!'})
// })
//
// app.listen(80, function () {
//   console.log('CORS-enabled web server listening on port 80')
// })

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
// const geometry = await json.Feature[0].Geometry.Coordinates;
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
// }
// getGeoCode();
