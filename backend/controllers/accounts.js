//Fonctionnement du code
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const db = require("../models");
const Profile = db.profiles;
const Op = db.Sequelize.Op;

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
    const profile = 
    {
      //id: req.body.userName + Date.Now(),
      admin: 0,
      userName: req.body.userName,
      email: req.body.email,
      password: hash
    };
    Profile.create(profile)
    .then((data) => res.status(201).json({ message: 'Utilisateur créé !', data }))
    .catch(error => res.status(400).json({ error }))
  })
  .catch(error => res.status(500).json({ error }));
};

exports.login = (req, res, next) => {
  console.log(req.body);
  Profile.findOne({ where: {email: req.body.email }})
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
            message: 'Utilisateur connecté !',
            user: myUser,
            userId: myUser._id,
            
            token: jwt.sign(
              { userId: myUser._id },
              process.env.ACCESS_TOKEN_SECRET,
              { expiresIn: '1800s' }
            )
          });
        })
        .catch(error => res.status(500).json('erreur1 depuis accounts.js :' + { error }));
    })
    .catch(error => res.status(500).json('erreur2 depuis accounts.js :' +{ error }));
};
