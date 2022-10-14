//al ejecutarse primero esta línea esque se lea el fichero .env y que cargue primero la variable de entorno.
require('dotenv').config();

const express = require('express');
const logger = require('morgan');

require('./config/db.config');
//creamos la app con estres
const app = express();

app.use(express.json())
app.use(logger('dev'));

const  routes = require('./config/routes.config');
app.use('/api', routes);


const port = process.env.PORT || 3001;
app.listen(port, () => console.info(`Aplication  🏃🏼‍♂️ at port ${port}`))