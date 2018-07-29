var express = require('express');
var server = express();
var bodyParser = require('body-parser');
var port = 8080;

server.use(express.static(__dirname + '/project'));
server.use(bodyParser.json());
server.use(bodyParser.json({ type: 'application/vdn.api+json' }));

server.listen(port);
console.log("App listening on port " + port);

//User api
server.get('/api/users', function(req, res) {

  if (req.query.id !== undefined) {
    console.log("Query user by id:" + req.query.id);
    res.json({"id": req.query.id, "name": "Marcos Costa", "age": 41});
  } else {
    // call DB
    var users = [];
    users.push({"name": "Marcos Costa", "age": 41});
    users.push({"name": "Kai Anthony", "age": 15});
    users.push({"name": "Sunny Costa", "age": 35});

    var response = {
      "totalCount": users.length,
      "users": users
    };

    res.json(response);
  }
});

//application
server.get('*', function(req, res) {
  res.sendfile('./project/index.html');
});
