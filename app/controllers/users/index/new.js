import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['application'],
  roleSelectionBinding: 'controllers.application.roleSelection' // Binds roles to be accessible as 'roleSelection'
});