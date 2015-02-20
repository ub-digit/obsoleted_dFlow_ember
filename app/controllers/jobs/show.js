import Ember from 'ember';

export default Ember.ObjectController.extend({
  needs: ['application'],
  startable: function(){
    return this.get('model.status') === 'waiting_for_digitizing';
  }.property('model.status')
});