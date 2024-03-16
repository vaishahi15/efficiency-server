import { DataTypes } from 'sequelize';
import { sequelize } from '../util/database.util';

export const Division = sequelize.define('Divisions', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING(100),
        allowNull: false,
    }
})