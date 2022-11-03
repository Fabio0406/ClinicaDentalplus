const express = require('express')
const router = express.Router()
const passport = require('passport');
const { logeado, notlogeado } = require('../lib/privado.js') // traemos los procedimientos que verifica la sesión
const { renderINI, renderREG, renderPE, renderLog, cerrar } = require('../controllers/render.controller.js');
const { registro } = require('../controllers/auth.controller.js');

// Formulario Registrar----------------------------------------------------
router.get('/form', notlogeado, renderREG);
router.post('/form', notlogeado, passport.authenticate('Local.Regist', {
    successRedirect: '/Perfil',
    failureRedirect: '/form',
    failureFlash: true
}))
//-------------------------------------------------------------------------

//INICIAR SESION-----------------------------------------------------------
router.get('/Login', notlogeado, renderLog );

router.post('/Login', notlogeado, (req, res, next) => {
    passport.authenticate('Local.Login', {
        successRedirect: '/Perfil',
        failureRedirect: '/Login',
        failureFlash: true
    })(req, res, next);}
    )
//-------------------------------------------------------------------------

// CERRAR SESION-----------------------------------------------------------
router.get('/cerrar', logeado, cerrar )
router.get('/Perfil', logeado, renderPE);
//-------------------------------------------------------------------------

module.exports = router