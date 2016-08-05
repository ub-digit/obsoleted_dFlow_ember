import Ember from 'ember';

export default Ember.Controller.extend({

  flow_steps_json: Ember.computed('model.flow_steps', function(){
    return JSON.stringify(this.get('model.flow_steps'), null, 4);
  }),

  parameters_json: Ember.computed('model.parameters', function(){
    return JSON.stringify(this.get('model.parameters'), null, 4);
  }),

  folder_paths_json: Ember.computed('model.folder_paths', function(){
    return JSON.stringify(this.get('model.folder_paths'), null, 4);
  }),

  actions: {
    delete(model) {
      var that = this;
      var confirm = window.confirm('Är du säker på att du vill radera flödet helt och hållet? Det kommer att försvinna från listan!');
      if (confirm) {
        this.store.destroy('flow', model.id).then(function(){
          that.transitionToRoute('flows.index');
        });
      }
    }
  }
});
