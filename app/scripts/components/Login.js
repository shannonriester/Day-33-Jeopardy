import React from 'react';

import session from '../models/session';

const Login = React.createClass({
  // loginFunction: function(username, password){
  //   let usernameLogin = this.refs.usernameLogin.value;
  //   let passwordPassword = this.refs.passwordPassword.value;
  //   session.login();
    // session.save({
    //     success: (model, response) => {
    //       // model.unset('password');
    //       session.unset('password');
    //       localStorage.setItem('authtoken', response._kmd.authtoken);
    //       router.push('/home');
    //       this.props.hideLogin();
    //     }
    //   });
  // },
  render: function() {
    return (
      <div className="modal-container">
        <form className="modal">
          <input ref="usernameLogin" type="text" placeholder="username"/>
          <input ref="passwordPassword" type="password" placeholder="password"/>
          <input id="login-submit" type="submit" value="enter" onSubmit={this.loginFunction}/>
        </form>
      </div>
    );
  },

});

export default Login;
