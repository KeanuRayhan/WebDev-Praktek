const { where } = require("sequelize");
const db = require("../models");
const Movie = db.movie;
const Genre = db.genre;
const Actor = db.actor;
const Op = db.Sequelize.Op;
const Review = db.review;
const User = db.user;
const Platform = db.platform;

exports.findAll = (req, res) => {
    const query = req.query.query;

    var condition = query ? {
        [Op.or]: [
            { title: { [Op.iLike]: `%${query}%` } },
            { '$Actors.actor_name$': { [Op.iLike]: `%${query}%` } } // Pencarian berdasarkan nama aktor
        ]
    } : null;

    Movie.findAll({
        where: condition,
        include: [
            {
                model: Genre,
                through: {
                    attributes: [],
                },
            },
            {
                model: Actor,
                through: {
                    attributes: [],
                },
            },
        ]
    })
    .then(movies => {
        if (condition) {
            const movieIds = movies.map(movie => movie.movie_id);

            return Movie.findAll({
                where: { movie_id: movieIds },
                include: [
                    {
                        model: Genre,
                        through: {
                            attributes: [],
                        },
                    },
                    {
                        model: Actor,
                        through: {
                            attributes: [],
                        },
                    },
                ],
            });
        }
        return movies;
    })
    .then(data => {
        console.log(JSON.stringify(data, null, 2));
        res.send(data);
    })
    .catch(err => {
        console.error("Error saat mengambil data:", err);
        res.status(500).send({
        message:
            err.message || "Some error occurred while retrieving tutorials."
        });
    });
}

exports.findOne = (req, res) => {
    const id = req.params.id;

    Movie.findByPk(id, {
        include: [
            {
                model: Genre,
                through: {
                    attributes: [],
                },
            },
            {
                model: Actor,
                through: {
                    attributes: [],
                },
            },
            {
                model: Platform,
                through: {
                    attributes: [],
                },
            },
            {
                model: Review,
                as: "reviews",
                include: [
                    {
                        model: User,
                        as: "user",
                        attributes: ["username"],
                    }
                ]
            },
        ]
    })
    .then(data => {
        if (data) {
            res.send(data);
        } else {
            res.status(404).send({
                message: `Cannot find Movie with id=${id}.`
            });
        }
    })
    .catch(err => {
        console.error("Error saat mengambil data:", err);
        res.status(500).send({
            message: "Error retrieving Movie with id=" + id
        });
    });
};
