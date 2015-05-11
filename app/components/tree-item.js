import Ember from 'ember';
import ENV from 'd-flow-ember/config/environment';

export default Ember.Component.extend({
  tagName: 'div',
  isExpanded: false,
  parentPath: '/',

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

  extension: Ember.computed('item.name', function(){
    return this.get('item.name').split('.').pop();
  }),

  isImage: Ember.computed('extension', function(){
    return ['jpg', 'jpeg','tif', 'tiff', 'png', 'jp2'].contains(this.get('extension'));
  }),

  isPdf: Ember.computed('extension', function(){
    return ['pdf'].contains(this.get('extension'));
  }),

  isText: Ember.computed('extension', function(){
    return ['xml', 'txt'].contains(this.get('extension'));
  }),

  isFile: Ember.computed('isImage', 'isPdf', 'isText', function(){
    return !this.isImage && !this.isPdf && !this.isText;
  }),

  path: Ember.computed('parentPath', 'item.name', function(){
    return this.get('parentPath') + this.get('item.name') + '/';
  }),

  fileUrl: Ember.computed('item', function() {
    var token =  this.container.lookup('simple-auth-session:main').get('token');
    return ENV.APP.serviceURL + '/assets/job_file/' + this.get('jobId') + '?file_dir=' + this.get('parentPath') + '&file_name=' + this.get('item.name') + '&token=' + token;
  }),

  icon: Ember.computed('isImage', 'isPdf', 'isFile', 'isText', function(){
    if (this.get('isImage')){
      return 'fa-file-image-o';
    } else if (this.get('isPdf')){
      return 'fa-file-pdf-o';
    } else if (this.get('isText')){
      return 'fa-file-text-o';
    } else if (this.get('isFile')){
      return 'fa-file-o';
    }
  }),

  actions: {
    toggle: function(){
      this.toggleProperty('isExpanded');
    }
  }
});