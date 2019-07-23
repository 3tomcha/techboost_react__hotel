import fetch from 'node-fetch';

class RakutenTravelApi{

  static async fetchHotelsInfo(checkinDate, checkoutDate, latitude, longitude){
    // const url = "https://app.rakuten.co.jp/services/api/Travel/VacantHotelSearch/20170426?format=json&checkinDate=2019-06-25&checkoutDate=2019-06-26&latitude=128440.51&longitude=503172.21&searchRadius=3&applicationId=1045719661893592374";

    // 緯度経度を世界座標系に変換
    const w_latitude = longitude - longitude * 0.00010695 + latitude * 0.000017464 + 0.0046017;
    const w_longitude = latitude - longitude * 0.000046038 - latitude * 0.000083043 + 0.010040;

    const url = `https://app.rakuten.co.jp/services/api/Travel/VacantHotelSearch/20170426`
    + `?format=json&checkinDate=${checkinDate}&checkoutDate=${checkoutDate}&latitude=${w_latitude}&longitude=${w_longitude}`
    + `&searchRadius=3&applicationId=1045719661893592374&datumType=1`;
    console.log(url);

    const res = await fetch(encodeURI(url));
    const json = await res.json();
    return await JSON.stringify(json);
  }

  static async fetchDetailPlan(hotelNo, checkInDate, checkOutDate){
    const url = `https://app.rakuten.co.jp/services/api/Travel/VacantHotelSearch/20170426?format=json&checkinDate=`
    + `${checkInDate}&checkoutDate=${checkOutDate}&hotelNo=${hotelNo}&applicationId=1045719661893592374`;

    let response = await fetch(url);
    let json = await response.json();
    return await JSON.stringify(json);
  }
}
export default RakutenTravelApi;
