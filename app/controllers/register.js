import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    saveUser(attrs) {
      let user = this.store.createRecord('user', attrs);
      user.save().then(() => {
        this.transitionToRoute('todo');
        console.log("login sucessfull");
      }).catch((e) => {
        this.set('model', attrs); // to get the entered data back
        this.set('errors', e.errors);
      })
    }
  }
});
