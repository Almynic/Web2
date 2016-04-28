"use strict";

function Task(title) {
  this.done = false;
  this.title = title || "";
}

Task.prototype.render = function() {
  // TODO implement tasklist rendering
  var checked = "";
  var title = this.title;
  if (this.done) {
    checked='checked="checked"';
  }
  var _markup=$('').add('<li>');
  _markup.append('<input name="done" type="checkbox" value="'+title+'" '+checked+' />');
  _markup.append('<input name="title" type="text" value="'+title+'"/>');
  return _markup;
};
