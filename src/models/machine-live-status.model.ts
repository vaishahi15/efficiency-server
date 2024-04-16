import { DataTypes, Model } from "sequelize";
import { sequelize } from "../util/database.util";

interface MachineLiveStatusAttributes {
    machine_id: string;
    m_status: string;
    m_time: Date;
    job_id: string;
}

export class MachineLiveStatus extends Model<MachineLiveStatusAttributes> implements MachineLiveStatusAttributes {
    declare machine_id: string;
    declare m_status: string;
    declare m_time: Date;
    declare job_id: string;
}

MachineLiveStatus.init({
    machine_id: {
        type: DataTypes.STRING(255),
        allowNull: false,
        primaryKey: true
    },
    m_status: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    m_time: {
        type: DataTypes.DATE,
        allowNull: false
    },
    job_id: {
        type: DataTypes.STRING(255),
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'MachineLiveStatus',
    tableName: 'machine_live_status',
    timestamps: false,
});