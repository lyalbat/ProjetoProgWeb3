require("dotenv").config();
const penv = process.env;

module.exports = {
  development: {
    username: penv.DB_USER,
    password: penv.DB_PWD,
    database: penv.DB_NAME,
    host: penv.DB_HOST,
    dialect: penv.DB_DIALECT,
    logging: true,
  },
  test: {
    username: penv.DB_USER,
    password: penv.DB_PWD,
    database: penv.DB_NAME,
    host: penv.DB_HOST,
    dialect: penv.DB_DIALECT,
    logging: true,
  },
  production: {
    username: penv.DB_USER,
    password: penv.DB_PWD,
    database: penv.DB_NAME,
    host: penv.DB_HOST,
    dialect: penv.DB_DIALECT,
    logging: true,
  },
};
