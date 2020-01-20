const express = require("express");
const routes = express.Router();

// import controllers
const UserController = require("./controllers/UserController");
const AddressesController = require("./controllers/AddressesController");
const TechController = require("./controllers/TechController");
const ReportController = require("./controllers/ReportController");

// rotas usuarios
routes.get("/users", UserController.index);
routes.post("/users", UserController.store);

// rotas address
routes.post("/users/:user_id/addresses", AddressesController.store);
routes.get("/users/:user_id/addresses", AddressesController.index);

// rotas tech
routes.post("/users/:user_id/tech", TechController.store);
routes.get("/users/:user_id/tech", TechController.index);
routes.delete("/users/:user_id/tech", TechController.delete);

// report
routes.get("/report", ReportController.show);

module.exports = routes;
