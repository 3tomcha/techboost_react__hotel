import React from 'react';
import ReactDOM from 'react-dom';

class RakutenTravelApi extends React.Component{
  sendRequest(e){
    e.preventDefault();
    const url = "https://app.rakuten.co.jp/services/api/Travel/GetHotelChainList/20131024?format=json&applicationId=1045719661893592374";

    // var xhr = new XMLHttpRequest();
    // xhr.addEventListener("load", ()=>console.log(this.responseText));
    // xhr.open("GET", url);
    // xhr.withCredentials = true;
    // xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
    // xhr.send();

  //   fetch(url,{
  //     method: "GET", // *GET, POST, PUT, DELETE, etc.
  //     mode: "cors", // no-cors, cors, *same-origin
  //     cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
  //     credentials: "omit", // include, same-origin, *omit
  //     headers: {
  //       "Content-Type": "application/json; charset=utf-8",
  //       "Access-Control-Allow-Origin": "*",
  //     },
  //     redirect: "follow", // manual, *follow, error
  //     referrer: "no-referrer", // no-referrer, *client
  //   })
  //   .then(function(response) {
  //   return response.json();
  // })
  // .then(function(myJson) {
  //   console.log(JSON.stringify(myJson));
  // });


      fetch(url)
      .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      console.log(JSON.stringify(myJson));
    });

  }
  render(){
    return(
      <button onClick={(e) => this.sendRequest(e)}>RakutenTravelApiのテスト</button>
      // <button >RakutenTravelApiのテスト</button>
    );
  }
}
export default RakutenTravelApi;
