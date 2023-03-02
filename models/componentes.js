const Sequelize = require('sequelize');
const database = require('../db');

//criação da Tabela Componentes
const Componentes = database.define('componentes', {
    ref: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
    },

    nome: {
        type: Sequelize.STRING,
        allowNull: false,
    },

    preco: {
        type: Sequelize.FLOAT,
        allowNull: false
    },

    cliente: {
        type: Sequelize.STRING,
        allowNull: false
    },
});

module.exports = Componentes;