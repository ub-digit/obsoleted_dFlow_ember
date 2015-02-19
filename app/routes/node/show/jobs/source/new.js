import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    // get the model data from the upstream source form
    return this.modelFor('node.show.jobs.source');
  },
  actions: {
    createJob: function(model) {
      var that = this;
      this.store.save('job', model).then(
        // callback function for store to use in case of success
        function(model) {
          that.send('refreshModel'); // Refresh children of current model
          that.transitionTo('node.show');
        },
        // callback function for store to use in case of failure
        function(errorObject) {
          that.controller.set('error', errorObject.error);
        }
      );
    }
  }
});
