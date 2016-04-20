$(document).ready(function() {

  $('#addItem').click(addItem);

  function addItem(){
    var listItem = $('#newTodo').val();
    $('#todos').append('<li><input type = "checkbox" class = "completeItem">' + listItem + '<i class = "glyphicon glyphicon-trash delete"></i></li>');
    $('#newTodo').val('');
    $('.delete').click(removeItem);
    $('.completeItem').change(toggleCompleted);
  }

  function removeItem(){
    $(this).parent().remove();
  }

  function toggleCompleted(){
    $(this).parent().addClass('completed')
  }

});
