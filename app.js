/*-------SUBIR SERVIDOR NO AR------- */

const customExpress = require('./src/config/customExpress');

const app = customExpress();
const rotas = require('./src/controllers/funcionarios');
const bd = require('./src/infra/sqlite-db');
rotas(app, bd); 
app.listen(3003, () => console.log('porta ta acordada'));

