const db = require("../models");
const Genre = db.genre;

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