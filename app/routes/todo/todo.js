import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    // console.log(JSON.parse(sessionStorage.getItem('user_token')));
    return this.store.findAll('todo')
  }
});
