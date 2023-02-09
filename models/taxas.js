const Sequelize = require('sequelize');
const database = require('../db');

const Taxas = database.define('taxa', {
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },

    valor: {
        type: Sequelize.INTEGER,
        allowNull: false,
    }
})

module.exports = Taxas;