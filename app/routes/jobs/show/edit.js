import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    // get the model data from the upstream source form
    return this.modelFor('jobs.show');
  },
	actions: {
		createSuccess: function() {
			this.send('refreshModel');
			this.transitionTo('jobs.show');
		},
		createAbort: function() {
			this.transitionTo('jobs.show');
		}
	}
});
