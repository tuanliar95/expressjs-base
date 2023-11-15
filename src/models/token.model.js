const bcrypt = require('bcryptjs');
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Token = sequelize.define('tokens', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  token: DataTypes.STRING,
  user: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  type: {
    type: DataTypes.STRING,
  },
  expires: {
    type: DataTypes.DATE,
  },
  blacklisted: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

module.exports = Token;
