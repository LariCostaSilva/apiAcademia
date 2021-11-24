/*-------SUBIR SERVIDOR NO AR------- */

const customExpress = require('./src/config/customExpress')

const app = customExpress()
app.listen(3003, () => console.log('porta ta acordada'))

