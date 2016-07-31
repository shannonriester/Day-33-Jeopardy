import Backbone from 'backbone';
import router from '../entry';

import store from '../store';

const Session = Backbone.Model.extend({
  idAttribute: '',
  urlRoot: `https://console.kinvey.com/environments/${store.settings.appKey}/login`,
  defaults: {
    username: '',
    score: 0
  },
  // if (store.session.username) {
  //   console.log(store.session.username);
  // }
  parse: function(response){
    if (response) {
      return {
        username: response.username,
        response: response._Id,
        authtoken: response.kmd.authtoken
      };
    }
  },
  login: function(username, password){
    this.save({
      success: (model, response) => {
        this.unset('password');
        localStorage.setItem('authtoken', response._kmd.authtoken);
        router.push('/home');
      }
    })
  },
  retrieve: function(){},
});

let session = new Session();

export default session;
