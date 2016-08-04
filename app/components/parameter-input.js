import Ember from 'ember';

export default Ember.Component.extend({

  initValue: function(){
    this.set('value', this.get('values.' + this.get('parameter.name')));
  }.on('init'),

  isRadio: Ember.computed.equal('parameter.type', 'radio'),

  valueObserver: Ember.observer('value', function(){
    this.set('values.' + this.get('parameter.name'), this.get('value'));
  })
});
