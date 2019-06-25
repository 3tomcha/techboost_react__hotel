import React from 'react';
import ReactDOM from 'react-dom';

function HotelList(props){
  const jsons = props.JSONS;
  if(props.hotels){
  var hotels = props.hotels.hotels[0].hotel[0].hotelBasicInfo.hotelName;
  console.log(hotels);
  }

  return(
    <div>
    <ul>
    {jsons.map(json => {
      return(
        <li>
        // {json.name}<br/>
        // {json.image}<br/>
        // {json.goodpoint}<br/>
        // {json.price}<br/>
        // {json.averagepoint}<br/>
        </li>
      );
    })
  }
  </ul>
  <a href="/hotels/:id?checkInDate=yyyy-mm-dd&checkOutDate=yyyy-mm-dd"><button>詳細ボタン</button></a>
  </div>
);
}
export default HotelList;
