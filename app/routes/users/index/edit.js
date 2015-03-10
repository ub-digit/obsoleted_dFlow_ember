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
        function() {
          that.send('refreshModel'); // Refresh children of current model
          that.transitionTo('users.index');
        },
      // Failed function
        function(errorObject) {
          that.controller.set('error', errorObject.error);
        }
      );
    },
    deleteUser: function(id) {
      var that = this;
      // Send confirmation box before delete
      var should_delete = confirm(Ember.I18n.t("users.confirm_delete"));
      if (should_delete){
        this.store.destroy('user', id).then(
          function() {
            that.send('refreshModel');
            that.transitionTo('users.index');
          },
          function(errorObject) {
            that.controller.set('error', errorObject.error);
          }
          );
      }
    }
  }
});