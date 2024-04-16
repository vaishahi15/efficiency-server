import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../util/database.util';
import { Division } from './division.model';

interface CellAttributes {
    id: number;
    name: string;
    type: 'auto' | 'manual';
    divisionId: number;
}

export class Cell extends Model<CellAttributes> implements CellAttributes {
    declare id: number;
    declare name: string;
    declare type: 'auto' | 'manual';
    declare divisionId: number;
}

Cell.init({
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
    type: {
        type: DataTypes.ENUM('auto', 'manual'),
        allowNull: false
    },
    divisionId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Divisions', // name of the target model
            key: 'id', // key in the target model that we're referencing
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
    }
}, {
    sequelize,
    modelName: 'Cells'
})

Cell.belongsTo(Division, {
    foreignKey: 'divisionId',
    as: 'division' // Alias added here
});

Division.hasMany(Cell, {
    foreignKey: 'divisionId',
    as: 'division' // Alias added here
});