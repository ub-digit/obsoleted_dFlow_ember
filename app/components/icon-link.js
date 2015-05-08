import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'i',
  text: '',
  classNames: ['fa'],
  attributeBindings: ['title'],
  title: Ember.computed('title', function(){
    if (this.get('titleKey')){
      return Ember.I18n.t(this.get('titleKey'));
    } else {
      return '';
    }
  })
});