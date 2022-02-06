const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  userId: { type: String, required: true }, //identifiant utilisateur
  title: { type: String, minLength: 5, required: true }, //titre du post
  author: { type: String, minLength: 3, required: true }, //créateur du post
  creationDate: { type: String },
  description: { type: String, minLength: 10, required: true }, //description de la sauce
  imageUrl: { type: String, required: true }, //URL de l'image du post

  likes: { type: Number, default: '0', required: false }, //nombre de "likes"
  dislikes: { type: Number, default: '0', required: false }, //nombre de "dislikes"
  usersLiked: { type: [String], default: [], required: false }, //tableau des gens qui ont liké le post
  usersDisliked: { type: [String], default: [], required: false } // tableau des gens qui ont disliké le post
});

module.exports = mongoose.model('Post', postSchema);