const pool = require('../DATABASE.js')
const Eliminar = {}

Eliminar.DeleteU = async(user) =>{
    try{
        await pool.query('DELETE FROM usuario where user = ?' [user])
    }catch(e){
        console.log(e)
    }

}

Eliminar.Servicio = async(id) =>{
    try{
        await pool.query('DELETE FROM tratamiento where id = ?' [id])
    }catch(e){
        console.log(e)
    }
}

Eliminar.Rol = async(id) =>{
    try{
        await pool.query('DELETE FROM rol where id = ?' [id])
    }catch(e){
        console.log(e)
    }
}

Eliminar.Reserva = async(id) =>{
    try{
        await pool.query('DELETE FROM ficha where id = ?' [id])
    }catch(e){
        console.log(e)
    }
}

module.exports = Eliminar;

