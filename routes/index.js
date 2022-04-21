const routes = require('express').Router();

routes.get('/', (req, res) => {
  res.send('Maximiliano Bustios');
});

module.exports = routes;