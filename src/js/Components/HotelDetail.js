import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import DatePicker from 'react-datepicker';
import GoogleGeocodeAPI from '../libs/GoogleGeocodeAPI.js';
import RakutenTravelApi from '../libs/RakutenTravelApi.js';
import HotelPlanList from '../Components/HotelPlanList.js';
import queryString from 'query-string';
import {Card, Row, Col, Button} from 'react-bootstrap';
import Header from './Header';
import {FaStar, FaRegStar, FaYenSign, FaCommentDots} from 'react-icons/fa';

class HotelDetail extends React.Component {
  // checkInDay,checkOutDayを元に、楽天APIを用いてホテル詳細情報を取得する
  constructor(props){
    super(props);
    this.state = {
      id: this.props.match.params.id,
      checkInDay: queryString.parse(this.props.location.search).checkInDate,
      checkOutDay: queryString.parse(this.props.location.search).checkOutDate,
      hotelName: "",
      reviewAverage: "",
      hotelImageUrl: "",
      hotelSpecial: "",
      access: "",
      userReview: "",
      roomInfo: ""
    };
    console.log("動きました");
  }

  async componentDidMount(){
    console.log("componentDidMount動きました1");

    let response = await RakutenTravelApi.fetchDetailPlan(
      this.state.id,
      this.state.checkInDay,
      this.state.checkOutDay
    );
    console.log("response" + response);

    const hotel = JSON.parse(response).hotels[0].hotel;
    // const hotel = response.hotels[0].hotel;
    const basicInfo = hotel[0].hotelBasicInfo;
    const roomInfo = hotel[0].roomInfo;

    console.log("hotel" + hotel);
    console.log("basicInfo" + basicInfo);
    console.log("roomInfo" + roomInfo);

    this.setState({
      hotelName: basicInfo.hotelName,
      reviewAverage: basicInfo.reviewAverage,
      hotelImageUrl: basicInfo.hotelImageUrl,
      hotelSpecial: basicInfo.hotelSpecial,
      access: basicInfo.access,
      userReview: basicInfo.userReview,
      roomInfo: roomInfo
    });

    console.log("setStateが動きました");
  }
  render() {
    const stars = [...Array(5).keys()].map(i => {
        return (i < parseInt(this.state.reviewAverage))? <FaStar/> : <FaRegStar/>;
      });
    return(
      <div className="hoteldetail pagecontainer">
        <Header/>
        <Card>
          <Card.Body>
            <Row>
              <Col md={3}>
                <Card.Img variant="top" src={this.state.hotelImageUrl} />
              </Col>
              <Col md={7}>
                <Card.Title>
                  {this.state.hotelName}
                </Card.Title>
                <Card.Text>
                  {this.state.hotelSpecial}
                </Card.Text>
                <Card.Text>
                  {this.state.access}
                </Card.Text>
                <Card.Text>
                  {stars}
                  {this.state.reviewAverage}
                </Card.Text>
                <Card.Text>
                  {this.state.userReview}
                  <FaCommentDots/>
                </Card.Text>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default HotelDetail;
