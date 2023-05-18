const express = require('express');
const router = express.Router(); 
const plantillaController = require('../controllers/plantilla.controller');

router
    .get('/', plantillaController.get )
    .get('/:id', plantillaController.getById )
    .post('/', plantillaController.create )
    .put('/:id', plantillaController.update )
    .delete('/:id', plantillaController._delete );

module.exports = router;
