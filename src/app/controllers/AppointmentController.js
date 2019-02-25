const { User, Appointment } = require('../models');

module.exports = {
  async create(req, res) {
    const provider = await User.findByPk(req.params.provider);
    return res.render('appointments/create', { provider });
  },
  async store(req, res) {
    const { id } = req.session.user;
    const { provider } = req.params;
    const { date } = req.body;
    await Appointment.create({
      user_id: id,
      provider_id: provider,
      date,
    });
    return res.redirect('/app/dashboard');
  },
  async listByProvider(req, res) {
    const appointments = await Appointment.findAll({
      where: {
        provider_id: req.session.user.id,
      },
      include: [{
        model: User,
        as: 'client',
      }],
    });
    return res.render('appointments/listByProvider', { appointments });
  },
};
