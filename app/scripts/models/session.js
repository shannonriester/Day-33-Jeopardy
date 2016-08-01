import Backbone from 'backbone';
import $ from 'jquery';
import router from '../entry';

import store from '../store';

const Session = Backbone.Model.extend({
  idAttribute: '_id',
  urlRoot: `https://baas.kinvey.com/user/kid_rkjTLZY_/login`,
  defaults: {
    username: '',
    score: 0
  },

  // if (store.session.username) {
  //   console.log('USERNAME: ', store.session.username);
  // }
  parse: function(response){
    if (response) {
      return {
        username: response.username,
        response: response._Id,
        authtoken: response._kmd.authtoken
      };
    }
  },
  login: function(username, password){
    this.save({username: username, password: password},
      {
      success: (model, response) => {
        console.log('USER SIGNED IN');
        localStorage.authtoken = response._kmd.authtoken;
        this.unset('password');
      },
      error: function(model, response) {
        console.log('ERROR: Login failed');
      }
    });

    // this.save(
    //   {username:username, password:password},
    //   {
    //     success: (model, response) => {
    //     this.unset('password');
    //     localStorage.setItem('authtoken', response._kmd.authtoken);
    //   },
    //     error: () => {
    //       console.log('ERROR. Login Failed.');
    //   }
    // });
  },
  retrieve: function(){},
});

let session = new Session();

export default session;
