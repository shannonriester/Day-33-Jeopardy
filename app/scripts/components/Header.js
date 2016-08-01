import React from 'react';
// import Backbone from 'backbone';
import $ from 'jquery';

import {router, Route, hashHistory} from 'react-router';

import store from '../store';
import session from '../models/session';
import Gameboard from './Gameboard';
import Login from './Login';

const Header = React.createClass({
  getInitialState: function(){
    return {
      showLogin : false,
      // showSignup : false
    };
  },
  runNewGame: function(){
    store.categories.reset();
    store.score.set('winnings', 0);
    store.categories.makeNewGame();
    //'coll.reset([models], [options])' collection
      // removes current data
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
  // routeToSignup: function(e){
  //   e.preventDefault();
  //   hashHistory.push('/signup');
  // },
  // runLogout: function(e){
  //   // e.preventDefault();
  //   this.save({
  //     url: `https://console.kinvey.com/environments/${settings.appKey}/_logout`,
  //     success: (model,response) => {
  //       // model.unset('password');
  //       localStorage.unset('authtoken');
  //       // store.session.username.value = '';
  //       // store.session.password.value = '';
  //       console.log('USER LOGGED OUT');
  //     },
  //     error: function(){
  //       console.log('USER FAILED TO LOG OUT');
  //     }
  //   });
  // },
  render: function() {

    let newGameBtn = <input className="newGameBtn animated infinite bounce" type="button" value="New Game" onClick={this.runNewGame}/>;

    let homeBtn = <input className="homeBtn" type="button" value="Home" onClick={this.routeToCurrentGame}/>;

    let login;
    if (this.state.showLogin) {
      login = <Login hideLogin={this.hideLogin} />;
    }

    // let signup = <Login onClick={this.showSignup} showLogin={this.showLogin} hideLogin={this.hideLogin} />;

    // let logout = <input className="logoutBtn" type="button" value="Logout" onClick={this.runLogout} onClick={this.showLogout}/>

    // console.log(session.authtoken);
    // if (session.authtoken === `${undefined}`) {
    // console.log(this.state);
      return (
        <div className="header-container">
          <header>
              {homeBtn}
              {newGameBtn}
              <button className="loginBtn" onClick={this.showLogin}>Login</button>
          </header>
          {login}
        </div>
      );
    // } else {
      // return (
      //   <div className="header-container">
      //     <header>
      //       <nav className="nav">
      //         {homeBtn}
      //         {newGameBtn}
      //         {logout}
      //       </nav>
      //     </header>
      //     {this.props.children}
      //   </div>
      // );

    // }
  },
});

export default Header;
