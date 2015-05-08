import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'tr',

  // Returns a translated event name
  displayedEvent: Ember.computed('activity.event', function(){
    return Ember.I18n.t('activityevent.'+this.get('activity.event'));
  }),

  // Returns a translated message if message begins with '_' or 'STATUS'
  displayedMessage: Ember.computed('activity.message', function(){
    if (this.get('activity.message').charAt(0) === '_') {
      var string = this.get('activity.message').slice(1);
      return Ember.I18n.t('activitymessage.'+string);
    } else if (this.get('activity.message').indexOf('STATUS') === 0) {
      var status = this.get('activity.message').slice(7);
      return Ember.I18n.t('jobs.statuses.'+status);
    } else {
      return this.get('activity.message');
    }
  }),

  // Formats date
  displayedDate: Ember.computed('activity.created_at', function(){
    return moment(this.get('activity.created_at')).format("YYYY-MM-DD HH:mm:ss");
  })
});