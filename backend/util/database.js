const Sequelize = require('sequelize');


const sequelize = new Sequelize('test', 'root', 'secret', {
  dialect: 'mysql',
  host: 'mysql_container'
});

module.exports = sequelize;
