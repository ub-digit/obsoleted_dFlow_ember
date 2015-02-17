import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['application'],
  sourceSelectionBinding: 'controllers.application.sourceSelection'
});
