const path = require('path');
const express = require('express');
const http = require('http');
const SocketIO = require('socket.io');


const publicPath = path.join(__dirname,  '../public');
var app = express();
var server = http.createServer(app);
var io = SocketIO(server);


app.use(express.static(publicPath));
 io.on('connection' , (socket) => {
     console.log('New user connected');

socket.emit('newMessage' , {
    from:'Ray',
    text:'See you then.',
    createAt: 123123
});

socket.on('createMessage', (message) => {
    console.log('createMessage', message);
});



     socket.on('disconnect', () => {
         console.log('User was disconected');
     });

 });
const port = process.env.PORT || 3000;

server.listen(port, () => {


console.log( `Server is up on ${port}`);
});
