import Ember from 'ember';
import ENV from 'd-flow-ember/config/environment';

export default Ember.Controller.extend({
  needs: ['application'],
  statusSelectionBinding: 'controllers.application.statusSelection',

  pdfUrl: function() {
    var token =  this.container.lookup('simple-auth-session:main').get('token');
    return ENV.APP.serviceURL + '/assets/job_pdf/' + this.get('model.id') + '.pdf?token=' + token;
  }.property('model')
});