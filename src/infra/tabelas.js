class Tabelas {

    funcionarios = ('CREATE TABLE IF NOT EXISTS Funcionarios) id INT NOT NULL AUTO_INCREMENT, nome VARCHAR (50) NOT NULL, endereço VARCHAR (50), numero VARCHAR (50), bairro VARCHAR (50), cidade VARCHAR (50), UF CHAR(2), CEP INT (8), telefone INT(10), cargo VARCHAR (50), turma VARCHAR (50), salário DECIMAL(10,2), data de contratacao DATE, observacoes text, PRIMARY KEY(id)')
}

module.exports = Tabelas;