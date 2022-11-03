const express = require('express')
const pool = require('../DATABASE.js')
const router = express.Router()
const { logeado, notlogeado, logeadoP, logeadoA, logeadoE } = require('../lib/privado.js') // traemos los procedimientos que verifica la sesión
const { renderINI } = require('../controllers/render.controller.js') // traemos los procedimientos que verifica la sesión

const {Pacientes} = require('../controllers/Mostrar')

// Pagina inicio
router.get('/', notlogeado, renderINI);

//Agenda
router.get('/Perfil/Agenda', logeadoP,(req, res) => {
  res.render('../views/Paginas/Agenda');
})

//Tratamientos
router.get('/Perfil/Tratamientos', logeadoP,(req, res) => {
  res.render('../views/Paginas/tratamientos');
})
//Ajustes
router.get('/Perfil/settings', logeado,(req, res) => {
  res.render('../views/Paginas/settings');
})
//Gestionar pacientes
router.get('/Perfil/Gpaciente', logeadoE,async(req, res) => {
   
  res.render('../views/Paginas/Gpaciente');
})
//Gestionar Odonto
router.get('/Perfil/Godonto', logeadoA,(req, res) => {
  res.render('../views/Paginas/Godonto');
})

module.exports = router