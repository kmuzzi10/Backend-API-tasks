import { Sequelize } from "sequelize";
import dotenv from 'dotenv';


dotenv.config();

//use your username and pass to access database
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.USERNAME,
  process.env.PASSWORD,
  {
    dialect: 'mysql',
    host: process.env.HOST
  }
);

export default sequelize;
