import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('node', function() {
    this.route('show', {path: '/:id' });
  });
  this.resource('login');
});

export default Router;
