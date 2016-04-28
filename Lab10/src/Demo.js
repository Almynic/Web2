"use strict";

var taskList;

$(document).ready(function() {
  taskList = new TaskList();
  taskList.createTask('');
  $('#taskList').html(taskList.render());
  $('#createTask').click(function(event) {
    event.preventDefault();
    var task = taskList.createTask('');
    $('#taskList ul').append(task.render());
  });

  $('#saveTasks').click(function(event) {
    taskList.save();
  });

  /* Replace the # of the url with "" to make the POST url
  *  conform to the JSON API of the server
  */
  var _hash = window.location.hash;
  _hash = _hash.replace("#","");

  // Load the tasklist from the server.
  if(_hash) {
    TaskList.load(_hash, taskList.renderTaskList);
  }

});
