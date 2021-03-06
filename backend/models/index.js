const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.profiles = require("./profiles")(sequelize, Sequelize);
db.posts = require("./post")(sequelize, Sequelize);
db.comments = require("./comment")(sequelize, Sequelize);

db.profiles.hasMany(db.posts);
db.posts.belongsTo(db.profiles, {
  foreignKey: "profileId",
  as: "profile"
});

db.posts.hasMany(db.comments);
db.comments.belongsTo(db.posts, {
  foreignKey: "postId",
  as: "post"
});

db.profiles.hasMany(db.comments);
db.comments.belongsTo(db.profiles, {
  foreignKey: "profileId",
  as: "profile"
})

module.exports = db;
