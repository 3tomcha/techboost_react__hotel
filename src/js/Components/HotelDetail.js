import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import RakutenTravelApi from '../libs/RakutenTravelApi.js';
import queryString from 'query-string';
import { Card, Row, Col, Button } from 'react-bootstrap';
import Header from './Header';
import { FaStar, FaRegStar, FaYenSign, FaCommentDots} from 'react-icons/fa';
import { setHoteldetail } from '../redux/actions';
import { connect } from 'react-redux';
import HotelPlanList from './HotelPlanList';


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
    const basicInfo = hotel.shift().hotelBasicInfo;
    const roomInfos = hotel;

    this.props.setHoteldetail({
      hotelName: basicInfo.hotelName,
      reviewAverage: basicInfo.reviewAverage,
      hotelImageUrl: basicInfo.hotelImageUrl,
      hotelSpecial: basicInfo.hotelSpecial,
      access: basicInfo.access,
      userReview: basicInfo.userReview,
      roomInfos: roomInfos,
      planListUrl: basicInfo.planListUrl,
    });
  }

  render() {
    console.log(this.props);
    // ユーザー評価によって星の数を増減
    const stars = [...Array(5).keys()].map(i => {
      return (i < parseInt(this.props.hotel.reviewAverage))? <FaStar key={i} /> : <FaRegStar key={i} />;
    });
    const hotelImageUrl = this.props.hotel.hotelImageUrl;
    const hotelName = this.props.hotel.hotelName;
    const hotelSpecial = this.props.hotel.hotelSpecial;
    const hotelAccess = this.props.hotel.access;
    const reviewAverage = this.props.hotel.reviewAverage;
    const userReview = this.props.hotel.userReview;
    const planListUrl = this.props.hotel.planListUrl;
    const roomInfos = this.props.hotel.roomInfos;

  return(
    <div className="hoteldetail pagecontainer">
      <Header/>
      <Card>
        <Card.Body>
          <Row>
            <Col md={3}>
              <Card.Img variant="top" src={hotelImageUrl} />
            </Col>
            <Col md={7} className="position-relative">
              <Card.Title>
                {hotelName}
                <a href={planListUrl}><Button variant="outline-primary">楽天トラベルサイトへ</Button></a>
              </Card.Title>
              <Card.Text>
                {hotelSpecial}
              </Card.Text>
              <Card.Text>
                {hotelAccess}
              </Card.Text>
              <Card.Text>
                {stars}
                {reviewAverage}
              </Card.Text>
              <Card.Text className="review_area">
                {userReview}
                <FaCommentDots/>
              </Card.Text>
              <h2>プラン</h2>
              <HotelPlanList roomInfos={roomInfos}/>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </div>
      );
    }
  }

  function mapStateToProps(state){
    return { hotel: state.hoteldetail};
  }

  export default connect(
    mapStateToProps,
    {setHoteldetail}
  )(HotelDetail);
