const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

//Creation d'un modèle utilisateur
const userSchema = mongoose.Schema({
  pseudo: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, minLength: 8, required: true },
  admin: { type: Number, default: '0', required: false }, //niveau d'administrateur 0=non
  imageUrl: { type: String, default: '', required: false } //URL de la photo de profil utilisateur
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('user', userSchema);
