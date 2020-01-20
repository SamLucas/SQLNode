const User = require("../models/User");
const Tech = require("../models/Tech");

module.exports = {
  async index(req, res) {
    const users = await User.findAll({
      include: [
        { association: "addresses" },
        { association: "techs", through: { attributes: [] } }
      ]
    });
    return res.json(users);
  },

  async store(req, res) {
    const { name, email } = req.body;
    const user = await User.create({ name, email });
    return res.json(user);
  }
};
