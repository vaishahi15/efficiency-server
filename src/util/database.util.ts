import { Sequelize } from 'sequelize';

console.log('Connecting to sql database', process.env.DB_NAME);
console.log('Connecting to sql user', process.env.DB_USER);
console.log('Connecting to sql host', process.env.DB_HOST);

export const sequelize = new Sequelize(process.env.DB_NAME || 'operator_efficiency', process.env.DB_USER, process.env.DB_PASSWORD, {
    dialect: 'mysql',
    host: process.env.DB_HOST,
    port: 3306,
    logging: false
})