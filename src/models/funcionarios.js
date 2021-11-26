const banco = require('../infra/banco');


//TESTE DO TESTE DO TESTE
class Funcionarios{

    insere(funcionarios, res){
        return new Promise((resolve, reject)=>{
            banco.all('SELECT * FROM "Funcionarios"',(erro, resultado)=>{
                if (erro){
                    reject(`Informações não foram suficientes: ${erro}`);
                }
                else{
                    resolve(res.status(200).json(resultado))
                }
            })   
        })
    }
}
