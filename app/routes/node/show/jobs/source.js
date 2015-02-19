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
  actions: {
    fetchSource: function(model) {
      var that = this;
      this.store.find('source', model.catalog_id, {name: model.source}).then(
        function(source_data){
          that.controller.set('model.title', source_data.title);
          that.controller.set('model.xml', source_data.xml);
          that.controller.set('model.metadata', source_data.metadata);
          that.transitionTo('node.show.jobs.source.new');
        },
        function(errorObject) {
          that.controller.set('error', errorObject.error);
        }
      );
    }
  }
});
