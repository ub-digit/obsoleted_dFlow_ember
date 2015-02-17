import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('treenode', params.id, {show_children: true, show_breadcrumb: true, show_jobs: true});
  },
  setupController: function(controller, model) {
    if (model.id) {
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