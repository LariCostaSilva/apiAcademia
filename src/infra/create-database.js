/*-------Import SQLite o Banco de dados------*/

const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const { Database } = require('sqlite3');
const caminhoArq = path.resolve(__dirname,'database.db')
const db = new sqlite3.Database(caminhoArq);

const FUNCIONARIOS_SCHEMA = `
CREATE TABLE IF NOT EXISTS "FUNCIONARIOS" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "NOME" varchar(50),
    "EMAIL" varchar(50),
    "ENDERECO" VARCHAR (50),
    "NUM" VARCHAR (50),
    "BAIRRO" VARCHAR (50),
    "CIDADE" VARCHAR (50),
    "UF" CHAR(2),
    "CEP" INT (8),
    "TELEFONE" INT(10),
    "TURMA" VARCHAR (50),
    "SALARIO" DECIMAL(10,2),
   "CONTRATACAO" DATE,
   "CARGO" VARCHAR (50),
   "OBSERVACOES" VARCHAR (200)
  );`;

  function criaTabelaFun() {
    db.run(FUNCIONARIOS_SCHEMA, (error)=> {
       if (error) console.log("Erro ao criar tabela de funcionarios");

       console.log(error)
    });
}

db.serialize(()=> {
    criaTabelaFun();

});

module.exports = Database
