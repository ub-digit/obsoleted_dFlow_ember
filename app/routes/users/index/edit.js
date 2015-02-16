import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('user', params.id);
  },
  actions: {
    saveUser: function(model) {
      var that = this; // To be used in nested functions
      this.store.save('user', model).then(
        // Success function
        function(model) {
          that.send('refreshModel'); // Refresh children of current model
          that.transitionTo('users.index');
        },
      // Failed function
        function(errorObject) {
          that.controller.set('error', errorObject.error);
        }
      );
    }
  }
});