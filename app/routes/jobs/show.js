import Ember from 'ember';
import Job from 'd-flow-ember/models/job';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('job', params.id);
  },
  setupController: function(controller, model) {
    controller.set('model', Job.create(model));
  },
  actions: {
    
    // Sets job status to 'digitizing'
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
    
    // Completes quality control step
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

    // Deletes job from database
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

    // Sets quarantine flag for job
    quarantineJob(job, message){
      job.set('quarantined', true);
      job.set('message', message);
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

    // Resets quarantine flag for job
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

    // Restarts job, sets to first status and moves packagefiles to trash
    restartJob(job, message){
      job.set('message', message);
      this.store.find('job', job.id + '/restart?message=' + message).then(
        () => {
          this.refresh(job.id); // Refresh children of current model
        },
        (errorObject) => {
          this.controller.set('error', errorObject.error);
        }
      );
    },

    refreshModel: function() {
      this.refresh();
    }
  }
});
