const express = require('express')
const morgan = require('morgan')
const path = require('path')
const exphbs = require('express-handlebars')
const session = require('express-session')
const passport = require('passport')
const flash = require('connect-flash')
const MysqlStore = require('express-mysql-session')
const bodyParser = require('body-parser');
const { Base } = require('./Llave.js')// traigo las llaves de la base de datos
const helpers = require('./lib/helpers.js')
require('./lib/passport.js')
const busqueda = require('./controllers/busquedas')
const { Paciente } = require('./controllers/busquedas')
const { Pacientes } = require('./controllers/Mostrar.js')
const Listar = require('./controllers/Mostrar.js')
//--------------------------------------------------------------------------------

// inicializar
const app = express()
// settings
app.set('puerto', process.env.PORT || 3000);
app.set('views', path.join(__dirname, './views'));
app.engine('.hbs', exphbs.engine({
    defaultLayout: 'Plantilla',
    layoutDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));
app.set('view engine', '.hbs');
//-------------------------------------------------------------------------------------------------------

// middlewares 
app.use(morgan('dev'));// nos ayuda a saber que petisiones se hace al servidor (GET,POST,...)
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(session({
    secret: 'session',
    resave: false,
    saveUninitialized: false,
    store: new MysqlStore(Base)
}))
app.use(flash())// Para poder mandar mensajes de Error o exito 
app.use(passport.initialize())// Nos ayuda validar los usuarios
app.use(passport.session())// Nos ayuda a poder saber si ya hay una sesión iniciada
//-----------------------------------------------------------------------------------------------------

//Variables globales
app.use(async(req, res, next) => {
    app.locals.aprobado = req.flash('aprobado');
    app.locals.denegado = req.flash('denegado');
    if (req.user) {//pregunta si hay datos en la varible global // si hay, lo mandamos el primer arreglo
        app.locals.user = req.user[0];
        app.locals.VerA = helpers.VRolA(req.user[0].idRol)
        app.locals.VerP = helpers.VRolP(req.user[0].idRol)
        app.locals.VerO = helpers.VRolO(req.user[0].idRol)
        const P = await Listar.Pacientes()
        const O = await Listar.Odonto()
        const A = await Listar.Admin()
        app.locals.pacientes = P[0];        
        app.locals.odontologos = O[0];        
        app.locals.admins = A[0];        
    } else {// si no hay mandamos la variable vacia
        app.locals.user = req.user;
    }    
    next();
});
//-----------------------------------------------------------------------------------------------------
// rutas
app.use(require('./routes'))
app.use(require('./routes/auntenticar'))
//----------------------------------------------------------------------------------------------------

// para cargar imagenes( a observar)
app.use(express.static(path.join(__dirname, "public")));

module.exports = app