import React from 'react';
import ReactDOM from 'react-dom';
import DatePicker from 'react-datepicker';
import fetchGeoCode from '../libs/GoogleGeocodeAPI';
import RakutenTravelApi from '../libs/RakutenTravelApi';
import {Card, InputGroup, FormControl, Button} from 'react-bootstrap';
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

  async checkAnswer(e){
    e.preventDefault();

    if(this.props.searchform.location!="" && this.props.searchform.checkInDay!="" && this.props.searchform.checkOutDay!=""){
      const location = this.props.searchform.location;
      const checkInDay = this.props.searchform.checkInDay.getFullYear() + "-"
      + ("0" + (this.props.searchform.checkInDay.getMonth() + 1) ).slice(-2) + "-"
      + this.props.searchform.checkInDay.getDate();

      const checkOutDay = this.props.searchform.checkOutDay.getFullYear() + "-"
      + ("0" + (this.props.searchform.checkOutDay.getMonth() + 1) ).slice(-2) + "-"
      + this.props.searchform.checkOutDay.getDate();
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
      // this.setState({
      //   hotels: hotels,
      //   checkInDay: this.props.searchform.checkInDay,
      //   checkOutDay: this.props.searchform.checkOutDay
      // });
      this.props.setHotelInfo(hotels);
      // this.props.updateState(this.state);

    }else{
      alert("どちらかは入力してください");
      console.log("checkAnswerのfalseがうごきました");
    }
  }

  setLocation(e){
    console.log("onChangeが動きました");
    this.props.setForm(e.target.value, "setLocation");
    console.log(this.props);
    // this.state.location = e.target.value;
  }

  render() {
    return(
      <div>
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
  console.log(state);
    return { searchform: state.searchform};
}
// export default SearchForm;
export default connect(
  mapStateToProps,
  {setForm, setCheckIn, setCheckOut, setHotelInfo}
)(SearchForm);
