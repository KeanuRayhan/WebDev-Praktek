module.exports = (sequelize, DataTypes) => {
    const Movie = sequelize.define("Movies", {
      movie_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING
      },
      url_photo: {
        type: DataTypes.STRING
      },
      year: {
        type: DataTypes.STRING
      },
      synopsis: {
        type: DataTypes.STRING
      },
    }, {
      freezeTableName: true,
      timestamps: false
    });
  
    return Movie;
  };