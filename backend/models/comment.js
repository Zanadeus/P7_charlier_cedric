module.exports = (sequelize, Sequelize) => {
  const CommentModel = sequelize.define("comments", {
    commentId: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true},
    text: { type: Sequelize.STRING, defaultValue: '', required: true},//texte de la publication

    likes: { type: Sequelize.INTEGER, defaultValue: '0', required: false }, //nombre de "likes"
  });
  return CommentModel;
};