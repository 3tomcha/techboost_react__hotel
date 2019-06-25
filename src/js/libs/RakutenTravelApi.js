class RakutenTravelApi{

  sendRequest(checkinDate, checkoutDate, latitude, longitude){
    // const url = "https://app.rakuten.co.jp/services/api/Travel/VacantHotelSearch/20170426?format=json&checkinDate=2019-06-25&checkoutDate=2019-06-26&latitude=128440.51&longitude=503172.21&searchRadius=3&applicationId=1045719661893592374";
    let url = "https://app.rakuten.co.jp/services/api/Travel/VacantHotelSearch/20170426?format=json&";
    url += `checkinDate=${checkinDate}&checkoutDate=${checkoutDate}&latitude=${latitude}&longitude=${longitude}`;
    url += "&searchRadius=3&datumType=1&applicationId=1045719661893592374";

    return fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      return JSON.stringify(myJson);
    });
  }
}
export default RakutenTravelApi;
