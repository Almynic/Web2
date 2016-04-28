"use strict";

function TaskList(title) {
    this.id = null;
    this.tasks = [];
    this.title = title || "";
}

TaskList.prototype.size = function () {
    return this.tasks.length;
};

TaskList.prototype.createTask = function (title) {
    var _task = new Task(title);
    this.tasks.push(_task);
    return _task;
};

TaskList.prototype.render = function () {
    var tasks = [];
    $.each(this.tasks, function (index, task) {
        tasks.push(task.render());
    });
    return $('<ul>').append(tasks);
};

/*
* Rendering of loaded tasklists of the server.
* Creates new tasklist and populates the tasklist
* with the tasks loaded from the tasklist of the server
* */
TaskList.prototype.renderTaskList = function (_tasklist) {
    $.each(_tasklist.tasks, function (index, task) {
        $('#taskList ul').append(task.render());
    });
};

TaskList.prototype.toJSON = function () {
    var _return = {title: this.title, id:this.id, tasks: []};
    for (var _i = 0; _i < this.tasks.length; _i++) {
        _return.tasks.push({title: this.tasks[_i].title, done: this.tasks[_i].done});
    }
    return JSON.stringify(_return);
};

/*
 * persists the tasklist to the server.
 *
 * for tasklists without id (not yet persisted) the id
 * is written back to the model after it is received from
 * the server.
 */
TaskList.prototype.save = function () {
    // persist the current value of this (the current tasklist)
    // to another variable, so it may be used later in callbacks

    var _that = this;
    var _id = this.id; //var _id:
    var _url = 'http://zhaw.herokuapp.com/task_lists/';
    /* Fragen, ob hier auch !! eingesetzt werden kann und wenn nicht wieso*/
    if(_id) { // !!this.id
        _url = _url + _id;
    }
    // TODO add your ajax calls here ...
    $.post(_url, _that.toJSON(), function(data) {
        _that.id = JSON.parse(data).id;
    });

    // Add Id as hash to the url.
    if(_id !== null) {
        window.location.hash = this.id;
    }
};

/*
 * Loads the given tasklist from the server.
 *
 * @param {string} id - unique identifier of the tasklist to load
 * @param {function} callback - method to call after the tasklist
 *   was successfully loaded. receives fully populated tasklist
 *   object as first and only parameter.
 */
TaskList.load = function (id, callback) {
    var taskList = new TaskList();
    $('#taskList').html(taskList.render()); //Overwrites old tasklist and creates a new one.
    $.getJSON('http://zhaw.herokuapp.com/task_lists/' + id, function (data) {
        taskList.id = data.id;
        $.each(data.tasks, function (index, task) {
            var t = taskList.createTask(task.title);
            t.done = task.done;
        });
        taskList.title = data.title;
        callback(taskList);
    });
};