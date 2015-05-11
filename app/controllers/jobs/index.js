import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['application'],
  statusSelectionBinding: 'controllers.application.statusSelection',
  queryParams: ['page', 'query', 'quarantined', 'status'],
  page: 1,
  query: "",
  quarantined: "",
  status: null
});
