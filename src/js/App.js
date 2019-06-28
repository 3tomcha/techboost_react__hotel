import React from 'react';
import ReactDOM from 'react-dom';
import DatePicker from 'react-datepicker';
import SearchForm from './components/SearchForm.js';
import HotelDetail from './components/HotelDetail.js';
import Home from './Home.js';
import { Link, Route } from "react-router-dom"

function App(props){
  return(
    <div>
      <Link to='/'><h2>ホーム</h2></Link>
      <Link to='/hotels/160960?id=2'><h2>ホテル</h2></Link>
      <Route exact path="/" component={Home}></Route>
      <Route path="/hotels/:id" component={HotelDetail}></Route>
    </div>
  );
}
export default App;
