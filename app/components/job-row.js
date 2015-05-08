import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'tr',
  showTree: true,
  showWorkOrder: true,
  classNameBindings: ['isDone:success', 'isError:danger', 'isProcessing:info', 'isWaitingForAction:warning'],
  
  isNotStarted: Ember.computed('job.main_status', function(){
    return this.get('job.main_status') === 'NOT_STARTED';
  }),
  isDone: Ember.computed('job.main_status', function(){
    return this.get('job.main_status') === 'DONE';
  }),
  isError: Ember.computed('job.main_status', function(){
    return this.get('job.main_status') === 'ERROR';
  }),
  isProcessing: Ember.computed('job.main_status', function(){
    return this.get('job.main_status') === 'PROCESSING';
  }),
  isWaitingForAction: Ember.computed('job.main_status', function(){
    return this.get('job.main_status') === 'WAITING_FOR_ACTION';
  })
});
