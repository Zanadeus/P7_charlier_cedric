//Fonctionnement du code
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { Sequelize } = require('sequelize');
const user = require('../models/profiles');
require('dotenv').config();

exports.signup = (req, res, next) => 
{
  console.log(req.body);
  if (req.body.password.length < 8 || req.body.password.length > 30)
  {
    return res.status(400).json({ message: 'Your password need to contain 8 to 30 characters' });
  }
  bcrypt.hash(req.body.password, 10)
  .then(hash => 
  {
    /*
    let myUser = new user(
    {
      id: req.body.pseudo + Date.Now(),
      pseudo: req.body.pseudo,
      email: req.body.email,
      password: hash
    });
    myUser.save()
    */
    const myUser = user.create(
    {
      id: req.body.pseudo + Date.Now(),
      pseudo: req.body.pseudo,
      email: req.body.email,
      password: hash
    }, {fields: ['pseudo']})
    .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
    .catch(error => res.status(400).json({ error }))
  })
  .catch(error => res.status(500).json({ error }));
};

exports.login = (req, res, next) => {
  console.log(req.body);
  user.findOne({ email: req.body.email })
    .then(myUser => 
    {
      console.log(myUser);
      if (!myUser) 
      {
        return res.status(401).json({ message: 'wrong email or password' });
      }

      bcrypt.compare(req.body.password, myUser.password)
        .then(valid => {
          if (!valid) {
            return res.status(401).json({ message: 'wrong password or email' });
          }
          //res.setHeader('Authorization', 'Bearer '+ newToken);
          res.status(200).json(
          {
            message: 'Connection réussie !',
            user: myUser,
            userId: myUser._id,
            
            token: jwt.sign(
              { userId: myUser._id },
              process.env.ACCESS_TOKEN_SECRET,
              { expiresIn: '1800s' }
            )
          });
        })
        .catch(error => res.status(500).json('erreur1 depuis users.js :' + { error }));
    })
    .catch(error => res.status(500).json('erreur2 depuis users.js :' +{ error }));
};
