const routes = require('express').Router();

routes.get('/', (req, res) => {
  //My name
  res.send('Maximiliano Bustios Sosa');
});

module.exports = routes;