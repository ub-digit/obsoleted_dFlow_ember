import Ember from 'ember';
import ENV from 'd-flow-ember/config/environment';

export default Ember.Controller.extend({
  session: Ember.inject.service(),
  application: Ember.inject.controller(),

  pdfUrl: Ember.computed('model', function() {
    var token =  this.get('session.data.authenticated.token');
    return ENV.APP.serviceURL + '/assets/job_pdf/' + this.get('model.id') + '.pdf?token=' + token;
  }),

  flowStepItems: Ember.computed('model.flow', 'model.flow_steps', function(){
    var flowStepItems = [];
    for(var y = 0 ; y < this.get('model.flow_steps').sortBy('step').length ; y++ ){
      var flowStep = this.get('model.flow_steps')[y];
      var prefix = '';
      if (flowStep.finished_at) {
        prefix = '-';
      }
      if (flowStep.step === this.get('model.current_flow_step')){
        prefix = '*';
      }
      var label = prefix + flowStep.step + ". " + flowStep.description;
      var item = {label: label, value: parseInt(flowStep.step)};
      flowStepItems.pushObject(item);
    }
    return flowStepItems.sortBy('value');
  })
  
});
