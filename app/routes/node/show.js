import Ember from 'ember';
import Job from 'd-flow-ember/models/job';

export default Ember.Route.extend({
  queryParams: {
    page: { refreshModel: true },
    query: { refreshModel: true },
    quarantined: {refreshModel: true},
    status: {refreshModel: true},
    state: {refreshModel: true}
  },
  model: function(params) {
    if(!params.page) {
      params.page = 1;
    }
    return Ember.RSVP.hash({
      treenode: this.store.find('treenode', params.node_id, {
       show_children: true,
       show_breadcrumb: true
     }),
     jobs: this.store.find('job', params)
   });
    },
    setupController: function(controller, model) {
      model.treenode.breadcrumb.push({name: model.treenode.name});
      controller.set('model', model.treenode);      
      if (model.treenode.id) {
        var jobs = Ember.A([]);
        model.jobs.forEach(function(job){
          jobs.pushObject(Job.create(job));
        });
        controller.set('model.jobs', jobs);
        controller.set('model.jobs.meta', model.jobs.meta);
      }
    },
    actions: {
    // Refresh model to be called from other nested routes/controllers
    refreshModel: function(modelId) {
      this.refresh(modelId);
    }
  }
});
