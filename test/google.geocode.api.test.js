import fetchGeoCode from '../src/js/libs/GoogleGeocodeAPI.js';


test("住所を入れると緯度と経度が返却される", async()=>{
  let json = await fetchGeoCode("東京都千代田区丸の内１丁目");
  let latitude = await json.latitude;
  let longitude = await json.longitude;
  // expect(latitude).toBe(0);
  // expect(latitude).not.toBe(0);
  expect(longitude).toBe(0);
  // expect(longitude).not.toBe(0);
});
