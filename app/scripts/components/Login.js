import React from 'react';
import $ from 'jquery';

import session from '../models/session';
import store from '../store';

const Login = React.createClass({
  loginFunction: function(e){
    e.preventDefault();
    let username = this.refs.username.value;
    let password = this.refs.password.value;

    session.login(username, password);
  },
  render: function() {
    return (
      <div className="modal-container">
        <form className="modal" onSubmit={this.loginFunction}>
          <input ref="username" type="text" placeholder="username"/>
          <input ref="password" type="password" placeholder="password"/>
          <input id="login-submit" type="submit" value="enter" onClick={this.loginFunction}/>
          <input className="login-cancel" type="button" value="cancel" onClick={this.props.hideLogin} />
        </form>
      </div>
    );
  },

});

export default Login;
