import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('user');
  },
  actions: {
    // Refresh model to be called from other nested routes/controllers
    refreshModel: function() {
      this.refresh();
    }
  }
});