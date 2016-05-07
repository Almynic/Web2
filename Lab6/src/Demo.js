"use strict";

$(function() {
    var taskList = new TaskList();
    taskList.createTask("Setup todo list");
    taskList.createTask("Buy milk");
    taskList.createTask("Read recipe");
    taskList.createTask("Invite guests");

    taskList.tasks[0].done = true;

    $('#createTask').click(function(event) {
        event.preventDefault();
        var task = taskList.createTask('');
        $('#taskList ul').append(task.render());
    });


    $('#taskList').html(taskList.render());

    function moveDown(){
        var _self=$(this);
        _self.addClass("finished")
        _self.appendTo("ul");
        _self.slideDown();
    }
    function moveUp(){
        var _self=$(this);
        _self.removeClass("finished");
        _self.prependTo('ul');
        _self.slideDown();
    }

    var _checkbox=$($(this));
    var _li=$($(this)).parent();

    if(_checkbox.attr("checked")!="checked"){
        _checkbox.attr("checked","checked");
        _li.slideUp(400,moveDown);
    }
    else{
        _checkbox.removeAttr("checked");
        _checkbox.parent().slideUp(400,moveUp);
    }


/*

$("#taskList ul").on("change", ":checkbox", function() {
    if($(this).prop("checked")){
        $(this).parent().addClass("finished");
        var temp = $(this).parent();
        $(this).parent().fadeOut("slow", function() {
            $(this).remove();
            temp.appendTo("#taskList ul");
            temp.fadeIn();
        });

    }else{
        $(this).parent().removeClass("finished");
        $(this).removeAttr("checked");
        var temp = $(this).parent();
        $(this).parent().fadeOut("slow", function() {
            $(this).remove();
            temp.prependTo("#taskList ul");
            temp.fadeIn();
        });
    }
});
*/
});