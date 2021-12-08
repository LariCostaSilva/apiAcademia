
class FuncionariosDAO {
    constructor(bd) {
        this.bd = bd
    }
     //CREATE
     insereFuncionario(novoFuncionario){
        const INSERT_FUNCIONARIOS = `
        INSERT INTO FUNCIONARIOS
            ( NOME, EMAIL, ENDERECO, NUM, BAIRRO, CIDADE, UF, CEP, TELEFONE, TURMA, SALARIO, CONTRATACAO, CARGO, OBSERVACOES)
        VALUES
            (?,?,?,?,?,?,?,?,?,?,?,?,?,?)
        `
        console.log(novoFuncionario)
        return new Promise((resolve, reject)=>{
            this.bd.run(INSERT_FUNCIONARIOS, [...Object.values(novoFuncionario)], (error)=>{
                if(error){
                    reject({
                        "mensagem" : error.message,
                        "erro" : true 
                    })
                } else {
                    resolve({
                        "requisicao" : novoFuncionario,
                        "erro" : false 
                    })
                }
            })
        })
    }



    //READ PEGA TUDO
    postaTudo() {
        return new Promise((resolve, reject) => {
            this.bd.all('SELECT * FROM FUNCIONARIOS', (error, rows) => {
                if (error) {
                    reject({
                        "mensagem": error.message,
                        "erro": true
                    })
                } else {
                    resolve({
                        "requisicao": rows,
                        "erro": false
                    })
                }
            })
        })
    }

    //READ POR ID

    posta(id) {
        const SELECT_BY_ID = `
        SELECT * FROM FUNCIONARIOS
        WHERE ID = ?`
        return new Promise((resolve, reject) => {
            this.bd.all(SELECT_BY_ID, id, (error, rows) => {
                if (error) {
                    reject({
                        "mensagem": error.message,
                        "erro": true
                    })
                } else {
                    resolve({
                        "requisicao": rows,
                        "erro": false
                    })
                }
            })
        })
    }
   

    //UPDATE

    async atualizaEntrada(id, novaEntrada) {
        try {
            const UPDATE = `
            UPDATE FUNCIONARIOS
            SET TITULO = ID = ?, NOME = ?, EMAIL  = ?, ENDERECO  = ?, NUM  = ?, BAIRRO  = ?, CIDADE  = ?, UF  = ?, CEP  = ?, TELEFONE  = ?, TURMA  = ?, SALARIO  = ?, CONTRATACAO  = ?, CARGO  = ?, OBSERVACOES  = ?
            WHERE ID = ?`
            return new Promise((resolve, reject) => {
                this.bd.run(UPDATE,
                    [novaEntrada.nome, novaEntrada.email, novaEntrada.num, novaEntrada.bairro, novaEntrada.cidade, novaEntrada.uf, novaEntrada.cep, novaEntrada.telefone, novaEntrada.turma, novaEntrada.salario, novaEntrada.contratacao, novaEntrada.cargo, novaEntrada.observacoes, id],
                    (error) => {
                        if (error) {
                            reject(error)
                        } else {
                            resolve({
                                "mensagem": `Entrada de id ${id} atualizada`,
                                "usuario": novaEntrada,
                                "erro": false
                            })
                        }
                    })
            })
        } catch (error) {
            throw new Error(error.message)
        }
    }

    //DELETA
    async deletaFuncionario(id) {
        try {
            const entrada = await this.pegaEntradaPorId(id)
            if (entrada.requisicao.length) {
                const DELETE = `
                DELETE FROM FUNCIONARIOS
                WHERE ID = ?`
                return new Promise((resolve, reject) => {
                    this.bd.run(DELETE, id, (error) => {
                        if (error) {
                            reject(error.message)
                        } else {
                            resolve({
                                "mensagem": `Entrada de id ${id} deletada`,
                                "erro": false
                            })
                        }
                    })
                })
            } else {
                throw new Error(`Entrada de id ${id} não existe`)
            }
        } catch (error) {
            throw new Error(error.message)
        }
    }
}

module.exports = FuncionariosDAO