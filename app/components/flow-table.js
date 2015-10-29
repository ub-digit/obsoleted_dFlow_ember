import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',

  flowStepsSorted: Ember.computed('flowSteps', function(){
    return this.get('flowSteps').sortBy('step');
  }),

  flowStepSuccessAction: 'flowStepSuccess',

  actions: {
    flowStepSuccess(id, step) {
      this.sendAction('flowStepSuccessAction', id, step);
     }
  }

});
