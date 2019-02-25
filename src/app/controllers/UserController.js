const { User } = require('../models');

class UserController {
  constructor() {
    this.create = (req, res) => res.render('auth/signup');
    this.store = async (req, res) => {
      const { filename } = req.file;
      await User.create({ ...req.body, avatar: filename });
      return res.redirect('/');
    };
  }
}

module.exports = new UserController();
