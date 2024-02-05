import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    saveTodo(e) {
      e.preventDefault();
      let todo = this.store.createRecord('todo', this.model)
      todo.save().then(() => {
        this.transitionToRoute('todo')
      });
    }
  }
});
