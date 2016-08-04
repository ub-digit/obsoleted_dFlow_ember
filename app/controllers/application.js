import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),
  ticket: null,
  queryParams: ["ticket"]
});

