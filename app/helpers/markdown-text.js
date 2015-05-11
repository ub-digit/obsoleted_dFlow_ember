import Ember from "ember";

export default Ember.Handlebars.makeBoundHelper(function(value) {
    value = value || "";
    value = value.replace(/\n/g,'  \n');
    return new Ember.Handlebars.SafeString(markdown.toHTML(value));
});