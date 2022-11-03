const BD = require('mysql2/promise')
const { Base } = require('./Llave.js')

const pool = BD.createPool(Base)
console.log('BASE DE DATOS: CONECTADO EXITOSAMENTE')

module.exports = pool
