const databasePass = require('./databasePass');

module.exports = {
  ...databasePass,
  operatorAliases: false,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
