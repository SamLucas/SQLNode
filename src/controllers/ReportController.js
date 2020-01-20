const User = require("../models/User");
const { Op } = require("sequelize");

module.exports = {
  async show(req, res) {
    const user = await User.findAll({
      where: {
        email: {
          [Op.iLike]: "%@gmail.com"
        }
      },
      include: [
        { association: "addresses", where: { street: "Av. Oliveira pedrosa" } },
        { association: "techs", where: { name: { [Op.iLike]: "React%" } } }
      ]
    });

    return res.json(user);
  }
};
