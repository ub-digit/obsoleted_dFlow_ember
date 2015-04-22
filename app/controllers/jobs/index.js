import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['application'],
  queryParams: ['page', 'query', 'quarantined'],
});
