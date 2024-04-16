import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../util/database.util';

interface OrganizationAttributes {
    id: number;
    orgId: number;
}

export class Organization extends Model<OrganizationAttributes> implements OrganizationAttributes {
    declare id: number;
    declare orgId: number;
}

Organization.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    orgId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true
    }
}, {
    sequelize,
    modelName: 'Organizations',
    timestamps: false
});
