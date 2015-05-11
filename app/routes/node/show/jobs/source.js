/*
 * source.js
 */

import Ember from 'ember';
// console.log(model.roles);
// export default Ember.Route.extend({
//   model: function(params) {
//     return this.store.find('source');
//   }
// });

export default Ember.Route.extend({
  model: function() {
    var node = this.modelFor('node.show');
    return {treenode_id: node.id}; // Beginning with this data
  },
  setupController: function(controller, model) {
    controller.set('hasFetchedData', false);
    controller.set('model', model);
    controller.set('model.dc', {});
  },
  actions: {
    fetchSource: function(model) {
      var that = this;
      this.store.find('source', model.source, {catalog_id: model.catalog_id, dc: model.dc}).then(
        function(source_data){
          that.controller.set('model.catalog_id', source_data.catalog_id);
          that.controller.set('model.title', source_data.title);
          that.controller.set('model.author', source_data.author);
          that.controller.set('model.xml', source_data.xml);
          that.controller.set('model.metadata', source_data.metadata);
          that.controller.set('model.is_periodical', source_data.is_periodical);
          that.controller.set('model.source_label', source_data.source_label);
          that.controller.set('error', null);
          that.controller.set('hasFetchedData', true);
          that.transitionTo('node.show.jobs.source.new');
        },
        function(errorObject) {
          that.controller.set('error', errorObject.error);
        }
      );
    },

    clearFlags: function(){
      this.controller.set('hasFetchedData', false);
    }
  }
});
