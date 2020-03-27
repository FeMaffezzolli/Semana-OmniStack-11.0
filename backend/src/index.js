const express = require('express');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
  return res.json({ message: "Ola mundo !!!" })
})

server.listen(3333);