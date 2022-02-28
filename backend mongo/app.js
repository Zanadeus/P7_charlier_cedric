const express = require('express');
const app = express();
//const mongoose = require('mongoose');
const { Sequelize } = require('sequelize');
const path = require('path');
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require('express-mongo-sanitize');
require('dotenv').config();

//Connection à la BDD
const sequelize = new Sequelize("P7OCCHARLIER", "CHARLIER", "Charlieradmin7", {
  dialect: "mysql",
  host: "localhost"
});
try 
{
  sequelize.authenticate();
  console.log('Connecté à la base de données MySQL!');
} 
catch (error) {
  console.error('Impossible de se connecter, erreur suivante :', error);
}


/*
mongoose.connect(process.env.MONGO_LOGIN,
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));
*/

//Pouvoir effectuer les requètes trans-serveur (host:3000 et host:4200)
app.use((req, res, next) => 
{
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  res.setHeader("Access-Control-Allow-Credentials", "true");
  //gestion du preflight, à recontrôler avant mise en production
  if (req.method === "OPTIONS") 
  {
    return res.status(200).end();
  }
  return next();
});


//limiter le nombre de requêtes (attaques DDOS)
const antiDDOS = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 150 // limiter à 100 requêtes
});
app.use(antiDDOS);
const antiForcageId = rateLimit({
  windowMs: 5 * 60 * 1000,
  max: 5
});

//equivalent body-parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//protection contre injections
app.use(mongoSanitize());

//files path
const userRoads = require('./roads/users');
const profileRoads = require('./roads/profiles')
const postsRoads = require('./roads/posts');

//API path
app.use('/pictures', express.static(path.join(__dirname, 'pictures')));
app.use('/api/auth', /*antiForcageId,*/ helmet(), userRoads);
app.use('/api/profile', helmet(), profileRoads);
app.use('/api/posts', helmet(), postsRoads);

module.exports = app;