import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    // get the model data from the upstream source form
    return this.modelFor('node.show.jobs.source');
  },
	actions: {
		createSuccess: function() {
			this.send('refreshModel');
			this.transitionTo('node.show');
		},
		createAbort: function() {
			this.transitionTo('node.show');
		}
	}
});
