const express = require('express'); 

const personsRouter = require('./persons.router');
const productoRouter = require('./producto.router');
const categoriaRouter = require('./categoria.router');
const plantillaRouter = require('./plantilla.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router); 
  router.use('/persons', personsRouter);
  router.use('/producto', productoRouter);
  router.use('/categoria', categoriaRouter);
  router.use('/plantilla', plantillaRouter);
}

module.exports = routerApi;
