import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var parent = this.modelFor('node.show').treenode;
    return {parent_id: parent.id};
  },
  actions: {
    createNode: function(model) {
      var that = this; // To be used in nested functions
      this.store.save('treenode', model).then(
        // Success function
        function(model) {
          that.send('refreshModel', model.parent_id); // Refresh children of current model
          that.transitionTo('node.show', model.parent_id);
        },
      // Failed function
        function(errorObject) {
          that.controller.set('error', errorObject.error);
        }
      );
    }
  }
});