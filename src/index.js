const app = require('./app.js')


// inicia el servidor----------------------------------------------
app.listen(app.get('puerto'))
console.log("Servidor comenzando en el puerto:", app.get('puerto'))
//----------------------------------------------------------------