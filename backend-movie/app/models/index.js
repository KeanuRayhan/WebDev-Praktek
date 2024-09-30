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

db.genre.belongsToMany(db.movie, {
    through: "Movie_genre",
    foreignKey: "genre_id",
});

db.movie.belongsToMany(db.genre, {
    through: "Movie_genre",
    foreignKey: "movie_id",
});

db.actor.belongsToMany(db.movie, {
    through: "Movie_actor",
    foreignKey: "actor_id",
});

db.movie.belongsToMany(db.actor, {
    through: "Movie_actor",
    foreignKey: "movie_id",
});

module.exports = db;