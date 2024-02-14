import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    deleteTodo(todo) {
      console.log(todo)
      // todo.destroyRecord().then(() => {
      //   this.transitionToRoute('todo');
      // })
    },
    deleteAll() {
      this.store.adapterFor('application').ajax('http://localhost:3000/todos/deleteAll', 'DELETE').then(() => {
        // this.transitionToRoute('todo')
        window.location.reload();
      })
    }
  }
});
