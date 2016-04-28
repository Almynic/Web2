"use strict";

var taskList;

$(function() {
    $("h1").after("First jQuery Labor");

    // code placed here will be executed each time the page
    // is rendered
    $('div#container').hide();
    $('div#container').prepend('<h1>Almynic1</h1>');
    $('div#container').fadeIn(2000);
  
    // create a tasklist to display
    taskList = new TaskList();
    taskList.createTask("Setup todo list");
    taskList.createTask("Buy milk");
    taskList.createTask("Read recipe");
    taskList.createTask("Invite guests");
    taskList.tasks[0].done = true;
  
    // TODO: add rendered markup ot the tasklist to the container #taskList
    $('div#taskList').append(taskList.render());
    $('#taskList').css({'background-color':'red'});
    $('#saveTasks').css({'color':'blue'});

    console.log('Application successfully initialized');

});
