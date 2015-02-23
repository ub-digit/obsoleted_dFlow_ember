import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model: function() {
    return this.store.find('user');
  },
  actions: {
    // Refresh model to be called from other nested routes/controllers
    refreshModel: function() {
      this.refresh();
    }
  }
});