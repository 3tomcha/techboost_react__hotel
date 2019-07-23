import RakutenTravelApi from '../src/js/libs/RakutenTravelApi.js';
//
// test("fetchHotelsInfoで、hotelsを含むjsonを返却する", async() => {
//   // let rakutenTravelApi = new RakutenTravelApi;
//   let latitude = 139.76560814;
//   let longitude = 35.67851540;
//   let json = await RakutenTravelApi.fetchHotelsInfo(
//     "2019-08-04",
//     "2019-08-05",
//     latitude,
//     longitude
//   );
//   const hotels = await JSON.parse(json).hotels;
//   expect(hotels).toBe('');
// });
//
// test("fetchDetailPlan OK", async() => {
//   let json = await RakutenTravelApi.fetchDetailPlan(
//     141356,
//     "2019-08-04",
//     "2019-08-05",
//   );
//   expect(json.hotel).toBe('');
// });

test("fetchDetailPlan NG", async(done) => {
  // ( async() => {
  //   await RakutenTravelApi.fetchDetailPlan(
  //     141356555,
  //     "2019-08-04",
  //     "2019-08-05",
  //   );
  // })().catch(res => console.log(res));

  console.log(
  RakutenTravelApi.fetchDetailPlan(
    141356555,
    "2019-08-04",
    "2019-08-05",
  ).catch(error => {return error})
);
done();

});
  // expect( () => {
  //   return RakutenTravelApi.fetchDetailPlan(
  //     141356555,
  //     "2019-08-04",
  //     "2019-08-05",
  //   ).catch(error => {return error});
  // }).toThrowError("fetchDetailPlanのエラーだよ");
  //   done();
  // });
  // expect(await RakutenTravelApi.fetchDetailPlan(
  //   141356555,
  //   "2019-08-04",
  //   "2019-08-05",
  // )).toThrowError('fetchDetailPlanのエラー');
