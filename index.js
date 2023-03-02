const Sola = require('./models/sola'); //carregando modelos
const Componentes = require('./models/componentes');
const Taxas = require('./models/taxas');
const SolaComponentes = require('./models/solaComponentes');
const database = require('./db'); //carregando conexão
const { Sequelize } = require('sequelize');

(async () => {
    
    //await database.sync();//sincroniza o banco de dados com o Nodejs
    await database.sync({force: true}); // força a recriação de um novo banco de dados, apaga os dados existentes
    console.log("foi");

    await Componentes.create({
        ref: '14',
        nome: 'vira onda',
        preco: 4.12,
        cliente: 'Vibor'
    });

    await Sola.create({
        ref: '1',
        nome: 'Lion',
        data: '2020-02-02',
        preco: 2.00,
        cliente: 'Radames'
    });
 
    const s_ref = (await Sola.findAll({
        where: {
            ref: '1'
        }
    }))[0].ref

    await SolaComponentes.create({
        refSola: '1',
        refComponente: '14'
    })

})();