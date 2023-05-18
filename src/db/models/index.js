const { Person, PersonSchema } = require('./persons.model');
const { Producto, ProductoSchema } = require('./producto.model');
const { Categoria, CategoriaSchema } = require('./categoria.model');
const { Plantilla, PlantillaSchema } = require('./plantilla.model');

function setupModels(sequelize) {
    Person.init(PersonSchema, Person.config(sequelize));
    Producto.init(ProductoSchema, Producto.config(sequelize));
    Categoria.init(CategoriaSchema, Categoria.config(sequelize));
    Plantilla.init(PlantillaSchema, Plantilla.config(sequelize));
}

module.exports = setupModels;
