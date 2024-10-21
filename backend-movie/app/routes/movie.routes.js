module.exports = app => {
    const movies = require("../controllers/movie.controller.js");

    var router = require("express").Router();

    // Retrieve all unique Years
    router.get("/years", movies.findYears);  // Pastikan rute ini didefinisikan lebih dulu

    // Retrieve movies by year
    router.get("/years/:year", movies.findByYear);  

    // Retrieve all Movies
    router.get("/", movies.findAll);

    // Retrieve a single Tutorial with id
    router.get("/:id", movies.findOne);

    app.use('/api/movies', router);
}