const bcrypt = require('bcryptjs');
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const { roles } = require('../config/roles');
const sequelizePaginate = require('sequelize-paginate');

const User = sequelize.define(
  'users',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isEmailVerified: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    role: {
      type: DataTypes.ENUM,
      values: roles,
      defaultValue: 'user',
      allowNull: false,
    },
  },
  {
    indexes: [
      // Create a unique index on email
      {
        unique: true,
        fields: ['email'],
      },
    ],
    timestamps: true,
  }
);
User.isEmailTaken = async function (email, excludeUserId) {
  const user = await this.findOne({ where: { email } });
  return !!user;
};
User.prototype.isPasswordMatch = async function (password) {
  const user = this;
  return password === user.password;
};
sequelizePaginate.paginate(User);

module.exports = User;
