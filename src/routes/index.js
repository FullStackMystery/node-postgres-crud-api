const express = require('express'); 

const personsRouter = require('./persons.router');
const productoRouter = require('./producto.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router); 
  router.use('/persons', personsRouter);
  router.use('/producto', productoRouter);
}

module.exports = routerApi;
