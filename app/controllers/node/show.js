import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),
  application: Ember.inject.controller(),
  stateSelection: Ember.computed.alias('application.stateSelection'),
  queryParams: ['page', 'query', 'quarantined', 'state'],
  page: 1,
  query: "",
  quarantined: "",
  state: null,
  isRoot: Ember.computed.empty('model.id')
});

