//gracias a la dependecia dotenv y a requerirla aqui (en el fichero principal), puedo importar variables de entorno con el process.env, sin necesidad de requerirla en todos los ficheros que hacen referencia a este
require('dotenv').config();
const express = require('express');
const morgan = require('morgan');

//creamos un servidor de express en la constante app
const app = express();

//extraemos el puerto de nuestro servidor de las variables de entorno
const { PORT } = process.env;

/**
 * #################
 * ## Middlewares ##
 * #################
 */

const { isAuth, userExists, canEditUser } = require('./middleware');

/**
 * ###############################
 * ## Controladores de usuarios ##
 * ###############################
 */

const {
    newUser,
    getUser,
    loginUser,
    validateUser,
    deleteUser,
} = require('./controllers/users');

/**
 * ###############################
 * ## Controladores de entradas ##
 * ###############################
 */

//const {} = require('./controllers/entries')

//Middeleware que nos da informacion acerca de las peticiones que entran en el servidor (esto lo muestra en la terminal, para darnos informacion extra de lo que ocurre)
//habilitando asi la dependencia morgan
//informativa
app.use(morgan('dev'));

//Middleware que deserealiza el body en formato row (lo pasa de un formato Buffer a un formato JS) y lo pone disponible en la propiedad request.body
app.use(express.json());

//.................Vamos a crear todos los middlewares que tienen nuestra pagina...........................

/**
 * ###########################
 * ## Endopoins de usuarios ##
 * ###########################
 */

//Crear un nuevo usuario,
app.post('/users', newUser);

//Validar un nuevo usuario
app.get('/users/validate/:registrationCode', validateUser);

// Logear un usuario.
app.post('/users/login', loginUser);

//Obteenr informacion de un usuario
app.get('/users/:idUser', isAuth, userExists, getUser);

// Anonimizar un usuario.
app.delete('/users/:idUser', isAuth, userExists, canEditUser, deleteUser);

/**
 * ###########################
 * ## Endopoins de entradas ##
 * ###########################
 */

//............................................

/**
 * ##################################
 * ## Middleware Error & Not Found ##
 * ##################################
 */

//Intentamos entrar en el middleware de error, si no fuese posible entrariamos en el de no encontrado, el orden es imoportante
//Middleware de error.
// eslint-disable-next-line no-unused-vars
app.use((error, req, res, next) => {
    console.log(error); //esto unicamente es para que en consola se nos muestre un error algo mas claro del error
    res.status(error.httpStatus || 500).send({
        status: 'error',
        message: error.message,
    });
});

//Middeleware de no encontrado
//si existe un error lo imprimimos para el cliente en modo de respuesta (res)
app.use((req, res) => {
    res.status(404).send({
        status: 'error',
        message: 'Not found',
    });
});

//Ponemos el servidor a escuchar un puerto
app.listen(PORT, () => {
    console.log(`Server llistening http://localhost${PORT}`);
});