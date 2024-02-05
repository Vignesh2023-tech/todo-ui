import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    updateTodo(e) {
      e.preventDefault();
      this.model.save().then(() => {
        this.transitionToRoute('todo')
      }
      )
    }
  }
});
