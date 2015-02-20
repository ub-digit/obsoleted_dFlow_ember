import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('job', params.id);
  },
  actions: {
    startJob: function(id){
      var that = this;
      this.store.find('job', id + '/digitizing_begin').then(
        // Success function
        function(model) {
          that.refresh(id); // Refresh children of current model
          //that.transitionTo('jobs.show');
        },
      // Failed function
        function(errorObject) {
          that.controller.set('error', errorObject.error);
        }
      );
    }
  }
});