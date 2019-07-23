import RakutenTravelApi from '../src/js/libs/RakutenTravelApi.js';

test("hotelsを含むjsonを返却する", async() => {
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
  expect(hotels).toBe('');
});

test("hotelsを含むjsonを返却する", async() => {
  let json = await RakutenTravelApi.fetchDetailPlan(
    141356,
    "2019-08-04",
    "2019-08-05",
  );
  expect(json).toBe('');
  // const hotels = await JSON.parse(json).hotels;
  // expect(hotels).toHaveLength(0);
  // expect(hotels).not.toHaveLength(0);
});
