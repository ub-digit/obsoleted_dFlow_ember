import Ember from 'ember';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
  model: function() {
    var that = this;
    // Used to load data that will not be changed during runtime
    return Ember.RSVP.hash({
      roles: that.store.find('role'),
      sources: that.store.find('source'),
      statuses: that.store.find('status'),
      states: that.store.find('state')
    });
  },
  setupController: function(controller, model) {
    // To be able to access from specific controllers
    controller.set('model', {});
    //console.log(model.roles);
    controller.set('roleSelection', model.roles);
    controller.set('sourceSelection', model.sources);
    controller.set('copyrightSelection', [
      {label: Ember.I18n.t('jobs.copyright_values.unselected'), value: null},
      {label: Ember.I18n.t('jobs.copyright_values.true'), value: true},
      {label: Ember.I18n.t('jobs.copyright_values.false'), value: false}
      ]);
    var statusItems = [];
    for(var i = 0 ; i < model.statuses.length ; i++ ){
      var status = model.statuses[i];
      var item = {label: Ember.I18n.t('jobs.statuses.' + status), value: status};
      statusItems.pushObject(item);
    }
    controller.set('statusSelection', statusItems);

    var stateItems = [];
    for(var i = 0 ; i < model.states.length ; i++ ){
      var state = model.states[i];
      var item = {label: Ember.I18n.t('jobs.states.' + state), value: state};
      stateItems.pushObject(item);
    }
    controller.set('stateSelection', stateItems);
  },
  actions: {
   sessionAuthenticationFailed: function(error) {
    this.controllerFor('login').set('error', error);
  },
  showJob: function(job_id) {
   this.controller.set('job_id', '');
   this.transitionTo('jobs.show', job_id);
 }
}
});
