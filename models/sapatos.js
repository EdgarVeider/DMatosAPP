const Sequelize = require('sequelize');
const database = require('../db');
const Componentes = require('./componentes');

const Sapato = database.define('sapato', {
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

const SapatoComponentes = database.define('SapatoComponentes',{
    sapato_ref: {
        type: Sequelize.STRING,
        references: {
            model: Sapato,
            key: 'ref'
        }
    },

    Componentes_ref: {
        type: Sequelize.STRING,
        references: {
            model: Componentes,
            key: 'ref'
        }
    }
});

Sapato.belongsToMany(Componentes, {through: SapatoComponentes});
Componentes.belongsToMany(Sapato, {through: SapatoComponentes});

module.exports = Sapato;