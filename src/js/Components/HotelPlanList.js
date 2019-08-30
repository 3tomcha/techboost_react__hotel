import React from 'react';
import ReactDOM from 'react-dom';

function HotelPlanList(props){
  let hotelInfos = [];
  if(props.roomInfos){
    hotelInfos = props.roomInfos;
  }

  return (
    <div>
      {hotelInfos.map((roomInfo) => {
        const planName = roomInfo.roomInfo[0].roomBasicInfo.planName;
        const roomName = roomInfo.roomInfo[0].roomBasicInfo.roomName;
        const roomCharge = roomInfo.roomInfo[1].dailyCharge.total;

        return (
          <ul>
            <li>{planName}</li>
            <li>{roomName}</li>
            <li>{roomCharge}</li>
          </ul>
        );
      })}
  </div>
);
}

export default HotelPlanList;
