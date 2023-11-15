const { Sequelize } = require('sequelize');
const config = require('./config');

const DB_HOST = config.mysql.host;
const DB_PORT = config.mysql.port;
const DB_DATABASE = config.mysql.database;
const DB_USERNAME = config.mysql.user;
const DB_PASSWORD = config.mysql.password;

const sequelize = new Sequelize(DB_DATABASE, DB_USERNAME, DB_PASSWORD, {
  dialect: 'mysql',
  host: DB_HOST,
  port: DB_PORT,
});

module.exports = sequelize;
