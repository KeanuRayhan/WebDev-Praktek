module.exports = app => {
    const genres = require("../controllers/genre.controller.js");

    var router = require("express").Router();

    // Retrieve all Genres
    router.get("/", genres.findAll);

    app.use('/api/genres', router);
}