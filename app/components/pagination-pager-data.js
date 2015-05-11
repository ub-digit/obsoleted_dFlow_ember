import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  classNames: [],
  pageStart: function() {
    var currentPage = this.get('pagination.page');
    var perPage = this.get('pagination.per_page');
    if(!perPage) { return 0; }
    return ((currentPage-1) * perPage)+1;
  }.property('pagination.page', 'pagination.per_page'),
  pageEnd: function() {
    var currentPage = this.get('pagination.page');
    var perPage = this.get('pagination.per_page');
    var total = this.get('total');
    if(!perPage) { return 0; }
    var pageEnd = ((currentPage-1) * perPage)+perPage;
    if(pageEnd > total) {
      return total;
    } else {
      return pageEnd;
    }
  }.property('pagination.page', 'pagination.per_page', 'total'),
  singleResult: function() {
    if(this.get('total') === 1) { return true; }
    return false;
  }.property('total'),
  noResult: function() {
    if(this.get('total') === 0) { return true; }
    return false;
  }.property('total'),
});