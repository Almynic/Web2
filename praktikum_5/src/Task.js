"use strict";

function Task(title) {
  this.done = false;
  this.title = title || "";
}

Task.prototype.render = function() {
    var checked = this.done ? 'checked' : '';
    var markup = $('').add('<li>');


  markup.append('<input type="text" name="title" value="' + this.title + '">');
  markup.append('<input type="checkbox" name="done" '+ checked +'>');
  return markup;
};

