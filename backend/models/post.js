const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  //userId: { type: String, required: true }, //identifiant utilisateur
  author: { type: String, minLength: 3, required: true }, //créateur du post
  titre: { type: String, minLength: 5, required: true }, //titre du post
  texte: { type: String, default: '', required: true }, //texte de la publication
  creationDate: { type: Number, default: Date.now() },//Date de création du post
  commentNumber: { type: Number, default: '0'}, //nombre de commentaires
  imageUrl: { type: String, default: '' }, //URL de l'image du post

  likes: { type: Number, default: '0', required: false }, //nombre de "likes"
  dislikes: { type: Number, default: '0', required: false }, //nombre de "dislikes"
  usersLiked: { type: [String], default: [], required: false }, //tableau des gens qui ont liké le post
  usersDisliked: { type: [String], default: [], required: false } // tableau des gens qui ont disliké le post
});

module.exports = mongoose.model('Post', postSchema);