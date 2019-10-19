const Sequelize = require("sequelize");
const dbconfig = require("../config/database");

const connection = new Sequelize(dbconfig);

// import models
const User = require("../models/User");
const Address = require("../models/Address");
const Tech = require("../models/Tech");

User.init(connection);
Address.init(connection);
Tech.init(connection);

Tech.associate(connection.models);
User.associate(connection.models);
Address.associate(connection.models);

module.exports = connection;
