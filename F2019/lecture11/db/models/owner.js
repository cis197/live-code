const S = require('sequelize');

module.exports = {
  // STRINGS SHOULD ONLY COME FROM types.js
  firstname: {
    type: S.STRING,
    allowNull: true
  },
  lastname: {
    type: S.STRING,
    allowNull: true
  },
  created_at: {
    type: 'TIMESTAMP',
    defaultValue: S.literal('CURRENT_TIMESTAMP'),
    allowNull: false
  }
};
