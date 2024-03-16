import { DataTypes, Model } from "sequelize";
import { sequelize } from "../util/database.util";

interface OperatorAttributes {
    id: number;
    operatorId: number;
    name: string;
    password: string;
    divisionId: number;
    organizationId: number;
    status: string;
    token: string;
}

export class Operator extends Model<OperatorAttributes> implements OperatorAttributes {
    declare id: number;
    declare operatorId: number;
    declare name: string;
    declare password: string;
    declare divisionId: number;
    declare organizationId: number;
    declare status: string;
    declare token: string;
}

Operator.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    operatorId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true
    },
    name: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    password: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    divisionId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Divisions',
            key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
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
    },
    status: {
        type: DataTypes.STRING(20),
        allowNull: false,
        defaultValue: 'active'
    },
    token: {
        type: DataTypes.STRING(200)
    }
}, {
    sequelize,
    modelName: 'Operators'
})