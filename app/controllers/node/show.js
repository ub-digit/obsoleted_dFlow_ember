import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['page'],
  isRoot: Ember.computed.empty('model.id')
});

