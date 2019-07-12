import React from 'react';
import ReactDOM from 'react-dom';
import HotelDetail from './HotelDetail.js';
import Home from '../Home.js';
import { Link, Route, Switch } from "react-router-dom"

export const MainRouter =
<Switch>
<Route exact path="/" component={Home}></Route>
<Route path="/hotels/:id" component={HotelDetail}></Route>
</Switch>;
