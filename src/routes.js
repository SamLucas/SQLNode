const express = require("express");
const routes = express.Router();

// import controllers
const UserController = require("./controllers/UserController");

// rotas usuarios
routes.get("/users", UserController.index);
routes.post("/users", UserController.store);

module.exports = routes;
