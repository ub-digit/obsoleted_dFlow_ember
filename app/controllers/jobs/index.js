import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['application'],
  statusSelectionBinding: 'controllers.application.statusSelection',
  queryParams: ['page', 'query', 'quarantined', 'status'],
});
