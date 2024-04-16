import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../util/database.util';

interface TriggerEventLogAttributes {
    id: number;
    tableName: string;
    actionType: 'INSERT' | 'UPDATE' | 'DELETE';
    originalData: string;
    newData: string;
    eventTime: Date;
}

export class TriggerEventLog extends Model<TriggerEventLogAttributes> implements TriggerEventLogAttributes {
    declare id: number;
    declare tableName: string;
    declare actionType: 'INSERT' | 'UPDATE' | 'DELETE';
    declare originalData: string;
    declare newData: string;
    declare eventTime: Date;
}

TriggerEventLog.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    tableName: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    actionType: {
        type: DataTypes.ENUM('INSERT', 'UPDATE', 'DELETE'),
        allowNull: false
    },
    originalData: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    newData: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    eventTime: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
}, {
    sequelize,
    modelName: 'TriggerEventLog',
    tableName: 'trigger_events_log',
    timestamps: false,
});