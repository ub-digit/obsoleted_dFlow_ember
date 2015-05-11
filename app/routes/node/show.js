import Ember from 'ember';
import Job from 'd-flow-ember/models/job';

export default Ember.Route.extend({
  queryParams: {
    page: { refreshModel: true }
  },
  model: function(params) {
    if(!params.page) {
      params.page = 1;
    }
    return this.store.find('treenode', params.node_id, {
     show_children: true,
     show_breadcrumb: true,
     show_jobs: true,
     page: params.page
   });
  },
  setupController: function(controller, model) {
    if (model.id) {
      var jobs = Ember.A([]);
      model.jobs.forEach(function(job){
        jobs.pushObject(Job.create(job));
      });
      model.jobs = jobs;
      model.breadcrumb.push({name: model.name});
    }
    controller.set('model', model);
  },
  actions: {
    // Refresh model to be called from other nested routes/controllers
    refreshModel: function(modelId) {
      this.refresh(modelId);
    }
  }
});
