import React from 'react';
import ReactDOM from 'react-dom';
import DatePicker from 'react-datepicker';
import getGeoCode from '../libs/GoogleGeocodeAPI.js';
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
      let googleGeocodeAPI;
      let googleGeocode;
      let rakutenTravelApi;
      let rakutenTravel;

      try {
        googleGeocode = await getGeoCode();
        await console.log(googleGeocode);
        // getGeoCode().then(function(response){console.log(response)});
        // let googleGeocodeAPI_new = new GoogleGeocodeAPI_new;
        // let res = await googleGeocodeAPI_new.fetchDetailPlan();
        // await console.log(res);

      } catch (e) {
        await console.log(e);
      }


      try {
        rakutenTravelApi = await new RakutenTravelApi();
      } catch (e) {
        await console.log(e);
      }

      try {
        rakutenTravel = await rakutenTravelApi
        .sendRequest(checkInDay,checkOutDay,
          Math.round(googleGeocode.latitude*100)/100,
          Math.round(googleGeocode.longitude*100)/100).catch((err) => console.log("RakutenTravelApiのエラー"));
        } catch (e) {
          await console.log(e);
        }

        const hotels  = await JSON.parse(rakutenTravel).hotels
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
