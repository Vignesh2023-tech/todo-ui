import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {
      name: '',
      email: '',
      password: '',
      password_confirmation: ''
    }
  }
});
