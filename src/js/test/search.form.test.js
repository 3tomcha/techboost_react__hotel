import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import SearchForm from '../Components/SearchForm.js';
import TestRenderer from 'react-test-renderer';
import { Link, Route } from "react-router-dom"
import { act } from 'react-dom/test-utils';
import ReactDOM from 'react-dom';
import {shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import ReactTestUtils from 'react-dom/test-utils';

Enzyme.configure({ adapter: new Adapter() });


// test("")


//
// let container;
//
// beforeEach(() => {
//   container = document.createElement('div');
//   document.body.appendChild(container);
// });
//
// afterEach(() => {
//   document.body.removeChild(container);
//   container = null;
// });
//
// it("全ての入力値が空だったらアラート" , () => {
//   // アラートをモックとして取得する
//   window.alert = jest.fn();
//
//   act(() => {
//     ReactDOM.render(<SearchForm/>, container);
//   });
//   const target = container.querySelector('input[type="submit"]');
//   ReactTestUtils.Simulate.click(target);
//
//   // アラートが呼ばれたかを判定する。呼ばれていなかったらテスト失敗になる
//   expect(window.alert).toHaveBeenCalled();
// });
//
// test.only("checkInDayとcheckOutDayがセットされる", () => {
//   const today = new Date();
//   const tomorrow = new Date(
//     today.getFullYear(),
//     today.getMonth(),
//     today.getDate() + 1,
//     today.getHours(),
//     today.getMinutes()
//   );
//   const wrapper = mount(<SearchForm checkInDay={today}
//     checkOutDay={tomorrow}/>);
//
//     console.log(wrapper.debug());
//
//     // チェックイン日の入力ボックス
//     let input_in = wrapper.find('input');
//     expect(input_in.value).toBe(
//       today.getMonth() + "/" + today.getDate() + "/" + today.getFullYear()
//     );
//
//     // チェックアウト日の入力ボックス
//     let input_out = container.querySelectorAll('input')[2];
//     expect(input_out.value).toBe("07/13/2019");
// });
//
//     test("全ての入力ボックスが埋まったらsetStateする", async() => {
//       const today = new Date();
//       const tomorrow = new Date(
//         today.getFullYear(),
//         today.getMonth(),
//         today.getDay() + 1,
//         today.getHours(),
//         today.getMinutes()
//       );
//       const searchForm = shallow(<SearchForm
//         checkInDay={today} checkOutDay={tomorrow}/>);
//
//         let target = searchForm.find('input').first();
//         await target.simulate('change', { target : {value : '東京都千代田区丸の内１丁目'}});
//         let submit = searchForm.find('input').last();
//         await submit.simulate('click', { preventDefault : () => {} });
//         // Y is not definedが動くようにしたい
//         await expect(searchForm.state('location')).toBe('東京都千代田区丸の内１丁目');
//       });;
//
//
//       const hotels=[
//         {
//           "hotel": [
//             {
//               "hotelBasicInfo": {
//                 "hotelNo": 141356,
//                 "hotelName": "スーパーホテルＰｒｅｍｉｅｒ東京駅八重洲中央口　八重桜の湯（旧Ｌｏｈａｓ東京駅八重洲中央口）",
//                 "hotelInformationUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/pvonD/?f_no=141356",
//                 "planListUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/vFumt/?f_no=141356&f_flg=PLAN",
//                 "dpPlanListUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/WzozX/?noTomariHotel=141356",
//                 "reviewUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/gJNfM/?f_hotel_no=141356",
//                 "hotelKanaName": "すーぱーほてるぷれみあとうきょうえきやえすちゅうおうぐちやえざくらのゆ",
//                 "hotelSpecial": "【楽天トラベルブロンズアワード2018受賞】男女別の大浴場「八重桜の湯」は健康イオン水大浴場と炭酸泉が大人気です！",
//                 "hotelMinCharge": 6400,
//                 "latitude": 35.67922715,
//                 "longitude": 139.7698432,
//                 "postalCode": "104-0028",
//                 "address1": "東京都",
//                 "address2": "中央区八重洲2-2-7",
//                 "telephoneNo": "03-3241-9000",
//                 "faxNo": "03-3241-9003",
//                 "access": "東京駅より徒歩３分（八重洲中央口より）、羽田空港よりリムジンバスで30分、成田空港よりJRエクスプレスで60分。",
//                 "parkingInformation": "立体駐車場20台/1泊1000円/入庫時間15：00～24：00・出庫時間7：00～11：00/",
//                 "nearestStation": "東京",
//                 "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/141356/141356.jpg",
//                 "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/141356.jpg",
//                 "roomImageUrl": null,
//                 "roomThumbnailUrl": null,
//                 "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/141356/141356map.gif",
//                 "reviewCount": 1920,
//                 "reviewAverage": 4.43,
//                 "userReview": "何度来ても くつろぎますし\r\n対応が素晴らしいです\r\nスタッフの方が 皆さん綺麗ですし笑顔を絶やさず 気持ち良く\r\n対応して貰いました\r\nまた利用します　2019-07-02 15:40:35投稿"
//               }
//             },
//             {
//               "roomInfo": [
//                 {
//                   "roomBasicInfo": {
//                     "roomClass": "ok001",
//                     "roomName": "◇禁煙◇お部屋タイプおまかせ♪",
//                     "planId": 3879730,
//                     "planName": "楽天限定・直前割♪【お部屋タイプおまかせプラン】～東京駅から歩いて３分おトクにぐっすり～",
//                     "pointRate": 1,
//                     "withDinnerFlag": 0,
//                     "dinnerSelectFlag": 0,
//                     "withBreakfastFlag": 0,
//                     "breakfastSelectFlag": 0,
//                     "payment": "1",
//                     "reserveUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/IdsCY/?f_no=141356&f_syu=ok001&f_hi1=2019-07-4&f_hi2=2019-07-5&f_heya_su=1&f_otona_su=1&f_s1=0&f_s2=0&f_y1=0&f_y2=0&f_y3=0&f_y4=0&f_camp_id=3879730",
//                     "salesformFlag": 0
//                   }
//                 },
//                 {
//                   "dailyCharge": {
//                     "stayDate": "2019-07-4",
//                     "rakutenCharge": 14200,
//                     "total": 14200,
//                     "chargeFlag": 0
//                   }
//                 }
//               ]
//             },
//             {
//               "roomInfo": [
//                 {
//                   "roomBasicInfo": {
//                     "roomClass": "s7",
//                     "roomName": "□禁煙□スーパールーム(ダブルベット＋ロフトベット)",
//                     "planId": 3586917,
//                     "planName": "*東京駅から徒歩３分*【スタンダードプラン・朝食なし】～高濃度人工炭酸泉でぐっすり～全館禁煙",
//                     "pointRate": 1,
//                     "withDinnerFlag": 0,
//                     "dinnerSelectFlag": 0,
//                     "withBreakfastFlag": 0,
//                     "breakfastSelectFlag": 0,
//                     "payment": "1",
//                     "reserveUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/IdsCY/?f_no=141356&f_syu=s7&f_hi1=2019-07-4&f_hi2=2019-07-5&f_heya_su=1&f_otona_su=1&f_s1=0&f_s2=0&f_y1=0&f_y2=0&f_y3=0&f_y4=0&f_camp_id=3586917",
//                     "salesformFlag": 0
//                   }
//                 },
//                 {
//                   "dailyCharge": {
//                     "stayDate": "2019-07-4",
//                     "rakutenCharge": 14700,
//                     "total": 14700,
//                     "chargeFlag": 0
//                   }
//                 }
//               ]
//             },
//             {
//               "roomInfo": [
//                 {
//                   "roomBasicInfo": {
//                     "roomClass": "ok001",
//                     "roomName": "◇禁煙◇お部屋タイプおまかせ♪",
//                     "planId": 3879734,
//                     "planName": "楽天限定・直前割♪【お部屋タイプおまかせプラン・朝食付】～東京駅から歩いて３分おトクにぐっすり～",
//                     "pointRate": 1,
//                     "withDinnerFlag": 0,
//                     "dinnerSelectFlag": 0,
//                     "withBreakfastFlag": 0,
//                     "breakfastSelectFlag": 0,
//                     "payment": "1",
//                     "reserveUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/IdsCY/?f_no=141356&f_syu=ok001&f_hi1=2019-07-4&f_hi2=2019-07-5&f_heya_su=1&f_otona_su=1&f_s1=0&f_s2=0&f_y1=0&f_y2=0&f_y3=0&f_y4=0&f_camp_id=3879734",
//                     "salesformFlag": 0
//                   }
//                 },
//                 {
//                   "dailyCharge": {
//                     "stayDate": "2019-07-4",
//                     "rakutenCharge": 15300,
//                     "total": 15300,
//                     "chargeFlag": 0
//                   }
//                 }
//               ]
//             }
//           ]
//         },
//         {
//           "hotel": [
//             {
//               "hotelBasicInfo": {
//                 "hotelNo": 160960,
//                 "hotelName": "京王プレッソイン東京駅八重洲",
//                 "hotelInformationUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/pvonD/?f_no=160960",
//                 "planListUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/vFumt/?f_no=160960&f_flg=PLAN",
//                 "dpPlanListUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/WzozX/?noTomariHotel=160960",
//                 "reviewUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/gJNfM/?f_hotel_no=160960",
//                 "hotelKanaName": "けいおうぷれっそいんとうきょうえきやえす",
//                 "hotelSpecial": "【枚数限定のお得なクーポン配布中！】東京駅中央口より徒歩３分、銀座線京橋駅徒歩２分と好アクセス！",
//                 "hotelMinCharge": 6750,
//                 "latitude": 35.67885651587531,
//                 "longitude": 139.77008201920822,
//                 "postalCode": "104-0031",
//                 "address1": "東京都",
//                 "address2": "中央区京橋1-4-1",
//                 "telephoneNo": "03-3279-0202",
//                 "faxNo": "03-3279-0203",
//                 "access": "ＪＲ　東京駅八重洲中央口より徒歩にて約３分",
//                 "parkingInformation": "無し",
//                 "nearestStation": "東京",
//                 "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/160960/160960.jpg",
//                 "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/160960.jpg",
//                 "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/160960/160960_kan1.jpg",
//                 "roomThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/INTERIOR/160960.jpg",
//                 "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/160960/160960map.gif",
//                 "reviewCount": 623,
//                 "reviewAverage": 4.16,
//                 "userReview": "朝食がうれしいです、特にクロワッサンがとてもおいしい。\r\n立地やセキュリティへの配慮もうれしいです。　2019-07-03 15:56:21投稿"
//               }
//             },
//             {
//               "roomInfo": [
//                 {
//                   "roomBasicInfo": {
//                     "roomClass": "tn1",
//                     "roomName": "コンフォートツインルーム【禁煙】1名",
//                     "planId": 4065184,
//                     "planName": "▲▽当日限定▲▽コンフォートツインルーム1名利用・東京駅八重洲中央口徒歩3分・軽朝食付き♪",
//                     "pointRate": 1,
//                     "withDinnerFlag": 0,
//                     "dinnerSelectFlag": 0,
//                     "withBreakfastFlag": 1,
//                     "breakfastSelectFlag": 0,
//                     "payment": "1",
//                     "reserveUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/JlnYS/?f_no=160960&f_syu=tn1&f_hi1=2019-07-4&f_hi2=2019-07-5&f_heya_su=1&f_otona_su=1&f_s1=0&f_s2=0&f_y1=0&f_y2=0&f_y3=0&f_y4=0&f_camp_id=4065184",
//                     "salesformFlag": 2
//                   }
//                 },
//                 {
//                   "dailyCharge": {
//                     "stayDate": "2019-07-4",
//                     "rakutenCharge": 18500,
//                     "total": 18500,
//                     "chargeFlag": 0
//                   }
//                 }
//               ]
//             },
//             {
//               "roomInfo": [
//                 {
//                   "roomBasicInfo": {
//                     "roomClass": "ts1",
//                     "roomName": "コンフォートツインルーム《喫煙》1名",
//                     "planId": 4065184,
//                     "planName": "▲▽当日限定▲▽コンフォートツインルーム1名利用・東京駅八重洲中央口徒歩3分・軽朝食付き♪",
//                     "pointRate": 1,
//                     "withDinnerFlag": 0,
//                     "dinnerSelectFlag": 0,
//                     "withBreakfastFlag": 1,
//                     "breakfastSelectFlag": 0,
//                     "payment": "1",
//                     "reserveUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/JlnYS/?f_no=160960&f_syu=ts1&f_hi1=2019-07-4&f_hi2=2019-07-5&f_heya_su=1&f_otona_su=1&f_s1=0&f_s2=0&f_y1=0&f_y2=0&f_y3=0&f_y4=0&f_camp_id=4065184",
//                     "salesformFlag": 2
//                   }
//                 },
//                 {
//                   "dailyCharge": {
//                     "stayDate": "2019-07-4",
//                     "rakutenCharge": 18500,
//                     "total": 18500,
//                     "chargeFlag": 0
//                   }
//                 }
//               ]
//             },
//             {
//               "roomInfo": [
//                 {
//                   "roomBasicInfo": {
//                     "roomClass": "tn1",
//                     "roomName": "コンフォートツインルーム【禁煙】1名",
//                     "planId": null,
//                     "planName": null,
//                     "pointRate": 1,
//                     "withDinnerFlag": 0,
//                     "dinnerSelectFlag": 0,
//                     "withBreakfastFlag": 1,
//                     "breakfastSelectFlag": 0,
//                     "payment": "0",
//                     "reserveUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/IdsCY/?f_no=160960&f_syu=tn1&f_hi1=2019-07-4&f_hi2=2019-07-5&f_heya_su=1&f_otona_su=1&f_s1=0&f_s2=0&f_y1=0&f_y2=0&f_y3=0&f_y4=0",
//                     "salesformFlag": 1
//                   }
//                 },
//                 {
//                   "dailyCharge": {
//                     "stayDate": "2019-07-4",
//                     "rakutenCharge": 36000,
//                     "total": 36000,
//                     "chargeFlag": 0
//                   }
//                 }
//               ]
//             }
//           ]
//         },
//         {
//           "hotel": [
//             {
//               "hotelBasicInfo": {
//                 "hotelNo": 3092,
//                 "hotelName": "ホテルニューグリーン御徒町",
//                 "hotelInformationUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/pvonD/?f_no=3092",
//                 "planListUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/vFumt/?f_no=3092&f_flg=PLAN",
//                 "dpPlanListUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/WzozX/?noTomariHotel=3092",
//                 "reviewUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/gJNfM/?f_hotel_no=3092",
//                 "hotelKanaName": "にゅーぐりーん　おかちまち",
//                 "hotelSpecial": "全室有線LAN＆Wi-Fi接続無料～東京ビジネス快適郷★☆★寛ぎの新空間～  ＪＲ線・東京メトロ５駅利用で交通に便利！！",
//                 "hotelMinCharge": 5200,
//                 "latitude": 35.704998,
//                 "longitude": 139.7755142,
//                 "postalCode": "110-0005",
//                 "address1": "東京都",
//                 "address2": "台東区上野5-15-1",
//                 "telephoneNo": "03-5816-1111",
//                 "faxNo": "03-5816-1112",
//                 "access": "♪ＪＲ山手線御徒町徒歩３分・地下鉄日比谷線仲御徒町徒歩１分・銀座線１番徒歩５分・大江戸線Ａ６徒歩３分と便利デス♪",
//                 "parkingInformation": "☆有☆１泊1,600円(15時～翌AM10時)☆その他の時間30分200円☆要TEL予約",
//                 "nearestStation": "御徒町",
//                 "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/3092/3092.jpg",
//                 "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/3092.jpg",
//                 "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/3092/3092_sgl.jpg",
//                 "roomThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/INTERIOR/3092.jpg",
//                 "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/3092/3092map.gif",
//                 "reviewCount": 7023,
//                 "reviewAverage": 3.81,
//                 "userReview": "　今回も利用させていただきました。ありがとうございました。駅に近く、繁華街にも近いのでとても便利です。　2019-07-03 08:35:51投稿"
//               }
//             },
//             {
//               "roomInfo": [
//                 {
//                   "roomBasicInfo": {
//                     "roomClass": "ks",
//                     "roomName": "☆禁煙（キンエン）シングルルーム☆",
//                     "planId": 1478455,
//                     "planName": "【素泊まりプラン】☆５駅利用可☆交通に便利！！",
//                     "pointRate": 1,
//                     "withDinnerFlag": 0,
//                     "dinnerSelectFlag": 0,
//                     "withBreakfastFlag": 0,
//                     "breakfastSelectFlag": 0,
//                     "payment": "1",
//                     "reserveUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/IdsCY/?f_no=3092&f_syu=ks&f_hi1=2019-07-4&f_hi2=2019-07-5&f_heya_su=1&f_otona_su=1&f_s1=0&f_s2=0&f_y1=0&f_y2=0&f_y3=0&f_y4=0&f_camp_id=1478455",
//                     "salesformFlag": 0
//                   }
//                 },
//                 {
//                   "dailyCharge": {
//                     "stayDate": "2019-07-4",
//                     "rakutenCharge": 7100,
//                     "total": 7100,
//                     "chargeFlag": 0
//                   }
//                 }
//               ]
//             },
//             {
//               "roomInfo": [
//                 {
//                   "roomBasicInfo": {
//                     "roomClass": "ks",
//                     "roomName": "☆禁煙（キンエン）シングルルーム☆",
//                     "planId": 1990613,
//                     "planName": "★☆シングルルーム限定【QUOカード５００円】付きプラン☆★",
//                     "pointRate": 1,
//                     "withDinnerFlag": 0,
//                     "dinnerSelectFlag": 0,
//                     "withBreakfastFlag": 0,
//                     "breakfastSelectFlag": 0,
//                     "payment": "1",
//                     "reserveUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/IdsCY/?f_no=3092&f_syu=ks&f_hi1=2019-07-4&f_hi2=2019-07-5&f_heya_su=1&f_otona_su=1&f_s1=0&f_s2=0&f_y1=0&f_y2=0&f_y3=0&f_y4=0&f_camp_id=1990613",
//                     "salesformFlag": 0
//                   }
//                 },
//                 {
//                   "dailyCharge": {
//                     "stayDate": "2019-07-4",
//                     "rakutenCharge": 7900,
//                     "total": 7900,
//                     "chargeFlag": 0
//                   }
//                 }
//               ]
//             },
//             {
//               "roomInfo": [
//                 {
//                   "roomBasicInfo": {
//                     "roomClass": "aa",
//                     "roomName": "☆禁煙（キンエン）シングル-B☆",
//                     "planId": 1478455,
//                     "planName": "【素泊まりプラン】☆５駅利用可☆交通に便利！！",
//                     "pointRate": 1,
//                     "withDinnerFlag": 0,
//                     "dinnerSelectFlag": 0,
//                     "withBreakfastFlag": 0,
//                     "breakfastSelectFlag": 0,
//                     "payment": "1",
//                     "reserveUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/IdsCY/?f_no=3092&f_syu=aa&f_hi1=2019-07-4&f_hi2=2019-07-5&f_heya_su=1&f_otona_su=1&f_s1=0&f_s2=0&f_y1=0&f_y2=0&f_y3=0&f_y4=0&f_camp_id=1478455",
//                     "salesformFlag": 0
//                   }
//                 },
//                 {
//                   "dailyCharge": {
//                     "stayDate": "2019-07-4",
//                     "rakutenCharge": 8100,
//                     "total": 8100,
//                     "chargeFlag": 0
//                   }
//                 }
//               ]
//             }
//           ]
//         },
//         {
//           "hotel": [
//             {
//               "hotelBasicInfo": {
//                 "hotelNo": 166431,
//                 "hotelName": "ヴィアイン飯田橋後楽園（２０１８年９月５日オープン）",
//                 "hotelInformationUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/pvonD/?f_no=166431",
//                 "planListUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/vFumt/?f_no=166431&f_flg=PLAN",
//                 "dpPlanListUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/WzozX/?noTomariHotel=166431",
//                 "reviewUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/gJNfM/?f_hotel_no=166431",
//                 "hotelKanaName": "ヴぃあいんいいだばしこうらくえん",
//                 "hotelSpecial": "☆２０１８年９月５日オープン☆飯田橋駅より徒歩５～８分◎全プラン無料朝食付き！東京ドームへ徒歩１5分【クーポン配布中】",
//                 "hotelMinCharge": 3450,
//                 "latitude": 35.7056312375587,
//                 "longitude": 139.74332236958924,
//                 "postalCode": "162-0814",
//                 "address1": "東京都",
//                 "address2": "新宿区新小川町4番１１号",
//                 "telephoneNo": "03-3235-5489",
//                 "faxNo": "03-3235-5487",
//                 "access": "JR飯田橋駅東口より徒歩約５分。東口改札を出て左へ曲がり、歩道橋を渡り目白通り（首都高沿い）を直進。スーパーいなげやの隣",
//                 "parkingInformation": "無し ※敷地内にコインパーキングタイムズ有（２５台）　２４時間最大1800円　先着順・予約不可",
//                 "nearestStation": "飯田橋",
//                 "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/166431/166431.jpg",
//                 "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/166431.jpg",
//                 "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/166431/166431_kan1.jpg",
//                 "roomThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/INTERIOR/166431.jpg",
//                 "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/166431/166431map.gif",
//                 "reviewCount": 635,
//                 "reviewAverage": 4.37,
//                 "userReview": "駅からのルートが少し分かりにくいのが難ですが、…　2019-06-30 13:01:30投稿 <a href=\"http://img.travel.rakuten.co.jp/image/tr/api/re/gJNfM/?f_hotel_no=166431\" class=\"3click\">つづきはこちら</a>"
//               }
//             },
//             {
//               "roomInfo": [
//                 {
//                   "roomBasicInfo": {
//                     "roomClass": "nss",
//                     "roomName": "【禁煙】 シングル [1名利用] 13平米",
//                     "planId": 4193129,
//                     "planName": "【定番のシンプルステイ】 スタンダードプラン　★無料朝食付き★",
//                     "pointRate": 1,
//                     "withDinnerFlag": 0,
//                     "dinnerSelectFlag": 0,
//                     "withBreakfastFlag": 1,
//                     "breakfastSelectFlag": 0,
//                     "payment": "1",
//                     "reserveUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/IdsCY/?f_no=166431&f_syu=nss&f_hi1=2019-07-4&f_hi2=2019-07-5&f_heya_su=1&f_otona_su=1&f_s1=0&f_s2=0&f_y1=0&f_y2=0&f_y3=0&f_y4=0&f_camp_id=4193129",
//                     "salesformFlag": 0
//                   }
//                 },
//                 {
//                   "dailyCharge": {
//                     "stayDate": "2019-07-4",
//                     "rakutenCharge": 10000,
//                     "total": 10000,
//                     "chargeFlag": 0
//                   }
//                 }
//               ]
//             },
//             {
//               "roomInfo": [
//                 {
//                   "roomBasicInfo": {
//                     "roomClass": "sss",
//                     "roomName": "【喫煙】 シングル [1名利用] 13平米",
//                     "planId": 4193129,
//                     "planName": "【定番のシンプルステイ】 スタンダードプラン　★無料朝食付き★",
//                     "pointRate": 1,
//                     "withDinnerFlag": 0,
//                     "dinnerSelectFlag": 0,
//                     "withBreakfastFlag": 1,
//                     "breakfastSelectFlag": 0,
//                     "payment": "1",
//                     "reserveUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/IdsCY/?f_no=166431&f_syu=sss&f_hi1=2019-07-4&f_hi2=2019-07-5&f_heya_su=1&f_otona_su=1&f_s1=0&f_s2=0&f_y1=0&f_y2=0&f_y3=0&f_y4=0&f_camp_id=4193129",
//                     "salesformFlag": 0
//                   }
//                 },
//                 {
//                   "dailyCharge": {
//                     "stayDate": "2019-07-4",
//                     "rakutenCharge": 10000,
//                     "total": 10000,
//                     "chargeFlag": 0
//                   }
//                 }
//               ]
//             },
//             {
//               "roomInfo": [
//                 {
//                   "roomBasicInfo": {
//                     "roomClass": "nss",
//                     "roomName": "【禁煙】 シングル [1名利用] 13平米",
//                     "planId": 4421527,
//                     "planName": "【女性必見】頑張る貴女に…数種類から選べるレディースアメニティ付きプラン♪　★無料朝食付き★",
//                     "pointRate": 1,
//                     "withDinnerFlag": 0,
//                     "dinnerSelectFlag": 0,
//                     "withBreakfastFlag": 1,
//                     "breakfastSelectFlag": 0,
//                     "payment": "1",
//                     "reserveUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/IdsCY/?f_no=166431&f_syu=nss&f_hi1=2019-07-4&f_hi2=2019-07-5&f_heya_su=1&f_otona_su=1&f_s1=0&f_s2=0&f_y1=0&f_y2=0&f_y3=0&f_y4=0&f_camp_id=4421527",
//                     "salesformFlag": 0
//                   }
//                 },
//                 {
//                   "dailyCharge": {
//                     "stayDate": "2019-07-4",
//                     "rakutenCharge": 12000,
//                     "total": 12000,
//                     "chargeFlag": 0
//                   }
//                 }
//               ]
//             }
//           ]
//         },
//         {
//           "hotel": [
//             {
//               "hotelBasicInfo": {
//                 "hotelNo": 162999,
//                 "hotelName": "京王プレッソイン浜松町",
//                 "hotelInformationUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/pvonD/?f_no=162999",
//                 "planListUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/vFumt/?f_no=162999&f_flg=PLAN",
//                 "dpPlanListUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/WzozX/?noTomariHotel=162999",
//                 "reviewUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/gJNfM/?f_hotel_no=162999",
//                 "hotelKanaName": "けいおうぷれっそいんはままつちょう",
//                 "hotelSpecial": "クーポン発行中★11:00チェックアウトでゆっくり～軽朝食付き！羽田空港から東京モノレールで約２４分、品川駅から約５分！",
//                 "hotelMinCharge": 3150,
//                 "latitude": 35.6594041,
//                 "longitude": 139.75264630000004,
//                 "postalCode": "105-0012",
//                 "address1": "東京都",
//                 "address2": "港区芝大門1-1-26",
//                 "telephoneNo": "03-3438-0202",
//                 "faxNo": "03-3438-0203",
//                 "access": "ＪＲ浜松町駅　北口徒歩約８分　都営浅草線　大江戸線大門駅　Ａ６出口徒歩４分　都営三田線御成門駅　Ａ２出口徒歩２分",
//                 "parkingInformation": "無し",
//                 "nearestStation": "浜松町",
//                 "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/162999/162999.jpg",
//                 "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/162999.jpg",
//                 "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/162999/162999_room.jpg",
//                 "roomThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/INTERIOR/162999.jpg",
//                 "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/162999/162999map.gif",
//                 "reviewCount": 500,
//                 "reviewAverage": 4.31,
//                 "userReview": "ローソンに隣接、隣にはファミマもあり、便利。但し、レストランは目の前の中華料理店を除き周辺には無く、夕食は大門駅周辺で食べてからホテルに行くのがおすすめ。　2019-07-03 07:52:15投稿"
//               }
//             },
//             {
//               "roomInfo": [
//                 {
//                   "roomBasicInfo": {
//                     "roomClass": "ss",
//                     "roomName": "品川＆東京駅より2駅5分◎コンフォートシングルルーム【喫煙】",
//                     "planId": 4262038,
//                     "planName": "【当日限定】【オンラインカード決済限定】らくらくチェックイン！東京駅まで電車で５分でアクセス便利！",
//                     "pointRate": 1,
//                     "withDinnerFlag": 0,
//                     "dinnerSelectFlag": 0,
//                     "withBreakfastFlag": 1,
//                     "breakfastSelectFlag": 0,
//                     "payment": "2",
//                     "reserveUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/IdsCY/?f_no=162999&f_syu=ss&f_hi1=2019-07-4&f_hi2=2019-07-5&f_heya_su=1&f_otona_su=1&f_s1=0&f_s2=0&f_y1=0&f_y2=0&f_y3=0&f_y4=0&f_camp_id=4262038",
//                     "salesformFlag": 0
//                   }
//                 },
//                 {
//                   "dailyCharge": {
//                     "stayDate": "2019-07-4",
//                     "rakutenCharge": 10000,
//                     "total": 10000,
//                     "chargeFlag": 0
//                   }
//                 }
//               ]
//             },
//             {
//               "roomInfo": [
//                 {
//                   "roomBasicInfo": {
//                     "roomClass": "sn",
//                     "roomName": "品川＆東京駅より2駅5分◎コンフォートシングルルーム《禁煙》",
//                     "planId": 4262038,
//                     "planName": "【当日限定】【オンラインカード決済限定】らくらくチェックイン！東京駅まで電車で５分でアクセス便利！",
//                     "pointRate": 1,
//                     "withDinnerFlag": 0,
//                     "dinnerSelectFlag": 0,
//                     "withBreakfastFlag": 1,
//                     "breakfastSelectFlag": 0,
//                     "payment": "2",
//                     "reserveUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/IdsCY/?f_no=162999&f_syu=sn&f_hi1=2019-07-4&f_hi2=2019-07-5&f_heya_su=1&f_otona_su=1&f_s1=0&f_s2=0&f_y1=0&f_y2=0&f_y3=0&f_y4=0&f_camp_id=4262038",
//                     "salesformFlag": 0
//                   }
//                 },
//                 {
//                   "dailyCharge": {
//                     "stayDate": "2019-07-4",
//                     "rakutenCharge": 10000,
//                     "total": 10000,
//                     "chargeFlag": 0
//                   }
//                 }
//               ]
//             },
//             {
//               "roomInfo": [
//                 {
//                   "roomBasicInfo": {
//                     "roomClass": "ss",
//                     "roomName": "品川＆東京駅より2駅5分◎コンフォートシングルルーム【喫煙】",
//                     "planId": 4142471,
//                     "planName": "◆◇当日限定◇◆(◎品川駅より2駅5分◎コンフォートシングルルーム)軽朝食付き♪",
//                     "pointRate": 1,
//                     "withDinnerFlag": 0,
//                     "dinnerSelectFlag": 0,
//                     "withBreakfastFlag": 0,
//                     "breakfastSelectFlag": 0,
//                     "payment": "1",
//                     "reserveUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/JlnYS/?f_no=162999&f_syu=ss&f_hi1=2019-07-4&f_hi2=2019-07-5&f_heya_su=1&f_otona_su=1&f_s1=0&f_s2=0&f_y1=0&f_y2=0&f_y3=0&f_y4=0&f_camp_id=4142471",
//                     "salesformFlag": 2
//                   }
//                 },
//                 {
//                   "dailyCharge": {
//                     "stayDate": "2019-07-4",
//                     "rakutenCharge": 11000,
//                     "total": 11000,
//                     "chargeFlag": 0
//                   }
//                 }
//               ]
//             }
//           ]
//         },
//         {
//           "hotel": [
//             {
//               "hotelBasicInfo": {
//                 "hotelNo": 140984,
//                 "hotelName": "相鉄フレッサイン　新橋日比谷口",
//                 "hotelInformationUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/pvonD/?f_no=140984",
//                 "planListUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/vFumt/?f_no=140984&f_flg=PLAN",
//                 "dpPlanListUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/WzozX/?noTomariHotel=140984",
//                 "reviewUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/gJNfM/?f_hotel_no=140984",
//                 "hotelKanaName": "そうてつふれっさいん　しんばしひびやぐち",
//                 "hotelSpecial": "新橋駅日比谷口より徒歩2分の好立地。銀座、汐留も徒歩圏内でアクセス抜群です。",
//                 "hotelMinCharge": 3300,
//                 "latitude": 35.66825,
//                 "longitude": 139.757622,
//                 "postalCode": "105-0004",
//                 "address1": "東京都",
//                 "address2": "港区新橋1-14-3",
//                 "telephoneNo": "03-5157-2031",
//                 "faxNo": "03-5157-2035",
//                 "access": "ＪＲ各線　新橋駅日比谷口より徒歩2分。銀座線　新橋駅7番出口より徒歩2分。三田線　内幸町駅A2番出口より徒歩3分",
//                 "parkingInformation": "無し",
//                 "nearestStation": "新橋",
//                 "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/140984/140984.jpg",
//                 "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/140984.jpg",
//                 "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/140984/140984_kya.jpg",
//                 "roomThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/INTERIOR/140984.jpg",
//                 "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/140984/140984map.gif",
//                 "reviewCount": 1405,
//                 "reviewAverage": 4.14,
//                 "userReview": "別館でしたが　ストレスもなく良かったですよ。　2019-07-02 15:38:53投稿"
//               }
//             },
//             {
//               "roomInfo": [
//                 {
//                   "roomBasicInfo": {
//                     "roomClass": "tm",
//                     "roomName": "【室数限定】☆禁煙ルーム☆",
//                     "planId": 2962941,
//                     "planName": "【当日限定】お部屋はホテルにおまかせ♪【別館】もご案内（食事なし）",
//                     "pointRate": 1,
//                     "withDinnerFlag": 0,
//                     "dinnerSelectFlag": 0,
//                     "withBreakfastFlag": 0,
//                     "breakfastSelectFlag": 0,
//                     "payment": "1",
//                     "reserveUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/JlnYS/?f_no=140984&f_syu=tm&f_hi1=2019-07-4&f_hi2=2019-07-5&f_heya_su=1&f_otona_su=1&f_s1=0&f_s2=0&f_y1=0&f_y2=0&f_y3=0&f_y4=0&f_camp_id=2962941",
//                     "salesformFlag": 2
//                   }
//                 },
//                 {
//                   "dailyCharge": {
//                     "stayDate": "2019-07-4",
//                     "rakutenCharge": 13000,
//                     "total": 13000,
//                     "chargeFlag": 0
//                   }
//                 }
//               ]
//             },
//             {
//               "roomInfo": [
//                 {
//                   "roomBasicInfo": {
//                     "roomClass": "s",
//                     "roomName": "本館シングル（140ｃｍベッド）☆禁煙☆〈13平米〉",
//                     "planId": 3673990,
//                     "planName": "【期間限定！宿泊予約＆クチコミ投稿で合計1000ポイントGET★】FRESAスタンダード",
//                     "pointRate": 1,
//                     "withDinnerFlag": 0,
//                     "dinnerSelectFlag": 0,
//                     "withBreakfastFlag": 0,
//                     "breakfastSelectFlag": 0,
//                     "payment": "1",
//                     "reserveUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/IdsCY/?f_no=140984&f_syu=s&f_hi1=2019-07-4&f_hi2=2019-07-5&f_heya_su=1&f_otona_su=1&f_s1=0&f_s2=0&f_y1=0&f_y2=0&f_y3=0&f_y4=0&f_camp_id=3673990",
//                     "salesformFlag": 0
//                   }
//                 },
//                 {
//                   "dailyCharge": {
//                     "stayDate": "2019-07-4",
//                     "rakutenCharge": 13300,
//                     "total": 13300,
//                     "chargeFlag": 0
//                   }
//                 }
//               ]
//             },
//             {
//               "roomInfo": [
//                 {
//                   "roomBasicInfo": {
//                     "roomClass": "s",
//                     "roomName": "本館シングル（140ｃｍベッド）☆禁煙☆〈13平米〉",
//                     "planId": 3800170,
//                     "planName": "【カード決済限定】楽天スーパーポイント5倍プラン（食事なし）",
//                     "pointRate": 5,
//                     "withDinnerFlag": 0,
//                     "dinnerSelectFlag": 0,
//                     "withBreakfastFlag": 0,
//                     "breakfastSelectFlag": 0,
//                     "payment": "2",
//                     "reserveUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/IdsCY/?f_no=140984&f_syu=s&f_hi1=2019-07-4&f_hi2=2019-07-5&f_heya_su=1&f_otona_su=1&f_s1=0&f_s2=0&f_y1=0&f_y2=0&f_y3=0&f_y4=0&f_camp_id=3800170",
//                     "salesformFlag": 0
//                   }
//                 },
//                 {
//                   "dailyCharge": {
//                     "stayDate": "2019-07-4",
//                     "rakutenCharge": 13300,
//                     "total": 13300,
//                     "chargeFlag": 0
//                   }
//                 }
//               ]
//             }
//           ]
//         },
//         {
//           "hotel": [
//             {
//               "hotelBasicInfo": {
//                 "hotelNo": 18270,
//                 "hotelName": "京王プレッソイン神田",
//                 "hotelInformationUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/pvonD/?f_no=18270",
//                 "planListUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/vFumt/?f_no=18270&f_flg=PLAN",
//                 "dpPlanListUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/WzozX/?noTomariHotel=18270",
//                 "reviewUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/gJNfM/?f_hotel_no=18270",
//                 "hotelKanaName": "けいおう　ぷれっそいん　かんだ",
//                 "hotelSpecial": "東京駅より１駅2分！徒歩5分以内に7つの路線◎さらに！秋葉原へは徒歩10分◎ビジネス・観光にとっても便利です♪",
//                 "hotelMinCharge": 4500,
//                 "latitude": 35.69472121,
//                 "longitude": 139.7691902,
//                 "postalCode": "101-0046",
//                 "address1": "東京都",
//                 "address2": "千代田区神田多町2-8",
//                 "telephoneNo": "03-3252-0202",
//                 "faxNo": "03-3252-0203",
//                 "access": "ＪＲ神田駅西口より徒歩５分/丸ノ内線淡路町駅A1・都営新宿線小川町駅A1出口より徒歩２分",
//                 "parkingInformation": "なし",
//                 "nearestStation": "神田（東京）",
//                 "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/18270/18270.jpg",
//                 "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/18270.jpg",
//                 "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/18270/18270_room.jpg",
//                 "roomThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/INTERIOR/18270.jpg",
//                 "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/18270/18270map.gif",
//                 "reviewCount": 4066,
//                 "reviewAverage": 4.11,
//                 "userReview": "とても気持ちよく過ごすことができま…　2019-07-02 21:13:23投稿 <a href=\"http://img.travel.rakuten.co.jp/image/tr/api/re/gJNfM/?f_hotel_no=18270\" class=\"3click\">つづきはこちら</a>"
//               }
//             },
//             {
//               "roomInfo": [
//                 {
//                   "roomBasicInfo": {
//                     "roomClass": "kdsn1",
//                     "roomName": "シングルルーム★禁煙★",
//                     "planId": 4118155,
//                     "planName": "【当日限定　カード決済限定】　～JR神田駅より徒歩5分・無料軽朝食付き～",
//                     "pointRate": 1,
//                     "withDinnerFlag": 0,
//                     "dinnerSelectFlag": 0,
//                     "withBreakfastFlag": 1,
//                     "breakfastSelectFlag": 0,
//                     "payment": "2",
//                     "reserveUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/JlnYS/?f_no=18270&f_syu=kdsn1&f_hi1=2019-07-4&f_hi2=2019-07-5&f_heya_su=1&f_otona_su=1&f_s1=0&f_s2=0&f_y1=0&f_y2=0&f_y3=0&f_y4=0&f_camp_id=4118155",
//                     "salesformFlag": 2
//                   }
//                 },
//                 {
//                   "dailyCharge": {
//                     "stayDate": "2019-07-4",
//                     "rakutenCharge": 9300,
//                     "total": 9300,
//                     "chargeFlag": 0
//                   }
//                 }
//               ]
//             },
//             {
//               "roomInfo": [
//                 {
//                   "roomBasicInfo": {
//                     "roomClass": "kdsn1",
//                     "roomName": "シングルルーム★禁煙★",
//                     "planId": 4088500,
//                     "planName": "【当日限定】見たトクプラン～JR神田駅より徒歩5分・無料軽朝食付き～",
//                     "pointRate": 1,
//                     "withDinnerFlag": 0,
//                     "dinnerSelectFlag": 0,
//                     "withBreakfastFlag": 1,
//                     "breakfastSelectFlag": 0,
//                     "payment": "1",
//                     "reserveUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/JlnYS/?f_no=18270&f_syu=kdsn1&f_hi1=2019-07-4&f_hi2=2019-07-5&f_heya_su=1&f_otona_su=1&f_s1=0&f_s2=0&f_y1=0&f_y2=0&f_y3=0&f_y4=0&f_camp_id=4088500",
//                     "salesformFlag": 2
//                   }
//                 },
//                 {
//                   "dailyCharge": {
//                     "stayDate": "2019-07-4",
//                     "rakutenCharge": 9600,
//                     "total": 9600,
//                     "chargeFlag": 0
//                   }
//                 }
//               ]
//             },
//             {
//               "roomInfo": [
//                 {
//                   "roomBasicInfo": {
//                     "roomClass": "kdsn1",
//                     "roomName": "シングルルーム★禁煙★",
//                     "planId": null,
//                     "planName": null,
//                     "pointRate": 1,
//                     "withDinnerFlag": 0,
//                     "dinnerSelectFlag": 0,
//                     "withBreakfastFlag": 1,
//                     "breakfastSelectFlag": 0,
//                     "payment": "1",
//                     "reserveUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/IdsCY/?f_no=18270&f_syu=kdsn1&f_hi1=2019-07-4&f_hi2=2019-07-5&f_heya_su=1&f_otona_su=1&f_s1=0&f_s2=0&f_y1=0&f_y2=0&f_y3=0&f_y4=0",
//                     "salesformFlag": 1
//                   }
//                 },
//                 {
//                   "dailyCharge": {
//                     "stayDate": "2019-07-4",
//                     "rakutenCharge": 18000,
//                     "total": 18000,
//                     "chargeFlag": 0
//                   }
//                 }
//               ]
//             }
//           ]
//         },
//         {
//           "hotel": [
//             {
//               "hotelBasicInfo": {
//                 "hotelNo": 147101,
//                 "hotelName": "三交インＧｒａｎｄｅ東京浜松町",
//                 "hotelInformationUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/pvonD/?f_no=147101",
//                 "planListUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/vFumt/?f_no=147101&f_flg=PLAN",
//                 "dpPlanListUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/WzozX/?noTomariHotel=147101",
//                 "reviewUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/gJNfM/?f_hotel_no=147101",
//                 "hotelKanaName": "さんこういんぐらんでとうきょうはままつちょう",
//                 "hotelSpecial": "楽天アワード金賞ホテル【バス・トイレ・洗面台独立】羽田空港へアクセス◎【エントリーで最大1,000ポイントや10倍企画】",
//                 "hotelMinCharge": 4700,
//                 "latitude": 35.65424980992729,
//                 "longitude": 139.75461835501707,
//                 "postalCode": "105-0013",
//                 "address1": "東京都",
//                 "address2": "港区浜松町2丁目7-18",
//                 "telephoneNo": "03-6435-9537",
//                 "faxNo": "03-6435-9579",
//                 "access": "JR・東京モノレール「浜松町」駅南口より徒歩にて約３分。都営地下鉄浅草線・大江戸線「大門」駅A１出口より徒歩にて約４分",
//                 "parkingInformation": "無し",
//                 "nearestStation": "浜松町",
//                 "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/147101/147101.jpg",
//                 "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/147101.jpg",
//                 "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/147101/147101_kan1.jpg",
//                 "roomThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/INTERIOR/147101.jpg",
//                 "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/147101/147101map.gif",
//                 "reviewCount": 721,
//                 "reviewAverage": 4.39,
//                 "userReview": "東京散策で疲れたので急遽一泊しました。セパレート式のバスタブは足が伸ばせるほど広くはないのですが、洗い場もあり、なかなか満足のいくものでした。場所もJR浜松町南口から近く、立地も申し分ないですね。ひと…　2019-07-03 21:37:20投稿 <a href=\"http://img.travel.rakuten.co.jp/image/tr/api/re/gJNfM/?f_hotel_no=147101\" class=\"3click\">つづきはこちら</a>"
//               }
//             },
//             {
//               "roomInfo": [
//                 {
//                   "roomBasicInfo": {
//                     "roomClass": "ng",
//                     "roomName": "【禁煙】グランデルーム◇１名利用（ダブルベッド完備）",
//                     "planId": 3604476,
//                     "planName": "【素泊まり】今日の予約はこちらから！当日プラン♪",
//                     "pointRate": 1,
//                     "withDinnerFlag": 0,
//                     "dinnerSelectFlag": 0,
//                     "withBreakfastFlag": 0,
//                     "breakfastSelectFlag": 0,
//                     "payment": "1",
//                     "reserveUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/JlnYS/?f_no=147101&f_syu=ng&f_hi1=2019-07-4&f_hi2=2019-07-5&f_heya_su=1&f_otona_su=1&f_s1=0&f_s2=0&f_y1=0&f_y2=0&f_y3=0&f_y4=0&f_camp_id=3604476",
//                     "salesformFlag": 2
//                   }
//                 },
//                 {
//                   "dailyCharge": {
//                     "stayDate": "2019-07-4",
//                     "rakutenCharge": 9500,
//                     "total": 9500,
//                     "chargeFlag": 0
//                   }
//                 }
//               ]
//             },
//             {
//               "roomInfo": [
//                 {
//                   "roomBasicInfo": {
//                     "roomClass": "g",
//                     "roomName": "【喫煙】グランデルーム◆１名利用（ダブルベッド完備）",
//                     "planId": 3604476,
//                     "planName": "【素泊まり】今日の予約はこちらから！当日プラン♪",
//                     "pointRate": 1,
//                     "withDinnerFlag": 0,
//                     "dinnerSelectFlag": 0,
//                     "withBreakfastFlag": 0,
//                     "breakfastSelectFlag": 0,
//                     "payment": "1",
//                     "reserveUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/JlnYS/?f_no=147101&f_syu=g&f_hi1=2019-07-4&f_hi2=2019-07-5&f_heya_su=1&f_otona_su=1&f_s1=0&f_s2=0&f_y1=0&f_y2=0&f_y3=0&f_y4=0&f_camp_id=3604476",
//                     "salesformFlag": 2
//                   }
//                 },
//                 {
//                   "dailyCharge": {
//                     "stayDate": "2019-07-4",
//                     "rakutenCharge": 9500,
//                     "total": 9500,
//                     "chargeFlag": 0
//                   }
//                 }
//               ]
//             },
//             {
//               "roomInfo": [
//                 {
//                   "roomBasicInfo": {
//                     "roomClass": "ng",
//                     "roomName": "【禁煙】グランデルーム◇１名利用（ダブルベッド完備）",
//                     "planId": 4208620,
//                     "planName": "【夏旅】【素泊まり】お泊りは浜松町へ☆来て・観て・泊まろう！期間限定11時チェックアウトプラン♪",
//                     "pointRate": 1,
//                     "withDinnerFlag": 0,
//                     "dinnerSelectFlag": 0,
//                     "withBreakfastFlag": 0,
//                     "breakfastSelectFlag": 0,
//                     "payment": "1",
//                     "reserveUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/IdsCY/?f_no=147101&f_syu=ng&f_hi1=2019-07-4&f_hi2=2019-07-5&f_heya_su=1&f_otona_su=1&f_s1=0&f_s2=0&f_y1=0&f_y2=0&f_y3=0&f_y4=0&f_camp_id=4208620",
//                     "salesformFlag": 0
//                   }
//                 },
//                 {
//                   "dailyCharge": {
//                     "stayDate": "2019-07-4",
//                     "rakutenCharge": 9800,
//                     "total": 9800,
//                     "chargeFlag": 0
//                   }
//                 }
//               ]
//             }
//           ]
//         },
//         {
//           "hotel": [
//             {
//               "hotelBasicInfo": {
//                 "hotelNo": 14548,
//                 "hotelName": "京王プレッソイン東銀座",
//                 "hotelInformationUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/pvonD/?f_no=14548",
//                 "planListUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/vFumt/?f_no=14548&f_flg=PLAN",
//                 "dpPlanListUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/WzozX/?noTomariHotel=14548",
//                 "reviewUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/gJNfM/?f_hotel_no=14548",
//                 "hotelKanaName": "けいおうぷれっそいん　ひがしぎんざ",
//                 "hotelSpecial": "「東銀座駅」より徒歩3分！銀座でショッピング、築地場外でお食事に便利♪2017年楽天ブロンズアワード、楽パック賞受賞!!",
//                 "hotelMinCharge": 3600,
//                 "latitude": 35.66694657,
//                 "longitude": 139.7698523,
//                 "postalCode": "104-0045",
//                 "address1": "東京都",
//                 "address2": "中央区築地4-7-3",
//                 "telephoneNo": "03-3542-0202",
//                 "faxNo": "03-3542-0203",
//                 "access": "日比谷線・浅草線「東銀座駅6番出口」徒歩３分。大江戸線「築地市場駅A1出口」徒歩５分。銀座線「銀座駅A5出口」徒歩７分。",
//                 "parkingInformation": "なし",
//                 "nearestStation": "東銀座",
//                 "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/14548/14548.jpg",
//                 "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/14548.jpg",
//                 "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/14548/14548_kya.jpg",
//                 "roomThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/INTERIOR/14548.jpg",
//                 "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/14548/14548map.gif",
//                 "reviewCount": 2797,
//                 "reviewAverage": 3.91,
//                 "userReview": "また、室…　2019-06-25 20:35:46投稿 <a href=\"http://img.travel.rakuten.co.jp/image/tr/api/re/gJNfM/?f_hotel_no=14548\" class=\"3click\">つづきはこちら</a>"
//               }
//             },
//             {
//               "roomInfo": [
//                 {
//                   "roomBasicInfo": {
//                     "roomClass": "mn",
//                     "roomName": "シングルルーム☆《禁煙》",
//                     "planId": 4317652,
//                     "planName": "【当日予約カード決済限定】今夜のお宿は京王プレッソイン東銀座で！～銀座・新橋・豊洲へもアクセス便利～",
//                     "pointRate": 1,
//                     "withDinnerFlag": 0,
//                     "dinnerSelectFlag": 0,
//                     "withBreakfastFlag": 1,
//                     "breakfastSelectFlag": 0,
//                     "payment": "2",
//                     "reserveUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/JlnYS/?f_no=14548&f_syu=mn&f_hi1=2019-07-4&f_hi2=2019-07-5&f_heya_su=1&f_otona_su=1&f_s1=0&f_s2=0&f_y1=0&f_y2=0&f_y3=0&f_y4=0&f_camp_id=4317652",
//                     "salesformFlag": 2
//                   }
//                 },
//                 {
//                   "dailyCharge": {
//                     "stayDate": "2019-07-4",
//                     "rakutenCharge": 10400,
//                     "total": 10400,
//                     "chargeFlag": 0
//                   }
//                 }
//               ]
//             },
//             {
//               "roomInfo": [
//                 {
//                   "roomBasicInfo": {
//                     "roomClass": "mn",
//                     "roomName": "シングルルーム☆《禁煙》",
//                     "planId": 4317276,
//                     "planName": "【当日予約限定】今夜のお宿は京王プレッソイン東銀座で！！～銀座・新橋・豊洲へもアクセス便利～",
//                     "pointRate": 1,
//                     "withDinnerFlag": 0,
//                     "dinnerSelectFlag": 0,
//                     "withBreakfastFlag": 1,
//                     "breakfastSelectFlag": 0,
//                     "payment": "1",
//                     "reserveUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/JlnYS/?f_no=14548&f_syu=mn&f_hi1=2019-07-4&f_hi2=2019-07-5&f_heya_su=1&f_otona_su=1&f_s1=0&f_s2=0&f_y1=0&f_y2=0&f_y3=0&f_y4=0&f_camp_id=4317276",
//                     "salesformFlag": 2
//                   }
//                 },
//                 {
//                   "dailyCharge": {
//                     "stayDate": "2019-07-4",
//                     "rakutenCharge": 10600,
//                     "total": 10600,
//                     "chargeFlag": 0
//                   }
//                 }
//               ]
//             },
//             {
//               "roomInfo": [
//                 {
//                   "roomBasicInfo": {
//                     "roomClass": "mn",
//                     "roomName": "シングルルーム☆《禁煙》",
//                     "planId": 3547838,
//                     "planName": "スタンダード18，000円～焼き立てパンの朝食付！銀座・築地・豊洲へもアクセス良好！～",
//                     "pointRate": 1,
//                     "withDinnerFlag": 0,
//                     "dinnerSelectFlag": 0,
//                     "withBreakfastFlag": 1,
//                     "breakfastSelectFlag": 0,
//                     "payment": "1",
//                     "reserveUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/IdsCY/?f_no=14548&f_syu=mn&f_hi1=2019-07-4&f_hi2=2019-07-5&f_heya_su=1&f_otona_su=1&f_s1=0&f_s2=0&f_y1=0&f_y2=0&f_y3=0&f_y4=0&f_camp_id=3547838",
//                     "salesformFlag": 0
//                   }
//                 },
//                 {
//                   "dailyCharge": {
//                     "stayDate": "2019-07-4",
//                     "rakutenCharge": 18000,
//                     "total": 18000,
//                     "chargeFlag": 0
//                   }
//                 }
//               ]
//             }
//           ]
//         },
//         {
//           "hotel": [
//             {
//               "hotelBasicInfo": {
//                 "hotelNo": 40780,
//                 "hotelName": "京王プレッソイン大手町",
//                 "hotelInformationUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/pvonD/?f_no=40780",
//                 "planListUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/vFumt/?f_no=40780&f_flg=PLAN",
//                 "dpPlanListUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/WzozX/?noTomariHotel=40780",
//                 "reviewUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/gJNfM/?f_hotel_no=40780",
//                 "hotelKanaName": "けいおう　ぷれっそいん　おおてまち",
//                 "hotelSpecial": "2017年2月全客室リニューアル完了！八重洲・丸の内・大手町・エリアは徒歩圏内！無料の軽朝食付き(6：30～9：30)",
//                 "hotelMinCharge": 3500,
//                 "latitude": 35.68802476,
//                 "longitude": 139.7699931,
//                 "postalCode": "103-0021",
//                 "address1": "東京都",
//                 "address2": "中央区日本橋本石町4-4-1",
//                 "telephoneNo": "03-3241-0202",
//                 "faxNo": "03-3241-0203",
//                 "access": "地下鉄大手町駅Ｂ６出口から徒歩６分、Ａ２出口から徒歩７分／ＪＲ東京駅日本橋口から徒歩７分／ＪＲ神田駅南口から徒歩５分",
//                 "parkingInformation": "無",
//                 "nearestStation": "大手町（東京）",
//                 "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/40780/40780.jpg",
//                 "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/40780.jpg",
//                 "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/40780/40780_kya.jpg",
//                 "roomThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/INTERIOR/40780.jpg",
//                 "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/40780/40780map.gif",
//                 "reviewCount": 5804,
//                 "reviewAverage": 4.14,
//                 "userReview": "東京駅から確かに徒歩圏内なのかもしれないが都会の感覚と、普段車利用の感覚ではちがう。\r\n\r\nでも値段は相当だと思う。\r\n機会があればまた利用するかも　2019-07-01 22:41:39投稿"
//               }
//             },
//             {
//               "roomInfo": [
//                 {
//                   "roomBasicInfo": {
//                     "roomClass": "snp",
//                     "roomName": "シングルルーム【禁煙】",
//                     "planId": 3878469,
//                     "planName": "◇◆当日限定◆◇今夜の宿はお決まりですか～無料の軽朝食付き！東京駅日本橋口より徒歩7分",
//                     "pointRate": 1,
//                     "withDinnerFlag": 0,
//                     "dinnerSelectFlag": 0,
//                     "withBreakfastFlag": 1,
//                     "breakfastSelectFlag": 0,
//                     "payment": "1",
//                     "reserveUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/JlnYS/?f_no=40780&f_syu=snp&f_hi1=2019-07-4&f_hi2=2019-07-5&f_heya_su=1&f_otona_su=1&f_s1=0&f_s2=0&f_y1=0&f_y2=0&f_y3=0&f_y4=0&f_camp_id=3878469",
//                     "salesformFlag": 2
//                   }
//                 },
//                 {
//                   "dailyCharge": {
//                     "stayDate": "2019-07-4",
//                     "rakutenCharge": 9300,
//                     "total": 9300,
//                     "chargeFlag": 0
//                   }
//                 }
//               ]
//             },
//             {
//               "roomInfo": [
//                 {
//                   "roomBasicInfo": {
//                     "roomClass": "tnp",
//                     "roomName": "ツインルーム【禁煙】",
//                     "planId": 3878469,
//                     "planName": "◇◆当日限定◆◇今夜の宿はお決まりですか～無料の軽朝食付き！東京駅日本橋口より徒歩7分",
//                     "pointRate": 1,
//                     "withDinnerFlag": 0,
//                     "dinnerSelectFlag": 0,
//                     "withBreakfastFlag": 1,
//                     "breakfastSelectFlag": 0,
//                     "payment": "1",
//                     "reserveUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/JlnYS/?f_no=40780&f_syu=tnp&f_hi1=2019-07-4&f_hi2=2019-07-5&f_heya_su=1&f_otona_su=1&f_s1=0&f_s2=0&f_y1=0&f_y2=0&f_y3=0&f_y4=0&f_camp_id=3878469",
//                     "salesformFlag": 2
//                   }
//                 },
//                 {
//                   "dailyCharge": {
//                     "stayDate": "2019-07-4",
//                     "rakutenCharge": 11000,
//                     "total": 11000,
//                     "chargeFlag": 0
//                   }
//                 }
//               ]
//             },
//             {
//               "roomInfo": [
//                 {
//                   "roomBasicInfo": {
//                     "roomClass": "snp",
//                     "roomName": "シングルルーム【禁煙】",
//                     "planId": 4190269,
//                     "planName": "【◆スタンダードプラン◆】東京駅日本橋口より徒歩7分(軽朝食付)～八重洲・丸の内・大手町徒歩圏内～",
//                     "pointRate": 1,
//                     "withDinnerFlag": 0,
//                     "dinnerSelectFlag": 0,
//                     "withBreakfastFlag": 1,
//                     "breakfastSelectFlag": 0,
//                     "payment": "1",
//                     "reserveUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/IdsCY/?f_no=40780&f_syu=snp&f_hi1=2019-07-4&f_hi2=2019-07-5&f_heya_su=1&f_otona_su=1&f_s1=0&f_s2=0&f_y1=0&f_y2=0&f_y3=0&f_y4=0&f_camp_id=4190269",
//                     "salesformFlag": 0
//                   }
//                 },
//                 {
//                   "dailyCharge": {
//                     "stayDate": "2019-07-4",
//                     "rakutenCharge": 18000,
//                     "total": 18000,
//                     "chargeFlag": 0
//                   }
//                 }
//               ]
//             }
//           ]
//         },
//         {
//           "hotel": [
//             {
//               "hotelBasicInfo": {
//                 "hotelNo": 168419,
//                 "hotelName": "京急ＥＸイン　浜松町・大門駅前（２０１９年３月２８日新規オープン）",
//                 "hotelInformationUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/pvonD/?f_no=168419",
//                 "planListUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/vFumt/?f_no=168419&f_flg=PLAN",
//                 "dpPlanListUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/WzozX/?noTomariHotel=168419",
//                 "reviewUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/gJNfM/?f_hotel_no=168419",
//                 "hotelKanaName": "けいきゅういーえっくすいん　はままつちょう　だいもんえきまえ",
//                 "hotelSpecial": "都営浅草線、大江戸線「大門」駅A５出口より徒歩１分／JR線、東京モノレール線「浜松町」駅北口より徒歩約５分と高アクセス！",
//                 "hotelMinCharge": 3750,
//                 "latitude": 35.65742829286357,
//                 "longitude": 139.75415334846207,
//                 "postalCode": "105-0012",
//                 "address1": "東京都",
//                 "address2": "東京都港区芝大門1-15-4",
//                 "telephoneNo": "03-3431-3910",
//                 "faxNo": "03-3431-3920",
//                 "access": "都営浅草線・大江戸線「大門」駅A5出口より徒歩1分／JR線「浜松町」駅北口より徒歩約5分",
//                 "parkingInformation": "無し",
//                 "nearestStation": "大門（東京）",
//                 "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/168419/168419.jpg",
//                 "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/168419.jpg",
//                 "roomImageUrl": null,
//                 "roomThumbnailUrl": null,
//                 "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/168419/168419map.gif",
//                 "reviewCount": 84,
//                 "reviewAverage": 4.37,
//                 "userReview": "都内の京急をよく利用しています。新しく、きれいでベッドも大きめだと思います。地下鉄はすぐで立地もいいです。また利用させて頂きます。　2019-07-03 20:49:18投稿"
//               }
//             },
//             {
//               "roomInfo": [
//                 {
//                   "roomBasicInfo": {
//                     "roomClass": "exdn",
//                     "roomName": "【禁煙】EXダブル（1名利用）",
//                     "planId": 4304494,
//                     "planName": "【直前割】間際予約でもお得☆素泊まり",
//                     "pointRate": 1,
//                     "withDinnerFlag": 0,
//                     "dinnerSelectFlag": 0,
//                     "withBreakfastFlag": 0,
//                     "breakfastSelectFlag": 0,
//                     "payment": "1",
//                     "reserveUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/IdsCY/?f_no=168419&f_syu=exdn&f_hi1=2019-07-4&f_hi2=2019-07-5&f_heya_su=1&f_otona_su=1&f_s1=0&f_s2=0&f_y1=0&f_y2=0&f_y3=0&f_y4=0&f_camp_id=4304494",
//                     "salesformFlag": 0
//                   }
//                 },
//                 {
//                   "dailyCharge": {
//                     "stayDate": "2019-07-4",
//                     "rakutenCharge": 13100,
//                     "total": 13100,
//                     "chargeFlag": 0
//                   }
//                 }
//               ]
//             },
//             {
//               "roomInfo": [
//                 {
//                   "roomBasicInfo": {
//                     "roomClass": "extn",
//                     "roomName": "【禁煙】EXツイン（1名利用）",
//                     "planId": 4304494,
//                     "planName": "【直前割】間際予約でもお得☆素泊まり",
//                     "pointRate": 1,
//                     "withDinnerFlag": 0,
//                     "dinnerSelectFlag": 0,
//                     "withBreakfastFlag": 0,
//                     "breakfastSelectFlag": 0,
//                     "payment": "1",
//                     "reserveUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/IdsCY/?f_no=168419&f_syu=extn&f_hi1=2019-07-4&f_hi2=2019-07-5&f_heya_su=1&f_otona_su=1&f_s1=0&f_s2=0&f_y1=0&f_y2=0&f_y3=0&f_y4=0&f_camp_id=4304494",
//                     "salesformFlag": 0
//                   }
//                 },
//                 {
//                   "dailyCharge": {
//                     "stayDate": "2019-07-4",
//                     "rakutenCharge": 13600,
//                     "total": 13600,
//                     "chargeFlag": 0
//                   }
//                 }
//               ]
//             },
//             {
//               "roomInfo": [
//                 {
//                   "roomBasicInfo": {
//                     "roomClass": "extn",
//                     "roomName": "【禁煙】EXツイン（1名利用）",
//                     "planId": 4504557,
//                     "planName": "【平日限定】【ツインルーム】広々24平米☆トイレ・バス別☆快適なツインルーム利用プラン♪　素泊まり",
//                     "pointRate": 1,
//                     "withDinnerFlag": 0,
//                     "dinnerSelectFlag": 0,
//                     "withBreakfastFlag": 0,
//                     "breakfastSelectFlag": 0,
//                     "payment": "1",
//                     "reserveUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/IdsCY/?f_no=168419&f_syu=extn&f_hi1=2019-07-4&f_hi2=2019-07-5&f_heya_su=1&f_otona_su=1&f_s1=0&f_s2=0&f_y1=0&f_y2=0&f_y3=0&f_y4=0&f_camp_id=4504557",
//                     "salesformFlag": 0
//                   }
//                 },
//                 {
//                   "dailyCharge": {
//                     "stayDate": "2019-07-4",
//                     "rakutenCharge": 14500,
//                     "total": 14500,
//                     "chargeFlag": 0
//                   }
//                 }
//               ]
//             }
//           ]
//         },
//         {
//           "hotel": [
//             {
//               "hotelBasicInfo": {
//                 "hotelNo": 39646,
//                 "hotelName": "京王プレッソイン日本橋茅場町",
//                 "hotelInformationUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/pvonD/?f_no=39646",
//                 "planListUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/vFumt/?f_no=39646&f_flg=PLAN",
//                 "dpPlanListUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/WzozX/?noTomariHotel=39646",
//                 "reviewUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/gJNfM/?f_hotel_no=39646",
//                 "hotelKanaName": "けいおうぷれっそいん　にほんばしかやばちょう",
//                 "hotelSpecial": "駅近（徒歩１分）☆ビジネス＆観光拠点にアクセス抜群☆2016年9月全室リニューアル済♪館内1階にコンビニあり◎",
//                 "hotelMinCharge": 3700,
//                 "latitude": 35.68078419,
//                 "longitude": 139.7804426,
//                 "postalCode": "103-0025",
//                 "address1": "東京都",
//                 "address2": "中央区日本橋茅場町1-3-5",
//                 "telephoneNo": "03-3669-0202",
//                 "faxNo": "03-3669-0203",
//                 "access": "東京メトロ地下鉄の茅場町駅７番出口より『徒歩１分』 ♪・東京駅2駅5分（徒歩15分）・上野駅8分・浅草13分♪",
//                 "parkingInformation": "無し",
//                 "nearestStation": "茅場町",
//                 "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/39646/39646.jpg",
//                 "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/39646.jpg",
//                 "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/39646/39646_ky.jpg",
//                 "roomThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/INTERIOR/39646.jpg",
//                 "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/39646/39646map.gif",
//                 "reviewCount": 3809,
//                 "reviewAverage": 4.01,
//                 "userReview": "ベッドが広く楽でした。ただ部屋が変形で使いにくかった。　2019-06-29 21:48:54投稿"
//               }
//             },
//             {
//               "roomInfo": [
//                 {
//                   "roomBasicInfo": {
//                     "roomClass": "kcsnp",
//                     "roomName": "シングルルーム★禁煙★",
//                     "planId": 3831746,
//                     "planName": "【オンラインカード決済限定】●茅場町駅7番出口から徒歩1分●当日予約●無料朝食サービス付きプラン",
//                     "pointRate": 1,
//                     "withDinnerFlag": 0,
//                     "dinnerSelectFlag": 0,
//                     "withBreakfastFlag": 1,
//                     "breakfastSelectFlag": 0,
//                     "payment": "2",
//                     "reserveUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/JlnYS/?f_no=39646&f_syu=kcsnp&f_hi1=2019-07-4&f_hi2=2019-07-5&f_heya_su=1&f_otona_su=1&f_s1=0&f_s2=0&f_y1=0&f_y2=0&f_y3=0&f_y4=0&f_camp_id=3831746",
//                     "salesformFlag": 2
//                   }
//                 },
//                 {
//                   "dailyCharge": {
//                     "stayDate": "2019-07-4",
//                     "rakutenCharge": 9400,
//                     "total": 9400,
//                     "chargeFlag": 0
//                   }
//                 }
//               ]
//             },
//             {
//               "roomInfo": [
//                 {
//                   "roomBasicInfo": {
//                     "roomClass": "kcsnp",
//                     "roomName": "シングルルーム★禁煙★",
//                     "planId": 3506357,
//                     "planName": "【当日予約限定・スペシャルレート♪】～日本橋茅場町～東京駅（大手町駅）から２駅５分",
//                     "pointRate": 1,
//                     "withDinnerFlag": 0,
//                     "dinnerSelectFlag": 0,
//                     "withBreakfastFlag": 1,
//                     "breakfastSelectFlag": 0,
//                     "payment": "1",
//                     "reserveUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/JlnYS/?f_no=39646&f_syu=kcsnp&f_hi1=2019-07-4&f_hi2=2019-07-5&f_heya_su=1&f_otona_su=1&f_s1=0&f_s2=0&f_y1=0&f_y2=0&f_y3=0&f_y4=0&f_camp_id=3506357",
//                     "salesformFlag": 2
//                   }
//                 },
//                 {
//                   "dailyCharge": {
//                     "stayDate": "2019-07-4",
//                     "rakutenCharge": 9500,
//                     "total": 9500,
//                     "chargeFlag": 0
//                   }
//                 }
//               ]
//             },
//             {
//               "roomInfo": [
//                 {
//                   "roomBasicInfo": {
//                     "roomClass": "kcsnp",
//                     "roomName": "シングルルーム★禁煙★",
//                     "planId": 2935287,
//                     "planName": "【スタンダード】ビジネスにもレジャーにも　～日本橋茅場町～東京駅（大手町駅）から２駅５分",
//                     "pointRate": 1,
//                     "withDinnerFlag": 0,
//                     "dinnerSelectFlag": 0,
//                     "withBreakfastFlag": 1,
//                     "breakfastSelectFlag": 0,
//                     "payment": "1",
//                     "reserveUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/IdsCY/?f_no=39646&f_syu=kcsnp&f_hi1=2019-07-4&f_hi2=2019-07-5&f_heya_su=1&f_otona_su=1&f_s1=0&f_s2=0&f_y1=0&f_y2=0&f_y3=0&f_y4=0&f_camp_id=2935287",
//                     "salesformFlag": 0
//                   }
//                 },
//                 {
//                   "dailyCharge": {
//                     "stayDate": "2019-07-4",
//                     "rakutenCharge": 18000,
//                     "total": 18000,
//                     "chargeFlag": 0
//                   }
//                 }
//               ]
//             }
//           ]
//         },
//         {
//           "hotel": [
//             {
//               "hotelBasicInfo": {
//                 "hotelNo": 151302,
//                 "hotelName": "京急ＥＸイン　秋葉原",
//                 "hotelInformationUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/pvonD/?f_no=151302",
//                 "planListUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/vFumt/?f_no=151302&f_flg=PLAN",
//                 "dpPlanListUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/WzozX/?noTomariHotel=151302",
//                 "reviewUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/gJNfM/?f_hotel_no=151302",
//                 "hotelKanaName": "けいきゅういーえっくすいん　あきはばら",
//                 "hotelSpecial": "秋葉原駅・末広町駅へ徒歩５分！東京ドーム・上野駅・東京駅へのアクセスも抜群！全室シモンズと共同開発のベットを導入♪",
//                 "hotelMinCharge": 3400,
//                 "latitude": 35.70171188731859,
//                 "longitude": 139.77499430608214,
//                 "postalCode": "110-0006",
//                 "address1": "東京都",
//                 "address2": "台東区秋葉原2-1",
//                 "telephoneNo": "03-5289-3910",
//                 "faxNo": "03-5289-3515",
//                 "access": "ＪＲ秋葉原駅【中央改札口】より約５分！日比谷線秋葉原、つくばエクスプレス秋葉原、銀座線末広町の出口からも約５分！",
//                 "parkingInformation": "無し",
//                 "nearestStation": "秋葉原",
//                 "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/151302/151302.jpg",
//                 "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/151302.jpg",
//                 "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/151302/151302_kan1.jpg",
//                 "roomThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/INTERIOR/151302.jpg",
//                 "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/151302/151302map.gif",
//                 "reviewCount": 707,
//                 "reviewAverage": 4.26,
//                 "userReview": "3つの駅の中間という場所は評価\r\nビジネス向け\r\n観光だと秋葉原から多少の距離あり\r\n観光客にはあまりお勧めしない\r\nいたって普通のビジネスホテル以上でも以下でもない　2019-07-01 23:01:19投稿"
//               }
//             },
//             {
//               "roomInfo": [
//                 {
//                   "roomBasicInfo": {
//                     "roomClass": "nosmoking",
//                     "roomName": "【禁煙】スタンダードセミダブル１名利用",
//                     "planId": 4505774,
//                     "planName": "【夏旅応援】【期間限定】「A2Care」付・お得なプラン！",
//                     "pointRate": 1,
//                     "withDinnerFlag": 0,
//                     "dinnerSelectFlag": 0,
//                     "withBreakfastFlag": 0,
//                     "breakfastSelectFlag": 0,
//                     "payment": "1",
//                     "reserveUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/IdsCY/?f_no=151302&f_syu=nosmoking&f_hi1=2019-07-4&f_hi2=2019-07-5&f_heya_su=1&f_otona_su=1&f_s1=0&f_s2=0&f_y1=0&f_y2=0&f_y3=0&f_y4=0&f_camp_id=4505774",
//                     "salesformFlag": 0
//                   }
//                 },
//                 {
//                   "dailyCharge": {
//                     "stayDate": "2019-07-4",
//                     "rakutenCharge": 9700,
//                     "total": 9700,
//                     "chargeFlag": 0
//                   }
//                 }
//               ]
//             },
//             {
//               "roomInfo": [
//                 {
//                   "roomBasicInfo": {
//                     "roomClass": "smoking",
//                     "roomName": "【喫煙】スタンダードセミダブル１名利用",
//                     "planId": 4505774,
//                     "planName": "【夏旅応援】【期間限定】「A2Care」付・お得なプラン！",
//                     "pointRate": 1,
//                     "withDinnerFlag": 0,
//                     "dinnerSelectFlag": 0,
//                     "withBreakfastFlag": 0,
//                     "breakfastSelectFlag": 0,
//                     "payment": "1",
//                     "reserveUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/IdsCY/?f_no=151302&f_syu=smoking&f_hi1=2019-07-4&f_hi2=2019-07-5&f_heya_su=1&f_otona_su=1&f_s1=0&f_s2=0&f_y1=0&f_y2=0&f_y3=0&f_y4=0&f_camp_id=4505774",
//                     "salesformFlag": 0
//                   }
//                 },
//                 {
//                   "dailyCharge": {
//                     "stayDate": "2019-07-4",
//                     "rakutenCharge": 9700,
//                     "total": 9700,
//                     "chargeFlag": 0
//                   }
//                 }
//               ]
//             },
//             {
//               "roomInfo": [
//                 {
//                   "roomBasicInfo": {
//                     "roomClass": "nosmoking",
//                     "roomName": "【禁煙】スタンダードセミダブル１名利用",
//                     "planId": 4028830,
//                     "planName": "【夏旅応援】　素泊まり　秋葉原駅・末広町駅から徒歩5分",
//                     "pointRate": 1,
//                     "withDinnerFlag": 0,
//                     "dinnerSelectFlag": 0,
//                     "withBreakfastFlag": 0,
//                     "breakfastSelectFlag": 0,
//                     "payment": "1",
//                     "reserveUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/IdsCY/?f_no=151302&f_syu=nosmoking&f_hi1=2019-07-4&f_hi2=2019-07-5&f_heya_su=1&f_otona_su=1&f_s1=0&f_s2=0&f_y1=0&f_y2=0&f_y3=0&f_y4=0&f_camp_id=4028830",
//                     "salesformFlag": 0
//                   }
//                 },
//                 {
//                   "dailyCharge": {
//                     "stayDate": "2019-07-4",
//                     "rakutenCharge": 9900,
//                     "total": 9900,
//                     "chargeFlag": 0
//                   }
//                 }
//               ]
//             }
//           ]
//         },
//         {
//           "hotel": [
//             {
//               "hotelBasicInfo": {
//                 "hotelNo": 106154,
//                 "hotelName": "京急ＥＸイン　浅草橋駅前",
//                 "hotelInformationUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/pvonD/?f_no=106154",
//                 "planListUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/vFumt/?f_no=106154&f_flg=PLAN",
//                 "dpPlanListUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/WzozX/?noTomariHotel=106154",
//                 "reviewUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/gJNfM/?f_hotel_no=106154",
//                 "hotelKanaName": "けいきゅういーえっくすいん　あさくさばしえきまえ",
//                 "hotelSpecial": "秋葉原へ浅草へアクセス良好！！★山手線秋葉原より１駅★浅草も２駅★全室シモンズ１４０ｃｍ幅ベット、Wi-Fi環境完備！",
//                 "hotelMinCharge": 3250,
//                 "latitude": 35.6980865,
//                 "longitude": 139.78502649999996,
//                 "postalCode": "111-0053",
//                 "address1": "東京都",
//                 "address2": "台東区浅草橋1-27-9",
//                 "telephoneNo": "03-5820-3910",
//                 "faxNo": "03-5833-3525",
//                 "access": "ＪＲ　浅草橋駅東口・都営線　浅草橋駅Ａ３出口より徒歩にて２分",
//                 "parkingInformation": "1泊1,600円で2台分ございます。電話予約制です。03-5820-3910にお電話下さいませ。",
//                 "nearestStation": "浅草橋",
//                 "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/106154/106154.jpg",
//                 "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/106154.jpg",
//                 "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/106154/106154_kya.jpg",
//                 "roomThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/INTERIOR/106154.jpg",
//                 "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/106154/106154map.gif",
//                 "reviewCount": 2682,
//                 "reviewAverage": 4.02,
//                 "userReview": "特に不満はない。あんまり空きがないが。　2019-07-03 17:07:24投稿"
//               }
//             },
//             {
//               "roomInfo": [
//                 {
//                   "roomBasicInfo": {
//                     "roomClass": "sdx",
//                     "roomName": "【喫煙】デラックスセミダブル 1名利用",
//                     "planId": 1817253,
//                     "planName": "【夏旅応援】スタンダード 素泊まり ★浅草・上野・錦糸町・両国までアクセス至便★",
//                     "pointRate": 1,
//                     "withDinnerFlag": 0,
//                     "dinnerSelectFlag": 0,
//                     "withBreakfastFlag": 0,
//                     "breakfastSelectFlag": 0,
//                     "payment": "1",
//                     "reserveUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/IdsCY/?f_no=106154&f_syu=sdx&f_hi1=2019-07-4&f_hi2=2019-07-5&f_heya_su=1&f_otona_su=1&f_s1=0&f_s2=0&f_y1=0&f_y2=0&f_y3=0&f_y4=0&f_camp_id=1817253",
//                     "salesformFlag": 0
//                   }
//                 },
//                 {
//                   "dailyCharge": {
//                     "stayDate": "2019-07-4",
//                     "rakutenCharge": 9500,
//                     "total": 9500,
//                     "chargeFlag": 0
//                   }
//                 }
//               ]
//             },
//             {
//               "roomInfo": [
//                 {
//                   "roomBasicInfo": {
//                     "roomClass": "sdx",
//                     "roomName": "【喫煙】デラックスセミダブル 1名利用",
//                     "planId": 1818669,
//                     "planName": "【夏旅応援】スタンダード 朝食付　★浅草・上野・錦糸町・両国までアクセス至便★",
//                     "pointRate": 1,
//                     "withDinnerFlag": 0,
//                     "dinnerSelectFlag": 0,
//                     "withBreakfastFlag": 1,
//                     "breakfastSelectFlag": 0,
//                     "payment": "1",
//                     "reserveUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/IdsCY/?f_no=106154&f_syu=sdx&f_hi1=2019-07-4&f_hi2=2019-07-5&f_heya_su=1&f_otona_su=1&f_s1=0&f_s2=0&f_y1=0&f_y2=0&f_y3=0&f_y4=0&f_camp_id=1818669",
//                     "salesformFlag": 0
//                   }
//                 },
//                 {
//                   "dailyCharge": {
//                     "stayDate": "2019-07-4",
//                     "rakutenCharge": 10300,
//                     "total": 10300,
//                     "chargeFlag": 0
//                   }
//                 }
//               ]
//             },
//             {
//               "roomInfo": [
//                 {
//                   "roomBasicInfo": {
//                     "roomClass": "sdx",
//                     "roomName": "【喫煙】デラックスセミダブル 1名利用",
//                     "planId": 1896304,
//                     "planName": "楽天ポイント１０倍　素泊まり",
//                     "pointRate": 10,
//                     "withDinnerFlag": 0,
//                     "dinnerSelectFlag": 0,
//                     "withBreakfastFlag": 0,
//                     "breakfastSelectFlag": 0,
//                     "payment": "1",
//                     "reserveUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/IdsCY/?f_no=106154&f_syu=sdx&f_hi1=2019-07-4&f_hi2=2019-07-5&f_heya_su=1&f_otona_su=1&f_s1=0&f_s2=0&f_y1=0&f_y2=0&f_y3=0&f_y4=0&f_camp_id=1896304",
//                     "salesformFlag": 0
//                   }
//                 },
//                 {
//                   "dailyCharge": {
//                     "stayDate": "2019-07-4",
//                     "rakutenCharge": 10500,
//                     "total": 10500,
//                     "chargeFlag": 0
//                   }
//                 }
//               ]
//             }
//           ]
//         },
//         {
//           "hotel": [
//             {
//               "hotelBasicInfo": {
//                 "hotelNo": 147488,
//                 "hotelName": "HOTEL　Guest1　ホテルゲストワン上野駅前",
//                 "hotelInformationUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/pvonD/?f_no=147488",
//                 "planListUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/vFumt/?f_no=147488&f_flg=PLAN",
//                 "dpPlanListUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/WzozX/?noTomariHotel=147488",
//                 "reviewUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/gJNfM/?f_hotel_no=147488",
//                 "hotelKanaName": "げすとわん　うえのえきまえ",
//                 "hotelSpecial": "2014年12月17日、上野駅前に新規オープン！全館Wi-Fi接続OK！朝食無料で快適なステイをお約束！",
//                 "hotelMinCharge": 3435,
//                 "latitude": 35.71056569248002,
//                 "longitude": 139.77725305463105,
//                 "postalCode": "110-0015",
//                 "address1": "東京都",
//                 "address2": "台東区東上野2-18-18",
//                 "telephoneNo": "03-5846-0777",
//                 "faxNo": "03-5846-0778",
//                 "access": "東京メトロ　上野駅から徒歩にて約１分。ＪＲ　上野駅から徒歩にて約３分",
//                 "parkingInformation": "有り2台2,500円（税込み／泊）要事前※提携駐車場上野パーキングセンターの利用が可能（要予約）",
//                 "nearestStation": "上野",
//                 "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/147488/147488.jpg",
//                 "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/147488.jpg",
//                 "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/147488/147488_kan.jpg",
//                 "roomThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/INTERIOR/147488.jpg",
//                 "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/147488/147488map.gif",
//                 "reviewCount": 706,
//                 "reviewAverage": 3.97,
//                 "userReview": "無料の朝食は、無料にもかかわらず、スープやサラダ、お惣菜もあり、焼きたてパンもとてもおいしかったです。もう少し朝食開始時間…　2019-06-30 19:56:55投稿 <a href=\"http://img.travel.rakuten.co.jp/image/tr/api/re/gJNfM/?f_hotel_no=147488\" class=\"3click\">つづきはこちら</a>"
//               }
//             },
//             {
//               "roomInfo": [
//                 {
//                   "roomBasicInfo": {
//                     "roomClass": "wsinglens",
//                     "roomName": "ワイドシングル（禁煙）[ベッド幅：1300mm]",
//                     "planId": 3350992,
//                     "planName": "スタンダード上野ステイ【朝食サービス】【JR上野駅から徒歩3分】【清潔感◎！】",
//                     "pointRate": 1,
//                     "withDinnerFlag": 0,
//                     "dinnerSelectFlag": 0,
//                     "withBreakfastFlag": 1,
//                     "breakfastSelectFlag": 0,
//                     "payment": "1",
//                     "reserveUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/IdsCY/?f_no=147488&f_syu=wsinglens&f_hi1=2019-07-4&f_hi2=2019-07-5&f_heya_su=1&f_otona_su=1&f_s1=0&f_s2=0&f_y1=0&f_y2=0&f_y3=0&f_y4=0&f_camp_id=3350992",
//                     "salesformFlag": 0
//                   }
//                 },
//                 {
//                   "dailyCharge": {
//                     "stayDate": "2019-07-4",
//                     "rakutenCharge": 10260,
//                     "total": 10260,
//                     "chargeFlag": 0
//                   }
//                 }
//               ]
//             },
//             {
//               "roomInfo": [
//                 {
//                   "roomBasicInfo": {
//                     "roomClass": "wsingletns",
//                     "roomName": "ワイドシングルシアター（禁煙）[ベッド幅：1400mm]",
//                     "planId": 3350992,
//                     "planName": "スタンダード上野ステイ【朝食サービス】【JR上野駅から徒歩3分】【清潔感◎！】",
//                     "pointRate": 1,
//                     "withDinnerFlag": 0,
//                     "dinnerSelectFlag": 0,
//                     "withBreakfastFlag": 1,
//                     "breakfastSelectFlag": 0,
//                     "payment": "1",
//                     "reserveUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/IdsCY/?f_no=147488&f_syu=wsingletns&f_hi1=2019-07-4&f_hi2=2019-07-5&f_heya_su=1&f_otona_su=1&f_s1=0&f_s2=0&f_y1=0&f_y2=0&f_y3=0&f_y4=0&f_camp_id=3350992",
//                     "salesformFlag": 0
//                   }
//                 },
//                 {
//                   "dailyCharge": {
//                     "stayDate": "2019-07-4",
//                     "rakutenCharge": 10530,
//                     "total": 10530,
//                     "chargeFlag": 0
//                   }
//                 }
//               ]
//             },
//             {
//               "roomInfo": [
//                 {
//                   "roomBasicInfo": {
//                     "roomClass": "wsinglens",
//                     "roomName": "ワイドシングル（禁煙）[ベッド幅：1300mm]",
//                     "planId": 3376673,
//                     "planName": "ビジネスにおすすめ☆QUOカード500円付プラン【朝食サービス】【JR上野駅から徒歩3分】",
//                     "pointRate": 1,
//                     "withDinnerFlag": 0,
//                     "dinnerSelectFlag": 0,
//                     "withBreakfastFlag": 1,
//                     "breakfastSelectFlag": 0,
//                     "payment": "1",
//                     "reserveUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/IdsCY/?f_no=147488&f_syu=wsinglens&f_hi1=2019-07-4&f_hi2=2019-07-5&f_heya_su=1&f_otona_su=1&f_s1=0&f_s2=0&f_y1=0&f_y2=0&f_y3=0&f_y4=0&f_camp_id=3376673",
//                     "salesformFlag": 0
//                   }
//                 },
//                 {
//                   "dailyCharge": {
//                     "stayDate": "2019-07-4",
//                     "rakutenCharge": 11340,
//                     "total": 11340,
//                     "chargeFlag": 0
//                   }
//                 }
//               ]
//             }
//           ]
//         },
//         {
//           "hotel": [
//             {
//               "hotelBasicInfo": {
//                 "hotelNo": 1494,
//                 "hotelName": "ホテル銀座ダイエー",
//                 "hotelInformationUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/pvonD/?f_no=1494",
//                 "planListUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/vFumt/?f_no=1494&f_flg=PLAN",
//                 "dpPlanListUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/WzozX/?noTomariHotel=1494",
//                 "reviewUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/gJNfM/?f_hotel_no=1494",
//                 "hotelKanaName": "ぎんざだいえー",
//                 "hotelSpecial": "東京駅まではタクシーで約5分",
//                 "hotelMinCharge": 4490,
//                 "latitude": 35.67099055,
//                 "longitude": 139.7694883,
//                 "postalCode": "104-0061",
//                 "address1": "東京都",
//                 "address2": "中央区銀座3-12-2",
//                 "telephoneNo": "03-3545-1111",
//                 "faxNo": "03-3545-1177",
//                 "access": "銀座線「銀座」駅から徒歩約5分。日比谷線「東銀座」駅から徒歩約5分。",
//                 "parkingInformation": "要予約　1泊/1500円。幅1.8ｍ長さ5ｍ高さ1.8ｍ以下。入庫時ドアミラーを折りたたんで下さい。",
//                 "nearestStation": "銀座",
//                 "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/1494/1494.jpg",
//                 "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/1494.jpg",
//                 "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/1494/1494_si.jpg",
//                 "roomThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/INTERIOR/1494.jpg",
//                 "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/1494/1494map.gif",
//                 "reviewCount": 6031,
//                 "reviewAverage": 4.3,
//                 "userReview": "自分の行動範囲として、立地は良いです、部屋は普通です。でも普通が一番。　2019-07-03 22:57:55投稿"
//               }
//             },
//             {
//               "roomInfo": [
//                 {
//                   "roomBasicInfo": {
//                     "roomClass": "s-kinen",
//                     "roomName": "シングル禁煙室（食事なし、９～１０平米）",
//                     "planId": 2951571,
//                     "planName": "★当日限定！★ VOD(ルームシアター）付き素泊まりプラン",
//                     "pointRate": 1,
//                     "withDinnerFlag": 0,
//                     "dinnerSelectFlag": 0,
//                     "withBreakfastFlag": 0,
//                     "breakfastSelectFlag": 0,
//                     "payment": "1",
//                     "reserveUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/JlnYS/?f_no=1494&f_syu=s-kinen&f_hi1=2019-07-4&f_hi2=2019-07-5&f_heya_su=1&f_otona_su=1&f_s1=0&f_s2=0&f_y1=0&f_y2=0&f_y3=0&f_y4=0&f_camp_id=2951571",
//                     "salesformFlag": 2
//                   }
//                 },
//                 {
//                   "dailyCharge": {
//                     "stayDate": "2019-07-4",
//                     "rakutenCharge": 8500,
//                     "total": 8500,
//                     "chargeFlag": 1
//                   }
//                 }
//               ]
//             },
//             {
//               "roomInfo": [
//                 {
//                   "roomBasicInfo": {
//                     "roomClass": "dsa-kinen",
//                     "roomName": "デザイナーズ・シングル禁煙室 …９平米～、食事なし",
//                     "planId": 2815886,
//                     "planName": "お値打ち　素泊まり　デザイナーズルームプラン",
//                     "pointRate": 1,
//                     "withDinnerFlag": 0,
//                     "dinnerSelectFlag": 0,
//                     "withBreakfastFlag": 0,
//                     "breakfastSelectFlag": 0,
//                     "payment": "1",
//                     "reserveUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/IdsCY/?f_no=1494&f_syu=dsa-kinen&f_hi1=2019-07-4&f_hi2=2019-07-5&f_heya_su=1&f_otona_su=1&f_s1=0&f_s2=0&f_y1=0&f_y2=0&f_y3=0&f_y4=0&f_camp_id=2815886",
//                     "salesformFlag": 0
//                   }
//                 },
//                 {
//                   "dailyCharge": {
//                     "stayDate": "2019-07-4",
//                     "rakutenCharge": 8500,
//                     "total": 8500,
//                     "chargeFlag": 1
//                   }
//                 }
//               ]
//             },
//             {
//               "roomInfo": [
//                 {
//                   "roomBasicInfo": {
//                     "roomClass": "dsa-kinen",
//                     "roomName": "デザイナーズ・シングル禁煙室 …９平米～、食事なし",
//                     "planId": 4372302,
//                     "planName": "【楽天トラベルシルバーアワード受賞記念プラン】お値打ち　素泊まり～12時レイトチェックアウト付～",
//                     "pointRate": 1,
//                     "withDinnerFlag": 0,
//                     "dinnerSelectFlag": 0,
//                     "withBreakfastFlag": 0,
//                     "breakfastSelectFlag": 0,
//                     "payment": "1",
//                     "reserveUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/IdsCY/?f_no=1494&f_syu=dsa-kinen&f_hi1=2019-07-4&f_hi2=2019-07-5&f_heya_su=1&f_otona_su=1&f_s1=0&f_s2=0&f_y1=0&f_y2=0&f_y3=0&f_y4=0&f_camp_id=4372302",
//                     "salesformFlag": 0
//                   }
//                 },
//                 {
//                   "dailyCharge": {
//                     "stayDate": "2019-07-4",
//                     "rakutenCharge": 8500,
//                     "total": 8500,
//                     "chargeFlag": 1
//                   }
//                 }
//               ]
//             }
//           ]
//         },
//         {
//           "hotel": [
//             {
//               "hotelBasicInfo": {
//                 "hotelNo": 4805,
//                 "hotelName": "東京ドームホテル",
//                 "hotelInformationUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/pvonD/?f_no=4805",
//                 "planListUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/vFumt/?f_no=4805&f_flg=PLAN",
//                 "dpPlanListUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/WzozX/?noTomariHotel=4805",
//                 "reviewUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/gJNfM/?f_hotel_no=4805",
//                 "hotelKanaName": "とうきょうどーむほてる",
//                 "hotelSpecial": "地上４３階の超高層ホテル、JR水道橋駅地下鉄4線の駅から徒歩1－6分と抜群のロケーション。無料WIFI",
//                 "hotelMinCharge": 6600,
//                 "latitude": 35.70359478,
//                 "longitude": 139.7532662,
//                 "postalCode": "112-8562",
//                 "address1": "東京都",
//                 "address2": "文京区後楽1-3-61",
//                 "telephoneNo": "03-5805-2222",
//                 "faxNo": "03-5805-2131",
//                 "access": "地上４３階の超高層ホテル、JR水道橋駅地下鉄4線の駅から徒歩1－6分と抜群のロケーション。無料WIFI",
//                 "parkingInformation": "有　337台(ホテル地下・車高2.1m・1泊1台につき1,000円/チェックアウト日13:00まで)",
//                 "nearestStation": "水道橋",
//                 "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/4805/4805.jpg",
//                 "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/4805.jpg",
//                 "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/4805/4805_heya.jpg",
//                 "roomThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/INTERIOR/4805.jpg",
//                 "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/4805/4805map.gif",
//                 "reviewCount": 11320,
//                 "reviewAverage": 4.38,
//                 "userReview": "野球などドームシティーでのレジャーには大変便利。高層階にあるバーからの夜景は素晴らしい。朝食も種類は豊富で悩むくらい。チェックアウトの時間が早いのだけが減点　2019-07-02 09:34:16投稿"
//               }
//             },
//             {
//               "roomInfo": [
//                 {
//                   "roomBasicInfo": {
//                     "roomClass": "rsg1",
//                     "roomName": "シングルルーム 9～22階【喫煙】",
//                     "planId": 3633469,
//                     "planName": "◆スタンダード宿泊プラン◆(朝食付)",
//                     "pointRate": 1,
//                     "withDinnerFlag": 0,
//                     "dinnerSelectFlag": 0,
//                     "withBreakfastFlag": 1,
//                     "breakfastSelectFlag": 0,
//                     "payment": "1",
//                     "reserveUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/IdsCY/?f_no=4805&f_syu=rsg1&f_hi1=2019-07-4&f_hi2=2019-07-5&f_heya_su=1&f_otona_su=1&f_s1=0&f_s2=0&f_y1=0&f_y2=0&f_y3=0&f_y4=0&f_camp_id=3633469",
//                     "salesformFlag": 0
//                   }
//                 },
//                 {
//                   "dailyCharge": {
//                     "stayDate": "2019-07-4",
//                     "rakutenCharge": 16800,
//                     "total": 16800,
//                     "chargeFlag": 0
//                   }
//                 }
//               ]
//             },
//             {
//               "roomInfo": [
//                 {
//                   "roomBasicInfo": {
//                     "roomClass": "rtc1s",
//                     "roomName": "ツインルーム 1名利用 9～22階【喫煙】",
//                     "planId": 3633469,
//                     "planName": "◆スタンダード宿泊プラン◆(朝食付)",
//                     "pointRate": 1,
//                     "withDinnerFlag": 0,
//                     "dinnerSelectFlag": 0,
//                     "withBreakfastFlag": 1,
//                     "breakfastSelectFlag": 0,
//                     "payment": "1",
//                     "reserveUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/IdsCY/?f_no=4805&f_syu=rtc1s&f_hi1=2019-07-4&f_hi2=2019-07-5&f_heya_su=1&f_otona_su=1&f_s1=0&f_s2=0&f_y1=0&f_y2=0&f_y3=0&f_y4=0&f_camp_id=3633469",
//                     "salesformFlag": 0
//                   }
//                 },
//                 {
//                   "dailyCharge": {
//                     "stayDate": "2019-07-4",
//                     "rakutenCharge": 20900,
//                     "total": 20900,
//                     "chargeFlag": 0
//                   }
//                 }
//               ]
//             }
//           ]
//         },
//         {
//           "hotel": [
//             {
//               "hotelBasicInfo": {
//                 "hotelNo": 146928,
//                 "hotelName": "リッチモンドホテル東京水道橋",
//                 "hotelInformationUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/pvonD/?f_no=146928",
//                 "planListUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/vFumt/?f_no=146928&f_flg=PLAN",
//                 "dpPlanListUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/WzozX/?noTomariHotel=146928",
//                 "reviewUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/gJNfM/?f_hotel_no=146928",
//                 "hotelKanaName": "りっちもんどほてるとうきょうすいどうばし",
//                 "hotelSpecial": "東京ドームは目の前！！観覧車・ジェットコースターが目印。ドン・キホーテの４階がホテルフロントです。",
//                 "hotelMinCharge": 4250,
//                 "latitude": 35.70607140349431,
//                 "longitude": 139.75456360996054,
//                 "postalCode": "113-0033",
//                 "address1": "東京都",
//                 "address2": "文京区本郷1-33-9",
//                 "telephoneNo": "03-5803-2155",
//                 "faxNo": "03-5803-2166",
//                 "access": "【春日駅】A2出口、【後楽園駅】2もしくは3番出口、【水道橋駅】A6出口から徒歩5分。ＪＲ【水道橋駅】東口から徒歩8分。",
//                 "parkingInformation": "なし※地下にドンキホーテ駐車場有、空車時利用可（状況問合わせ不可）。フロントにて24時間券販売中",
//                 "nearestStation": "水道橋",
//                 "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/146928/146928.jpg",
//                 "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/146928.jpg",
//                 "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/146928/146928_room.jpg",
//                 "roomThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/INTERIOR/146928.jpg",
//                 "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/146928/146928map.gif",
//                 "reviewCount": 1410,
//                 "reviewAverage": 4.39,
//                 "userReview": "部屋は、清潔感あるようだが、枕が臭く・・布団も少しにおいがした。決して羽毛のにおいでなく汗のにおい。\r\n冷蔵庫も一晩中・・ブーという電気の音が気になる。寝るには・・・？？？匂いと音で・・・　2019-07-03 20:59:13投稿"
//               }
//             },
//             {
//               "roomInfo": [
//                 {
//                   "roomBasicInfo": {
//                     "roomClass": "msn01",
//                     "roomName": "■禁煙■モデレートシングルルーム☆150ｃｍ幅ベッド1台",
//                     "planId": 3239888,
//                     "planName": "東京ドーム目の前♪ベーシック素泊まり(食事なし)プラン♪",
//                     "pointRate": 1,
//                     "withDinnerFlag": 0,
//                     "dinnerSelectFlag": 0,
//                     "withBreakfastFlag": 0,
//                     "breakfastSelectFlag": 0,
//                     "payment": "1",
//                     "reserveUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/IdsCY/?f_no=146928&f_syu=msn01&f_hi1=2019-07-4&f_hi2=2019-07-5&f_heya_su=1&f_otona_su=1&f_s1=0&f_s2=0&f_y1=0&f_y2=0&f_y3=0&f_y4=0&f_camp_id=3239888",
//                     "salesformFlag": 0
//                   }
//                 },
//                 {
//                   "dailyCharge": {
//                     "stayDate": "2019-07-4",
//                     "rakutenCharge": 11000,
//                     "total": 11000,
//                     "chargeFlag": 0
//                   }
//                 }
//               ]
//             },
//             {
//               "roomInfo": [
//                 {
//                   "roomBasicInfo": {
//                     "roomClass": "mss01",
//                     "roomName": "□喫煙□モデレートシングルルーム☆150ｃｍ幅ベッド1台",
//                     "planId": 3239888,
//                     "planName": "東京ドーム目の前♪ベーシック素泊まり(食事なし)プラン♪",
//                     "pointRate": 1,
//                     "withDinnerFlag": 0,
//                     "dinnerSelectFlag": 0,
//                     "withBreakfastFlag": 0,
//                     "breakfastSelectFlag": 0,
//                     "payment": "1",
//                     "reserveUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/IdsCY/?f_no=146928&f_syu=mss01&f_hi1=2019-07-4&f_hi2=2019-07-5&f_heya_su=1&f_otona_su=1&f_s1=0&f_s2=0&f_y1=0&f_y2=0&f_y3=0&f_y4=0&f_camp_id=3239888",
//                     "salesformFlag": 0
//                   }
//                 },
//                 {
//                   "dailyCharge": {
//                     "stayDate": "2019-07-4",
//                     "rakutenCharge": 11000,
//                     "total": 11000,
//                     "chargeFlag": 0
//                   }
//                 }
//               ]
//             },
//             {
//               "roomInfo": [
//                 {
//                   "roomBasicInfo": {
//                     "roomClass": "msn01",
//                     "roomName": "■禁煙■モデレートシングルルーム☆150ｃｍ幅ベッド1台",
//                     "planId": 4106546,
//                     "planName": "【事前決済限定】イベントデー限定！ライブ・コンサートに出かけよう！",
//                     "pointRate": 1,
//                     "withDinnerFlag": 0,
//                     "dinnerSelectFlag": 0,
//                     "withBreakfastFlag": 0,
//                     "breakfastSelectFlag": 0,
//                     "payment": "2",
//                     "reserveUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/IdsCY/?f_no=146928&f_syu=msn01&f_hi1=2019-07-4&f_hi2=2019-07-5&f_heya_su=1&f_otona_su=1&f_s1=0&f_s2=0&f_y1=0&f_y2=0&f_y3=0&f_y4=0&f_camp_id=4106546",
//                     "salesformFlag": 0
//                   }
//                 },
//                 {
//                   "dailyCharge": {
//                     "stayDate": "2019-07-4",
//                     "rakutenCharge": 11000,
//                     "total": 11000,
//                     "chargeFlag": 0
//                   }
//                 }
//               ]
//             }
//           ]
//         },
//         {
//           "hotel": [
//             {
//               "hotelBasicInfo": {
//                 "hotelNo": 922,
//                 "hotelName": "センターホテル東京",
//                 "hotelInformationUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/pvonD/?f_no=922",
//                 "planListUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/vFumt/?f_no=922&f_flg=PLAN",
//                 "dpPlanListUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/WzozX/?noTomariHotel=922",
//                 "reviewUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/gJNfM/?f_hotel_no=922",
//                 "hotelKanaName": "せんたーほてる　とうきょう",
//                 "hotelSpecial": "2018年12月全客室リニューアル　東京駅八重洲北口より徒歩約10分　軽朝食無料　1階コンビニ直結",
//                 "hotelMinCharge": 3450,
//                 "latitude": 35.67936479,
//                 "longitude": 139.7764013,
//                 "postalCode": "103-0026",
//                 "address1": "東京都",
//                 "address2": "中央区日本橋兜町15-13",
//                 "telephoneNo": "03-3667-2711",
//                 "faxNo": "03-3661-5442",
//                 "access": "ＪＲ「東京駅」八重洲北口より徒歩約10分。地下鉄「茅場町駅」、「日本橋駅」より徒歩約5分。",
//                 "parkingInformation": "無し　（近くに提携駐車場がございます。１泊2,200円にてご利用いただけます)",
//                 "nearestStation": "東京",
//                 "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/922/922.jpg",
//                 "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/922.jpg",
//                 "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/922/922_kan.jpg",
//                 "roomThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/INTERIOR/922.jpg",
//                 "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/922/922map.gif",
//                 "reviewCount": 2982,
//                 "reviewAverage": 3.81,
//                 "userReview": "東京駅から徒歩圏内、昭和通りを渡ると、静かな下町の雰囲気が感じられるいい感じです。リピートしています。日曜日のためなのか、かなりお得に宿泊できました。雨模様だったので、永代橋あたりまで朝の散歩ができな…　2019-07-01 09:53:02投稿 <a href=\"http://img.travel.rakuten.co.jp/image/tr/api/re/gJNfM/?f_hotel_no=922\" class=\"3click\">つづきはこちら</a>"
//               }
//             },
//             {
//               "roomInfo": [
//                 {
//                   "roomBasicInfo": {
//                     "roomClass": "ssn201608",
//                     "roomName": "シングル特別割引【禁煙】",
//                     "planId": 4344723,
//                     "planName": "リニューアルオープンセール！特割プラン【軽朝食無料】",
//                     "pointRate": 1,
//                     "withDinnerFlag": 0,
//                     "dinnerSelectFlag": 0,
//                     "withBreakfastFlag": 1,
//                     "breakfastSelectFlag": 0,
//                     "payment": "1",
//                     "reserveUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/IdsCY/?f_no=922&f_syu=ssn201608&f_hi1=2019-07-4&f_hi2=2019-07-5&f_heya_su=1&f_otona_su=1&f_s1=0&f_s2=0&f_y1=0&f_y2=0&f_y3=0&f_y4=0&f_camp_id=4344723",
//                     "salesformFlag": 0
//                   }
//                 },
//                 {
//                   "dailyCharge": {
//                     "stayDate": "2019-07-4",
//                     "rakutenCharge": 8500,
//                     "total": 8500,
//                     "chargeFlag": 0
//                   }
//                 }
//               ]
//             },
//             {
//               "roomInfo": [
//                 {
//                   "roomBasicInfo": {
//                     "roomClass": "sn201608",
//                     "roomName": "シングル【禁煙】",
//                     "planId": 4413695,
//                     "planName": "クチコミ投稿で割引☆楽天限定☆リニューアルしたお部屋【軽朝食無料】",
//                     "pointRate": 1,
//                     "withDinnerFlag": 0,
//                     "dinnerSelectFlag": 0,
//                     "withBreakfastFlag": 1,
//                     "breakfastSelectFlag": 0,
//                     "payment": "1",
//                     "reserveUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/IdsCY/?f_no=922&f_syu=sn201608&f_hi1=2019-07-4&f_hi2=2019-07-5&f_heya_su=1&f_otona_su=1&f_s1=0&f_s2=0&f_y1=0&f_y2=0&f_y3=0&f_y4=0&f_camp_id=4413695",
//                     "salesformFlag": 0
//                   }
//                 },
//                 {
//                   "dailyCharge": {
//                     "stayDate": "2019-07-4",
//                     "rakutenCharge": 8900,
//                     "total": 8900,
//                     "chargeFlag": 0
//                   }
//                 }
//               ]
//             },
//             {
//               "roomInfo": [
//                 {
//                   "roomBasicInfo": {
//                     "roomClass": "sn201608",
//                     "roomName": "シングル【禁煙】",
//                     "planId": 4413696,
//                     "planName": "【当日限定！オンライン決済でお得！】楽々チェックインでゆっくり休める☆",
//                     "pointRate": 1,
//                     "withDinnerFlag": 0,
//                     "dinnerSelectFlag": 0,
//                     "withBreakfastFlag": 1,
//                     "breakfastSelectFlag": 0,
//                     "payment": "2",
//                     "reserveUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/JlnYS/?f_no=922&f_syu=sn201608&f_hi1=2019-07-4&f_hi2=2019-07-5&f_heya_su=1&f_otona_su=1&f_s1=0&f_s2=0&f_y1=0&f_y2=0&f_y3=0&f_y4=0&f_camp_id=4413696",
//                     "salesformFlag": 2
//                   }
//                 },
//                 {
//                   "dailyCharge": {
//                     "stayDate": "2019-07-4",
//                     "rakutenCharge": 8900,
//                     "total": 8900,
//                     "chargeFlag": 0
//                   }
//                 }
//               ]
//             }
//           ]
//         },
//         {
//           "hotel": [
//             {
//               "hotelBasicInfo": {
//                 "hotelNo": 167516,
//                 "hotelName": "ベルケンホテル・神田（２０１８．６．９　ＧＲＡＮＤ　ＯＰＥＮ）",
//                 "hotelInformationUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/pvonD/?f_no=167516",
//                 "planListUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/vFumt/?f_no=167516&f_flg=PLAN",
//                 "dpPlanListUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/WzozX/?noTomariHotel=167516",
//                 "reviewUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/gJNfM/?f_hotel_no=167516",
//                 "hotelKanaName": "べるけんほてる・かんだ",
//                 "hotelSpecial": "全米Ｎｏ．１人気のサータ社製ベッドを全室導入！抱擁感のある寝心地と快適空間をお約束致します！",
//                 "hotelMinCharge": 5400,
//                 "latitude": 35.69490847738868,
//                 "longitude": 139.76788206811375,
//                 "postalCode": "101-0041",
//                 "address1": "東京都",
//                 "address2": "千代田区神田須田町1-4-7",
//                 "telephoneNo": "03-3254-1115",
//                 "faxNo": "03-3254-5576",
//                 "access": "地下鉄「淡路町駅」A2出口より徒歩1分、「小川町駅」より徒歩3分、ＪＲ「神田駅」・「秋葉原」より徒歩7分とアクセス抜群！",
//                 "parkingInformation": "駐車場　無し",
//                 "nearestStation": "淡路町",
//                 "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/167516/167516.jpg",
//                 "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/167516.jpg",
//                 "roomImageUrl": null,
//                 "roomThumbnailUrl": null,
//                 "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/167516/167516map.gif",
//                 "reviewCount": 253,
//                 "reviewAverage": 4.33,
//                 "userReview": "一つ注文があ…　2019-07-02 21:04:00投稿 <a href=\"http://img.travel.rakuten.co.jp/image/tr/api/re/gJNfM/?f_hotel_no=167516\" class=\"3click\">つづきはこちら</a>"
//               }
//             },
//             {
//               "roomInfo": [
//                 {
//                   "roomBasicInfo": {
//                     "roomClass": "sb1",
//                     "roomName": "シングルルーム 禁煙【ベッド幅122cm】1名",
//                     "planId": 4239666,
//                     "planName": "【2018年6月9日グランドオープン♪】ベストプライス～素泊まり～",
//                     "pointRate": 1,
//                     "withDinnerFlag": 0,
//                     "dinnerSelectFlag": 0,
//                     "withBreakfastFlag": 0,
//                     "breakfastSelectFlag": 0,
//                     "payment": "1",
//                     "reserveUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/IdsCY/?f_no=167516&f_syu=sb1&f_hi1=2019-07-4&f_hi2=2019-07-5&f_heya_su=1&f_otona_su=1&f_s1=0&f_s2=0&f_y1=0&f_y2=0&f_y3=0&f_y4=0&f_camp_id=4239666",
//                     "salesformFlag": 0
//                   }
//                 },
//                 {
//                   "dailyCharge": {
//                     "stayDate": "2019-07-4",
//                     "rakutenCharge": 9000,
//                     "total": 9000,
//                     "chargeFlag": 1
//                   }
//                 }
//               ]
//             },
//             {
//               "roomInfo": [
//                 {
//                   "roomBasicInfo": {
//                     "roomClass": "ta1",
//                     "roomName": "ツインA 禁煙【ベッド幅110cm×2台】シングルユース",
//                     "planId": 4239666,
//                     "planName": "【2018年6月9日グランドオープン♪】ベストプライス～素泊まり～",
//                     "pointRate": 1,
//                     "withDinnerFlag": 0,
//                     "dinnerSelectFlag": 0,
//                     "withBreakfastFlag": 0,
//                     "breakfastSelectFlag": 0,
//                     "payment": "1",
//                     "reserveUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/IdsCY/?f_no=167516&f_syu=ta1&f_hi1=2019-07-4&f_hi2=2019-07-5&f_heya_su=1&f_otona_su=1&f_s1=0&f_s2=0&f_y1=0&f_y2=0&f_y3=0&f_y4=0&f_camp_id=4239666",
//                     "salesformFlag": 0
//                   }
//                 },
//                 {
//                   "dailyCharge": {
//                     "stayDate": "2019-07-4",
//                     "rakutenCharge": 11500,
//                     "total": 11500,
//                     "chargeFlag": 1
//                   }
//                 }
//               ]
//             },
//             {
//               "roomInfo": [
//                 {
//                   "roomBasicInfo": {
//                     "roomClass": "tb1",
//                     "roomName": "ツインB 禁煙【ベッド幅122cm×2台】シングルユース",
//                     "planId": 4239666,
//                     "planName": "【2018年6月9日グランドオープン♪】ベストプライス～素泊まり～",
//                     "pointRate": 1,
//                     "withDinnerFlag": 0,
//                     "dinnerSelectFlag": 0,
//                     "withBreakfastFlag": 0,
//                     "breakfastSelectFlag": 0,
//                     "payment": "1",
//                     "reserveUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/IdsCY/?f_no=167516&f_syu=tb1&f_hi1=2019-07-4&f_hi2=2019-07-5&f_heya_su=1&f_otona_su=1&f_s1=0&f_s2=0&f_y1=0&f_y2=0&f_y3=0&f_y4=0&f_camp_id=4239666",
//                     "salesformFlag": 0
//                   }
//                 },
//                 {
//                   "dailyCharge": {
//                     "stayDate": "2019-07-4",
//                     "rakutenCharge": 12000,
//                     "total": 12000,
//                     "chargeFlag": 1
//                   }
//                 }
//               ]
//             }
//           ]
//         },
//         {
//           "hotel": [
//             {
//               "hotelBasicInfo": {
//                 "hotelNo": 41071,
//                 "hotelName": "亀島川温泉　新川の湯　ドーミーイン東京八丁堀",
//                 "hotelInformationUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/pvonD/?f_no=41071",
//                 "planListUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/vFumt/?f_no=41071&f_flg=PLAN",
//                 "dpPlanListUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/WzozX/?noTomariHotel=41071",
//                 "reviewUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/gJNfM/?f_hotel_no=41071",
//                 "hotelKanaName": "かめしまがわおんせん　しんかわのゆ　どーみーいん　とうきょう　はっちょうぼり",
//                 "hotelSpecial": "都心の天然温泉　サウナ付男女別大浴場完備！ＪＲ京葉線八丁堀駅Ｂ2出口徒歩4分！八丁堀駅から東京駅2分！舞浜14分！",
//                 "hotelMinCharge": 5000,
//                 "latitude": 35.67432381,
//                 "longitude": 139.78084,
//                 "postalCode": "104-0033",
//                 "address1": "東京都",
//                 "address2": "中央区新川2－20－4",
//                 "telephoneNo": "03-5541-6700",
//                 "faxNo": "03-5541-6701",
//                 "access": "ＪＲ京葉線八丁堀駅Ｂ2出口より徒歩約4分・東京メトロ日比谷線八丁堀駅Ａ１出口より徒歩約5分",
//                 "parkingInformation": "なし　近隣のコインパーキングをご案内致します。",
//                 "nearestStation": "八丁堀（東京）",
//                 "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/41071/41071.jpg",
//                 "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/41071.jpg",
//                 "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/41071/41071_be.jpg",
//                 "roomThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/INTERIOR/41071.jpg",
//                 "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/41071/41071map.gif",
//                 "reviewCount": 5736,
//                 "reviewAverage": 4.35,
//                 "userReview": "仕事で二泊しました。ゆったりして温泉・サウナとフルに利用させて頂きました。\r\nまた、フロントへの問い合わせにも迅速に対応して頂き助かりました。\r\n次回も機会あれば利用したいです。　2019-07-01 13:52:21投稿"
//               }
//             },
//             {
//               "roomInfo": [
//                 {
//                   "roomBasicInfo": {
//                     "roomClass": "ron",
//                     "roomName": "○禁煙○お部屋タイプおまかせ◇天然温泉大浴場完備◇",
//                     "planId": 4009893,
//                     "planName": "【お日にち限定】タイムセール☆日にち限定スペシャルステイプラン≪素泊り≫",
//                     "pointRate": 1,
//                     "withDinnerFlag": 0,
//                     "dinnerSelectFlag": 0,
//                     "withBreakfastFlag": 0,
//                     "breakfastSelectFlag": 0,
//                     "payment": "1",
//                     "reserveUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/IdsCY/?f_no=41071&f_syu=ron&f_hi1=2019-07-4&f_hi2=2019-07-5&f_heya_su=1&f_otona_su=1&f_s1=0&f_s2=0&f_y1=0&f_y2=0&f_y3=0&f_y4=0&f_camp_id=4009893",
//                     "salesformFlag": 0
//                   }
//                 },
//                 {
//                   "dailyCharge": {
//                     "stayDate": "2019-07-4",
//                     "rakutenCharge": 12990,
//                     "total": 12990,
//                     "chargeFlag": 0
//                   }
//                 }
//               ]
//             },
//             {
//               "roomInfo": [
//                 {
//                   "roomBasicInfo": {
//                     "roomClass": "ron",
//                     "roomName": "○禁煙○お部屋タイプおまかせ◇天然温泉大浴場完備◇",
//                     "planId": 4484522,
//                     "planName": "【室数限定】御宿野乃浅草ＯＰＥＮ記念プラン≪朝食付き≫",
//                     "pointRate": 1,
//                     "withDinnerFlag": 0,
//                     "dinnerSelectFlag": 0,
//                     "withBreakfastFlag": 1,
//                     "breakfastSelectFlag": 0,
//                     "payment": "1",
//                     "reserveUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/IdsCY/?f_no=41071&f_syu=ron&f_hi1=2019-07-4&f_hi2=2019-07-5&f_heya_su=1&f_otona_su=1&f_s1=0&f_s2=0&f_y1=0&f_y2=0&f_y3=0&f_y4=0&f_camp_id=4484522",
//                     "salesformFlag": 0
//                   }
//                 },
//                 {
//                   "dailyCharge": {
//                     "stayDate": "2019-07-4",
//                     "rakutenCharge": 14190,
//                     "total": 14190,
//                     "chargeFlag": 0
//                   }
//                 }
//               ]
//             },
//             {
//               "roomInfo": [
//                 {
//                   "roomBasicInfo": {
//                     "roomClass": "ron",
//                     "roomName": "○禁煙○お部屋タイプおまかせ◇天然温泉大浴場完備◇",
//                     "planId": 4010232,
//                     "planName": "【お日にち限定】タイムセール☆日にち限定スペシャルステイプラン≪朝食付き≫",
//                     "pointRate": 1,
//                     "withDinnerFlag": 0,
//                     "dinnerSelectFlag": 0,
//                     "withBreakfastFlag": 1,
//                     "breakfastSelectFlag": 0,
//                     "payment": "1",
//                     "reserveUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/IdsCY/?f_no=41071&f_syu=ron&f_hi1=2019-07-4&f_hi2=2019-07-5&f_heya_su=1&f_otona_su=1&f_s1=0&f_s2=0&f_y1=0&f_y2=0&f_y3=0&f_y4=0&f_camp_id=4010232",
//                     "salesformFlag": 0
//                   }
//                 },
//                 {
//                   "dailyCharge": {
//                     "stayDate": "2019-07-4",
//                     "rakutenCharge": 14490,
//                     "total": 14490,
//                     "chargeFlag": 0
//                   }
//                 }
//               ]
//             }
//           ]
//         },
//         {
//           "hotel": [
//             {
//               "hotelBasicInfo": {
//                 "hotelNo": 56758,
//                 "hotelName": "三井ガーデンホテル汐留イタリア街（２０１９／４／２２リニューアルオープン）",
//                 "hotelInformationUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/pvonD/?f_no=56758",
//                 "planListUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/vFumt/?f_no=56758&f_flg=PLAN",
//                 "dpPlanListUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/WzozX/?noTomariHotel=56758",
//                 "reviewUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/gJNfM/?f_hotel_no=56758",
//                 "hotelKanaName": "みついがーでんほてるしおどめいたりあがい",
//                 "hotelSpecial": "大浴場完備！【全室２０㎡以上】近隣コンビニあり／羽田空港からモノレールで浜松町駅まで約20分！JR・地下鉄５駅が徒歩圏",
//                 "hotelMinCharge": 4870,
//                 "latitude": 35.65990259,
//                 "longitude": 139.7576092,
//                 "postalCode": "105-0021",
//                 "address1": "東京都",
//                 "address2": "港区東新橋2-14-24",
//                 "telephoneNo": "03-3431-1131",
//                 "faxNo": "03-3431-2431",
//                 "access": "ＪＲ・モノレール浜松町駅北口／大江戸線大門駅B1出口／ゆりかもめ汐留駅東口：徒歩８分、ＪＲ新橋駅烏森口：徒歩12分",
//                 "parkingInformation": "ホテルに駐車場はございません。",
//                 "nearestStation": "浜松町",
//                 "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/56758/56758.jpg",
//                 "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/56758.jpg",
//                 "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/56758/56758_room.jpg",
//                 "roomThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/INTERIOR/56758.jpg",
//                 "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/56758/56758map.gif",
//                 "reviewCount": 5622,
//                 "reviewAverage": 4.18,
//                 "userReview": "二度目の利用ですがやはり大浴場の脱衣所の洗面台とその付近は乱雑でティッシュも２箱とも切れていたのは残念でした。　2019-07-01 14:51:20投稿"
//               }
//             },
//             {
//               "roomInfo": [
//                 {
//                   "roomBasicInfo": {
//                     "roomClass": "ms_up",
//                     "roomName": "お部屋タイプおまかせ！1名利用",
//                     "planId": 2499220,
//                     "planName": "【RUN of the HOUSE】 直前割引　お部屋タイプおまかせプラン ～室数限定～",
//                     "pointRate": 1,
//                     "withDinnerFlag": 0,
//                     "dinnerSelectFlag": 0,
//                     "withBreakfastFlag": 0,
//                     "breakfastSelectFlag": 0,
//                     "payment": "1",
//                     "reserveUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/IdsCY/?f_no=56758&f_syu=ms_up&f_hi1=2019-07-4&f_hi2=2019-07-5&f_heya_su=1&f_otona_su=1&f_s1=0&f_s2=0&f_y1=0&f_y2=0&f_y3=0&f_y4=0&f_camp_id=2499220",
//                     "salesformFlag": 0
//                   }
//                 },
//                 {
//                   "dailyCharge": {
//                     "stayDate": "2019-07-4",
//                     "rakutenCharge": 14080,
//                     "total": 14080,
//                     "chargeFlag": 0
//                   }
//                 }
//               ]
//             },
//             {
//               "roomInfo": [
//                 {
//                   "roomBasicInfo": {
//                     "roomClass": "nst",
//                     "roomName": "【2019年リニューアル】スーペリアツイン禁煙",
//                     "planId": 4166821,
//                     "planName": "【直前割】 ショートステイプラン 20:00IN ～ 11:00OUT 　＜素泊まり＞",
//                     "pointRate": 1,
//                     "withDinnerFlag": 0,
//                     "dinnerSelectFlag": 0,
//                     "withBreakfastFlag": 0,
//                     "breakfastSelectFlag": 0,
//                     "payment": "1",
//                     "reserveUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/IdsCY/?f_no=56758&f_syu=nst&f_hi1=2019-07-4&f_hi2=2019-07-5&f_heya_su=1&f_otona_su=1&f_s1=0&f_s2=0&f_y1=0&f_y2=0&f_y3=0&f_y4=0&f_camp_id=4166821",
//                     "salesformFlag": 0
//                   }
//                 },
//                 {
//                   "dailyCharge": {
//                     "stayDate": "2019-07-4",
//                     "rakutenCharge": 16100,
//                     "total": 16100,
//                     "chargeFlag": 0
//                   }
//                 }
//               ]
//             },
//             {
//               "roomInfo": [
//                 {
//                   "roomBasicInfo": {
//                     "roomClass": "stv",
//                     "roomName": "2019年リニューアル　スーペリアツイン禁煙東京タワー側",
//                     "planId": 4443925,
//                     "planName": "【2019.4.22リニューアル記念】東京タワーVIEWへアップグレード！12：00アウト～素泊まり",
//                     "pointRate": 1,
//                     "withDinnerFlag": 0,
//                     "dinnerSelectFlag": 0,
//                     "withBreakfastFlag": 0,
//                     "breakfastSelectFlag": 0,
//                     "payment": "1",
//                     "reserveUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/IdsCY/?f_no=56758&f_syu=stv&f_hi1=2019-07-4&f_hi2=2019-07-5&f_heya_su=1&f_otona_su=1&f_s1=0&f_s2=0&f_y1=0&f_y2=0&f_y3=0&f_y4=0&f_camp_id=4443925",
//                     "salesformFlag": 0
//                   }
//                 },
//                 {
//                   "dailyCharge": {
//                     "stayDate": "2019-07-4",
//                     "rakutenCharge": 16600,
//                     "total": 16600,
//                     "chargeFlag": 0
//                   }
//                 }
//               ]
//             }
//           ]
//         },
//         {
//           "hotel": [
//             {
//               "hotelBasicInfo": {
//                 "hotelNo": 41069,
//                 "hotelName": "三井ガーデンホテル銀座プレミア",
//                 "hotelInformationUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/pvonD/?f_no=41069",
//                 "planListUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/vFumt/?f_no=41069&f_flg=PLAN",
//                 "dpPlanListUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/WzozX/?noTomariHotel=41069",
//                 "reviewUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/gJNfM/?f_hotel_no=41069",
//                 "hotelKanaName": "みつい　がーでんほてる　ぎんざ　ぷれみあ",
//                 "hotelSpecial": "JR新橋駅より徒歩5分。銀座で唯一のタワー型デザインホテル。こだわりのデザインと東京の夜景で快適な空間とひとときを演出。",
//                 "hotelMinCharge": 8865,
//                 "latitude": 35.66708526,
//                 "longitude": 139.7632446,
//                 "postalCode": "104-0061",
//                 "address1": "東京都",
//                 "address2": "中央区銀座8－13－1",
//                 "telephoneNo": "03-3543-1131",
//                 "faxNo": "03-3543-5531",
//                 "access": "東京メトロ銀座線　新橋駅１番出口より徒歩４分、銀座駅Ａ３番出口より徒歩７分",
//                 "parkingInformation": "有　１１９台　１，８００円（税込／泊）　先着順 ・大きさ制限有",
//                 "nearestStation": "新橋",
//                 "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/41069/41069.jpg",
//                 "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/41069.jpg",
//                 "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/41069/41069_kan.jpg",
//                 "roomThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/INTERIOR/41069.jpg",
//                 "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/41069/41069map.gif",
//                 "reviewCount": 4483,
//                 "reviewAverage": 4.23,
//                 "userReview": "久しぶりに利用しました。\r\nホテルのクオリティは相変わらず素晴らしいです。\r\nバスルームからの眺めも素晴らしく、部屋も綺麗で良かったです。　2019-06-13 23:08:23投稿"
//               }
//             },
//             {
//               "roomInfo": [
//                 {
//                   "roomBasicInfo": {
//                     "roomClass": "omakase1s",
//                     "roomName": "部屋タイプおまかせ《喫煙》",
//                     "planId": 3742564,
//                     "planName": "【直前割】　事前カード決済でお得！ROOM ONLY",
//                     "pointRate": 1,
//                     "withDinnerFlag": 0,
//                     "dinnerSelectFlag": 0,
//                     "withBreakfastFlag": 0,
//                     "breakfastSelectFlag": 0,
//                     "payment": "2",
//                     "reserveUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/IdsCY/?f_no=41069&f_syu=omakase1s&f_hi1=2019-07-4&f_hi2=2019-07-5&f_heya_su=1&f_otona_su=1&f_s1=0&f_s2=0&f_y1=0&f_y2=0&f_y3=0&f_y4=0&f_camp_id=3742564",
//                     "salesformFlag": 0
//                   }
//                 },
//                 {
//                   "dailyCharge": {
//                     "stayDate": "2019-07-4",
//                     "rakutenCharge": 20000,
//                     "total": 20000,
//                     "chargeFlag": 0
//                   }
//                 }
//               ]
//             },
//             {
//               "roomInfo": [
//                 {
//                   "roomBasicInfo": {
//                     "roomClass": "omakase1n",
//                     "roomName": "部屋タイプおまかせ【禁煙】",
//                     "planId": 3742564,
//                     "planName": "【直前割】　事前カード決済でお得！ROOM ONLY",
//                     "pointRate": 1,
//                     "withDinnerFlag": 0,
//                     "dinnerSelectFlag": 0,
//                     "withBreakfastFlag": 0,
//                     "breakfastSelectFlag": 0,
//                     "payment": "2",
//                     "reserveUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/IdsCY/?f_no=41069&f_syu=omakase1n&f_hi1=2019-07-4&f_hi2=2019-07-5&f_heya_su=1&f_otona_su=1&f_s1=0&f_s2=0&f_y1=0&f_y2=0&f_y3=0&f_y4=0&f_camp_id=3742564",
//                     "salesformFlag": 0
//                   }
//                 },
//                 {
//                   "dailyCharge": {
//                     "stayDate": "2019-07-4",
//                     "rakutenCharge": 20000,
//                     "total": 20000,
//                     "chargeFlag": 0
//                   }
//                 }
//               ]
//             },
//             {
//               "roomInfo": [
//                 {
//                   "roomBasicInfo": {
//                     "roomClass": "pmss",
//                     "roomName": "モデレートツイン 《喫煙》",
//                     "planId": 4278042,
//                     "planName": "【福岡祇園・京都駅前・銀座五丁目】開業記念プラン",
//                     "pointRate": 1,
//                     "withDinnerFlag": 0,
//                     "dinnerSelectFlag": 0,
//                     "withBreakfastFlag": 0,
//                     "breakfastSelectFlag": 0,
//                     "payment": "1",
//                     "reserveUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/IdsCY/?f_no=41069&f_syu=pmss&f_hi1=2019-07-4&f_hi2=2019-07-5&f_heya_su=1&f_otona_su=1&f_s1=0&f_s2=0&f_y1=0&f_y2=0&f_y3=0&f_y4=0&f_camp_id=4278042",
//                     "salesformFlag": 0
//                   }
//                 },
//                 {
//                   "dailyCharge": {
//                     "stayDate": "2019-07-4",
//                     "rakutenCharge": 26200,
//                     "total": 26200,
//                     "chargeFlag": 0
//                   }
//                 }
//               ]
//             }
//           ]
//         },
//         {
//           "hotel": [
//             {
//               "hotelBasicInfo": {
//                 "hotelNo": 39980,
//                 "hotelName": "すえひろの湯　ドーミーイン秋葉原",
//                 "hotelInformationUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/pvonD/?f_no=39980",
//                 "planListUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/vFumt/?f_no=39980&f_flg=PLAN",
//                 "dpPlanListUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/WzozX/?noTomariHotel=39980",
//                 "reviewUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/gJNfM/?f_hotel_no=39980",
//                 "hotelKanaName": "すえひろのゆ　どーみーいんあきはばら",
//                 "hotelSpecial": "■男女別露天風呂付大浴場完備■シモンズベッド完備■JR秋葉原駅より徒歩5分",
//                 "hotelMinCharge": 4795,
//                 "latitude": 35.70270097,
//                 "longitude": 139.7732617,
//                 "postalCode": "101-0021",
//                 "address1": "東京都",
//                 "address2": "千代田区外神田4-12-5",
//                 "telephoneNo": "03-5295-0012",
//                 "faxNo": "03-5295-0023",
//                 "access": "東京メトロ銀座線　末広町駅から徒歩１分／ＪＲ秋葉原駅　電気街口より徒歩５分／東京メトロ日比谷線　秋葉原駅より徒歩７分",
//                 "parkingInformation": "3台(平面）　1泊/3,000(平日・日曜日)/1泊4,000(土曜日・祝日)　※要電話予約",
//                 "nearestStation": "末広町（東京）",
//                 "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/39980/39980.jpg",
//                 "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/39980.jpg",
//                 "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/39980/39980_ka.jpg",
//                 "roomThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/INTERIOR/39980.jpg",
//                 "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/39980/39980map.gif",
//                 "reviewCount": 4718,
//                 "reviewAverage": 4.33,
//                 "userReview": "洗濯機を各階においてほしい！！　2019-07-03 16:17:25投稿"
//               }
//             },
//             {
//               "roomInfo": [
//                 {
//                   "roomBasicInfo": {
//                     "roomClass": "se3",
//                     "roomName": "喫煙セミダブル14平米【シモンズベッド幅120】",
//                     "planId": 1822561,
//                     "planName": "【素泊り】癒しのシンプルステイ◆男女別大浴場完備",
//                     "pointRate": 1,
//                     "withDinnerFlag": 0,
//                     "dinnerSelectFlag": 0,
//                     "withBreakfastFlag": 0,
//                     "breakfastSelectFlag": 0,
//                     "payment": "1",
//                     "reserveUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/IdsCY/?f_no=39980&f_syu=se3&f_hi1=2019-07-4&f_hi2=2019-07-5&f_heya_su=1&f_otona_su=1&f_s1=0&f_s2=0&f_y1=0&f_y2=0&f_y3=0&f_y4=0&f_camp_id=1822561",
//                     "salesformFlag": 0
//                   }
//                 },
//                 {
//                   "dailyCharge": {
//                     "stayDate": "2019-07-4",
//                     "rakutenCharge": 10790,
//                     "total": 10790,
//                     "chargeFlag": 0
//                   }
//                 }
//               ]
//             },
//             {
//               "roomInfo": [
//                 {
//                   "roomBasicInfo": {
//                     "roomClass": "dn3",
//                     "roomName": "禁煙ダブル14平米【シモンズベッド幅140】",
//                     "planId": 1822561,
//                     "planName": "【素泊り】癒しのシンプルステイ◆男女別大浴場完備",
//                     "pointRate": 1,
//                     "withDinnerFlag": 0,
//                     "dinnerSelectFlag": 0,
//                     "withBreakfastFlag": 0,
//                     "breakfastSelectFlag": 0,
//                     "payment": "1",
//                     "reserveUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/IdsCY/?f_no=39980&f_syu=dn3&f_hi1=2019-07-4&f_hi2=2019-07-5&f_heya_su=1&f_otona_su=1&f_s1=0&f_s2=0&f_y1=0&f_y2=0&f_y3=0&f_y4=0&f_camp_id=1822561",
//                     "salesformFlag": 0
//                   }
//                 },
//                 {
//                   "dailyCharge": {
//                     "stayDate": "2019-07-4",
//                     "rakutenCharge": 11790,
//                     "total": 11790,
//                     "chargeFlag": 0
//                   }
//                 }
//               ]
//             },
//             {
//               "roomInfo": [
//                 {
//                   "roomBasicInfo": {
//                     "roomClass": "se3",
//                     "roomName": "喫煙セミダブル14平米【シモンズベッド幅120】",
//                     "planId": 3039453,
//                     "planName": "【楽天限定ポイント10倍】お得にポイントGETプラン【素泊り】",
//                     "pointRate": 10,
//                     "withDinnerFlag": 0,
//                     "dinnerSelectFlag": 0,
//                     "withBreakfastFlag": 0,
//                     "breakfastSelectFlag": 0,
//                     "payment": "1",
//                     "reserveUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/IdsCY/?f_no=39980&f_syu=se3&f_hi1=2019-07-4&f_hi2=2019-07-5&f_heya_su=1&f_otona_su=1&f_s1=0&f_s2=0&f_y1=0&f_y2=0&f_y3=0&f_y4=0&f_camp_id=3039453",
//                     "salesformFlag": 0
//                   }
//                 },
//                 {
//                   "dailyCharge": {
//                     "stayDate": "2019-07-4",
//                     "rakutenCharge": 12790,
//                     "total": 12790,
//                     "chargeFlag": 0
//                   }
//                 }
//               ]
//             }
//           ]
//         },
//         {
//           "hotel": [
//             {
//               "hotelBasicInfo": {
//                 "hotelNo": 158347,
//                 "hotelName": "伝馬の湯　ドーミーインＰＲＥＭＩＵＭ東京小伝馬町",
//                 "hotelInformationUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/pvonD/?f_no=158347",
//                 "planListUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/vFumt/?f_no=158347&f_flg=PLAN",
//                 "dpPlanListUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/WzozX/?noTomariHotel=158347",
//                 "reviewUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/gJNfM/?f_hotel_no=158347",
//                 "hotelKanaName": "でんまのゆ　どーみーいんぷれみあむとうきょうこでんまちょう",
//                 "hotelSpecial": "東京駅までシャトルバス運行で多方面へのアクセスが可能。日比谷線小伝馬町駅３番出口すぐ横。最上階サウナ付大浴場完備！",
//                 "hotelMinCharge": 4745,
//                 "latitude": 35.69029303546871,
//                 "longitude": 139.778183165047,
//                 "postalCode": "103-0001",
//                 "address1": "東京都",
//                 "address2": "中央区日本橋小伝馬町2-3",
//                 "telephoneNo": "03-5614-5489",
//                 "faxNo": "03-5695-5501",
//                 "access": "東京メトロ日比谷線『小伝馬町』3番出口より徒歩約20秒",
//                 "parkingInformation": "無",
//                 "nearestStation": "小伝馬町",
//                 "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/158347/158347.jpg",
//                 "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/158347.jpg",
//                 "roomImageUrl": null,
//                 "roomThumbnailUrl": null,
//                 "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/158347/158347map.gif",
//                 "reviewCount": 525,
//                 "reviewAverage": 4.5,
//                 "userReview": "駅から1分もかからず，大変便利でした．\r\n夜鳴きそばのサービスは，ホテルに戻ってちょっとお腹がすいたときに食べるのにはちょうど良かったです．\r\nまた，利用したいと考えています．　2019-07-03 13:24:03投稿"
//               }
//             },
//             {
//               "roomInfo": [
//                 {
//                   "roomBasicInfo": {
//                     "roomClass": "tn",
//                     "roomName": "【禁煙】22平米◇スーペリアツインルーム◇最上階大浴場完備",
//                     "planId": 3812293,
//                     "planName": "【素泊り】癒しのシンプルステイ♪都会の真ん中で大浴場を満喫",
//                     "pointRate": 1,
//                     "withDinnerFlag": 0,
//                     "dinnerSelectFlag": 0,
//                     "withBreakfastFlag": 0,
//                     "breakfastSelectFlag": 0,
//                     "payment": "1",
//                     "reserveUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/IdsCY/?f_no=158347&f_syu=tn&f_hi1=2019-07-4&f_hi2=2019-07-5&f_heya_su=1&f_otona_su=1&f_s1=0&f_s2=0&f_y1=0&f_y2=0&f_y3=0&f_y4=0&f_camp_id=3812293",
//                     "salesformFlag": 0
//                   }
//                 },
//                 {
//                   "dailyCharge": {
//                     "stayDate": "2019-07-4",
//                     "rakutenCharge": 15990,
//                     "total": 15990,
//                     "chargeFlag": 0
//                   }
//                 }
//               ]
//             },
//             {
//               "roomInfo": [
//                 {
//                   "roomBasicInfo": {
//                     "roomClass": "tn",
//                     "roomName": "【禁煙】22平米◇スーペリアツインルーム◇最上階大浴場完備",
//                     "planId": 3812292,
//                     "planName": "【朝食付き】口コミ★4.5 大好評！50種類の和洋バイキング付♪",
//                     "pointRate": 1,
//                     "withDinnerFlag": 0,
//                     "dinnerSelectFlag": 0,
//                     "withBreakfastFlag": 1,
//                     "breakfastSelectFlag": 0,
//                     "payment": "1",
//                     "reserveUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/IdsCY/?f_no=158347&f_syu=tn&f_hi1=2019-07-4&f_hi2=2019-07-5&f_heya_su=1&f_otona_su=1&f_s1=0&f_s2=0&f_y1=0&f_y2=0&f_y3=0&f_y4=0&f_camp_id=3812292",
//                     "salesformFlag": 0
//                   }
//                 },
//                 {
//                   "dailyCharge": {
//                     "stayDate": "2019-07-4",
//                     "rakutenCharge": 17790,
//                     "total": 17790,
//                     "chargeFlag": 0
//                   }
//                 }
//               ]
//             },
//             {
//               "roomInfo": [
//                 {
//                   "roomBasicInfo": {
//                     "roomClass": "tn",
//                     "roomName": "【禁煙】22平米◇スーペリアツインルーム◇最上階大浴場完備",
//                     "planId": 4014037,
//                     "planName": "【15時イン-13時アウト】22時間ステイプラン【素泊り】",
//                     "pointRate": 1,
//                     "withDinnerFlag": 0,
//                     "dinnerSelectFlag": 0,
//                     "withBreakfastFlag": 0,
//                     "breakfastSelectFlag": 0,
//                     "payment": "1",
//                     "reserveUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/IdsCY/?f_no=158347&f_syu=tn&f_hi1=2019-07-4&f_hi2=2019-07-5&f_heya_su=1&f_otona_su=1&f_s1=0&f_s2=0&f_y1=0&f_y2=0&f_y3=0&f_y4=0&f_camp_id=4014037",
//                     "salesformFlag": 0
//                   }
//                 },
//                 {
//                   "dailyCharge": {
//                     "stayDate": "2019-07-4",
//                     "rakutenCharge": 17990,
//                     "total": 17990,
//                     "chargeFlag": 0
//                   }
//                 }
//               ]
//             }
//           ]
//         },
//         {
//           "hotel": [
//             {
//               "hotelBasicInfo": {
//                 "hotelNo": 168463,
//                 "hotelName": "エスペリアイン日本橋箱崎（２０１８年１１月９日ＯＰＥＮ）",
//                 "hotelInformationUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/pvonD/?f_no=168463",
//                 "planListUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/vFumt/?f_no=168463&f_flg=PLAN",
//                 "dpPlanListUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/WzozX/?noTomariHotel=168463",
//                 "reviewUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/gJNfM/?f_hotel_no=168463",
//                 "hotelKanaName": "えすぺりあいんにほんばしはこざき",
//                 "hotelSpecial": "☆全館禁煙☆T-CATまで徒歩約3分空港までのアクセス良好☆コンビニまで徒歩1分☆ウェルカムドリンク☆CNNj無料視聴",
//                 "hotelMinCharge": 3250,
//                 "latitude": 35.68326049141199,
//                 "longitude": 139.79020786011893,
//                 "postalCode": "103-0008",
//                 "address1": "東京都",
//                 "address2": "中央区日本橋中洲4-9",
//                 "telephoneNo": "03-3527-2007",
//                 "faxNo": "03-3527-2008",
//                 "access": "「東京シティエアターミナル」より徒歩約3分、地下鉄「水天宮前駅」より徒歩約5分、地下鉄「人形町駅」より徒歩約10分。",
//                 "parkingInformation": "有り　３台　２，５００円（税込／泊）　要電話予約",
//                 "nearestStation": "水天宮前",
//                 "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/168463/168463.jpg",
//                 "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/168463.jpg",
//                 "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/168463/168463_kan1.jpg",
//                 "roomThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/INTERIOR/168463.jpg",
//                 "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/168463/168463map.gif",
//                 "reviewCount": 329,
//                 "reviewAverage": 4.2,
//                 "userReview": "清潔感があり、快適に過ごす事が出来ました。また、朝食も美味しかったです。\r\n価格も安価でコスパが良いなと感じました。　2019-07-02 22:27:47投稿"
//               }
//             },
//             {
//               "roomInfo": [
//                 {
//                   "roomBasicInfo": {
//                     "roomClass": "sb1",
//                     "roomName": "スタンダードシングル",
//                     "planId": 4469532,
//                     "planName": "【学生限定】夏休みの旅行におすすめ！学割プラン",
//                     "pointRate": 1,
//                     "withDinnerFlag": 0,
//                     "dinnerSelectFlag": 0,
//                     "withBreakfastFlag": 0,
//                     "breakfastSelectFlag": 0,
//                     "payment": "1",
//                     "reserveUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/IdsCY/?f_no=168463&f_syu=sb1&f_hi1=2019-07-4&f_hi2=2019-07-5&f_heya_su=1&f_otona_su=1&f_s1=0&f_s2=0&f_y1=0&f_y2=0&f_y3=0&f_y4=0&f_camp_id=4469532",
//                     "salesformFlag": 0
//                   }
//                 },
//                 {
//                   "dailyCharge": {
//                     "stayDate": "2019-07-4",
//                     "rakutenCharge": 7000,
//                     "total": 7000,
//                     "chargeFlag": 0
//                   }
//                 }
//               ]
//             },
//             {
//               "roomInfo": [
//                 {
//                   "roomBasicInfo": {
//                     "roomClass": "sb1",
//                     "roomName": "スタンダードシングル",
//                     "planId": 4370975,
//                     "planName": "！グランドオープン記念！楽天限定の特別価格！クチコミプラン",
//                     "pointRate": 1,
//                     "withDinnerFlag": 0,
//                     "dinnerSelectFlag": 0,
//                     "withBreakfastFlag": 0,
//                     "breakfastSelectFlag": 0,
//                     "payment": "1",
//                     "reserveUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/IdsCY/?f_no=168463&f_syu=sb1&f_hi1=2019-07-4&f_hi2=2019-07-5&f_heya_su=1&f_otona_su=1&f_s1=0&f_s2=0&f_y1=0&f_y2=0&f_y3=0&f_y4=0&f_camp_id=4370975",
//                     "salesformFlag": 0
//                   }
//                 },
//                 {
//                   "dailyCharge": {
//                     "stayDate": "2019-07-4",
//                     "rakutenCharge": 7300,
//                     "total": 7300,
//                     "chargeFlag": 0
//                   }
//                 }
//               ]
//             },
//             {
//               "roomInfo": [
//                 {
//                   "roomBasicInfo": {
//                     "roomClass": "sb1",
//                     "roomName": "スタンダードシングル",
//                     "planId": 4370983,
//                     "planName": "！グランドオープン記念！楽天限定の特別価格！クチコミプラン＜VOD見放題付き＞",
//                     "pointRate": 1,
//                     "withDinnerFlag": 0,
//                     "dinnerSelectFlag": 0,
//                     "withBreakfastFlag": 0,
//                     "breakfastSelectFlag": 0,
//                     "payment": "1",
//                     "reserveUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/IdsCY/?f_no=168463&f_syu=sb1&f_hi1=2019-07-4&f_hi2=2019-07-5&f_heya_su=1&f_otona_su=1&f_s1=0&f_s2=0&f_y1=0&f_y2=0&f_y3=0&f_y4=0&f_camp_id=4370983",
//                     "salesformFlag": 0
//                   }
//                 },
//                 {
//                   "dailyCharge": {
//                     "stayDate": "2019-07-4",
//                     "rakutenCharge": 7400,
//                     "total": 7400,
//                     "chargeFlag": 0
//                   }
//                 }
//               ]
//             }
//           ]
//         },
//         {
//           "hotel": [
//             {
//               "hotelBasicInfo": {
//                 "hotelNo": 165753,
//                 "hotelName": "変なホテル東京　浜松町",
//                 "hotelInformationUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/pvonD/?f_no=165753",
//                 "planListUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/vFumt/?f_no=165753&f_flg=PLAN",
//                 "dpPlanListUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/WzozX/?noTomariHotel=165753",
//                 "reviewUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/gJNfM/?f_hotel_no=165753",
//                 "hotelKanaName": "へんなほてるとうきょう　はままつちょう",
//                 "hotelSpecial": "浜松町は「快眠」と「健康」をコンセプトに旅の癒しを追求しております。地下鉄・大門駅から徒歩１分、ＪＲ・浜松町駅徒歩２分",
//                 "hotelMinCharge": 3562,
//                 "latitude": 35.6572433,
//                 "longitude": 139.7564572,
//                 "postalCode": "105-0013",
//                 "address1": "東京都",
//                 "address2": "港区浜松町1-24",
//                 "telephoneNo": "050-5894-3781",
//                 "faxNo": "03-3433-2033",
//                 "access": "都営浅草線・大江戸線『大門駅 B4出口』より徒歩約１分、JR『浜松町駅 北口』より徒歩約２分",
//                 "parkingInformation": "なし　",
//                 "nearestStation": "大門（東京）",
//                 "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/165753/165753.jpg",
//                 "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/165753.jpg",
//                 "roomImageUrl": null,
//                 "roomThumbnailUrl": null,
//                 "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/165753/165753map.gif",
//                 "reviewCount": 281,
//                 "reviewAverage": 4.04,
//                 "userReview": "他の口コミにもありましたが、ゆっくり出来るかは、隣の部屋の人に左…　2019-07-01 20:18:56投稿 <a href=\"http://img.travel.rakuten.co.jp/image/tr/api/re/gJNfM/?f_hotel_no=165753\" class=\"3click\">つづきはこちら</a>"
//               }
//             },
//             {
//               "roomInfo": [
//                 {
//                   "roomBasicInfo": {
//                     "roomClass": "2017111302",
//                     "roomName": "スタンダードツイン",
//                     "planId": 4268559,
//                     "planName": "【18時IN−9時OUT】羽田空港，東京駅共に乗換なし～浜松町，大門駅から2分☆直前予約OK軽朝食付",
//                     "pointRate": 1,
//                     "withDinnerFlag": 0,
//                     "dinnerSelectFlag": 0,
//                     "withBreakfastFlag": 1,
//                     "breakfastSelectFlag": 0,
//                     "payment": "1",
//                     "reserveUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/IdsCY/?f_no=165753&f_syu=2017111302&f_hi1=2019-07-4&f_hi2=2019-07-5&f_heya_su=1&f_otona_su=1&f_s1=0&f_s2=0&f_y1=0&f_y2=0&f_y3=0&f_y4=0&f_camp_id=4268559",
//                     "salesformFlag": 0
//                   }
//                 },
//                 {
//                   "dailyCharge": {
//                     "stayDate": "2019-07-4",
//                     "rakutenCharge": 15300,
//                     "total": 15300,
//                     "chargeFlag": 0
//                   }
//                 }
//               ]
//             },
//             {
//               "roomInfo": [
//                 {
//                   "roomBasicInfo": {
//                     "roomClass": "2017111302",
//                     "roomName": "スタンダードツイン",
//                     "planId": 4118985,
//                     "planName": "【食事なし】羽田空港，東京駅共に乗り換えなし！～浜松町，大門駅から2分の好立地～ 直前予約OK",
//                     "pointRate": 1,
//                     "withDinnerFlag": 0,
//                     "dinnerSelectFlag": 0,
//                     "withBreakfastFlag": 0,
//                     "breakfastSelectFlag": 0,
//                     "payment": "1",
//                     "reserveUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/IdsCY/?f_no=165753&f_syu=2017111302&f_hi1=2019-07-4&f_hi2=2019-07-5&f_heya_su=1&f_otona_su=1&f_s1=0&f_s2=0&f_y1=0&f_y2=0&f_y3=0&f_y4=0&f_camp_id=4118985",
//                     "salesformFlag": 0
//                   }
//                 },
//                 {
//                   "dailyCharge": {
//                     "stayDate": "2019-07-4",
//                     "rakutenCharge": 16000,
//                     "total": 16000,
//                     "chargeFlag": 0
//                   }
//                 }
//               ]
//             },
//             {
//               "roomInfo": [
//                 {
//                   "roomBasicInfo": {
//                     "roomClass": "2017111302",
//                     "roomName": "スタンダードツイン",
//                     "planId": 4450395,
//                     "planName": "【開業１周年記念】1日3部屋限定！！アニバーサリー特典付きプラン ＜食事なし＞",
//                     "pointRate": 1,
//                     "withDinnerFlag": 0,
//                     "dinnerSelectFlag": 0,
//                     "withBreakfastFlag": 0,
//                     "breakfastSelectFlag": 0,
//                     "payment": "1",
//                     "reserveUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/IdsCY/?f_no=165753&f_syu=2017111302&f_hi1=2019-07-4&f_hi2=2019-07-5&f_heya_su=1&f_otona_su=1&f_s1=0&f_s2=0&f_y1=0&f_y2=0&f_y3=0&f_y4=0&f_camp_id=4450395",
//                     "salesformFlag": 0
//                   }
//                 },
//                 {
//                   "dailyCharge": {
//                     "stayDate": "2019-07-4",
//                     "rakutenCharge": 16000,
//                     "total": 16000,
//                     "chargeFlag": 0
//                   }
//                 }
//               ]
//             }
//           ]
//         },
//         {
//           "hotel": [
//             {
//               "hotelBasicInfo": {
//                 "hotelNo": 171942,
//                 "hotelName": "京成リッチモンドホテル東京門前仲町（２０１９年３月１９日ＮＥＷオープン）",
//                 "hotelInformationUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/pvonD/?f_no=171942",
//                 "planListUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/vFumt/?f_no=171942&f_flg=PLAN",
//                 "dpPlanListUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/WzozX/?noTomariHotel=171942",
//                 "reviewUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/gJNfM/?f_hotel_no=171942",
//                 "hotelKanaName": "けいせいりっちもんどほてるとうきょうもんぜんなかちょう",
//                 "hotelSpecial": "2019年3月19日ＯＰＥＮ！東京駅丸の内北口徒歩連絡の大手町駅まで３駅6分アクセス！　最寄り駅から徒歩2分！",
//                 "hotelMinCharge": 3500,
//                 "latitude": 35.6729202,
//                 "longitude": 139.79662600000006,
//                 "postalCode": "135-0048",
//                 "address1": "東京都",
//                 "address2": "江東区門前仲町2-8-9",
//                 "telephoneNo": "03-5646-5300",
//                 "faxNo": "03-5646-5301",
//                 "access": "東京メトロ東西線・都営地下鉄大江戸線　門前仲町駅　5番出口から徒歩2分　6番出口エレベーターあり徒歩1分　",
//                 "parkingInformation": "無し",
//                 "nearestStation": "門前仲町",
//                 "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/171942/171942.jpg",
//                 "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/171942.jpg",
//                 "roomImageUrl": null,
//                 "roomThumbnailUrl": null,
//                 "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/171942/171942map.gif",
//                 "reviewCount": 84,
//                 "reviewAverage": 4.43,
//                 "userReview": "朝食も良かったし、…　2019-07-02 18:07:59投稿 <a href=\"http://img.travel.rakuten.co.jp/image/tr/api/re/gJNfM/?f_hotel_no=171942\" class=\"3click\">つづきはこちら</a>"
//               }
//             },
//             {
//               "roomInfo": [
//                 {
//                   "roomBasicInfo": {
//                     "roomClass": "sss",
//                     "roomName": "【喫煙】スーペリアシングル",
//                     "planId": 4351002,
//                     "planName": "【開業記念】シンプルステイ（素泊まり）",
//                     "pointRate": 1,
//                     "withDinnerFlag": 0,
//                     "dinnerSelectFlag": 0,
//                     "withBreakfastFlag": 0,
//                     "breakfastSelectFlag": 0,
//                     "payment": "1",
//                     "reserveUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/IdsCY/?f_no=171942&f_syu=sss&f_hi1=2019-07-4&f_hi2=2019-07-5&f_heya_su=1&f_otona_su=1&f_s1=0&f_s2=0&f_y1=0&f_y2=0&f_y3=0&f_y4=0&f_camp_id=4351002",
//                     "salesformFlag": 0
//                   }
//                 },
//                 {
//                   "dailyCharge": {
//                     "stayDate": "2019-07-4",
//                     "rakutenCharge": 10000,
//                     "total": 10000,
//                     "chargeFlag": 0
//                   }
//                 }
//               ]
//             },
//             {
//               "roomInfo": [
//                 {
//                   "roomBasicInfo": {
//                     "roomClass": "sds",
//                     "roomName": "【喫煙】スーペリアダブル",
//                     "planId": 4351002,
//                     "planName": "【開業記念】シンプルステイ（素泊まり）",
//                     "pointRate": 1,
//                     "withDinnerFlag": 0,
//                     "dinnerSelectFlag": 0,
//                     "withBreakfastFlag": 0,
//                     "breakfastSelectFlag": 0,
//                     "payment": "1",
//                     "reserveUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/IdsCY/?f_no=171942&f_syu=sds&f_hi1=2019-07-4&f_hi2=2019-07-5&f_heya_su=1&f_otona_su=1&f_s1=0&f_s2=0&f_y1=0&f_y2=0&f_y3=0&f_y4=0&f_camp_id=4351002",
//                     "salesformFlag": 0
//                   }
//                 },
//                 {
//                   "dailyCharge": {
//                     "stayDate": "2019-07-4",
//                     "rakutenCharge": 10000,
//                     "total": 10000,
//                     "chargeFlag": 0
//                   }
//                 }
//               ]
//             },
//             {
//               "roomInfo": [
//                 {
//                   "roomBasicInfo": {
//                     "roomClass": "sss",
//                     "roomName": "【喫煙】スーペリアシングル",
//                     "planId": 4357549,
//                     "planName": "シンプルステイ【素泊まり】",
//                     "pointRate": 1,
//                     "withDinnerFlag": 0,
//                     "dinnerSelectFlag": 0,
//                     "withBreakfastFlag": 0,
//                     "breakfastSelectFlag": 0,
//                     "payment": "1",
//                     "reserveUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/IdsCY/?f_no=171942&f_syu=sss&f_hi1=2019-07-4&f_hi2=2019-07-5&f_heya_su=1&f_otona_su=1&f_s1=0&f_s2=0&f_y1=0&f_y2=0&f_y3=0&f_y4=0&f_camp_id=4357549",
//                     "salesformFlag": 0
//                   }
//                 },
//                 {
//                   "dailyCharge": {
//                     "stayDate": "2019-07-4",
//                     "rakutenCharge": 11000,
//                     "total": 11000,
//                     "chargeFlag": 0
//                   }
//                 }
//               ]
//             }
//           ]
//         },
//         {
//           "hotel": [
//             {
//               "hotelBasicInfo": {
//                 "hotelNo": 69217,
//                 "hotelName": "コンフォートホテル東京神田",
//                 "hotelInformationUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/pvonD/?f_no=69217",
//                 "planListUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/vFumt/?f_no=69217&f_flg=PLAN",
//                 "dpPlanListUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/WzozX/?noTomariHotel=69217",
//                 "reviewUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/gJNfM/?f_hotel_no=69217",
//                 "hotelKanaName": "こんふぉーとほてるとうきょうかんだ",
//                 "hotelSpecial": "楽天トラベルブロンズアワード2018受賞◆朝食無料◆全室禁煙◆ＪＲ神田駅東口徒歩４分◆東京駅アクセス10分圏内",
//                 "hotelMinCharge": 3350,
//                 "latitude": 35.69355481,
//                 "longitude": 139.774437,
//                 "postalCode": "101-0042",
//                 "address1": "東京都",
//                 "address2": "千代田区神田東松下町11-2",
//                 "telephoneNo": "03-5297-2711",
//                 "faxNo": "03-5297-2712",
//                 "access": "ＪＲ山手線・京浜東北線、東京メトロ銀座線「神田駅」から徒歩４分◆東京駅から１駅◆羽田空港⇔神田駅電車で約３０分",
//                 "parkingInformation": "2台　1泊 （15:00～翌10:00）2,060円先着順　※満車の際は近隣コインパーキング",
//                 "nearestStation": "神田（東京）",
//                 "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/69217/69217.jpg",
//                 "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/69217.jpg",
//                 "roomImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/69217/69217_de.jpg",
//                 "roomThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/INTERIOR/69217.jpg",
//                 "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/69217/69217map.gif",
//                 "reviewCount": 3586,
//                 "reviewAverage": 4.09,
//                 "userReview": "出張でいつもお世話になっています。　2019-07-02 00:55:48投稿"
//               }
//             },
//             {
//               "roomInfo": [
//                 {
//                   "roomBasicInfo": {
//                     "roomClass": "nde",
//                     "roomName": "１ベッド◆ダブルエコノミー◆ ＜禁煙＞",
//                     "planId": 4429212,
//                     "planName": "［スタンダードプラン］コンフォートブランドは全室禁煙ルーム◆＜朝食＆コーヒー無料＞",
//                     "pointRate": 1,
//                     "withDinnerFlag": 0,
//                     "dinnerSelectFlag": 0,
//                     "withBreakfastFlag": 1,
//                     "breakfastSelectFlag": 0,
//                     "payment": "1",
//                     "reserveUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/IdsCY/?f_no=69217&f_syu=nde&f_hi1=2019-07-4&f_hi2=2019-07-5&f_heya_su=1&f_otona_su=1&f_s1=0&f_s2=0&f_y1=0&f_y2=0&f_y3=0&f_y4=0&f_camp_id=4429212",
//                     "salesformFlag": 0
//                   }
//                 },
//                 {
//                   "dailyCharge": {
//                     "stayDate": "2019-07-4",
//                     "rakutenCharge": 10700,
//                     "total": 10700,
//                     "chargeFlag": 0
//                   }
//                 }
//               ]
//             },
//             {
//               "roomInfo": [
//                 {
//                   "roomBasicInfo": {
//                     "roomClass": "nde",
//                     "roomName": "１ベッド◆ダブルエコノミー◆ ＜禁煙＞",
//                     "planId": 4429929,
//                     "planName": "［ポイント１０倍］楽天限定ポイントUP◆＜朝食＆コーヒー無料＞",
//                     "pointRate": 10,
//                     "withDinnerFlag": 0,
//                     "dinnerSelectFlag": 0,
//                     "withBreakfastFlag": 1,
//                     "breakfastSelectFlag": 0,
//                     "payment": "1",
//                     "reserveUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/IdsCY/?f_no=69217&f_syu=nde&f_hi1=2019-07-4&f_hi2=2019-07-5&f_heya_su=1&f_otona_su=1&f_s1=0&f_s2=0&f_y1=0&f_y2=0&f_y3=0&f_y4=0&f_camp_id=4429929",
//                     "salesformFlag": 0
//                   }
//                 },
//                 {
//                   "dailyCharge": {
//                     "stayDate": "2019-07-4",
//                     "rakutenCharge": 11800,
//                     "total": 11800,
//                     "chargeFlag": 0
//                   }
//                 }
//               ]
//             },
//             {
//               "roomInfo": [
//                 {
//                   "roomBasicInfo": {
//                     "roomClass": "nde",
//                     "roomName": "１ベッド◆ダブルエコノミー◆ ＜禁煙＞",
//                     "planId": 4429921,
//                     "planName": "［ロングステイ］朝はゆっくり１２時レイトチェックアウト◆＜朝食＆コーヒー無料＞",
//                     "pointRate": 1,
//                     "withDinnerFlag": 0,
//                     "dinnerSelectFlag": 0,
//                     "withBreakfastFlag": 1,
//                     "breakfastSelectFlag": 0,
//                     "payment": "1",
//                     "reserveUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/IdsCY/?f_no=69217&f_syu=nde&f_hi1=2019-07-4&f_hi2=2019-07-5&f_heya_su=1&f_otona_su=1&f_s1=0&f_s2=0&f_y1=0&f_y2=0&f_y3=0&f_y4=0&f_camp_id=4429921",
//                     "salesformFlag": 0
//                   }
//                 },
//                 {
//                   "dailyCharge": {
//                     "stayDate": "2019-07-4",
//                     "rakutenCharge": 12500,
//                     "total": 12500,
//                     "chargeFlag": 0
//                   }
//                 }
//               ]
//             }
//           ]
//         },
//         {
//           "hotel": [
//             {
//               "hotelBasicInfo": {
//                 "hotelNo": 151505,
//                 "hotelName": "三井ガーデンホテル京橋",
//                 "hotelInformationUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/pvonD/?f_no=151505",
//                 "planListUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/vFumt/?f_no=151505&f_flg=PLAN",
//                 "dpPlanListUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/WzozX/?noTomariHotel=151505",
//                 "reviewUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/gJNfM/?f_hotel_no=151505",
//                 "hotelKanaName": "みついがーでんほてるきょうばし",
//                 "hotelSpecial": "東京駅より徒歩5分、京橋駅より徒歩2分という好立地！銀座・日本橋へも徒歩圏内です。 ",
//                 "hotelMinCharge": 7650,
//                 "latitude": 35.6784144217567,
//                 "longitude": 139.77080023620545,
//                 "postalCode": "104-0031",
//                 "address1": "東京都",
//                 "address2": "中央区京橋1-3-6",
//                 "telephoneNo": "03-3231-3131",
//                 "faxNo": "03-3276-3111",
//                 "access": "JR東京駅八重洲中央口徒歩5分",
//                 "parkingInformation": "※ホテルには駐車場はございません。",
//                 "nearestStation": "東京",
//                 "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/151505/151505.jpg",
//                 "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/151505.jpg",
//                 "roomImageUrl": null,
//                 "roomThumbnailUrl": null,
//                 "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/151505/151505map.gif",
//                 "reviewCount": 358,
//                 "reviewAverage": 4.47,
//                 "userReview": "お部屋も広く、ゆっくりと宿泊することができ快適な旅でした。\r\nなお、今回は朝食は食べませんでした。　2019-06-26 16:18:12投稿"
//               }
//             },
//             {
//               "roomInfo": [
//                 {
//                   "roomBasicInfo": {
//                     "roomClass": "cdn",
//                     "roomName": "コンフォート【禁煙】（ベッド1台）",
//                     "planId": 3704303,
//                     "planName": "【直前割・Short de お得】チェックイン20時！チェックアウト11時 ～東京駅から徒歩5分～",
//                     "pointRate": 1,
//                     "withDinnerFlag": 0,
//                     "dinnerSelectFlag": 0,
//                     "withBreakfastFlag": 0,
//                     "breakfastSelectFlag": 0,
//                     "payment": "1",
//                     "reserveUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/JlnYS/?f_no=151505&f_syu=cdn&f_hi1=2019-07-4&f_hi2=2019-07-5&f_heya_su=1&f_otona_su=1&f_s1=0&f_s2=0&f_y1=0&f_y2=0&f_y3=0&f_y4=0&f_camp_id=3704303",
//                     "salesformFlag": 2
//                   }
//                 },
//                 {
//                   "dailyCharge": {
//                     "stayDate": "2019-07-4",
//                     "rakutenCharge": 18500,
//                     "total": 18500,
//                     "chargeFlag": 0
//                   }
//                 }
//               ]
//             },
//             {
//               "roomInfo": [
//                 {
//                   "roomBasicInfo": {
//                     "roomClass": "cdn",
//                     "roomName": "コンフォート【禁煙】（ベッド1台）",
//                     "planId": 4278073,
//                     "planName": "【福岡祇園・京都駅前・銀座五丁目】開業記念プラン",
//                     "pointRate": 1,
//                     "withDinnerFlag": 0,
//                     "dinnerSelectFlag": 0,
//                     "withBreakfastFlag": 0,
//                     "breakfastSelectFlag": 0,
//                     "payment": "1",
//                     "reserveUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/IdsCY/?f_no=151505&f_syu=cdn&f_hi1=2019-07-4&f_hi2=2019-07-5&f_heya_su=1&f_otona_su=1&f_s1=0&f_s2=0&f_y1=0&f_y2=0&f_y3=0&f_y4=0&f_camp_id=4278073",
//                     "salesformFlag": 0
//                   }
//                 },
//                 {
//                   "dailyCharge": {
//                     "stayDate": "2019-07-4",
//                     "rakutenCharge": 19100,
//                     "total": 19100,
//                     "chargeFlag": 0
//                   }
//                 }
//               ]
//             },
//             {
//               "roomInfo": [
//                 {
//                   "roomBasicInfo": {
//                     "roomClass": "cdn",
//                     "roomName": "コンフォート【禁煙】（ベッド1台）",
//                     "planId": 3703914,
//                     "planName": "【シンプルステイ】ビジネス・観光に最適な立地  ～東京駅から徒歩5分～ ",
//                     "pointRate": 1,
//                     "withDinnerFlag": 0,
//                     "dinnerSelectFlag": 0,
//                     "withBreakfastFlag": 0,
//                     "breakfastSelectFlag": 0,
//                     "payment": "1",
//                     "reserveUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/IdsCY/?f_no=151505&f_syu=cdn&f_hi1=2019-07-4&f_hi2=2019-07-5&f_heya_su=1&f_otona_su=1&f_s1=0&f_s2=0&f_y1=0&f_y2=0&f_y3=0&f_y4=0&f_camp_id=3703914",
//                     "salesformFlag": 0
//                   }
//                 },
//                 {
//                   "dailyCharge": {
//                     "stayDate": "2019-07-4",
//                     "rakutenCharge": 19100,
//                     "total": 19100,
//                     "chargeFlag": 0
//                   }
//                 }
//               ]
//             }
//           ]
//         }
//       ];
//
//       test("hotels", () => {
//         const today = new Date();
//         const tomorrow = new Date(
//           today.getFullYear(),
//           today.getMonth(),
//           today.getDay() + 1,
//           today.getHours(),
//           today.getMinutes()
//         );
//         const component = TestRenderer.create(
//           <SearchForm
//             checkInDay={today}
//             checkOutDay={tomorrow}
//             hotels={hotels}
//             />
//         );
//         let tree = component.toJSON();
//         expect(tree).toMatchSnapshot();
//       });
