const express = require("express");
const routes = express.Router();

// import controllers
const UserController = require("./controllers/UserController");

routes.post("/users", UserController.store);

module.exports = routes;
