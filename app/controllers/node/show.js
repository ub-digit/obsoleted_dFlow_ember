import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['application'],
  statusSelectionBinding: 'controllers.application.statusSelection',
  stateSelectionBinding: 'controllers.application.stateSelection',
  queryParams: ['page', 'query', 'quarantined', 'status', 'state'],
  page: 1,
  query: "",
  quarantined: "",
  status: null,
  state: null,
  isRoot: Ember.computed.empty('model.id')
});

