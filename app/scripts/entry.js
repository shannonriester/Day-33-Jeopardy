import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import App from './components/App';
import Gameboard from './components/Gameboard';

const router = (
 <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Gameboard} />
      {//<Route path="/leaderboard" component={Leaderboard}/>
    }
    </Route>
  </Router>
);

ReactDOM.render(router, document.querySelector('#app'));
