import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('job', params.id);
  },
  actions: {
    startJob(id){
      this.store.find('job', id + '/digitizing_begin').then(
        () => {
          this.refresh(id); // Refresh children of current model
        },
        (errorObject) => {
          this.controller.set('error', errorObject.error);
        }
      );
    }
  }
});