import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'tr',

  classNameBindings: ['isNotActivated:default', 'isActivated:warning', 'isRunning:info', 'isFinished:success'],

  isNotActivated: Ember.computed('flowStep.entered_at', function(){
    return !this.get('flowStep.entered_at');
  }),

  isFinished: Ember.computed('flowStep.finished_at', function(){
    return !!this.get('flowStep.finished_at');
  }),

  isRunning: Ember.computed('flowStep.started_at', function(){
    return !!this.get('flowStep.started_at') && !this.get('isFinished');
  }),

  isActivated: Ember.computed('flowStep.entered_at', function(){
    return !!this.get('flowStep.entered_at') && !this.get('isRunning') && !this.get('isFinished');
  }),

  enteredAt: Ember.computed('flowStep.entered_at', function(){
    if (this.get('flowStep.entered_at')) {
      return moment(this.get('flowStep.entered_at')).format("YYYY-MM-DD HH:mm:SS");
    } else {
      return "";
    }
  }),

  startedAt: Ember.computed('flowStep.started_at', function(){
    if (this.get('flowStep.started_at')) {
      return moment(this.get('flowStep.started_at')).format("YYYY-MM-DD HH:mm:SS");
    } else {
      return "";
    }
  }),

  finishedAt: Ember.computed('flowStep.finished_at', function(){
    if (this.get('flowStep.finished_at')) {
      return moment(this.get('flowStep.finished_at')).format("YYYY-MM-DD HH:mm:SS");
    } else {
      return "";
    }
  }),

  paramsString: Ember.computed('flowStep.params', function(){
    return JSON.stringify(this.get('flowStep.params'));
  }),

  flowStepSuccessAction: 'flowStepSuccess',

  actions: {
    flowStepSuccess(id, step) {
      this.sendAction('flowStepSuccessAction', id, step);
    }
  }
});
