$(document).ready(function() {

  $('#addItem').click(addItem);
  $('#todos').on("change", ".completeItem", toggleCompleted);
  $('#todos').on("click", ".delete", removeItem);
  $('#newTodo').on("keypress", function (e) {
    if (e.which == 13) {
      addItem();
      e.preventDefault();
    }
  });

  function addItem(event){
    var listItem = $('#newTodo').val();
    if(listItem === '')
      return;

    $('#todos').append('<li><input type = "checkbox" class = "completeItem">' + listItem + '<i class = "glyphicon glyphicon-trash delete"></i></li>');
    $('#newTodo').val('');
  }

  function removeItem(event){
    $(this).parent().remove();
  }

  function toggleCompleted(event){
    $(this).parent().toggleClass('completed')
  }

});
