const S = require('sequelize');

module.exports = {
  // STRINGS SHOULD ONLY COME FROM types.js
  name: {
    type: S.STRING,
    allowNull: true
  }
};
