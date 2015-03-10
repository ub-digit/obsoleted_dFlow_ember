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
    },
    deleteJob(id) {
      // Send confirmation box before delete
      var should_delete = confirm(Ember.I18n.t("jobs.confirm_delete"));
      if (should_delete){
        this.store.destroy('job', id).then(
          () => {
            this.transitionTo('index');
          },
          (errorObject) => {
            this.controller.set('error', errorObject.error);
          }
          );
      }
    }
  }
});