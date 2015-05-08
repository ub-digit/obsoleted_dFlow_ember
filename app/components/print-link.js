import Ember from 'ember';
import ENV from 'd-flow-ember/config/environment';

export default Ember.Component.extend({
  tagName: 'a',
  attributeBindings: ['target', 'href', 'title'],
  target: '_blank',
  classNameBindings: ['isButton:btn', 'isButton:navbar-btn'],
  isButton: function(){
    return this.get('type') === 'button';
  }.property('type'),
  isIcon: function(){
    return this.get('type') === 'icon';
  }.property('type'),
  href: function(){
    return ENV.APP.serviceURL + '/assets/work_order/' + this.get('jobId') + '.pdf';
  }.property('jobId'),
  title: function(){
    if (this.get('titleKey')){
      return Ember.I18n.t(this.get('titleKey'));
    } else {
      return '';
    }
  }.property('titleKey')
});
