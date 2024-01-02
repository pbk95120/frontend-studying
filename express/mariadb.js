const mysql = require("mysql2");
const dotenv = require("dotenv");
dotenv.config(); // dotenv 컨피그 사용

const connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: process.env.DB_PASSWORD,
  database: "Test",
});

module.exports = connection;
