import Ember from 'ember';
export default Ember.Object.extend({
  
  type_of_record_string: function() {
    return Ember.I18n.t('jobs.type_of_record.' + this.get('metadata.type_of_record'));
  }.property('metadata'),

  status_string: function() {
    return Ember.I18n.t('jobs.statuses.' + this.get('status'));
  }.property('status'),

  copyright_string: function() {
    return Ember.I18n.t('jobs.copyright_values.'+this.get('copyright'));
  }.property('copyright')
});