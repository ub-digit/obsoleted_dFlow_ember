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
    flowStepSuccess(id, step){
      this.store.find('process', id, {status: 'success', step: step}).then(
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
      this.store.find('job', job.id + '/quarantine?message=' + message).then(
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
      this.store.find('job', job.id + '/unquarantine?step=' + job.current_flow_step).then(
        () => {
          this.refresh(job.id); // Refresh children of current model
        },
        (errorObject) => {
          job.set('quarantined', true);
          this.controller.set('error', errorObject.error);
        }
      );
    },

    // Resets quarantine flag for job
    setFlowStep(job, recreateFlow){
      this.store.find('job', job.id + '/new_flow_step?step=' + job.current_flow_step + '&recreate_flow=' + recreateFlow).then(
        () => {
          this.refresh(job.id); // Refresh children of current model
        },
        (errorObject) => {
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
