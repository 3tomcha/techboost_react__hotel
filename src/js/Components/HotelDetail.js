import React from 'react';
import ReactDOM from 'react-dom';
import DatePicker from 'react-datepicker';
import GoogleGeocodeAPI from '../libs/GoogleGeocodeAPI.js';
import RakutenTravelApi from '../libs/RakutenTravelApi.js';
import queryString from 'query-string';

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
    // console.log(response);
    const hotel = response.hotels[0].hotel;
    const basicInfo = hotel[0].hotelBasicInfo;
    const roomInfo = hotel[0].roomInfo;

    console.log(hotel);
    console.log(basicInfo);
    console.log(roomInfo);

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
    // console.log("renderが動きました");
    // console.log(queryString.parse(this.props.location.search));
    return(
      <div>HotelDetail {this.props.match.params.id}

        <ul>
          <li>{this.state.hotelName}</li>
          <li>{this.state.reviewAverage}</li>
          <li>{this.state.hotelImageUrl}</li>
          <li>{this.state.hotelSpecial}</li>
          <li>{this.state.access}</li>
          <li>{this.state.userReview}</li>

          //debug用
          <li>{this.state.checkInDay}</li>
          <li>{this.state.checkOutDay}</li>
          // <li>{this.state.roomBasicInfo}</li>
          // <li>{this.state.dailyCharge}</li>
        </ul>

      </div>
    );
  }
}

export default HotelDetail;
