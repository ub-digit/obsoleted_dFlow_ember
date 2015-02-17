import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('node', function() {
    this.route('show', {path: '/:id' }, function(){
      this.route('new');
      this.route('edit', {path: '/edit/:id'});
      this.route('jobs', function() {
        this.route('edit', {path: '/edit/:id'});
        this.route('source', function() {
          this.route('new');
        });
      });
    });
  });
  this.resource('login');
  this.resource('users', function(){
    this.route('index', {path: '/'}, function(){
      this.route('new');
      this.route('edit', {path: '/edit/:id'});
    });
  });
  this.resource('jobs', function() {
    this.route('show', {path: '/:id'});
  });
});

export default Router;
