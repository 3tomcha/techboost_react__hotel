import React from 'react';
import ReactDOM from 'react-dom';
import SearchForm from './Components/SearchForm';
import HotelList from './Components/HotelList';
import { Container, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { setHome, setCheckIn, setCheckOut } from './redux/actions';

class Home extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="home pagecontainer">
        <Row>
          <Col>
          </Col>
        </Row>
        <Row>
          <Col>
            <SearchForm
              checkInDay={this.props.home.checkInDay}
              checkOutDay={this.props.home.checkOutDay}
              handleCheckInChange={this.props.setCheckIn}
              handleCheckOutChange={this.props.setCheckOut}
              />
          </Col>
          <Col md={8}>
            <HotelList
              hotels={this.props.home.hotels}
              checkInDay={this.props.home.checkInDay}
              checkOutDay={this.props.home.checkOutDay}
              />
          </Col>
        </Row>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {home: state.home};
}

export default connect(
  mapStateToProps,
  { setHome, setCheckIn, setCheckOut }
)(Home);
