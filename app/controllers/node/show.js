import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['application'],
  statusSelectionBinding: 'controllers.application.statusSelection',
  stateSelectionBinding: 'controllers.application.stateSelection',
  queryParams: ['page', 'query', 'quarantined', 'state'],
  page: 1,
  query: "",
  quarantined: "",
  state: null,
  isRoot: Ember.computed.empty('model.id')
});

