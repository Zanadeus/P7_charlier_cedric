const bcrypt = require('bcrypt');
const { json } = require('express');
const jwt = require('jsonwebtoken');
const profile = require('../models/profiles');
require('dotenv').config();

exports.getOneProfile = (req, res, next) => {
  profile.findOne({pseudo: req.params.pseudo})
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
  profile.findOneAndUpdate({ pseudo: req.body.user.lastPseudo }, { ...req.body.user }, {new: true})
  .then(() => res.status(200).json(
    { 
      message: `Objet modifié !`,
      ...req.body.user
    }))
  .catch(error => res.status(400).json({ error }));
};

/*
exports.modifyProfile = (req, res, next) => {
  const profileObject = req.file ?
  {
    ...JSON.parse(req.body.profile),
    imageUrl: `${req.protocol}://${req.get('host')}/pictures/${req.file.filename}`
    //imageUrl: `${req.protocol}://127.0.0.1:8081/backend/pictures/${req.file.filename}`,
  } : { ...req.body };
  if (res.locals.profileId !== profileObject.profileId) 
  {
    return res.status(403).json({ message : 'Invalid profile ID' });
  }
  profile.updateOne({ pseudo: req.body.user.pseudo }, { ...req.body.user })
  .then(() => res.status(200).json(
    { 
      message: 'Objet modifié !',
      profile: profileObject
    }))
  .catch(error => res.status(400).json({ error }));
};
*/