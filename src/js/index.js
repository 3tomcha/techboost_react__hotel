import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,Route } from "react-router-dom";
import App from './App.js';
import queryString from 'query-string';
import { createStore, applyMiddleware } from 'redux';
import reducer from './redux/reducers';
import { devToolsEnhancer } from 'redux-devtools-extension';

const store = createStore(reducer, /* preloadedState, */ devToolsEnhancer(
  // Specify name here, actionsBlacklist, actionsCreators and other options if needed
));

ReactDOM.render(
  <Router>
    <Route render={(props) =>
      <App
        qs={queryString.parse(props.location.search)}
        store={store}
        />
    }/>
  </Router>
  ,
  document.getElementById('root')
);
