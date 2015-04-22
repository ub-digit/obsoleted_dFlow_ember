import Ember from 'ember';

export default Ember.ObjectController.extend({
  needs: ['application'],
  statusSelectionBinding: 'controllers.application.statusSelection',
  startable: function(){
    return this.get('model.status') === 'waiting_for_digitizing';
  }.property('model.status'),
  quarantined: function(){
    return this.get('model.quarantined')
  }.property('model.quarantined')
});