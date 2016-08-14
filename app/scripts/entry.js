import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import $ from 'jquery';

import App from './components/App';
import Gameboard from './components/Gameboard';
import session from './models/session';
import store from './store';

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

$(document).ajaxSend(function(e, xhrAjax, jqueryAjax) {
  if (jqueryAjax.url.indexOf('jservice') === -1) {
    if (localStorage.authtoken) {
      xhrAjax.setRequestHeader('Authorization', `Kinvey ${localStorage.authtoken}`)
    } else {
      xhrAjax.setRequestHeader('Authorization', `Basic ${store.settings.basicAuth}`)
    }
  }
})

if (sessionStorage.session){
  session.username = JSON.parse(sessionStorage.session).username;
  session.authtoken = JSON.parse(sessionStorage.session).authtoken;
}
