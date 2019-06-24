import React from 'react';
import ReactDOM from 'react-dom';

class RakutenTravelApi extends React.Component{
  sendRequest(e){
    e.preventDefault();
    // const url = "https://app.rakuten.co.jp/services/api/Travel/VacantHotelSearch/20170426?format=json&checkinDate=2019-06-25&checkoutDate=2019-06-26&latitude=128440.51&longitude=503172.21&searchRadius=3&applicationId=1045719661893592374";
    let url = "https://app.rakuten.co.jp/services/api/Travel/VacantHotelSearch/20170426?format=json&";
    let checkinDate = '2019-06-25';
    let checkoutDate = '2019-06-26';
    let latitude = '128440.51';
    let longitude = '503172.21';
    url += `checkinDate=${checkinDate}&checkoutDate=${checkoutDate}&latitude=${latitude}&longitude=${longitude}`;
    url += "&searchRadius=3&applicationId=1045719661893592374";

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
    );
  }
}
export default RakutenTravelApi;
