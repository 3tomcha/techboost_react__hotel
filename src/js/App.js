import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';
import SearchForm from './Components/SearchForm';
import HotelList from './Components/HotelList';
import HotelDetail from './Components/HotelDetail';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import { Provider } from 'react-redux';
// import store from './redux/store';

function App(props){
  const today = new Date();
  const tomorrow = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 1,
    today.getHours(2),
    today.getMinutes()
  );

  console.log("App");
  console.log(props.store);

  return(
      <BrowserRouter>
        <Switch>
          <Provider store={props.store}>
          <Route path="/hotels/:id" component={HotelDetail}/>
          <Route exact path="/" component={Home}/>
          <Route path="/hotellist" component={HotelList}/>
        </Provider>
        </Switch>
      </BrowserRouter>
  );
}
export default App;
