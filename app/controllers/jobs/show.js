import Ember from 'ember';
import ENV from 'd-flow-ember/config/environment';

export default Ember.Controller.extend({
  needs: ['application'],

  pdfUrl: Ember.computed('model', function() {
    var token =  this.container.lookup('simple-auth-session:main').get('token');
    return ENV.APP.serviceURL + '/assets/job_pdf/' + this.get('model.id') + '.pdf?token=' + token;
  }),

  flowStepItems: Ember.computed('model.flow', 'model.flow_steps', function(){
    var flowStepItems = [];
    for(var y = 0 ; y < this.get('model.flow_steps').length ; y++ ){
      var flowStep = this.get('model.flow_steps')[y];
      if (!!flowStep.entered_at) {
        var item = {label: flowStep.step + ". " + flowStep.description, value: flowStep.step};
        flowStepItems.pushObject(item);
      }
    }
    return flowStepItems;
  })
  
});
