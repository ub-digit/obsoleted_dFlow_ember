import Ember from 'ember';
import ENV from 'd-flow-ember/config/environment';

export default Ember.Component.extend({
  tagName: 'tr',
  displayedEvent: function() {
    return Ember.I18n.t('activityevent.'+this.get('activity.event'));
  }.property('activity.event')
});