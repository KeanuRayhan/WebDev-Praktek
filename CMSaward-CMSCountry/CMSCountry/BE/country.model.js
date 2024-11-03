
// module.exports = (sequelize, DataTypes) => {
//     const Country = sequelize.define("Country", {
//         country_id: {
//             type: DataTypes.INTEGER,
//             primaryKey: true,
//             autoIncrement: true
//         },
//         country_name: { // ganti name ke country_name sesuai controller
//             type: DataTypes.STRING,
//             allowNull: false
//         }
//     }, {
//         freezeTableName: true,
//         timestamps: false
//     });

//     return Country;
// };

module.exports = (sequelize, DataTypes) => {
    const Country = sequelize.define("Country", {
        country_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,  // Pastikan ini ada
            allowNull: false      // Biasanya ini juga diatur
        },
        country_name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        freezeTableName: true,
        timestamps: false
    });

    return Country;
};

