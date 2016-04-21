
// An array for us to keep track of our tasks
var tasks = [];

$(document).ready(function() {

  // Add a click handler to our add item button
  $('#addItem').click(addItem);

  // Add a change handler for our "completed" checkboxes
  $('#todos').on("change", ".completeItem", toggleCompleted);

  // Add a click handler to our delete buttons
  $('#todos').on("click", ".delete", removeItem);

  $('#newTodo').on("keypress", function (e) {
    if (e.which == 13) {
      addItem();
      e.preventDefault();
    }
  });

  // get our tasks from localstorage if they exist
  if (localStorage['tasks']) {
    tasks = JSON.parse(localStorage['tasks']);
  }

  // append each task from local storage to our list
  for(var i=0;i<tasks.length;i++) {
    appendTaskToList(tasks[i]);
  }

}); // end of $(document).ready

function addItem(event){
  // Get the value of the new todo text field
  var todoText = $('#newTodo').val();

  // If the input value is empty, don't add an empty item
  if(todoText === '')
    return;

  // Create a new object to represent our to do
  var newTodo = { text : todoText, completed: false, id : generateUUID() };

  // Add the item to our array of tasks
  tasks.push(newTodo);

  // Save tasks to local storage
  localStorage["tasks"] = JSON.stringify(tasks);

  // Display our new task in the list
  appendTaskToList(newTodo);

  // Clear the field so we can enter a new item
  $('#newTodo').val('');

}

function appendTaskToList(task) {
  if(task.completed) {
    $('#todos').append('<li class = "completed" data-task = \'' + JSON.stringify(task) + '\'><input type = "checkbox" class = "completeItem" checked = "checked">' + task.text + '<i class = "glyphicon glyphicon-trash delete"></i></li>');
  } else {
    $('#todos').append('<li data-task = \'' + JSON.stringify(task) + '\'><input type = "checkbox" class = "completeItem">' + task.text + '<i class = "glyphicon glyphicon-trash delete"></i></li>');
  }
}

function removeItem(event){

  // Get our json string out of the data-task attribute
  var taskJSON = JSON.parse($(this).parent().attr('data-task'));

  // Delete the item from the array with splice
  for(var i = tasks.length - 1; i >= 0; i--) {
    if(taskJSON.id === tasks[i].id) {
      tasks.splice(i, 1);
    }
  }

  // Resave our array in local storage
  localStorage["tasks"] = JSON.stringify(tasks);

  // Remove the item from the UL list
  $(this).parent().remove();
}

function toggleCompleted(event){

  // toggle the class for the parent li
  $(this).parent().toggleClass('completed');

  // Get our stringified json from the data-task attribute and JSON.parse it
  var taskJSON = JSON.parse($(this).parent().attr('data-task'));

  // Find the item we clicked with the same id and toggle it's completion
  for(var i = 0; i < tasks.length; i++) {
    if(taskJSON.id === tasks[i].id) {
      tasks[i].completed = !tasks[i].completed;
    }
  }

  // Resave the list to local storage
  localStorage["tasks"] = JSON.stringify(tasks);
}

// This is a helper function that is generating a somewhat unique id for us
// This is not a safe uuid generator to use in production
function generateUUID() {
  var d = new Date().getTime();
  var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = (d + Math.random()*16)%16 | 0;
    d = Math.floor(d/16);
    return (c=='x' ? r : (r&0x3|0x8)).toString(16);
  });
  return uuid;
};
