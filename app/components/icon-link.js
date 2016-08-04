import Ember from 'ember';

export default Ember.Component.extend({
  i18n: Ember.inject.service(),
  tagName: 'i',
  text: '',
  classNames: ['fa'],
  attributeBindings: ['title'],
  title: Ember.computed('title', function(){
    if (this.get('titleKey')){
      return this.get('i18n').t(this.get('titleKey'));
    } else {
      return '';
    }
  })
});
