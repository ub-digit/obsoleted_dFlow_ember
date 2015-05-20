import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['application'],
  stateSelectionBinding: 'controllers.application.stateSelection',
  queryParams: ['page', 'query', 'quarantined', 'state'],
  page: 1,
  query: "",
  quarantined: "",
  state: null,
  isRoot: Ember.computed.empty('model.id')
});

