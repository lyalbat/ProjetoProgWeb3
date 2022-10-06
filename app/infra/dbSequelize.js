const { Sequelize } = require("sequelize");
const { DB_HOST, DB_PORT, DB_USER, DB_PWD, DB_NAME, DB_DIALECT } =
  require("dotenv").config().parsed;

const sequelize = new Sequelize({
  dialect: DB_DIALECT,
  database: DB_NAME,
  host: DB_HOST,
  username: DB_USER,
  password: DB_PWD,
  port: DB_PORT,
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Sucess in connecting to the database.");
  })
  .catch((error) => {
    "Unable to connect to the database:", error;
  });

module.exports = sequelize;
