// module.exports = app => {
//     const countries = require("../controllers/country.controller.js");
//     const router = require("express").Router();

//     router.get("/", countries.findAll); // Get all countries
//     router.get("/:id", countries.findOne); // Get single country by ID
//     router.post("/", countries.create); // Add a new country
//     // Add routes for update and delete as needed
//     router.put("/:id", countries.update); // Update a country
//     router.delete("/:id", countries.delete); // Delete a country


//     app.use('/api/countries', router);
// };


// country.routes.js
module.exports = app => {
    const countries = require("../controllers/country.controller.js");
    const router = require("express").Router();

    router.get("/", countries.findAll); // Get all countries
    router.get("/:id", countries.findOne); // Get single country by ID
    router.post("/", countries.create); // Add a new country
    router.put("/:id", countries.update); // Update a country
    router.delete("/:id", countries.delete); // Delete a country

    app.use('/api/countries', router);
};
