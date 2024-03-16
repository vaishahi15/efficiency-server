import { DataTypes } from 'sequelize';
import { sequelize } from '../util/database.util';
import { Division } from './division.model';

export const Cell = sequelize.define('Cells', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    divisionId: { 
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Divisions', // name of the target model
            key: 'id', // key in the target model that we're referencing
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
    }
})

Division.hasMany(Cell, {
    foreignKey: 'divisionId',
});
Cell.belongsTo(Division, {
    foreignKey: 'divisionId',
});