import Ember from 'ember';

export default Ember.Controller.extend({
  application: Ember.inject.controller(),
  copyrightSelection: Ember.computed.alias('application.copyrightSelection'),
  flowSelection: Ember.computed.alias('application.flowSelection'),
  flows: Ember.computed.alias('application.flows')
});
