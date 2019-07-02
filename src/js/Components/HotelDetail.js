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
  }
  async componentDidMount(){
    let rakutenTravelApi = new RakutenTravelApi;
    let response = await rakutenTravelApi.fetchDetailPlan(
      this.state.id,
      this.state.checkInDay,
      this.state.checkOutDay
    );
    const hotel = await JSON.parse(response).hotels[0].hotel;
    let basicInfo="";
    let roomInfo=[];

    hotel.map((value,index) =>{
    if(index == 0){
      basicInfo = value;
    }else{
      roomInfo.push(value);
    }
  }
  );
  console.log(basicInfo);
  console.log(roomInfo);
    // const basicInfo = hotel[0].hotelBasicInfo;

    // 1～はroominfoなので、別のコンポーネントを割り当てる
    console.log(hotel);

    this.setState({
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

              // <li>{this.state.planName}</li>
              // <li>{this.state.roomBasicInfo}</li>
              // <li>{this.state.dailyCharge}</li>
            </ul>

</div>
      );
    }
  }

  export default HotelDetail;
