import { Model, DataTypes } from "sequelize";
import { sequelize } from "../util/database.util";

interface JobCardDetailsAttributes {
    id: number;
    jobcard_number: string;
    model_number: string;
    job_qty?: number;
    job_time?: number;
    approved_qty?: number;
    rejection_qty?: number;
    rework_qty?: number;
    remaining_qty?: number;
    jobcard_status: string;
    time: Date;
    no_of_persons?: number;
    parent_jobcard_no?: string;
    rework_card_flag?: string;
    dept?: string;
    pending_qty?: number;
    creation_time: Date;
}

export class JobCardDetails extends Model<JobCardDetailsAttributes> implements JobCardDetailsAttributes {
    declare id: number;
    declare jobcard_number: string;
    declare model_number: string;
    declare job_qty?: number;
    declare job_time?: number;
    declare approved_qty?: number;
    declare rejection_qty?: number;
    declare rework_qty?: number;
    declare remaining_qty?: number;
    declare jobcard_status: string;
    declare time: Date;
    declare no_of_persons?: number;
    declare parent_jobcard_no?: string;
    declare rework_card_flag?: string;
    declare dept?: string;
    declare pending_qty?: number;
    declare creation_time: Date;
}
JobCardDetails.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    jobcard_number: {
        type: DataTypes.STRING(45),
        allowNull: false,
        unique: true
    },
    model_number: {
        type: DataTypes.STRING(45),
        allowNull: false,
    },
    job_qty: {
        type: DataTypes.INTEGER,
    },
    job_time: {
        type: DataTypes.INTEGER,
    },
    approved_qty: {
        type: DataTypes.INTEGER,
    },
    rejection_qty: {
        type: DataTypes.INTEGER,
    },
    rework_qty: {
        type: DataTypes.INTEGER,
    },
    remaining_qty: {
        type: DataTypes.INTEGER,
    },
    jobcard_status: {
        type: DataTypes.STRING(45),
        allowNull: false,
    },
    time: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    no_of_persons: {
        type: DataTypes.INTEGER,
    },
    parent_jobcard_no: {
        type: DataTypes.STRING(50),
    },
    rework_card_flag: {
        type: DataTypes.STRING(50),
    },
    dept: {
        type: DataTypes.STRING(50),
    },
    pending_qty: {
        type: DataTypes.INTEGER,
    },
    creation_time: {
        type: DataTypes.DATE,
        allowNull: false,
    },
}, {
    sequelize,
    modelName: 'JobCardDetails',
    tableName: 'jobcard_details',
    timestamps: false
});