import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import RakutenTravelApi from '../libs/RakutenTravelApi.js';
import queryString from 'query-string';
import {Card, Row, Col, Button} from 'react-bootstrap';
import Header from './Header';
import {FaStar, FaRegStar, FaYenSign, FaCommentDots} from 'react-icons/fa';
import { setHoteldetail } from '../redux/actions';
import { connect } from 'react-redux';


class HotelDetail extends React.Component {
  constructor(props){
    super(props);
    this.id = this.props.match.params.id;
    this.checkInDay = queryString.parse(this.props.location.search).checkInDate;
    this.checkOutDay = queryString.parse(this.props.location.search).checkOutDate;
  }

  async componentDidMount(){
      // checkInDay,checkOutDayを元に、楽天APIを用いてホテル詳細情報を取得する
    const response = await RakutenTravelApi.fetchDetailPlan(
      this.id,
      this.checkInDay,
      this.checkOutDay
    );

    const hotel = JSON.parse(response).hotels[0].hotel;
    const basicInfo = hotel[0].hotelBasicInfo;
    const roomInfo = hotel[0].roomInfo;

    this.props.setHoteldetail({
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
    // console.log(this.state);
    console.log(this.props);
    // ユーザー評価によって星の数を増減
    const stars = [...Array(5).keys()].map(i => {
      return (i < parseInt(this.props.hotel.reviewAverage))? <FaStar key={i} /> : <FaRegStar key={i} />;
  });
  return(
    <div className="hoteldetail pagecontainer">
      <Header/>
      <Card>
        <Card.Body>
          <Row>
            <Col md={3}>
              <Card.Img variant="top" src={this.props.hotel.hotelImageUrl} />
            </Col>
            <Col md={7}>
              <Card.Title>
                {this.props.hotel.hotelName}
              </Card.Title>
              <Card.Text>
                {this.props.hotel.hotelSpecial}
              </Card.Text>
              <Card.Text>
                {this.props.hotel.access}
              </Card.Text>
              <Card.Text>
                {stars}
                {this.props.hotel.reviewAverage}
              </Card.Text>
              <Card.Text>
                {this.props.hotel.userReview}
                <FaCommentDots/>
              </Card.Text>
              <Button variant="primary"
                onClick={
                  () => {
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

// storeから得たstateは、propsのhotelに変更
function mapStateToProps(state){
  return { hotel: state.hoteldetail};
}

export default connect(
  mapStateToProps,
  {setHoteldetail}
)(HotelDetail);
