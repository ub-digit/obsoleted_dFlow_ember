import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  isExpanded: false,

  byteString: Ember.computed('item.size', function() {
    var size = this.get('item.size');
    var i = -1;
    var byteUnits = [' kB', ' MB', ' GB', ' TB', 'PB', 'EB', 'ZB', 'YB'];
    do {
      size = size / 1024;
      i++;
    } while (size > 1024);

    return Math.max(size, 0.1).toFixed(1) + byteUnits[i];
  }),

  actions: {
    toggle: function(){
      this.toggleProperty('isExpanded');
    }
  }
});