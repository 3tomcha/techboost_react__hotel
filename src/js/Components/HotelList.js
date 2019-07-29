import React from 'react';
import ReactDOM from 'react-dom';
import { Link, Route } from "react-router-dom";
import {Card, Row, Col, Button} from 'react-bootstrap';
import {FaStar, FaRegStar, FaYenSign} from 'react-icons/fa';
import {IconContext} from 'react-icons';

function HotelList(props){
  const jsons = props.JSONS;
  var hotels = [];
  let checkInDay;
  let checkOutDay;

  console.log(props);
  console.log(props.hotels);

  if(props.hotels){
    hotels = props.hotels;
    checkInDay = props.checkInDay.getFullYear() + "-"
    + ("0" + (props.checkInDay.getMonth() + 1) ).slice(-2) + "-"
    + props.checkInDay.getDate();

    checkOutDay = props.checkOutDay.getFullYear() + "-"
    + ("0" + (props.checkOutDay.getMonth() + 1) ).slice(-2) + "-"
    + props.checkOutDay.getDate();
  }

  return(
    <div>
      {hotels.map( (hotel,index) => {
        let url ='/hotels/' + hotel.hotel[0].hotelBasicInfo.hotelNo+ '?checkInDate=' + checkInDay + '&checkOutDate=' + checkOutDay;

        return(
          <IconContext.Provider value={{className: "global-class-name", dominantBaseline:"text-before-edge"}}>
          <div key={index}>
            <Card>
              <Card.Body>
                <Row>
                  <Col md={3}>
                    <Card.Img variant="top" src={hotel.hotel[0].hotelBasicInfo.hotelImageUrl} />
                  </Col>
                  <Col md={7}>
                    <Card.Title>
                      {hotel.hotel[0].hotelBasicInfo.hotelName}
                    </Card.Title>
                    <Card.Text>
                      {hotel.hotel[0].hotelBasicInfo.hotelSpecial}
                    </Card.Text>
                    <Card.Text>
                      <FaYenSign/>
                      {hotel.hotel[0].hotelBasicInfo.hotelMinCharge}
                    </Card.Text>
                    <Card.Text>
                      <FaStar/><FaStar/><FaStar/><FaStar/><FaRegStar/>
                      {hotel.hotel[0].hotelBasicInfo.reviewAverage}
                    </Card.Text>
                    <Link to={url}>
                      <Button variant="primary">詳細を見る（外部サイトへリンクします）</Button>
                    </Link>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </div>
          </IconContext.Provider>
        )})}
      </div>
    );
  }
  export default HotelList;
