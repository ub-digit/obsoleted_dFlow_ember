import Ember from 'ember';

export default Ember.Object.extend({
  i18n: Ember.inject.service(),
  type_of_record_string: function() {
    return this.get('i18n').t('jobs.type_of_record.' + this.get('metadata.type_of_record'));
  }.property('metadata'),

  hasTypeOfRecord: Ember.computed('metadata', function(){
    return !!this.get('metadata.type_of_record');
  }),
  status_string: function() {
    if (this.get('main_status') === "DONE") {
      return this.get('i18n').t('jobs.states.FINISH');
    } else {
      return this.get('status');
    }
  }.property('status'),

  waitingForManualAction: function(){
    return this.get('flow_step.params.manual');
  }.property('flow_step'),

  sinceStarted: Ember.computed('flow_step.entered_at', 'flow_step.started_at', function(){
    if (this.get('flow_step.entered_at')) {
      if (this.get('flow_step.started_at')) {
        return this.get('i18n').t('flowStep.startedSince') + moment(this.get('flow_step.started_at')).fromNow();
      } else {
        return this.get('i18n').t('flowStep.waitingSince') + moment(this.get('flow_step.entered_at')).fromNow();
      }
    }
  }),

  copyright_string: function() {
    return this.get('i18n').t('jobs.copyright_values.'+this.get('copyright'));
  }.property('copyright'),

  chronology_string: function() {
    var string;
    if (this.get('metadata.chron_1_key') && this.get('metadata.chron_1_value')) {
      string = this.get('metadata.chron_1_key') + ' ' + this.get('metadata.chron_1_value');
    }
    if (this.get('metadata.chron_2_key') && this.get('metadata.chron_2_value')) {
      string += ', ' + this.get('metadata.chron_2_key') + ' ' + this.get('metadata.chron_2_value');
    }
    if (this.get('metadata.chron_3_key') && this.get('metadata.chron_3_value')) {
      string += ', ' + this.get('metadata.chron_3_key') + ' ' + this.get('metadata.chron_3_value');
    }
    return string;
  }.property('metadata'),

  ordinality_string: function() {
    var string;
    if (this.get('metadata.ordinal_1_key') && this.get('metadata.ordinal_1_value')) {
      string = this.get('metadata.ordinal_1_key') + ' ' + this.get('metadata.ordinal_1_value');
    }
    if (this.get('metadata.ordinal_2_key') && this.get('metadata.ordinal_2_value')) {
      string += ', ' + this.get('metadata.ordinal_2_key') + ' ' + this.get('metadata.ordinal_2_value');
    }
    if (this.get('metadata.ordinal_3_key') && this.get('metadata.ordinal_3_value')) {
      string += ', ' + this.get('metadata.ordinal_3_key') + ' ' + this.get('metadata.ordinal_3_value');
    }
    return string;
  }.property('metadata'),

  isDone: Ember.computed.equal('main_status', 'DONE'),
  isError: Ember.computed('main_status', function(){
    return this.get('main_status') === 'ERROR';
  }),
  isProcessing: Ember.computed('main_status', function(){
    return this.get('main_status') === 'PROCESSING';
  }),
  isWaitingForAction: Ember.computed('main_status', function(){
    return this.get('main_status') === 'WAITING_FOR_ACTION' || this.get('main_status') === 'NOT_STARTED';
  })
});
