const button = $('#send-message');
const input = $('#message-input');
const messages = $('#messages');
const socket = io('http://localhost:3000');

function addMessage(newMessage) {
  const newLi = $('<li>');
  newLi.text(newMessage);
  messages.append(newLi);
}

// Socket event handling
socket.on('welcomeMessage', addMessage);
socket.on('newMessageCame', addMessage);

// Jquery jawns
button.click(function() {
  const messageValue = input.val();
  input.val('');
  // send this messageValue to the server over websockets
  socket.emit('newMessage', messageValue);
});
