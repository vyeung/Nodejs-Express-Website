var socket = io();
var chatUsername = document.querySelector('#chat-username');
var chatMessage = document.querySelector('#chat-message');

socket.on('connect', function() 
{
  var chatForm = document.forms.chatForm;

  if (chatForm) {
    chatForm.addEventListener('submit', function(e) {
      //don't reload page after submitting message
      e.preventDefault();
      
      socket.emit('postMessage', {
        username: chatUsername.value,
        message: chatMessage.value,
      });
      
      //clear message field after submitting so user doesn't have to manually do it
      chatMessage.value='';
      chatMessage.focus();
    }); 

    socket.on('updateMessages', function(data) {
      showMessage(data);
    });
  } 
}); 

//DOM Management
function showMessage(data) 
{
  var chatDisplay = document.querySelector('.chat-display');
  var newMessage = document.createElement('p');

  //give users different text colors
  if (chatUsername.value == data.username) {
    newMessage.className = 'bg-success chat-text';
  } 
  else {
    newMessage.className = 'bg-info text-warning chat-text';
  }

  newMessage.innerHTML = '<strong>' + data.username + '</strong>: ' + data.message;
  chatDisplay.insertBefore(newMessage, chatDisplay.firstChild);
}
