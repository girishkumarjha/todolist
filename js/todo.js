$(document).ready(function() {

  $('#addItem').click(addItem);
  $('#todos').on("change", ".completeItem", toggleCompleted);
  $('#todos').on("click", ".delete", removeItem);
  $('#todos').on("dblclick", ".itemText", startEditing);
  $('#todos').on("click", ".saveTodo", stopEditing);

});

function addItem(event){
  var listItem = $('#newTodo').val();
  if(listItem === '')
    return;

  $('#todos').append('<li><input type = "checkbox" class = "completeItem"><span class = "itemText">' + listItem + '</span><input type = "text" class = "editTodo hidden input-md"> <button class ="saveTodo hidden btn btn-success">save</button><i class = "glyphicon glyphicon-trash delete"></i></li>');
  $('#newTodo').val('');
}

function removeItem(event){
  $(this).parent().remove();
}

function toggleCompleted(event){
  $(this).parent().toggleClass('completed')
}

function startEditing(event){
  $(this).hide();
  $(this).parent().find('.editTodo').removeClass('hidden');
  $(this).parent().find('.saveTodo').removeClass('hidden');
}

function stopEditing(event){
  var thisTask = $(this).parent();
  thisTask.find('.itemText').text(thisTask.find('.editTodo').val());
  thisTask.find('.itemText').show();
  thisTask.find('.editTodo').addClass('hidden');
  thisTask.find('.saveTodo').addClass('hidden');
}
