//npm install express
// npm install path
// npm install rsa
const express = require("express");
const upload = require("express-fileupload")
var fs = require('fs');
var busboy = require('connect-busboy');
const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3000;
const NodeRSA = require('node-rsa');
var path = require('path');



app.use(express.static(path.join(__dirname, '/')));
app.use(express.static(path.join(__dirname, '/files')));
console.log(__dirname)

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/login/index.html');
});

io.on('connection', (socket) => {
  socket.on('chat message', msg => {
    socket.broadcast.emit('chat message', msg);
  });
});

http.listen(port, () => {
  console.log(`Socket.IO server running at http://localhost:${port}/`);
});




