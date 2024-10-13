const db = require("../models");
const Genre = db.genre;
const Movie = db.movie;

exports.findAll = (req, res) => {
    Genre.findAll()
    .then(data => {
        console.log(JSON.stringify(data, null, 2));
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
        message:
            err.message || "Some error occurred while retrieving tutorials."
        });
    });
}

exports.findWithMovies = (req, res) => {
    const genre_id = req.params.id;

    Genre.findOne({
        where: { genre_id: genre_id },
        include: [
            {
                model: Movie,
                through: {
                    attributes: [],
                },
            },
        ]
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