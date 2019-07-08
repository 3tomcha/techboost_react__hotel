import React from 'react';
import ReactDOM from 'react-dom';
import DatePicker from 'react-datepicker';
import GoogleGeocodeAPI from '../libs/GoogleGeocodeAPI.js';
import RakutenTravelApi from '../libs/RakutenTravelApi.js';
import queryString from 'query-string';

class GoogleGeocodeAPI_wrapper extends React.Component{
  GoogleGeocodeAPI_request(){
    let googleGeocodeAPI = new GoogleGeocodeAPI;
    let request = googleGeocodeAPI.sendRequest();
    console.log(request);
  }
  render(){
    return(
      <div>
      <script src="https://map.yahooapis.jp/js/V1/jsapi?appid=dj00aiZpPUFjQzFjbjNvemRPayZzPWNvbnN1bWVyc2VjcmV0Jng9MzQ-"/>
      <GoogleGeocodeAPI_request />
      </div>
    );
  }
}
