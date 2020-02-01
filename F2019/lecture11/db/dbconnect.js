const S = require('sequelize');

const sequelize = new S('test197', 'root', 'Abcd1234', {
  host: 'localhost',
  dialect: 'mysql',
  operatorsAliases: false,
  port: '3306',
  logging: false
});

const ownerSchema = require('./models/owner');
const owner = sequelize.define('owner', ownerSchema);

const petSchema = require('./models/pet');
const pet = sequelize.define('pet', petSchema);

owner.hasMany(pet, { as: 'pets' });
pet.belongsTo(owner);

sequelize
  .sync()
  .then(() => {
    console.log('synced');
  })
  .catch(console.log);

module.exports = {
  sequelize,
  owner,
  pet
};
