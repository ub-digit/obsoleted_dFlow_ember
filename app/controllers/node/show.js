import Ember from 'ember';

export default Ember.ObjectController.extend({
    isRoot: Ember.computed.empty('id')
});

