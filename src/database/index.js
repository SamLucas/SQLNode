const Sequelize = require("sequelize");
const dbconfig = require("../config/database");

const connection = new Sequelize(dbconfig);

const User = require("../models/User");
const Address = require("../models/Address");

User.init(connection);
Address.init(connection);

User.associate(connection.models);
Address.associate(connection.models);

module.exports = connection;
