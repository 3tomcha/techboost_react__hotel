import React from 'react';
import ReactDOM from 'react-dom';
import DatePicker from 'react-datepicker';
import fetchGeoCode from '../libs/GoogleGeocodeAPI';
import RakutenTravelApi from '../libs/RakutenTravelApi';
import {　Card, InputGroup, FormControl, Button　} from 'react-bootstrap';
import { setForm, setCheckIn, setCheckOut, setHotelInfo } from '../redux/actions';
import { connect } from 'react-redux';


class SearchForm extends React.Component {
  constructor(props){
    super(props);
    this.handleCheckInChange = this.handleCheckInChange.bind(this);
    this.handleCheckOutChange = this.handleCheckOutChange.bind(this);
    this.checkAnswer = this.checkAnswer.bind(this);
    this.setLocation = this.setLocation.bind(this);
  }

  handleCheckInChange(date){
    this.props.setCheckIn(date);
  }
  handleCheckOutChange(date){
    this.props.setCheckOut(date);
  }

  formatDay(day){
    return(
      day.getFullYear() + "-" + ("0" + (day.getMonth() + 1) ).slice(-2) + "-" + ("0" + (day.getDate()) ).slice(-2)
    );
  }

  async checkAnswer(e){
    e.preventDefault();
    const location = this.props.searchform.location;
    let checkInDay = this.props.searchform.checkInDay;
    let checkOutDay = this.props.searchform.checkInDay;

    if(!location || !checkInDay || !checkOutDay){
      alert("どちらかは入力してください");
      return;
    }

    // 全て入力されている場合
    checkInDay = this.formatDay(checkInDay);
    checkOutDay = this.formatDay(checkOutDay);

    let geocode;
    let hotelsInfo;

    // yahooAPIをもちいて緯度経度のjsonを取得
    // return {"latitude":latitude, "longitude":longitude}
    try {
      geocode = await fetchGeoCode(location);
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
    } catch (e) {
      await console.log(e);
    }

    const hotels  = await JSON.parse(hotelsInfo).hotels
    this.props.setHotelInfo(hotels);
  }

  setLocation(e){
    this.props.setForm(e.target.value, "setLocation");
  }

  render() {
    return(
      <div className="searchform">
        <Card className="justify-content-center">
          <form method="post" action="">
            <Card.Header>
              地名
            </Card.Header>
            <Card.Body>
              <InputGroup>
                <FormControl placeholder="東京都千代田区丸の内１丁目" onChange={this.setLocation}></FormControl>
              </InputGroup>
            </Card.Body>
            <Card.Header>
              チェックイン日
            </Card.Header>
            <Card.Body>
              <DatePicker
                selected={this.props.searchform.checkInDay}
                onChange={this.handleCheckInChange}
                />
            </Card.Body>
            <Card.Header>
              チェックアウト日
            </Card.Header>
            <Card.Body>
              <DatePicker
                selected={this.props.searchform.checkOutDay}
                onChange={this.handleCheckOutChange}
                /><br/>
            </Card.Body>
            <Button onClick={this.checkAnswer}>検索</Button>
          </form>
        </Card>
      </div>
    );
  }
}

function mapStateToProps(state){
  return { searchform: state.searchform};
}

export default connect(
  mapStateToProps,
  {setForm, setCheckIn, setCheckOut, setHotelInfo}
)(SearchForm);
