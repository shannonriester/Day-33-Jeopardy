import React from 'react';
// import Backbone from 'backbone';
import $ from 'jquery';

import {router, Route, hashHistory} from 'react-router';
import Gameboard from './Gameboard';
import store from '../store';
import session from '../models/session';

const Header = React.createClass({
  runNewGame: function(){
    // console.log(Gameboard);
    store.categories.reset();
    store.categories.makeNewGame();
    //'coll.reset([models], [options])' collection
      // removes current data
    // hashHistory.push('/home');
  },
  routeToCurrentGame: function(e) {
    e.preventDefault();
    hashHistory.push('/');
  },
  routeToLogin: function(e){
    e.preventDefault();
  //work on Login page
    hashHistory.push('/login');
  },
  routeToSignup: function(e){
    e.preventDefault();
    hashHistory.push('/signup');
  },
  runLogout: function(e){
    // e.preventDefault();
    this.save({
      url: `https://console.kinvey.com/environments/${settings.appKey}/_logout`,
      success: (model,response) => {
        // model.unset('password');
        localStorage.unset('authtoken');
        // store.session.username.value = '';
        // store.session.password.value = '';
        console.log('USER LOGGED OUT');
      },
      error: function(){
        console.log('USER FAILED TO LOG OUT');
      }
    });
  },
  render: function() {
    if (session.authtoken) {
      return (
        <div>
          <header>
            <input className="newGameBtn" type="button" value="New Game" onClick={this.runNewGame}/>
            <input className="homeBtn" type="button" value="Home" onClick={this.routeToCurrentGame}/>
            <input className="logoutBtn" type="button" value="Logout" onClick={this.runLogout}/>
          </header>
          {this.props.children}
        </div>
      );
    } else {
      return (
        <div>
          <header>
            <input className="newGameBtn" type="button" value="New Game" onClick={this.runNewGame}/>
            <input className="homeBtn" type="button" value="Home" onClick={this.routeToCurrentGame}/>
            <input className="LoginBtn" type="button" value="Login" onClick={this.routeToLogin}/>
            <input className="SignupBtn" type="button" value="Sign Up" onClick={this.routeToSignup} />
          </header>
          {this.props.children}
        </div>
      );
    }


  },
});

export default Header;
