const app = require('../app.js')
module.exports ={

    renderINI(req, res) {
        res.render('../views/layouts/Inicio');
      },

    renderREG (req, res) {
        res.render('../views/./Paginas/Registro');
    },

    renderPE (req, res) {
        res.render('../views/./Paginas/Perfil');
    },
    renderLog (req, res)  {
        res.render('../views/./Paginas/ISesión');
    },
    cerrar (req, res)  {
        req.logOut(function (err) {
            if (err) { return next(err); }
            res.redirect('/');
        });
    }

}