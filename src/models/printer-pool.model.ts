import { DataTypes, Model } from "sequelize";
import { sequelize } from "../util/database.util";

interface PrinterPoolAttributes {
    id: number;
    jobcard_number: string;
    model_number: string;
    operator_name: string;
    machine_name: string;
    work_status: string;
    job_result: string;
    reprint_status: string;
    time: Date;
}

export class PrinterPool extends Model<PrinterPoolAttributes> implements PrinterPoolAttributes {
    declare id: number;
    declare jobcard_number: string;
    declare model_number: string;
    declare operator_name: string;
    declare machine_name: string;
    declare work_status: string;
    declare job_result: string;
    declare reprint_status: string;
    declare time: Date;
}

PrinterPool.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    jobcard_number: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    model_number: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    operator_name: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    machine_name: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    work_status: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    job_result: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    reprint_status: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    time: {
        type: DataTypes.DATE,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'PrinterPool',
    tableName: 'printer_pool',
    timestamps: false
});
