import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['application'],
  queryParams: ['page', 'query', 'quarantined', 'state'],
  stateSelectionBinding: 'controllers.application.stateSelection',
  page: 1,
  query: "",
  state: null,
  quarantined: ""
});
