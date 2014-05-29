var io = require('socket.io').listen(8021);
io.sockets.on('connection', function(socket){
              console.log('client is connceted: ' + socket.id);

              socket.on('transaction', function(data){
                        console.log(data);
                        //socket.broadcast.emit('receiveMessage', data);
                        socket.broadcast.emit('transaction', data);
              });
});