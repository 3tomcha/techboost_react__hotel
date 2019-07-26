import RakutenTravelApi from '../src/js/libs/RakutenTravelApi.js';
//
test("【fetchHotelsInfo OK】hotelsを含むjsonを返却する", async() => {
  // let rakutenTravelApi = new RakutenTravelApi;
  let latitude = 139.76560814;
  let longitude = 35.67851540;
  let json = await RakutenTravelApi.fetchHotelsInfo(
    "2019-08-04",
    "2019-08-05",
    latitude,
    longitude
  );
  const hotels = await JSON.parse(json).hotels;
  expect(hotels).not.toHaveLength(0);
});

test("【fetchHotelsInfo NG】", async() => {
  // let rakutenTravelApi = new RakutenTravelApi;
  let latitude = 139.76560814;
  let longitude = 35.67851540;

  try {
    await RakutenTravelApi.fetchHotelsInfo(
      "2019-08-04",
      "2019-08-05",
      latitude,
      longitude
    );
  } catch (e) {
  expect(e).toEqual(new Error('fetchHotelsInfoのエラー'));
}
});

test("【fetchDetailPlan OK】hotelsを含むjsonを返却する", async() => {
  let json = await RakutenTravelApi.fetchDetailPlan(
    141356,
    "2019-08-04",
    "2019-08-05",
  );

  const hotels = await JSON.parse(json).hotels;
  expect(hotels).not.toHaveLength(0);
});

test("【fetchDetailPlan NG】", async() => {
try {
  await RakutenTravelApi.fetchDetailPlan(
      1413561,
      "2019-08-04",
      "2019-08-05"
    )
  } catch (e) {
  expect(e).toEqual(new Error('fetchDetailPlanのエラー'));
}
// 下記でもいいっぽい。でもrejectされているのか？
// https://github.com/facebook/jest/issues/1700
// expect(RakutenTravelApi.fetchDetailPlan(
//     1413561,
//     "2019-08-04",
//     "2019-08-05")
// ).rejects.toEqual(new Error('fetchHotelsInfoのエラー'));
});
