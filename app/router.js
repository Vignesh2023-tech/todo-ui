import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function () {
  this.route('todo', { path: '/todos' }, function () {
    // this.route('todo', { path: '/' })
    this.route('create');
    this.route('edit', { path: '/:id' });
  })
  this.route('register');
  this.route('login');
});

export default Router;
