import Ember from "ember";

export function markdownText(params) {
  let value = params[0];
  value = value || "";
  value = value.replace(/\n/g,'  \n');
  return new Ember.Handlebars.SafeString(markdown.toHTML(value));
}

export default Ember.Helper.helper(markdownText);
