import React from 'react';
import ReactDOM from 'react-dom';
import { Link, Route } from "react-router-dom";
import { Card, Row, Col, Button } from 'react-bootstrap';
import { FaStar, FaRegStar, FaYenSign } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { connect } from 'react-redux';


const formatDay = (day) => (
  day.getFullYear() + "-" + ("0" + (day.getMonth() + 1) ).slice(-2) + "-" + ("0" + (day.getDate()) ).slice(-2)
);

function HotelList(props){
  let hotels = [];
  let checkInDay;
  let checkOutDay;

  if(props.hotels){
    hotels = props.hotels;
    checkInDay = formatDay(props.checkInDay);
    checkOutDay = formatDay(props.checkOutDay);
  }

  return(
    <div>
      {hotels.map( (hotel,index) => {
        const url ='/hotels/' + hotel.hotel[0].hotelBasicInfo.hotelNo+ '?checkInDate=' + checkInDay + '&checkOutDate=' + checkOutDay;
        const stars = [...Array(5).keys()].map(i => {
          return (i < parseInt(hotel.hotel[0].hotelBasicInfo.reviewAverage))? <FaStar key={"fa" + i + index}/> : <FaRegStar key={"fa" + i + index}/>;
      });

      const hotelImageUrl = hotel.hotel[0].hotelBasicInfo.hotelImageUrl;
      const hotelName = hotel.hotel[0].hotelBasicInfo.hotelName;
      const hotelSpecial = hotel.hotel[0].hotelBasicInfo.hotelSpecial;
      const hotelMinCharge = hotel.hotel[0].hotelBasicInfo.hotelMinCharge
      const reviewAverage = hotel.hotel[0].hotelBasicInfo.reviewAverage;

      return(
        <IconContext.Provider value={{className: "global-class-name", dominantBaseline:"text-before-edge"}} key={index}>
          <div className="hotellist">
            <Card>
              <Row>
                <Col md={3} key={"c1" + index}>
                  <Card.Img variant="top" src={hotelImageUrl} />
                </Col>
                <Col md={7} key={"c2" + index}>
                  <Card.Body>
                    <Card.Title>{hotelName}</Card.Title>
                    <Card.Text>{hotelSpecial}</Card.Text>
                    <Card.Text><FaYenSign/>{hotelMinCharge}</Card.Text>
                    <Card.Text>{stars}{reviewAverage}</Card.Text>
                    <Link to={url}><Button variant="primary">詳細を見る</Button></Link>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </div>
        </IconContext.Provider>
      )})}
    </div>
  );
}

export default connect(
  null,
  null
)(HotelList);
