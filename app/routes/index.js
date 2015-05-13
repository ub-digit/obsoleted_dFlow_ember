import Ember from 'ember';
import Job from 'd-flow-ember/models/job';

export default Ember.Route.extend({
  beforeModel: function(){
    this.transitionTo('node.show', 'root');
  }
});