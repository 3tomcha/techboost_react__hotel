import React from 'react';
import ReactDOM from 'react-dom';
import SearchForm from './Components/SearchForm';
import HotelList from './Components/HotelList';
import { Container, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { setHome, setCheckIn, setCheckOut } from './redux/actions';
import Header from './Components/Header';

function Home(props){
  return (
    <div className="home pagecontainer">
      <Row>
        <Col>
          <Header/>
        </Col>
      </Row>
      <Row>
        <Col>
          <SearchForm
            checkInDay={props.home.checkInDay}
            checkOutDay={props.home.checkOutDay}
            handleCheckInChange={props.setCheckIn}
            handleCheckOutChange={props.setCheckOut}
            />
        </Col>
        <Col md={8}>
          <HotelList
            hotels={props.home.hotels}
            checkInDay={props.home.checkInDay}
            checkOutDay={props.home.checkOutDay}
            />
        </Col>
      </Row>
    </div>
  );
}

function mapStateToProps(state){
  return {home: state.home};
}

export default connect(
  mapStateToProps,
  { setHome, setCheckIn, setCheckOut }
)(Home);
