import Ember from 'ember';

export default Ember.ObjectController.extend({
  content: {},
  queryParams: ['page'],
  isRoot: Ember.computed.empty('id')
});

