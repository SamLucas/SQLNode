const express = require("express");
const routes = express.Router();

// import controllers
const UserController = require("./controllers/UserController");
const AddressesController = require("./controllers/AddressesController");

// rotas usuarios
routes.get("/users", UserController.index);
routes.post("/users", UserController.store);

// rotas address
routes.post("/users/:user_id/addresses", AddressesController.store);
routes.get("/users/:user_id/addresses", AddressesController.index);

module.exports = routes;
