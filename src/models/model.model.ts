import { DataTypes } from "sequelize";
import { sequelize } from "../util/database.util";
import { Organization } from "./organization.model";

export const Model = sequelize.define('Models', {
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
            key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT',
    }
})

Model.belongsTo(Organization, { foreignKey: 'organizationId', as: 'organization' });
Organization.hasMany(Model, { foreignKey: 'organizationId', as: 'models' });
