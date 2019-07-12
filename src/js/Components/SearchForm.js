import React from 'react';
import ReactDOM from 'react-dom';
import DatePicker from 'react-datepicker';
import fetchGeoCode from '../libs/GoogleGeocodeAPI.js';
import RakutenTravelApi from '../libs/RakutenTravelApi.js';

class SearchForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      location: "",
      hotels: "",
      checkInDay: "",
      checkOutDay: ""
    };
    this.handleCheckInChange = this.handleCheckInChange.bind(this);
    this.handleCheckOutChange = this.handleCheckOutChange.bind(this);
    this.checkAnswer = this.checkAnswer.bind(this);
    this.setLocation = this.setLocation.bind(this);
  }

  handleCheckInChange(date){
    this.props.handleCheckInChange(date);
  }
  handleCheckOutChange(date){
    this.props.handleCheckOutChange(date);
  }

  async checkAnswer(e){
    e.preventDefault();
    console.log("checkAnswerが動きました");

    if(this.state.location!="" && this.props.checkInDay!="" && this.props.checkOutDay!=""){

      console.log("checkAnswerのtrueがうごきました");

      const location = this.state.location;
      var checkInDay = this.props.checkInDay.getFullYear() + "-"
      + ("0" + (this.props.checkInDay.getMonth() + 1) ).slice(-2) + "-"
      + this.props.checkInDay.getDate();

      var checkOutDay = this.props.checkOutDay.getFullYear() + "-"
      + ("0" + (this.props.checkOutDay.getMonth() + 1) ).slice(-2) + "-"
      + this.props.checkOutDay.getDate();
      let geocode;
      let hotelsInfo;

      // yahooAPIをもちいて緯度経度のjsonを取得
      // return {"latitude":latitude, "longitude":longitude}
      try {
        geocode = await fetchGeoCode(this.state.location);
        await console.log(geocode);
      } catch (e) {
        await console.log(e);
      }

      // RakutenTravelApiをもちいてhotelsのjsonを取得
      try {
        hotelsInfo = await RakutenTravelApi
        .fetchHotelsInfo(
          checkInDay,
          checkOutDay,
          geocode.latitude,
          geocode.longitude
        );
        await console.log(hotelsInfo);
      } catch (e) {
        await console.log(e);
      }

      const hotels  = await JSON.parse(hotelsInfo).hotels
      this.setState({
        hotels: hotels,
        checkInDay: this.props.checkInDay,
        checkOutDay: this.props.checkOutDay
      });
      this.props.updateState(this.state);

    }else{
      alert("どちらかは入力してください");
      console.log("checkAnswerのfalseがうごきました");
    }
  }

  setLocation(e){
    console.log("onChangeが動きました");
    this.state.location = e.target.value;
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
        </form>
      </div>
    );
  }
}

export default SearchForm;
