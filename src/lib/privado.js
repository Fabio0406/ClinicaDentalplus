const app = require('../app.js')
module.exports = {
    // procedimiento que evita entrar a ciertas direcciones si estas logeado un paciente
    logeadoP(req, res, next) {
        if (req.user[0].idRol == 3) {
            if (req.isAuthenticated()) {
                return next();
            }
        }
        return res.redirect('/Login');
    },
    //----------------------------------------------------------------------------------

    // procedimiento que evita entrar a ciertas direcciones si estas logeado un admin
    logeadoA(req, res, next) {
        if (req.user[0].idRol == 2) {
            if (req.isAuthenticated()) {
                return next();
            }
        }
        return res.redirect('/Login');
    },
    //---------------------------------------------------------------------------------

    // procedimiento que evita entrar a ciertas direcciones si estas logeado un odonto
    logeadoO(req, res, next) {
        if (req.user[0].idRol == 1) {
            if (req.isAuthenticated()) {
                return next();
            }
        }
        return res.redirect('/Login');
    },
    //--------------------------------------------------------------------------------------------

    // procedimiento que evita entrar a ciertas direcciones si estas logeado un paciente o odonto
    logeadoE(req, res, next) {
        if (req.user[0].idRol == 1 || req.user[0].idRol == 2) {
            if (req.isAuthenticated()) {
                return next();
            }
        }
        return res.redirect('/Login');
    },
    //---------------------------------------------------------------------------------------------

    // procedimiento que evita entrar a ciertas direcciones si estas logeado
    logeado(req, res, next) {
        if (req.isAuthenticated()) {
            return next();
        }
        return res.redirect('/Login');
    },
    //---------------------------------------------------------------------------------------------
    
    // procedimiento que evita entrar a ciertas direcciones si no estas logeado
    notlogeado(req, res, next) {
        if (!req.isAuthenticated()) {
            return next();
        }
        return res.redirect('/Perfil');
    }
    //-----------------------------------------------------------------------------------------------
}