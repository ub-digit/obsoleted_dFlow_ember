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
  }.property('metadata')
});
