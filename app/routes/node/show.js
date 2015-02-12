import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('treenode', params.id, {show_children: true, show_breadcrumb: true});
  },
  setupController: function(controller, model) {
    if (model.id) {
      model.breadcrumb.push({name: model.name});
    };
    controller.set('model', model);
  },
});