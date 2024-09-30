const { where } = require("sequelize");
const db = require("../models");
const Movie = db.movie;
const Genre = db.genre;
const Actor = db.actor;
const Op = db.Sequelize.Op;

exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title ? { title: { [Op.iLike]: `%${title}%` } } : null;

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