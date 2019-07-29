import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';
import SearchForm from './Components/SearchForm';
import HotelList from './Components/HotelList';
import HotelDetail from './Components/HotelDetail';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'

function App(props){
  const today = new Date();
  const tomorrow = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 1,
    today.getHours(),
    today.getMinutes()
  );

  return(
    <BrowserRouter>
      <Switch>
        <Route path="/hotels/:id" component={HotelDetail}/>
        <Route path="/" component={Home}/>
        <Route path="/hotellist" component={HotelList}/>
      </Switch>
    </BrowserRouter>
  );
}
export default App;
