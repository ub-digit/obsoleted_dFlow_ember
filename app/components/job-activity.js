import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'tr',
  displayedEvent: function() {
    return Ember.I18n.t('activityevent.'+this.get('activity.event'));
  }.property('activity.event')
});