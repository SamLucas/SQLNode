const express = require("express");
const routes = express.Router();

// import controllers
const UserController = require("./controllers/UserController");
const AddressesController = require("./controllers/AddressesController");
const TechController = require("./controllers/TechController");

// rotas usuarios
routes.get("/users", UserController.index);
routes.post("/users", UserController.store);

// rotas address
routes.post("/users/:user_id/addresses", AddressesController.store);
routes.get("/users/:user_id/addresses", AddressesController.index);

// rotas tech
routes.post("/users/:user_id/tech", TechController.store);
routes.get("/users/:user_id/tech", TechController.index);

module.exports = routes;
