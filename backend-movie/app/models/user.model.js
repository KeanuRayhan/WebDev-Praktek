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
    },
    role: {  // Menambahkan kolom role
      type: Sequelize.ENUM('USER', 'ADMIN'),  // ENUM dengan nilai USER dan ADMIN
      allowNull: false
    }
  }, {
    freezeTableName: true,
    timestamps: false
  });

  return User;
};

