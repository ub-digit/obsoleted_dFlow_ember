import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    create() {
      var that = this;
      var flow = {name: moment().format('YYYY-MM-DD_HH_mm_ss') + "_NEW_FLOW"};
      this.store.save('flow', flow).then(function(response){
        that.transitionToRoute('flows.show.edit', response.id);
      });
    }
  }
});
