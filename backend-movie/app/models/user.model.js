module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("Users", {
      user_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
      },
      username: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      }
    });
  
    return User;
  };
