var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/control', function(req, res){
  res.sendFile(__dirname + '/control.html');
});

app.get('/fmap', function(req, res){
  res.sendFile(__dirname + '/fmap.html');
});


io.on('connection', function(socket){
  console.log('socket_on');
  socket.on('control_signal', function(data){
    console.log(data);
    socket.broadcast.emit('update_map', data)
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});


