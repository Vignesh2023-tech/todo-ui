import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    let user_token = localStorage.getItem('user_token') || "";
    if (user_token.trim() !== "") {
      console.log('inside todo js route')
    }

    return this.store.findAll('todo')
  }
});
