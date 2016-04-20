$(document).ready(function() {

  $('#addItem').click(addItem);

  function addItem(event){
    event.preventDefault();
    var listItem = $('#newTodo').val();
    if(listItem === '')
      return;

    $('#todos').append('<li><input type = "checkbox" class = "completeItem">' + listItem + '<i class = "glyphicon glyphicon-trash delete"></i></li>');
    $('#newTodo').val('');
    registerEventHandlers();

  }

  function registerEventHandlers() {
    $('.delete').click(removeItem);
    $('.completeItem').off( "change");
    $('.completeItem').on("change", toggleCompleted);
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
