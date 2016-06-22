import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return this.store.find('queue');
  },

  setupController: function(controller, model){
    controller.set('model', model);
  },

  actions: {
    refreshModel: function(){
      this.refresh();
    }
   }
});
