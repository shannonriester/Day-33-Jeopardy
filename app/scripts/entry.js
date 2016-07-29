import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import Gameboard from './components/Gameboard';

const router = (
 <Router history={hashHistory}>
    <Route path="/" component={Gameboard}>
      <Route path="/home" component={Gameboard}/>
    </Route>
  </Router>
);

ReactDOM.render(router, document.querySelector('#App'));
