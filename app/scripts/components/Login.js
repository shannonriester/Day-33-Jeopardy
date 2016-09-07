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
    this.props.hideLogin();
    // console.log(this.props);
  },
  render: function() {
    return (
      <div className="modal-container signup-modal">
        <form className="login-form" onSubmit={this.loginFunction}>
          <h3 className="h3-modal">Login</h3>
          <input ref="username" type="text" placeholder="username"/>
          <input ref="password" type="password" placeholder="password"/>
          <input id="signup-submit modalSubmitBtn" type="submit" value="enter" onClick={this.loginFunction}/>
          <input className="signup-cancel modalCancelBtn" type="button" value="cancel" onClick={this.props.hideLogin} />
        </form>
      </div>
    );
  },

});

export default Login;
