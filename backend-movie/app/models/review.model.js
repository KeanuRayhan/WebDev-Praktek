module.exports = (sequelize, DataTypes) => {
    const Review = sequelize.define("Reviews", {
        review_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        comments: {
            type: DataTypes.STRING,
        },
    }, {
        freezeTableName: true,
        timestamps: false
    });

    return Review;
};