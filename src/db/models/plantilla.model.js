const { Model, DataTypes, Sequelize } = require('sequelize');

const PLANTILLA_TABLE = 'plantilla'; // Cómo irá en la BD Postgres

class Plantilla extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: PLANTILLA_TABLE,
            modelName: 'Plantilla',
            timestamps: false
        }
    }
} 

const PlantillaSchema = {
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

module.exports = { Plantilla, PlantillaSchema };