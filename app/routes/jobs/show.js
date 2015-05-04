import Ember from 'ember';
import Job from './../../models/job';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('job', params.id);
  },
  setupController: function(controller, model) {
    controller.set('model', Job.create(model));
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
    qualityControlJob(id){
      this.store.find('job', id + '/quality_control_end').then(
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
    },
    quarantineJob(job, message){
      job.set('quarantined', true);
      job.set('message', message);
      console.log('message', message);
      this.store.save('job', job).then(
        () => {
          this.refresh(job.id); // Refresh children of current model
        },
        (errorObject) => {
          job.set('quarantined', false);
          this.controller.set('error', errorObject.error);
        }
      );
    },
    unQuarantineJob(job){
      job.set('quarantined', false);
      this.store.save('job', job).then(
        () => {
          this.refresh(job.id); // Refresh children of current model
        },
        (errorObject) => {
          job.set('quarantined', true);
          this.controller.set('error', errorObject.error);
        }
      );
    },

    refreshModel: function() {
      this.refresh();
    }
  }
});
