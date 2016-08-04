import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('node', function() {
    this.route('show', {path: '/:node_id' }, function(){
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
  this.route('login');
  this.route('users', function(){
    this.route('index', {path: '/'}, function(){
      this.route('new');
      this.route('edit', {path: '/edit/:id'});
    });
  });
  this.route('jobs', function() {
    this.route('show', {path: '/:id'}, function() {
            this.route('edit');
        });
    this.route('queue');
  });
  this.route('flows', function(){
    this.route('show', {path: '/:id'}, function(){
      this.route('edit');
    });
    this.route("new");
  });
});

export default Router;
