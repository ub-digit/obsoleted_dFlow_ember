import Ember from 'ember';
import Job from 'd-flow-ember/models/job';

export default Ember.Route.extend({
  queryParams: {
    page: { refreshModel: true },
		query: { refreshModel: true },
    quarantined: {refreshModel: true},
    state: {refreshModel: true}
  },
  model: function(params) {
    if(!params.page) {
      params.page = 1;
    }
    return this.store.find('job', params);
  },
  setupController: function(controller, model) {
    var jobs = Ember.A([]);
    model.forEach(function(job){
      jobs.pushObject(Job.create(job));
    });
    controller.set('model', jobs);
    controller.set('model.meta', model.meta);

    if(controller.get('page') > controller.get('model.meta.pagination.pages')) {
      controller.transitionToRoute('jobs.index', {queryParams: {page: 1}});
      controller.set('page', 1);
    }
  }
});
