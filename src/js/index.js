import React from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter as Router,Route } from "react-router-dom";
import { Router,Route } from "react-router";
import App from './App.js';
import queryString from 'query-string';

ReactDOM.render({
  <Router>
    <Route render={(props) =>
      <App
        qs={queryString.parse(props.location.search)}
        />
    }/>
  </Router>
  ,
  document.getElementById('root')
);
