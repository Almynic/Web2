"use strict";

function TaskList(title) {
  this.id = null;
  this.tasks = [];
  this.title = title || "";
}

TaskList.prototype.size = function() {
  return this.tasks.length;
};

TaskList.prototype.createTask = function(title) {
  var _task = new Task(title);
  this.tasks.push(_task);
  return _task;
};


TaskList.prototype.render = function() {
  // TODO implement tasklist rendering
  var _markup =$('').add('<ul>');
  for(var task in this.tasks){
	_markup.append(this.tasks[task].render());
  }
  return _markup;
}
