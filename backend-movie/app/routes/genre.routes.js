module.exports = app => {
    const genres = require("../controllers/genre.controller.js");

    var router = require("express").Router();

    // Retrieve all Genres
    router.get("/", genres.findAll);

    // Retrieve a single Genre with id
    router.get("/:id", genres.findWithMovies);

    app.use('/api/genres', router);
}