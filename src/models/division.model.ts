import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../util/database.util';
import { Employee } from './employee.model';

interface DivisionAttributes {
    id: number;
    name: string;
    supervisor: number;
}

export class Division extends Model<DivisionAttributes> implements DivisionAttributes {
    declare id: number;
    declare name: string;
    declare supervisor: number;
}

Division.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING(200),
        allowNull: false,
    },
    supervisor: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Employees',
            key: 'id',
        }
    },
}, {
    sequelize,
    modelName: 'Divisions',
    timestamps: false
});