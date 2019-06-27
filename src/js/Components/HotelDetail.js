import React from 'react';
import ReactDOM from 'react-dom';
import DatePicker from 'react-datepicker';
import GoogleGeocodeAPI from '../libs/GoogleGeocodeAPI.js';
import RakutenTravelApi from '../libs/RakutenTravelApi.js';

class HotelDetail extends React.Component {
    render() {
      return(
        <div>HotelDetail {this.props.match.params.id}
        </div>
      );
    }
  }

  export default HotelDetail;
