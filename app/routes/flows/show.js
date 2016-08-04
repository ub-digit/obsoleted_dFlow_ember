import Ember from 'ember';

export default Ember.Route.extend({
  model: function(id){
    return this.store.find('flow', id);
  }
});
