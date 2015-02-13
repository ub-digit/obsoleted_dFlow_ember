import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    // Return 
    var parent = this.modelFor('node.show');
    return {parent_id: parent.id};
  },
  actions: {
    createNode: function(model) {
      var that = this; // To be used in nested functions
      this.store.save('treenode', model).then(
        // Success function
        function(model) {
          console.log("DEBUG", model);
          that.transitionTo('node.show', model.parent_id);
      }
      // Failed function
      );
    }
  }
});