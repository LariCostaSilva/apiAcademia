/*------------CONFIGURAÇÕES-----------*/
//importanto o express
const express = require('express')
//agrupando
const consign = require('consign')
//parsear a requisição
const bodyParser = require('body-parser')

module.exports = () => {

    const app = express();
    //const port = 3003
    //adicionando bibliotecas a serem usadas
    app.use(express.urlencoded({extended: true}));
    app.use(bodyParser.json());
    //passando o app para tudo que for controllers
    consign()
        .include('./src/controllers')
        .into(app)

    return app
}
