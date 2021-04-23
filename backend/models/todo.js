const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Todo = sequelize.define('todo', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name: {
      type: Sequelize.STRING,
      allowNull:false
  },
  title: {
      type: Sequelize.STRING,
      allowNull: false
  },
  completed: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
      allowNull: false
  }
});

module.exports = Todo;
