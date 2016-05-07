"use strict";

function Task(title) {
  this.done = false;
  this.title = title || "";
}

Task.prototype.render = function() {
  var _checked = this.done ? 'checked="checked"' : "";
  var _title = this.title || "";
  var $markup = $(['<li>',
    '  <input name="done"  type="checkbox" '+_checked+'" />',
    '  <input name="title" type="text" value="'+_title+'" />',
    '</li>'].join(" "))
  // TODO: connect object instance to data attribute 'task', OK
  $markup.data('task', $(this)[0]);
  // TODO: react on change of the checkbox and the input field: OK
  //       - populate done field from checkbox
  //       - populate title field from input text field
  //       - write new value using console.log
  $markup.find('input').change(function(event) {

    //Check if checkbox or textbox is changed
    if(event.target.type=="checkbox"){	//Checkbox
      //Check which state the checkbox had before changing
      if($(this).parent().data('task').done){
        $markup.find('input[name=done]').removeAttr('checked');		//Update markup
        $(this).parent().data('task').done=false;					//Update data
      } else {
        $markup.find('input[name=done]').attr("checked","checked");	//Update markup
        $(this).parent().data('task').done=true;					//Update data
      }

    }
    if(event.target.type=="text"){	//Textbox
      _title=event.target.value;
      $markup.find('input[name=title]').attr('value',_title);	//Update Markup
      $(this).parent().data('task').title=_title;				//Update data
    }

    console.log('change event received');
  });

  return $markup;
};

