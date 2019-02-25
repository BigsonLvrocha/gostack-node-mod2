module.exports = (sequelize, DataTypes) => {
  const Appointment = sequelize.define('Appointment', {
    date: DataTypes.DATE,
  }, {
    freezeTableName: true,
    tableName: 'appointment',
  });

  Appointment.associate = (models) => {
    Appointment.belongsTo(models.User, { foreignKey: 'user_id' });
    Appointment.belongsTo(models.User, { foreignKey: 'provider_id' });
  };

  return Appointment;
};
