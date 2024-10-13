module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("Users", {
      user_id: {
        type: Sequelize.INTEGER,
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
    }, {
        freezeTableName: true,
        timestamps: false
    });
  
    return User;
  };
