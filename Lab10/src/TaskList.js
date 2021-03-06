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
TaskList.prototype.save = function() {
    var _that = this;
    var _url = 'http://zhaw.herokuapp.com/task_lists/';
    if (this.id) { _url += this.id; }
    $.post(_url, this.toJSON(), function(data) {
        _that.id = JSON.parse(data).id;
        window.location.hash = _that.id //Append hash to the url
    });
};

/*
 * Loads the given tasklist from the server.
 *
 * @param {string} id - unique identifier of the tasklist to load
 * @param {function} callback - method to call after the tasklist
 *   was successfully loaded. receives fully populated tasklist
 *   object as first and only parameter.
 */
TaskList.load = function(id, callback) {
    $.getJSON('http://zhaw.herokuapp.com/task_lists/'+id, function(data) {
        var _taskList = new TaskList()
        _taskList.id = data.id;
        _taskList.title = data.title;
        var _i;
        for (_i = 0; _i < data.tasks.length; _i += 1) {
            var _task = new Task();
            _task = _taskList.createTask(data.tasks[_i].title);
            _task.done = data.tasks[_i].done;
        }
        callback(_taskList)
    });
};