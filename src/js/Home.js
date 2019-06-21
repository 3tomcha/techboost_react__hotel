import React from 'react';
import SearchForm from './components/SearchForm.js';
import HotelList from './components/HotelList.js';
import RakutenTravelApi from './libs/RakutenTravelApi.js';

class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      checkInDay: "",
      checkOutDay: ""
    };
    this.handleCheckInChange = this.handleCheckInChange.bind(this);
    this.handleCheckOutChange = this.handleCheckOutChange.bind(this);
  }

  handleCheckInChange(date){
    console.log(date);
    this.setState({
      checkInDay: date,
    });
  }
  handleCheckOutChange(date){
    console.log(date);
    this.setState({
      checkOutDay: date,
    });
  }

  render(){
    var jsons = [];
    for (var i = 0; i < 10; i++) {
    jsons.push({
      "name":"ホテルニュー大谷",
      "image":"test.jpg",
      "goodpoint":"ごはんがおいしい",
      "price":"10000円",
      "averagepoint":"55点"
    });
  }
    return (
      <div>
        <SearchForm
          checkInDay={this.state.checkInDay}
          checkOutDay={this.state.checkOutDay}
          handleCheckInChange={this.handleCheckInChange}
          handleCheckOutChange={this.handleCheckOutChange}
          />
          <HotelList
            JSONS={jsons}
            checkInDay={this.state.checkInDay}
            checkOutDay={this.state.checkOutDay}
            />
          <RakutenTravelApi />
      </div>
    );
  }
}

export default Home;
