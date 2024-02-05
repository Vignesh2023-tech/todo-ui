import Ember from 'ember';

export default Ember.Component.extend({
  didReceiveAttrs() {
    this._super(...arguments);

    this.setProperties({
      email: this.get('user.email'),
      password: this.get('user.password')
    })
  },

  actions: {
    login(e) {
      e.preventDefault();

      this.onsubmit({
        email: this.email,
        password: this.password
      })

    }
  }
});
