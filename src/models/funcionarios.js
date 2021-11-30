class Funcionarios{
    constructor(nome, email, endereco, num, bairro, cidade, uf, cep, telefone,turma, salario,contratacao,cargo, observacoes){
        this.nome = nome
        this.email = this._validaEmail(email)
        this.endereco = endereco
        this.num = num
        this.bairro = bairro
        this.cidade = cidade
        this.uf = uf
        this.cep = cep
        this.telefone = telefone
        this.turma = turma
        this.salario = salario
        this.contratacao = contratacao
        this.cargo = cargo
        this.observacoes = observacoes
    }

    _validaEmail(email){

        if(email.value.indexOf("@") == -1 || email.valueOf (".") == -1){
        } else{
            throw new Error ("E-mail inválido, insira corretamente os dados")
        }
    }
}


module.exports = Funcionarios