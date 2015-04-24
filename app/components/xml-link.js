import Ember from 'ember';
import ENV from 'd-flow-ember/config/environment';

export default Ember.Component.extend({
  tagName: 'a',
  attributeBindings: ['target', 'href'],
  target: '_blank',
  href: function(){
    return ENV.APP.serviceURL + '/api/jobs/' + this.get('id') + '.xml';
  }.property('id')
});
