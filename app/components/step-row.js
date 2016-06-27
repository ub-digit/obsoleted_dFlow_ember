import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'tr',

  enteredAt: Ember.computed('step.entered_at', function(){
    if (this.get('step.entered_at')) {
      return moment(this.get('step.entered_at')).format("YYYY-MM-DD HH:mm:ss");
    } else {
      return "";
    }
  }),

  sinceEntered: Ember.computed('step.entered_at', function(){
    if (this.get('step.entered_at')) {
      return moment(this.get('step.entered_at')).fromNow();
    } else {
      return "";
    }
  }),

  startedAt: Ember.computed('step.started_at', function(){
    if (this.get('step.started_at')) {
      return moment(this.get('step.started_at')).format("YYYY-MM-DD HH:mm:ss");
    } else {
      return "";
    }
  }),

  sinceStarted: Ember.computed('step.started_at', function(){
    if (this.get('step.started_at')) {
      return moment(this.get('step.started_at')).fromNow();
    } else {
      return "";
    }
  }),
});
