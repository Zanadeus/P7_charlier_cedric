//Fonctionnement du code
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const db = require("../models");
const Profile = db.profiles;
const Op = db.Sequelize.Op;

exports.getOneProfile = (req, res, next) => {
  Profile.findOne(req.params.userName)
  .then(
    (oneProfile) => {
      res.status(200).json(oneProfile);
    }
  )
  .catch(
    (error) => {
      res.status(404).json({
        error: error
      });
    }
  );
};

exports.modifyProfile = (req, res, next) => {
  Profile.update({ 
    userName: req.body.user.userName,
    email: req.body.user.email
   }, { where: {userName: req.body.user.lastPseudo} })
  .then(() => res.status(200).json(
    { 
      message: `Objet modifié !`,
      ...req.body.user
    }))
  .catch(error => res.status(400).json({ error }));
};
