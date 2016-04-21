$(document).ready(function() {

  $('#addItem').click(addItem);
  $('#todos').on("change", ".completeItem", toggleCompleted);
  $('#todos').on("click", ".delete", removeItem);

  function addItem(event){
    var listItem = $('#newTodo').val();
    if(listItem === '')
      return;

    $('#todos').append('<li><input type = "checkbox" class = "completeItem"><span class = "editable">' + listItem + '</span><i class = "glyphicon glyphicon-trash delete"></i></li>');
    $('#newTodo').val('');
  }

  function removeItem(event){
    $(this).parent().remove();
  }

  function toggleCompleted(event){
    $(this).parent().toggleClass('completed')
  }

});
