import Ember from 'ember';
import ENV from 'd-flow-ember/config/environment';

export default Ember.ObjectController.extend({
  needs: ['application'],
  printURL: function(){
    return ENV.APP.serviceURL + '/assets/work_order/' + this.get('model.id') + '.pdf';
  }.property('model.id'),
  startable: function(){
    return this.get('model.status') === 'waiting_for_digitizing';
  }.property('model.status')
});