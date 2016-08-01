import React from 'react';
// import Backbone from 'backbone';
import $ from 'jquery';

import {router, Route, hashHistory} from 'react-router';

import store from '../store';
import session from '../models/session';
import Gameboard from './Gameboard';
import Login from './Login';
import Signup from './Signup';

const Header = React.createClass({
  getInitialState: function(){
    return {
      showLogin : false,
      showSignup : false,
      sessionChange: false
    };
  },
  componentDidMount: function() {
    // console.log(store.authtoken);
    session.on('change', () => {
      this.setState({authtoken: true});
      console.log('CHANGED SESSION');
    });
  },
  runNewGame: function(){
    store.categories.reset();
    store.score.set('winnings', 0);
    store.categories.makeNewGame();
  },
  routeToCurrentGame: function(e) {
    e.preventDefault();
    hashHistory.push('/');
  },
  showLogin: function(e){
    e.preventDefault();
    this.setState({showLogin:true});
  },
  hideLogin: function(e){
    this.setState({showLogin:false});
  },
  showSignup: function(e){
    e.preventDefault();
    this.setState({showSignup:true});
  },
  hideSignup: function(e){
    this.setState({showSignup:false});
  },
  runLogout: function(e){
    e.preventDefault();
    session.logout();
  },
  render: function() {

    let newGameBtn = <input className="newGameBtn animated infinite bounce" type="button" value="New Game" onClick={this.runNewGame}/>;

    let homeBtn = <input className="homeBtn" type="button" value="Home" onClick={this.routeToCurrentGame}/>;

    let login;
    if (this.state.showLogin) {
      login = <Login hideLogin={this.hideLogin} />;
    }
    let signup;
    if (this.state.showSignup){
      signup = <Signup hideSignup={this.hideSignup} />;
    }
    let logout = <input className="logoutBtn" type="button" value="Logout" onClick={this.runLogout} onClick={this.showLogout}/>

    if (!localStorage.authtoken) {
      return (
        <div className="header-container">
          <header>
              {homeBtn}
              {newGameBtn}
              <button className="loginBtn" onClick={this.showLogin}>Login</button>
              <button className="signupBtn" onClick={this.showSignup}>Sign Up</button>
          </header>
          {login}
          {signup}
        </div>
      );
    } else {
      return (
        <div className="header-container">
          <header>
              {homeBtn}
              {newGameBtn}
              <button className="logoutBtn" onClick={this.runLogout}>Logout</button>
          </header>
        </div>
      );
    }
  },
});

export default Header;
