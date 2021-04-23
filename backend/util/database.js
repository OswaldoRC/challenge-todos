const Sequelize = require('sequelize');


const sequelize = new Sequelize('test', 'user', 'secret', {
  dialect: 'mysql',
  host: 'mysql_container'
});

module.exports = sequelize;
