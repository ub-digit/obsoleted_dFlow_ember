import Ember from 'ember';

export default Ember.Controller.extend({
  application: Ember.inject.controller(),
  sourceSelection: Ember.computed.alias('application.sourceSelection'),

  isDC: Ember.computed.equal('model.source', 'dc')
});
