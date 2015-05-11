import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['application'],
  sourceSelectionBinding: 'controllers.application.sourceSelection',

  isDC: Ember.computed.equal('model.source', 'dc')
});
