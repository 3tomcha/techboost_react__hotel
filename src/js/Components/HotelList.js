import React from 'react';
import ReactDOM from 'react-dom';

function HotelList(props){
  const jsons = props.JSONS;
  var hotels = [];
  if(props.hotels){
    hotels = props.hotels.hotels;
  }

  return(
    <div>
      {hotels.map(hotel => {
        return(
          <ul>
            <li>{hotel.hotel[0].hotelBasicInfo.hotelName}</li>
            <li><img src={hotel.hotel[0].hotelBasicInfo.hotelImageUrl}/></li>
            <li>{hotel.hotel[0].hotelBasicInfo.hotelSpecial}</li>
            <li>{hotel.hotel[0].hotelBasicInfo.hotelMinCharge}</li>
            <li>{hotel.hotel[0].hotelBasicInfo.reviewAverage}</li>
          </ul>
        )})}
        <a href="/hotels/:id?checkInDate=yyyy-mm-dd&checkOutDate=yyyy-mm-dd"><button>詳細ボタン</button></a>
      </div>
    );
  }
  export default HotelList;
