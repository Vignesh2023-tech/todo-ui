import Ember from 'ember';

export default Ember.Component.extend({
  didReceiveAttrs() {
    this._super(...arguments);

    this.setProperties({
      name: this.get('user.name'),
      email: this.get('user.email'),
      password: this.get('user.password'),
      password_confirmation: this.get('user.password_confirmation')
    });
  },

  actions: {
    saveChanges(e) {
      e.preventDefault();

      this.onsubmit({
        name: this.name,
        email: this.email,
        password: this.password,
        password_confirmation: this.password_confirmation
      });
    }
  }
});
