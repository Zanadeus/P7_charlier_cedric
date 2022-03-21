module.exports = (sequelize, Sequelize) => {
  const PostModel = sequelize.define("posts", {
    postId: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true},
    title: { type: Sequelize.STRING(100), required: true /*,minLength: 5*/},//titre du post
    text: { type: Sequelize.TEXT, defaultValue: '', required: true},//texte de la publication

    likes: { type: Sequelize.INTEGER, defaultValue: '0', required: false }, //nombre de "likes"
  });
  return PostModel;
};