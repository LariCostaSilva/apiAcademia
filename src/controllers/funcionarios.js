/*------------CONTROLE DE ROTAS-----------*/

const FuncionariosDAO = require('../DAO/FuncionariosDAO')
const Funcionarios = require('../models/funcionarios')

const funcionarios = (app, bd) => {
    const novaEntradaDAO = new FuncionariosDAO(bd)

    app.post('/funcionarios', async (req, res)=> {
        try {
            const body = req.body
            const novoFuncionario = new Funcionarios(...Object.values(body))
    
            const resposta = await novaEntradaDAO.insereFuncionario(novoFuncionario)
            res.status(201).json(resposta)
        } catch (error) {
            res.json({
                "mensagem" : error.message,
                "erro" : true 
            })
        }
    })

    app.get('/funcionarios', async (req, res)=> {
        try {
            const resultado = await novaEntradaDAO.posta()
            res.json(resultado)
        } catch (error) {
            res.json(error)
        }
    })

//Ta coerente isso aqui? Não sei!!!
    app.get('/funcionarios/:id', async (req, res) => {
        const id = parseInt(req.params.id)
        try {
            const resultado = await novaEntradaDAO.posta()
            res.status(201).json(resultado)
        } catch (error) {
            res.status(400).json({
                "mensagem": error.message,
                "erro": true
            })
        }
    })
}

module.exports = funcionarios
