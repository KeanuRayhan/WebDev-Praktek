module.exports = (sequelize, DataTypes) => {
    const Country = sequelize.define("Country", {
        country_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        country_name: {
            type: DataTypes.STRING,
        },
    }, {
        freezeTableName: true,
        timestamps: false
    });

    return Country;
}