/*------------CONTROLE DE ROTAS-----------*/

const FuncionariosDAO = require('../DAO/FuncionariosDAO')
const Funcionarios = require('../models/funcionarios')

//exportando a rota
module.exports = app => {
    // TESTE recebido e enviado 
    app.get('/funcionarios', (req, res) => res.send('Rota de funcionários'))

    //TEST enviado dados para o servidor
    app.post('/funcionarios', (req, res) => {
        //teste da requisição do post
        console.log(req.body)
        res.send('Rota Post')
    })
}

