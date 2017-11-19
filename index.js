const tus = require('tus-node-server');
const server = new tus.Server();
const express = require('express');
server.datastore = new tus.FileStore({
    path: '/files'
});

var app = express();

app.get('/download/:id', function(req , res){
  res.send('files' + req.params.id);
  });

app.all('/files/*', function(req, res) {
                   server.handle(req, res);
                   });

console.log('server running on port');
app.listen(8000, '127.0.0.1');
