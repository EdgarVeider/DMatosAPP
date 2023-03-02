const Sequelize = require('sequelize');
const database = require('../db');
const Componentes = require('./componentes');
const SolaComponentes = require('./SolaComponentes');
const Taxas = require('./taxas');

//Criação da tabela Sola
const Sola = database.define('Sola', {
    ref: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
    },

    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },

    data: {
        type: Sequelize.DATE,
        allowNull: false
    },

    preco: {
        type: Sequelize.FLOAT,
        allowNull: false
    },

    cliente: Sequelize.STRING,
    
});

//Relacionamento 1-n Sola e taxas
Sola.hasMany(Taxas);
Taxas.belongsTo(Sola);

//Relacionamento n-n Sola e Componentes, usando o model SolaComponentes
Sola.belongsToMany(Componentes, {
    through: {
        model: SolaComponentes
    },
    foreignKey: 'refSola',
    constraint: true
});

Componentes.belongsToMany(Sola, {
    through: {
        model: SolaComponentes
    },
    foreignKey: 'refComponente',
    constraint: true
});


module.exports = Sola;