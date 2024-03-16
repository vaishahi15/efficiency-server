import { DataTypes } from 'sequelize';
import {sequelize} from '../util/database.util';

export const AppInfo = sequelize.define('AppInfo', {
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