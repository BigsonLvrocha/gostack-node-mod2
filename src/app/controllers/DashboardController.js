const { User } = require('../models');

module.exports = {
  async index(req, res) {
    const providers = await User.findAll({ where: { provider: true } });
    return res.render('dashboard', { providers });
  },
};
