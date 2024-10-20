module.exports = app => {
    const countries = require("../controllers/country.controller.js");

    var router = require("express").Router();

    // Retrieve all Country
    router.get("/", countries.findAll);

    app.use('/api/countries', router);
}