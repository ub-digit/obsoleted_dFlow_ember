import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function(){
    if(this.modelFor('node.show.jobs.source').catalog_id === undefined) {
      this.transitionTo('node.show.jobs.source');
    }
  },
  model: function() {
    // get the model data from the upstream source form
    return this.modelFor('node.show.jobs.source');
  },

  deactivate: function(){
    this.send('clearFlags');
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
