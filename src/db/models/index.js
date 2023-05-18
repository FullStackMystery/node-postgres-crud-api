const { Person, PersonSchema } = require('./persons.model');
const { Producto, ProductoSchema } = require('./producto.model');

function setupModels(sequelize) {
    Person.init(PersonSchema, Person.config(sequelize));
    Producto.init(ProductoSchema, Producto.config(sequelize));
}

module.exports = setupModels;
