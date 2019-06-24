import React from 'react';
import ReactDOM from 'react-dom';
import DatePicker from 'react-datepicker';
import GoogleGeocodeAPI from '../libs/GoogleGeocodeAPI.js';
import RakutenTravelApi from '../libs/RakutenTravelApi.js';

class SearchForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      Location: "",
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

  checkAnswer(e){
    e.preventDefault();
    if (this.state.Location=="" && this.props.checkInDay=="" && this.props.checkOutDay=="") {
      alert("どちらかは入力してください");
    }else if(this.state.Location!="" && this.props.checkInDay!="" && this.props.checkOutDay!=""){
      const location = this.state.Location;
      var checkInDay = this.props.checkInDay.getFullYear() + "-"
      + ("0" + (this.props.checkInDay.getMonth() + 1) ).slice(-2) + "-"
      + this.props.checkInDay.getDate();

      var checkOutDay = this.props.checkOutDay.getFullYear() + "-"
      + ("0" + (this.props.checkOutDay.getMonth() + 1) ).slice(-2) + "-"
      + this.props.checkOutDay.getDate();

      let googleGeocodeAPI = new GoogleGeocodeAPI(location);
      googleGeocodeAPI.sendRequest().then(json =>{
        let rakutenTravelApi = new RakutenTravelApi;
        rakutenTravelApi.sendRequest(
          checkInDay,
          checkOutDay,
          Math.round(json.latitude*100)/100,
          Math.round(json.longitude*100)/100
        );
      }
    );
  }
}
setLocation(e){
  this.state.Location = e.target.value;
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
