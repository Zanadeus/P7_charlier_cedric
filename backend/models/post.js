module.exports = (sequelize, Sequelize) => {
  const PostModel = sequelize.define("posts", {
    postId: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true},
    title: { type: Sequelize.STRING, required: true /*,minLength: 5*/},//titre du post
    text: { type: Sequelize.STRING, defaultValue: '', required: true},//texte de la publication
    commentNumber: { type: Sequelize.INTEGER, defaultValue: '0'}, //nombre de commentaires
    imageUrl: { type: Sequelize.STRING, defaultValue: '' }, //URL de l'image du post

    likes: { type: Sequelize.INTEGER, defaultValue: '0', required: false }, //nombre de "likes"
    dislikes: { type: Sequelize.INTEGER, defaultValue: '0', required: false } //nombre de "dislikes"
    //usersLiked: { type: [String], default: [], required: false }, //tableau des gens qui ont liké le post
    //usersDisliked: { type: [String], default: [], required: false } // tableau des gens qui ont disliké le post
  });
  return PostModel;
};