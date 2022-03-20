const express = require('express');
const app = express();
const path = require('path');
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require('express-mongo-sanitize');
require('dotenv').config();

const db = require("./models/index.js");
db.sequelize.sync({ force: false }).then(() => {
  console.log("Synced to DB !");
});

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
  windowMs: 5 * 60 * 1000, // 5 minutes
  max: 300 // limiter à 300 requêtes, soit 1req/s
});
app.use(antiDDOS);
const antiForcageId = rateLimit({
  windowMs: 15 * 60 * 1000, //15min
  max: 15 //1req/min
});

//equivalent body-parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//protection contre injections
app.use(mongoSanitize());

//files path
const accountRoads = require('./roads/accounts');
const profileRoads = require('./roads/profiles')
const postsRoads = require('./roads/posts');
const commentsRoads = require('./roads/comments');

//API path
app.use('/pictures', express.static(path.join(__dirname, 'pictures')));
app.use('/api/account', antiForcageId, helmet(), accountRoads);
app.use('/api/profile', helmet(), profileRoads);
app.use('/api/post', helmet(), postsRoads);
app.use('/api/comment', helmet(), commentsRoads);

module.exports = app;