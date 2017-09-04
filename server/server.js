var express = require('express');

var app = express();

var todos = [];

app.get('/todos', function(req, res) {
  // send back a json response
  res.json(todos);
});

app.post('/todos', function(req, res) {
  var todo = req.body.todo;

  todos.push(todos);
  // res.send converts to json as well
  // but req.json will convert things like null and undefined to json too although its not valid
  res.send(todo);
});

// get the parameters from the route
app.get('/todos/:id', function(req, res) {
  var todo = _.find(todos, {id: req.params.id});

  res.json(todo);
});
// start server on port 3000
app.listen(3000);
          