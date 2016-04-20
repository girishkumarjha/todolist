$(document).ready(function() {

  $('#addItem').click(addItem);
  $('#todos').on("change", ".completeItem", toggleCompleted);
  $('#todos').on("click", ".delete", removeItem);

  function addItem(event){
    event.preventDefault();
    var listItem = $('#newTodo').val();
    if(listItem === '')
      return;

    $('#todos').append('<li><input type = "checkbox" class = "completeItem">' + listItem + '<i class = "glyphicon glyphicon-trash delete"></i></li>');
    $('#newTodo').val('');
  }

  function removeItem(event){
    event.preventDefault();
    $(this).parent().remove();
  }

  function toggleCompleted(event){
    event.preventDefault();
    $(this).parent().toggleClass('completed')
  }

});
