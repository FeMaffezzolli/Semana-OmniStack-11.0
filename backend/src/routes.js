const express = require('express');

const routes = express.Router();

routes.get('/', (req, res) => {
  return res.json({ 'Am I alive ?': true })
});

module.exports = routes;