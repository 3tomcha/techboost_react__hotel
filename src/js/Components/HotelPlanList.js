import React from 'react';
import ReactDOM from 'react-dom';
import { Card, Row, Col, Button } from 'react-bootstrap';

function HotelPlanList(props){
  let hotelInfos = [];
  if(props.roomInfos){
    hotelInfos = props.roomInfos;
    console.log(props.roomInfos);
  }

  return (
    <Card className="plan_area">
      {hotelInfos.map((roomInfo, index) => {
        const planName = roomInfo.roomInfo[0].roomBasicInfo.planName;
        const roomName = roomInfo.roomInfo[0].roomBasicInfo.roomName;
        const reserveUrl = roomInfo.roomInfo[0].roomBasicInfo.reserveUrl;
        const roomCharge = roomInfo.roomInfo[1].dailyCharge.total;

        return (
          <Card key={index}>
            <Card.Header>{planName}</Card.Header>
            <Card.Body>
              <Card.Text>{roomName}<span>{roomCharge}円</span>
            <a href={reserveUrl}><p>予約する</p></a>
          </Card.Text>
            </Card.Body>
          </Card>
        );
      })}
    </Card>
  );
}

export default HotelPlanList;
