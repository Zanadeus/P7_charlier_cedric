module.exports = (sequelize, Sequelize) => {
  const ProfileModel = sequelize.define("profiles", {
    idProfile: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true},
    userName: { type: Sequelize.STRING, required: true, unique: true},//allowNull: false
    email: { type: Sequelize.STRING, required: true, unique: true},//allowNull: false
    password: { type: Sequelize.STRING, required: true/*, minLength: 8*/},//allowNull: false
    admin: { type: Sequelize.INTEGER, required: false, defaultValue: '0'},
    imageUrl: { type: Sequelize.STRING, required: false}
  });
  return ProfileModel;
};