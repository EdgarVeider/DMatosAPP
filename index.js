(async () => {

    const Sapato = require('./models/sapatos'); //carregando modelos
    const Componentes = require('./models/componentes');
    const Taxas = require('./models/taxas');
    const database = require('./db'); //carregando conexão
    
    await database.sync({force: true});
    console.log("foi");

})();