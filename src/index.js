'use strict';
require('./services/mongo')

const Hapi = require('@hapi/hapi');
//exporta o router de volta para o index
const routers = require('./routers');

//nomeia o numero da porta e o nome
const server = Hapi.server({ 
    port: 3000,
    host: 'localhost'
 });

 //define a pasta para gerar o comando e envia uma string "Hello Word"
 // Coloquei esse router dentro do router.js para organizar
 server.route(routers);

//Starta o server
const start = async () => {
    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
};

//Retorna um erro
start().catch((err) => {
    console.error(err);
    process.exit(1);
});

