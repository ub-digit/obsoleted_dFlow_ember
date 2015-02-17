/*
 * source.js
 */

import Ember from 'ember';
// console.log(model.roles);
// export default Ember.Route.extend({
//   model: function(params) {
//     return this.store.find('source');
//   }
// });

export default Ember.Route.extend({
  model: function() {
    return {}; // Data to include in create form
  },
  actions: {
    fetchSource: function(model) {
      //console.log(model.sources);
    }
  }
});
