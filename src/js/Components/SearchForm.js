import React from 'react';
import ReactDOM from 'react-dom';
import DatePicker from 'react-datepicker';
import GoogleGeocodeAPI from '../libs/GoogleGeocodeAPI.js';
import RakutenTravelApi from '../libs/RakutenTravelApi.js';

class SearchForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      location: null,
      hotels: null,
      checkInDay: null,
      checkOutDay: null
    };
    this.handleCheckInChange = this.handleCheckInChange.bind(this);
    this.handleCheckOutChange = this.handleCheckOutChange.bind(this);
    this.checkAnswer = this.checkAnswer.bind(this);
    this.setLocation = this.setLocation.bind(this);
    this.testClick = this.testClick.bind(this);
  }

  handleCheckInChange(date){
    this.props.handleCheckInChange(date);
  }
  handleCheckOutChange(date){
    this.props.handleCheckOutChange(date);
  }

  async checkAnswer(e){
    e.preventDefault();
    if (this.state.location=="" && this.props.checkInDay=="" && this.props.checkOutDay=="") {
      alert("どちらかは入力してください");
    }else if(this.state.location!="" && this.props.checkInDay!="" && this.props.checkOutDay!=""){

      const location = this.state.location;
      var checkInDay = this.props.checkInDay.getFullYear() + "-"
      + ("0" + (this.props.checkInDay.getMonth() + 1) ).slice(-2) + "-"
      + this.props.checkInDay.getDate();

      var checkOutDay = this.props.checkOutDay.getFullYear() + "-"
      + ("0" + (this.props.checkOutDay.getMonth() + 1) ).slice(-2) + "-"
      + this.props.checkOutDay.getDate();

      let googleGeocodeAPI = new GoogleGeocodeAPI(location);
      const googleGeocode = await googleGeocodeAPI.sendRequest();
      let rakutenTravelApi = await new RakutenTravelApi;
      const rakutenTravel = await rakutenTravelApi
                                      .sendRequest(checkInDay,checkOutDay,
                                            Math.round(googleGeocode.latitude*100)/100,
                                            Math.round(googleGeocode.longitude*100)/100);
      const hotels  = await JSON.parse(rakutenTravel).hotels
      this.setState({
        hotels: hotels,
        checkInDay: this.props.checkInDay,
        checkOutDay: this.props.checkOutDay
      });
      console.log(this.props.checkInDay);
      console.log(this.props.checkOutDay);
      console.log(hotels);
      this.props.updateState(this.state);
      }
    }
    setLocation(e){
      this.state.location = e.target.value;
    }
    testClick(){
      window.alert("abc");
      // console.log("abc");
    }
    render() {
      return(
        <div>
          <h1>検索フォーム</h1>
          <form method="post" action="">
            <input type="text" placeholder="地名" onChange={this.setLocation}/><br/>
            チェックイン日
            <DatePicker
              selected={this.props.checkInDay}
              onChange={this.handleCheckInChange}
              />
            チェックアウト日
            <DatePicker
              selected={this.props.checkOutDay}
              onChange={this.handleCheckOutChange}
              /><br/>
            <input type="submit" onClick={this.checkAnswer} value="検索"/>
            <p onClick={this.testClick} className="button">aa</p>
          </form>
        </div>
      );
    }
  }

  export default SearchForm;
