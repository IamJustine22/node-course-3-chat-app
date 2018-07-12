const path = require('path');
const express = require('express');
const http = require('http');
const SocketIO = require('socket.io');

const {generateMessage} = require('./utils/message');


const publicPath = path.join(__dirname,  '../public');
var app = express();
var server = http.createServer(app);
var io = SocketIO(server);


app.use(express.static(publicPath));
 io.on('connection' , (socket) => {
     console.log('New user connected');


     
 socket.emit('newMessage' , generateMessage('Admin', 'Welcome to the chat app'));

socket.broadcast.emit('newMessage', generateMessage('Admin', 'New user joined')); 



socket.on('createMessage', (message, callback) => {
    console.log('createMessage', message);
    io.emit('newMessage' , generateMessage(message.from, message.text));
    callback('This is from the server.');

   //socket.broadcast.emit('newMessage' , {
     //  from: message.from,
      // text: message.text,
      // createdAt:new Date().getTime
  // });

});



     socket.on('disconnect', () => {
         console.log('User was disconected');
     });

 });
const port = process.env.PORT || 3000;

server.listen(port, () => {


console.log( `Server is up on ${port}`);
});
