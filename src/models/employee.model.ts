import { DataTypes, Model } from "sequelize";
import { sequelize } from "../util/database.util";
import { Organization } from "./organization.model";
import { Division } from "./division.model";

interface EmployeeAttributes {
    id: number;
    employeeId: number;
    name: string;
    role: string;
    password: string;
    divisionId: number;
    organizationId: number;
    status: string;
    token: string;
}

export class Employee extends Model<EmployeeAttributes> implements EmployeeAttributes {
    declare id: number;
    declare employeeId: number;
    declare name: string;
    declare role: string;
    declare password: string;
    declare divisionId: number;
    declare organizationId: number;
    declare status: string;
    declare token: string;
}

Employee.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    employeeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true
    },
    name: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    role: {
        type: DataTypes.STRING(100),
        allowNull: true
    },
    password: {
        type: DataTypes.STRING(100),
        allowNull: true
    },
    divisionId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'Divisions',
            key: 'id',
        }
    },
    organizationId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'Organizations',
            key: 'id',
        }
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
    modelName: 'Employees'
})

Employee.belongsTo(Organization, { foreignKey: 'organizationId', as: 'organization' });
Organization.hasMany(Employee, { foreignKey: 'organizationId', as: 'employees' });

Employee.belongsTo(Division, { foreignKey: 'divisionId', as: 'division' });
Division.hasMany(Employee, { foreignKey: 'divisionId', as: 'employees' });
