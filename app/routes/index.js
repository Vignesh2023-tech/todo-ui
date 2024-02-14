import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    const user_token = JSON.parse(sessionStorage.getItem('user_token')) || '';

    if (user_token != '') {
      Ember.$.ajax({
        url: 'http://localhost:3000/users/me',
        type: 'GET',
        Accept: 'application/vnd.api+json',
        contentType: 'application/vnd.api+json',
        Headers: {
          Authorization: `Bearer ${user_token}`
        },
        success: (response) => {
          console.log(`response  ${response}`);
        },
        error: (e) => {
          console.log(e);
        }
      })
    }
  }
});
