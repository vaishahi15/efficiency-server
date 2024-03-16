import { DataTypes } from "sequelize";
import { sequelize } from "../util/database.util";

export const Product = sequelize.define('Products', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    product_time: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    no_of_operators: { //it is optional, so that we doesn't set allowNull to false
        type: DataTypes.INTEGER,
    },
    organizationId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Organizations',
            key: 'orgId',
        },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT',
    }
})