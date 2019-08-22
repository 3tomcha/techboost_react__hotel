import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import { Link } from "react-router-dom";
import DatePicker from 'react-datepicker';
import GoogleGeocodeAPI from '../libs/GoogleGeocodeAPI.js';
import RakutenTravelApi from '../libs/RakutenTravelApi.js';
import HotelPlanList from '../Components/HotelPlanList.js';
import queryString from 'query-string';
import {Card, Row, Col, Button} from 'react-bootstrap';
import Header from './Header';
import {FaStar, FaRegStar, FaYenSign, FaCommentDots} from 'react-icons/fa';
import { addHoteldetail } from '../redux/actions';
import { connect } from 'react-redux';


class HotelDetail extends React.Component {
  // checkInDay,checkOutDayを元に、楽天APIを用いてホテル詳細情報を取得する
  constructor(props){
    super(props);
    this.id = this.props.match.params.id;
    this.checkInDay = queryString.parse(this.props.location.search).checkInDate;
    this.checkOutDay = queryString.parse(this.props.location.search).checkOutDate;
  }

  async componentDidMount(){
    const response = await RakutenTravelApi.fetchDetailPlan(
      this.id,
      this.checkInDay,
      this.checkOutDay
    );

    const hotel = JSON.parse(response).hotels[0].hotel;
    const basicInfo = hotel[0].hotelBasicInfo;
    const roomInfo = hotel[0].roomInfo;

    this.props.addHoteldetail({
      hotelName: basicInfo.hotelName,
      reviewAverage: basicInfo.reviewAverage,
      hotelImageUrl: basicInfo.hotelImageUrl,
      hotelSpecial: basicInfo.hotelSpecial,
      access: basicInfo.access,
      userReview: basicInfo.userReview,
      roomInfo: roomInfo
    });
  }

  render() {
    const stars = [...Array(5).keys()].map(i => {
      return (i < parseInt(this.props.reviewAverage))? <FaStar/> : <FaRegStar/>;
  });
  return(
    <div className="hoteldetail pagecontainer">
      <Header/>
      <Card>
        <Card.Body>
          <Row>
            <Col md={3}>
              <Card.Img variant="top" src={this.props.hotelImageUrl} />
            </Col>
            <Col md={7}>
              <Card.Title>
                {this.props.hotelName}
              </Card.Title>
              <Card.Text>
                {this.props.hotelSpecial}
              </Card.Text>
              <Card.Text>
                {this.props.access}
              </Card.Text>
              <Card.Text>
                {stars}
                {this.props.reviewAverage}
              </Card.Text>
              <Card.Text>
                {this.props.userReview}
                <FaCommentDots/>
              </Card.Text>
              <Button variant="primary"
                onClick={
                  () => {
                    console.log(this.props);
                    this.props.history.goBack();
                  }
                }>戻る</Button>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

function mapStateToProps(state){
  return state;
}

export default connect(
  mapStateToProps,
  {addHoteldetail}
)(HotelDetail);
