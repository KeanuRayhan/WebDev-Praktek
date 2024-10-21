const { where } = require("sequelize");
const db = require("../models");
const Movie = db.movie;
const Genre = db.genre;
const Actor = db.actor;
const Op = db.Sequelize.Op;
const Review = db.review;
const User = db.user;
const Platform = db.platform;
const Country = db.country;

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
            {
                model: Platform,
                through: {
                    attributes: [],
                },
            },
            {
                model: Country,
                as: "country",
                attributes: ["country_name"],
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
                    {
                        model: Platform,
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

exports.findYears = (req, res) => {
    Movie.findAll({
        attributes: [[db.Sequelize.fn('DISTINCT', db.Sequelize.col('year')), 'year']],
        order: [['year', 'DESC']]
    })
    .then(data => {
        const years = data.map(item => item.year); // Mengambil nilai tahun dari hasil query
        res.send({ years }); // Mengirim data tahun ke frontend
    })
    .catch(err => {
        console.error("Error saat mengambil tahun:", err);
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving years."
        });
    });
};


exports.findByYear = (req, res) => {
    const year = req.params.year;  // Ambil parameter tahun dari URL

    Movie.findAll({
        where: { year: year },  // Filter berdasarkan tahun
        include: [
            {
                model: Genre,
                through: { attributes: [] },
            },
            {
                model: Actor,
                through: { attributes: [] },
            },
            {
                model: Platform,
                through: { attributes: [] },
            },
        ]
    })
    .then(data => {
        if (data.length > 0) {
            res.send(data);
        } else {
            res.status(404).send({
                message: `No movies found for year ${year}.`
            });
        }
    })
    .catch(err => {
        console.error("Error saat mengambil data:", err);
        res.status(500).send({
            message: "Error retrieving movies for year " + year
        });
    });
};