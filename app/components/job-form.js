import Ember from 'ember';

export default Ember.Component.extend({

  isNew: Ember.computed('model.id', function(){
    return !this.get('model.id');
  }),

  currentFlow: Ember.computed('model.flow', function(){
    return this.get('flows').findBy('name', this.get('model.flow'));
  }),

  actions: {
    create: function(model) {
      var that = this;
      this.store.save('job', model).then(
        // callback function for store to use in case of success
        function() {
					that.triggerAction({action: 'createSuccess'});
        },
        // callback function for store to use in case of failure
        function(errorObject) {
          that.controller.set('error', errorObject.error);
        }
      );
    },
		abort: function() {
			this.triggerAction({action: 'createAbort'});
		}
  }
});
