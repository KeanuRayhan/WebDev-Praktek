module.exports = app => {
    const movies = require("../controllers/movie.controller.js");

    var router = require("express").Router();

    // Retrieve all Movies
    router.get("/", movies.findAll);

    // Retrieve a single Tutorial with id
    router.get("/:id", movies.findOne);

    app.use('/api/movies', router);
}