import Backbone from 'backbone';
import $ from 'jquery';
import router from '../entry';

import store from '../store';
import Header from '../components/Header';

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
        console.log('username ', username);
        localStorage.authtoken = response._kmd.authtoken;
        this.unset('password');
        this.trigger('change');
      },
      error: function(model, response) {
        console.log('ERROR: Login Failed');
      }
    });
  },
  signup: function(username, password) {
    this.save({
      username: username,
      password: password,
    },
    {
      url: `https://baas.kinvey.com/user/kid_rkjTLZY_/`,
      success: (model, response) => {
        model.unset('password');
        localStorage.authtoken = response._kmd.authtoken;
        this.trigger('change')
      },
      error: function(model, response) {
        console.log('ERROR: Sign Up Failed');
      }
    })
  },
  logout: function(){
    localStorage.removeItem('authtoken');
    this.clear();
    this.trigger('change')
  },
  retrieve: function(){},
});

let session = new Session();

export default session;
