module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("Users", {
        user_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: DataTypes.STRING,
        },
        email: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING
        },
        role: {  // Menambahkan kolom role
            type: DataTypes.ENUM('user', 'admin'),  // ENUM dengan nilai USER dan ADMIN
            allowNull: false
        },
    }, {
        freezeTableName: true,
        timestamps: false
    });

    return User;
};