import { DataTypes } from "sequelize";
import { sequelize } from "../util/database.util";

export const Organization = sequelize.define('Organizations', {
    orgId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    }
}, {
    timestamps: false
})