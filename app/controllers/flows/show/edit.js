import Ember from 'ember';

export default Ember.Controller.extend({
  modes: ['tree','code'],
  steps_mode: 'code',
  parameters_mode: 'code',
  folder_paths_mode: 'code',

  flow_steps_json: Ember.computed('model.flow_steps.@each', function(){
    return {tjosan: this.get('model.flow_steps')};
  }),

  actions: {
    save(model) {
      var that = this;
      this.set('savingMessage', 'Sparar...');
      this.store.save('flow', model).then(function(){
        that.set('savingMessage', 'Sparat!');
      },
      function(){
        that.set('savingMessage', 'Kunde inte spara!');
      }); 
    }
  }

});
