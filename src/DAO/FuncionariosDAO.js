const funcionarios = require("../controllers/funcionarios")

class FuncionariosDAO {
    constructor(bd) {
        this.bd = bd
    }

    //CREATE
    lista(res) {
        return new Promise((resolve, reject) => {
            this.bd.all('SELECT * FROM FUNCIONARIOS', (erro, resultado) => {
                if (erro) {
                    reject({
                        "mensagem": error.message,
                        "error": true
                    })
                } else {
                    resolve(res.status(200).json(resultado))
                }
            })
        })
    }

    posta(funcionarios) {
        console.log(funcionarios)
        return new Promise((resolve, reject) => {
            this.bd.run(`INSERT INTO FUNCIONARIOS (ID,NOME,EMAIL,ENDERECO,NUM,BAIRRO,CIDADE,UF,CEP,TELEFONE,TURMA,SALARIO,CONTRATACAO,CARGO,OBSERVACOES) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
                [...Object.values(funcionarios)],
                (error) => {
                    if (error) {
                        reject({
                            "mensagem": error.message,
                            "erro": true
                        })
                    } else {
                        resolve({
                            "requisicao": funcionarios,
                            "erro": false
                        })
                    }
                })
        })
    }

    //UPTADE AQUI EMBAIXO



    //DELET
    deleta(excluir, res) {
        return new Promise((resolve, reject) => {
            this.bd.all('DELET FROM FUNCIONARIOS WHERE id=?', excluir, (erro, resultado) => {
                if (erro) {
                    reject({
                        "mensagem": error.message,
                        "erro": true
                    })
                } else {
                    resolve(res.status(200).json(resultado))
                }
            })
        })
    }
}


module.exports = FuncionariosDAO