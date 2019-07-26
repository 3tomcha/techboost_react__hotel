import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';
import SearchForm from './Components/SearchForm';
import HotelList from './Components/HotelList';
import { BrowserRouter, Route, Switch} from 'react-router-dom'

function App(props){
  const hotels=[
    {
      "hotel": [
        {
          "hotelBasicInfo": {
            "hotelNo": 141356,
            "hotelName": "スーパーホテルＰｒｅｍｉｅｒ東京駅八重洲中央口　八重桜の湯（旧Ｌｏｈａｓ東京駅八重洲中央口）",
            "hotelInformationUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/pvonD/?f_no=141356",
            "planListUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/vFumt/?f_no=141356&f_flg=PLAN",
            "dpPlanListUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/WzozX/?noTomariHotel=141356",
            "reviewUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/gJNfM/?f_hotel_no=141356",
            "hotelKanaName": "すーぱーほてるぷれみあとうきょうえきやえすちゅうおうぐちやえざくらのゆ",
            "hotelSpecial": "【楽天トラベルブロンズアワード2018受賞】男女別の大浴場「八重桜の湯」は健康イオン水大浴場と炭酸泉が大人気です！",
            "hotelMinCharge": 6400,
            "latitude": 35.67922715,
            "longitude": 139.7698432,
            "postalCode": "104-0028",
            "address1": "東京都",
            "address2": "中央区八重洲2-2-7",
            "telephoneNo": "03-3241-9000",
            "faxNo": "03-3241-9003",
            "access": "東京駅より徒歩３分（八重洲中央口より）、羽田空港よりリムジンバスで30分、成田空港よりJRエクスプレスで60分。",
            "parkingInformation": "立体駐車場20台/1泊1000円/入庫時間15：00～24：00・出庫時間7：00～11：00/",
            "nearestStation": "東京",
            "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/141356/141356.jpg",
            "hotelThumbnailUrl": "https://img.travel.rakuten.co.jp/HIMG/90/141356.jpg",
            "roomImageUrl": null,
            "roomThumbnailUrl": null,
            "hotelMapImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/141356/141356map.gif",
            "reviewCount": 1920,
            "reviewAverage": 4.43,
            "userReview": "何度来ても くつろぎますし\r\n対応が素晴らしいです\r\nスタッフの方が 皆さん綺麗ですし笑顔を絶やさず 気持ち良く\r\n対応して貰いました\r\nまた利用します　2019-07-02 15:40:35投稿"
          }
        },
        {
          "roomInfo": [
            {
              "roomBasicInfo": {
                "roomClass": "ok001",
                "roomName": "◇禁煙◇お部屋タイプおまかせ♪",
                "planId": 3879730,
                "planName": "楽天限定・直前割♪【お部屋タイプおまかせプラン】～東京駅から歩いて３分おトクにぐっすり～",
                "pointRate": 1,
                "withDinnerFlag": 0,
                "dinnerSelectFlag": 0,
                "withBreakfastFlag": 0,
                "breakfastSelectFlag": 0,
                "payment": "1",
                "reserveUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/IdsCY/?f_no=141356&f_syu=ok001&f_hi1=2019-07-4&f_hi2=2019-07-5&f_heya_su=1&f_otona_su=1&f_s1=0&f_s2=0&f_y1=0&f_y2=0&f_y3=0&f_y4=0&f_camp_id=3879730",
                "salesformFlag": 0
              }
            },
            {
              "dailyCharge": {
                "stayDate": "2019-07-4",
                "rakutenCharge": 14200,
                "total": 14200,
                "chargeFlag": 0
              }
            }
          ]
        },
        {
          "roomInfo": [
            {
              "roomBasicInfo": {
                "roomClass": "s7",
                "roomName": "□禁煙□スーパールーム(ダブルベット＋ロフトベット)",
                "planId": 3586917,
                "planName": "*東京駅から徒歩３分*【スタンダードプラン・朝食なし】～高濃度人工炭酸泉でぐっすり～全館禁煙",
                "pointRate": 1,
                "withDinnerFlag": 0,
                "dinnerSelectFlag": 0,
                "withBreakfastFlag": 0,
                "breakfastSelectFlag": 0,
                "payment": "1",
                "reserveUrl": "https://img.travel.rakuten.co.jp/image/tr/api/re/IdsCY/?f_no=141356&f_syu=s7&f_hi1=2019-07-4&f_hi2=2019-07-5&f_heya_su=1&f_otona_su=1&f_s1=0&f_s2=0&f_y1=0&f_y2=0&f_y3=0&f_y4=0&f_camp_id=3586917",
                "salesformFlag": 0
              }
            },
            {
              "dailyCharge": {
                "stayDate": "2019-07-4",
                "rakutenCharge": 14700,
                "total": 14700,
                "chargeFlag": 0
              }
            }
          ]
        },
      ]
    }
  ];

  const today = new Date();
  const tomorrow = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 1,
    today.getHours(),
    today.getMinutes()
  );

  return(
    <BrowserRouter>
      <Switch>
        <Route path="/searchform" component={SearchForm}/>
      <Route path="/" component={Home}/>
      </Switch>
    </BrowserRouter>
  );
}
export default App;
