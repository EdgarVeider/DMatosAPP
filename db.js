require('dotenv/config');
const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.DATABASE_NAME, process.env.USER, process.env.PASSWORD, {
    dialect: process.env.DIALECT,
    host: process.env.HOST
});

module.exports = sequelize;