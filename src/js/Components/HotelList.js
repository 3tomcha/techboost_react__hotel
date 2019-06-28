import React from 'react';
import ReactDOM from 'react-dom';
import { Link, Route } from "react-router-dom"

function HotelList(props){
  const jsons = props.JSONS;
  var hotels = [];
  if(props.hotels){
    hotels = props.hotels;
    var checkInDay = props.checkInDay.getFullYear() + "-"
    + ("0" + (props.checkInDay.getMonth() + 1) ).slice(-2) + "-"
    + props.checkInDay.getDate();

    var checkOutDay = props.checkOutDay.getFullYear() + "-"
    + ("0" + (props.checkOutDay.getMonth() + 1) ).slice(-2) + "-"
    + props.checkOutDay.getDate();
  }

  return(
    <div>
    {hotels.map(hotel => {
      let url ='/hotels/' + hotel.hotel[0].hotelBasicInfo.hotelNo+ '?checkInDate=' + checkInDay + '&checkOutDate=' + checkOutDay;

      return(
        <div>
          <ul>
            <li>{hotel.hotel[0].hotelBasicInfo.hotelName}</li>
            <li><img src={hotel.hotel[0].hotelBasicInfo.hotelImageUrl}/></li>
            <li>{hotel.hotel[0].hotelBasicInfo.hotelSpecial}</li>
            <li>{hotel.hotel[0].hotelBasicInfo.hotelMinCharge}</li>
            <li>{hotel.hotel[0].hotelBasicInfo.reviewAverage}</li>
          </ul>
          <Link to={url}>
            <button>詳細ボタン</button>
          </Link>
        </div>
      )})}
    </div>
    );
  }
  export default HotelList;
