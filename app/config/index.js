const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  port: process.env.PORT,
  secret: process.env.SECRET,
  database: {
    mysql: {
      host: process.env.DB_MYSQL_HOST,
      user: process.env.DB_MYSQL_USER,
      database: process.env.DB_MYSQL_NAME,
      password: process.env.DB_MYSQL_PASSWORD,
      timezone: process.env.DB_MYSQL_TIMEZONE,
    },
  },
};
