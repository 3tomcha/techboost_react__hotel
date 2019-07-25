import fetchGeoCode from '../src/js/libs/GoogleGeocodeAPI.js';


test("住所を入れると緯度と経度が返却される", async()=>{
  let json = await fetchGeoCode("東京都千代田区丸の内１丁目");
  await expect(json).toHaveProperty('latitude');
  await expect(json).toHaveProperty('longitude');
});

test("ありえない住所は件数が0エラー", async()=>{
  try {
    let json = await fetchGeoCode("東京都千代田区西荻北");
  } catch (e) {
    expect(e).toEqual(new Error("fetchGeoCodeのエラー"));
  }
});
