const { Model, DataTypes, Sequelize } = require('sequelize');

const CATEGORIA_TABLE = 'categoria'; // Cómo irá en la BD Postgres

class Categoria extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: CATEGORIA_TABLE,
            modelName: 'Categoria',
            timestamps: false
        }
    }
} 

const CategoriaSchema = {
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
    }
}

module.exports = { Categoria, CategoriaSchema };