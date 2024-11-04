module.exports = app => {
    const movies = require("../controllers/movie.controller.js");

    var router = require("express").Router();

    // Retrieve all unique Years
    router.get("/years", movies.findYears);  // Pastikan rute ini didefinisikan lebih dulu

    // Retrieve movies by year
    router.get("/years/:year", movies.findByYear);  

    // Retrieve all Movies
    router.get("/", movies.findAll);

    // Retrieve a single Movie with id
    router.get("/:id", movies.findOne);

    // Create a new Movie
    router.post("/", movies.create);

    app.use('/api/movies', router);
}