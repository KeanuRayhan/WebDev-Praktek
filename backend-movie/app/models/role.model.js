module.exports = (sequelize, Sequelize) => {
  const Role = sequelize.define("Role", { // Ganti "Role" jika nama tabel berbeda
      user_id: {
          type: Sequelize.INTEGER,
          primaryKey: true
      },
      username: {
          type: Sequelize.STRING
      },
      role: {
          type: Sequelize.ENUM('USER', 'ADMIN'), // Mendefinisikan ENUM dengan nilai USER dan ADMIN
          allowNull: false // Menandakan bahwa role tidak boleh null
      }
  });

  return Role;
};
