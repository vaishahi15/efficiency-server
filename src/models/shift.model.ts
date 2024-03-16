import { DataTypes, Model } from "sequelize";
import { sequelize } from "../util/database.util";
import { HookReturn } from "sequelize/types/hooks";

interface ShiftAttributes {
    id: number;
    shift_no: number;
    start_time: string;
    end_time: string;
}

export class Shift extends Model<ShiftAttributes> implements ShiftAttributes {
    declare id: number;
    declare shift_no: number;
    declare start_time: string;
    declare end_time: string;
}

Shift.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    shift_no: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true
    },
    start_time: {
        type: DataTypes.TIME,
        allowNull: false
    },
    end_time: {
        type: DataTypes.TIME,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'Shifts',
    hooks: {
        beforeCreate: (shift: Shift, options): HookReturn => {
            if (shift.end_time <= shift.start_time) {
                throw new Error('End time must be greater than start time');
            }
        },
        beforeUpdate: (shift: Shift, options): HookReturn => {
            if (shift.end_time <= shift.start_time) {
                throw new Error('End time must be greater than start time');
            }
        },
    }
});
