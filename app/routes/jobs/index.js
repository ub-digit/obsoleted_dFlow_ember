import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    page: { refreshModel: true }
  },
  model: function(params) {
    if(!params.page) {
      params.page = 1;
    }
    return this.store.find('job', params);
  },
  setupController: function(controller, model) {
    controller.set('model', model);

    if(controller.get('page') > controller.get('model.meta.pagination.pages')) {
      controller.transitionToRoute('comp.index', {queryParams: {page: 1}});
      controller.set('page', 1);
    }
  }
});