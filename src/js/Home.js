import React from 'react';
import ReactDOM from 'react-dom';
import SearchForm from './Components/SearchForm';
import HotelList from './Components/HotelList';
import RakutenTravelApi from './libs/RakutenTravelApi';
import GoogleGeocodeAPI from './libs/GoogleGeocodeAPI';
import {Container, Row, Col} from 'react-bootstrap';
import Header from './Components/Header';
import { connect } from 'react-redux';
import { setHome } from './redux/actions'

class Home extends React.Component {
  constructor(props){
    super(props);
    // this.state = {
    //   location: null,
    //   hotels: null,
    //   checkInDay: null,
    //   checkOutDay: null
    // };
    // console.log(props);
    // console.log("動きました");
    this.props.setHome();
    // this.handleCheckInChange = this.handleCheckInChange.bind(this);
    // this.handleCheckOutChange = this.handleCheckOutChange.bind(this);
  }

  // handleCheckInChange(date){
  //   console.log(date);
  //   this.setState({
  //     checkInDay: date,
  //   });
  // }
  // handleCheckOutChange(date){
  //   console.log(date);
  //   this.setState({
  //     checkOutDay: date,
  //   });
  // }
  // updateState(state){
  //   this.setState(state);
  // }
  render(){
    return (
      <div>aaa</div>
    );
  }
  // render(){
  //   return (
  //     <div className="home pagecontainer">
  //       <Row>
  //         <Col>
  //           <Header/>
  //         </Col>
  //       </Row>
  //         <Row>
  //           <Col>
  //             <SearchForm
  //               checkInDay={this.state.checkInDay}
  //               checkOutDay={this.state.checkOutDay}
  //               handleCheckInChange={this.handleCheckInChange}
  //               handleCheckOutChange={this.handleCheckOutChange}
  //               updateState={this.updateState.bind(this)}
  //               />
  //             </Col>
  //             <Col md={8}>
  //             <HotelList
  //               hotels={this.state.hotels}
  //               checkInDay={this.state.checkInDay}
  //               checkOutDay={this.state.checkOutDay}
  //               />
  //             </Col>
  //             </Row>
  //     </div>
  //   );
  // }
}

function mapStateToProps(state){
  return {home: state.home};
}

export default connect(
  mapStateToProps,
  { setHome }
)(Home);
