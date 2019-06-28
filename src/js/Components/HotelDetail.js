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
      checkOutDay: queryString.parse(this.props.location.search).checkOutDate
    };
  }
  async componentDidMount(){
    let rakutenTravelApi = new RakutenTravelApi;
    let response = await rakutenTravelApi.fetchDetail(this.state.id);
    console.log(response);
  }
    render() {
      // console.log(queryString.parse(this.props.location.search));
      return(
        <div>HotelDetail {this.props.match.params.id}
        </div>
      );
    }
  }

  export default HotelDetail;
