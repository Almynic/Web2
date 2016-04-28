// curl -X GET -d http://zhaw.herokuapp.com/task_lists/demo
// curl -X POST -d '{"tasks": [{"title":"Buy milk","done":false}]}' http://zhaw.herokuapp.com/task_lists/demo post test

var net = require('net');
net.createServer(function (socket) {
  console.log('socket connected!');
  socket.on('data', function (data) {
    console.log('"data" event', data);
  });
  socket.on('end', function () {
    console.log('"end" event');
  });
  socket.on('close', function () {
    console.log('"close" event');
  });
  socket.on('error', function (e) {
    console.log('"error" event', e);
});
  socket.pipe(socket);
}).listen(1337);
