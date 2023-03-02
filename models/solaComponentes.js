const Sequelize = require('sequelize');
const database = require('../db');

//criação de uma tabela basica para servir de base para relação N-N de sola e componente
const solaComponentes = database.define('solacomponentes', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    }
});

module.exports = solaComponentes;




