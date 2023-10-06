import { Dialect, Sequelize } from 'sequelize'
require('dotenv').config();


const dbName = "dao_test";
const dbUser = "root"
const dbHost = "localhost"
const dbDriver = process.env.DB_DRIVER as Dialect
const dbPassword = "12345678";

const sequelizeConnection = new Sequelize(dbName, dbUser, dbPassword, {
  host: dbHost,
  dialect: "mysql"
})

export default sequelizeConnection