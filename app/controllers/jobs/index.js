import Ember from 'ember';

export default Ember.Controller.extend({
  application: Ember.inject.controller(),
  queryParams: ['page', 'query', 'quarantined', 'state'],
  stateSelection: Ember.computed.alias('application.stateSelection'),
  page: 1,
  query: "",
  state: null,
  quarantined: ""
});
