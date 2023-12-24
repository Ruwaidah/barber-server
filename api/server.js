const express = require("express");
const setUpMiddleware = require("./setUpMiddleware.js");

const server = express();

setUpMiddleware(server);

server.get("/", (req, res) => {
  res.status(200).json("WE LIVE");
});

module.exports = server;
