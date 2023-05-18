const { Model, DataTypes, Sequelize } = require('sequelize');

const PRODUCTO_TABLE = 'producto';

class Producto extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: PRODUCTO_TABLE,
            modelName: 'Producto',
            timestamps: false
        }
    }
} 

const ProductoSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    nombre: {
        allowNull: false,
        type: DataTypes.STRING,
        field:'nombre'
    },
    json_campos: { 
        allowNull:false,
        type: DataTypes.STRING,
        field: 'json_campos'
    },
    id_categoria: {
        allowNull: true,
        type: DataTypes.INTEGER,
        field: 'id_categoria'
    },
    id_plantilla: {
        allowNull: true,
        type: DataTypes.INTEGER,
        field: 'id_plantilla'
    }  
}
  
module.exports = { Producto, ProductoSchema };