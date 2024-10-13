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
const DataTypes = Sequelize.DataTypes;

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.movie = require("./movie.model.js")(sequelize, Sequelize);
db.genre = require("./genre.model.js")(sequelize, Sequelize);
db.actor = require("./actor.model.js")(sequelize, Sequelize);
db.review = require("./review.model.js")(sequelize, Sequelize);
db.user = require("./user.model.js")(sequelize, Sequelize);
db.platform = require("./platform.model.js")(sequelize, Sequelize);

// RELATIONSHIPS BETWEEN MOVIE AND GENRE
db.genre.belongsToMany(db.movie, {
    through: "Movie_genre",
    foreignKey: "genre_id",
});

db.movie.belongsToMany(db.genre, {
    through: "Movie_genre",
    foreignKey: "movie_id",
});

// RELATIONSHIPS BETWEEN MOVIE AND ACTOR
db.actor.belongsToMany(db.movie, {
    through: "Movie_actor",
    foreignKey: "actor_id",
});

db.movie.belongsToMany(db.actor, {
    through: "Movie_actor",
    foreignKey: "movie_id",
});

// RELATIONSHIPS BETWEEN MOVIE AND PLATFORM
db.platform.belongsToMany(db.movie, {
  through: "Movie_platform",
  foreignKey: "platform_id",
});

db.movie.belongsToMany(db.platform, {
  through: "Movie_platform",
  foreignKey: "movie_id",
});

// RELATIONSHIPS BETWEEN MOVIE AND REVIEW
db.movie.hasMany(db.review, {
  foreignKey: "movie_id",
  as: "reviews",
});

db.review.belongsTo(db.movie, {
  foreignKey: "movie_id",
  as: "movie",
});

// RELATIONSHIPS BETWEEN USER AND REVIEW
db.user.hasMany(db.review, {
  foreignKey: "user_id",
  as: "reviews",
});

db.review.belongsTo(db.user, {
  foreignKey: "user_id",
  as: "user",
});

module.exports = db;