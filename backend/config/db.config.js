//require('dotenv').config();

module.exports = {
  HOST: "localhost",
  USER: "CHARLIER",
  PASSWORD: "Charlieradmin7",
  DB: "P7OCCHARLIER",
  dialect: "mysql",
  pool: {
    max: 100,
    min: 0,
    acquire: 10000,
    idle: 5000
  }
};