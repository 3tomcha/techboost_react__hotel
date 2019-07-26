import React from 'react';
import SearchForm from './Components/SearchForm';
import HotelList from './Components/HotelList';
import RakutenTravelApi from './libs/RakutenTravelApi';
import GoogleGeocodeAPI from './libs/GoogleGeocodeAPI';
import {Container, Row, Col} from 'react-bootstrap';

class Home extends React.Component {
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
  updateState(state){
    this.setState(state);
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
          <Row>
            <Col md={{span: 3, offset: 1}}>
              <SearchForm
                checkInDay={this.state.checkInDay}
                checkOutDay={this.state.checkOutDay}
                handleCheckInChange={this.handleCheckInChange}
                handleCheckOutChange={this.handleCheckOutChange}
                updateState={this.updateState.bind(this)}
                />
              </Col>
              <Col md={8}>
              <HotelList
                hotels={this.state.hotels}
                JSONS={jsons}
                checkInDay={this.state.checkInDay}
                checkOutDay={this.state.checkOutDay}
                />
              </Col>
              </Row>
      </div>
    );
  }
}

export default Home;
