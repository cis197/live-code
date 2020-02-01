const express = require('express');
const http = require('http');
const app = express();
const server = http.Server(app);
const io = require('socket.io')(server);

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

server.listen(3000);

const adjectives = ['green', 'large', 'incredible', 'special'];
const nouns = ['potato', 'tomato', 'avocado', 'pumpkin'];

function randomNameGenerator() {
  const firstname = adjectives[Math.floor(Math.random() * adjectives.length)];
  const lastname = nouns[Math.floor(Math.random() * nouns.length)];
  return firstname + ' ' + lastname;
}

const messages = [];

io.on('connection', socket => {
  socket.name = randomNameGenerator();
  socket.emit(
    'welcomeMessage',
    'Welcome to the chat server! Your name is: ' + socket.name
  );

  messages.forEach(m => socket.emit('newMessageCame', m));

  socket.on('newMessage', message => {
    const msg = `${socket.name} says: ${message}`;
    messages.push(msg);
    io.emit('newMessageCame', msg);
  });
});
