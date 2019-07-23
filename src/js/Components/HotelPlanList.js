import React from 'react';
import ReactDOM from 'react-dom';

export default function HotelPlanList(props){
  console.log(props);
    return (
      <div>
        <ul>
          <li>{props.roomInfos[0].roomInfo[0].roomBasicInfo.planName}</li>
          <li>{props.roomInfos[0].roomInfo[0].roomBasicInfo.roomName}</li>
          <li>{props.roomInfos[0].roomInfo[1].dailyCharge.total}</li>
          <li><a href={props.roomInfos[0].roomInfo[0].roomBasicInfo.reserveUrl}><button>予約ボタン</button></a></li>
        </ul>
      </div>
    );
}
