const pool = require('../DATABASE.js')
const Insertar = {}

Insertar.Paciente = async(arregloU,arregloP) =>{
        await pool.query('INSERT INTO usuario SET ?', [arregloU]);
        await pool.query('INSERT INTO paciente SET ?', [arregloP]);

}

module.exports = Insertar;