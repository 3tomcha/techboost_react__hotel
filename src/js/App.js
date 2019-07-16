import React from 'react';
import ReactDOM from 'react-dom';
import DatePicker from 'react-datepicker';
import SearchForm from './Components/SearchForm.js';
import HotelDetail from './Components/HotelDetail.js';
import Home from './Home.js';
import { BrowserRouter, Link, Route } from "react-router-dom"
import {MainRouter} from './Components/MainRouter.js';

function App(props){
  return(
    <div>
      <Link to='/'><h2>ホーム</h2></Link>
      <Link to='/hotels/160960?id=2'><h2>ホテル</h2></Link>
      <BrowserRouter>
      <MainRouter/>
      </BrowserRouter>
    </div>
  );
}
export default App;
