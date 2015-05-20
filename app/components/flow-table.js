import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',

  flowStepsSorted: Ember.computed('flowSteps', function(){
    return this.get('flowSteps').sortBy('step');
  })
});