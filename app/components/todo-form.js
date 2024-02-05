import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    submitChanges(e) {
      e.preventDefault();

      console.log();

      // this.onsubmit({
      //   title: todo.title,
      //   description: todo.description
      // })
    }
  }
});
