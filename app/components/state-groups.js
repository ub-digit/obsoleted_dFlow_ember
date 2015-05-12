import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'span',
  classNames: ['navbar-link'],

  inProgress: Ember.computed('stateGroups', function(){
    console.log('sg', this.get('stateGroups'));
    var actionVal = 0;
    if (this.get('stateGroups.ACTION')) {
      actionVal = this.get('stateGroups.ACTION');
    }
    var processVal = 0;
    if (this.get('stateGroups.PROCESS')) {
      processVal = this.get('stateGroups.PROCESS');
    }
    return actionVal + processVal;
  }),

  start: Ember.computed('stateGroups', function(){
    var val = 0;
    if (this.get('stateGroups.START')) {
      val = this.get('stateGroups.START');
    }
    return val;
  }),

  done: Ember.computed('stateGroups', function(){
    var val = 0;
    if (this.get('stateGroups.FINISH')) {
      val = this.get('stateGroups.FINISH');
    }
    return val;
  }),
});