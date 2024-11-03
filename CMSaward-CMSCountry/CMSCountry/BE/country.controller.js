// const db = require("../models");
// const Country = db.country;

// // Create a new Country
// exports.create = async (req, res) => {
//     try {
//         if (!req.body.country_name) {
//             return res.status(400).json({ message: "Country name cannot be empty!" });
//         }

//         const country = { country_name: req.body.country_name };
//         const newCountry = await Country.create(country);
//         res.status(201).json(newCountry);
//     } catch (error) {
//         res.status(500).json({ message: error.message || "Error creating Country." });
//     }
// };

// // Retrieve all Countries
// exports.findAll = async (req, res) => {
//     try {
//         const data = await Country.findAll();
//         res.status(200).json(data);
//     } catch (error) {
//         res.status(500).json({ message: error.message || "Error retrieving countries." });
//     }
// };

// // Retrieve a single Country by ID
// exports.findOne = async (req, res) => {
//     const country_id = req.params.id;
//     try {
//         const country = await Country.findByPk(country_id);
//         if (country) res.status(200).json(country);
//         else res.status(404).json({ message: `Cannot find Country with id=${country_id}.` });
//     } catch (error) {
//         res.status(500).json({ message: "Error retrieving Country with id=" + country_id });
//     }
// };

// // Other CRUD methods (update, delete) would follow a similar pattern.

// // Update a Country by ID
// exports.update = async (req, res) => {
//     const country_id = req.params.id;
//     if (!req.body.country_name) {
//         return res.status(400).json({ message: "Country name cannot be empty!" });
//     }
//     try {
//         const [updated] = await Country.update({ country_name: req.body.country_name }, {
//             where: { country_id: country_id }
//         });
//         if (updated) {
//             const updatedCountry = await Country.findByPk(country_id);
//             res.status(200).json(updatedCountry);
//         } else {
//             res.status(404).json({ message: `Cannot find Country with id=${country_id}.` });
//         }
//     } catch (error) {
//         res.status(500).json({ message: error.message || "Error updating Country." });
//     }
// };

// // Delete a Country by ID
// exports.delete = async (req, res) => {
//     const country_id = req.params.id;
//     try {
//         const deleted = await Country.destroy({
//             where: { country_id: country_id }
//         });
//         if (deleted) {
//             res.status(204).send();
//         } else {
//             res.status(404).json({ message: `Cannot find Country with id=${country_id}.` });
//         }
//     } catch (error) {
//         res.status(500).json({ message: error.message || "Error deleting Country." });
//     }
// };

///////////////////////////////////////


// country.controller.js
const db = require("../models");
const Country = db.country;


exports.create = async (req, res) => {
    try {
        if (!req.body.country_name) {
            return res.status(400).json({ message: "Country name cannot be empty!" });
        }

        const country = { country_name: req.body.country_name };
        const newCountry = await Country.create(country);
        res.status(201).json(newCountry);
    } catch (error) {
        console.error("Error saat menambahkan Country:", error); // Tambahkan ini untuk log error
        res.status(500).json({ message: error.message || "Error creating Country." });
    }
};

// Retrieve all Countries
exports.findAll = async (req, res) => {
    try {
        const data = await Country.findAll();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: error.message || "Error retrieving countries." });
    }
};

// Retrieve a single Country by ID
exports.findOne = async (req, res) => {
    const country_id = req.params.id;
    try {
        const country = await Country.findByPk(country_id);
        if (country) res.status(200).json(country);
        else res.status(404).json({ message: `Cannot find Country with id=${country_id}.` });
    } catch (error) {
        res.status(500).json({ message: "Error retrieving Country with id=" + country_id });
    }
};

// Update a Country by ID
exports.update = async (req, res) => {
    const country_id = req.params.id;
    if (!req.body.country_name) {
        return res.status(400).json({ message: "Country name cannot be empty!" });
    }
    try {
        const [updated] = await Country.update({ country_name: req.body.country_name }, {
            where: { country_id: country_id }
        });
        if (updated) {
            const updatedCountry = await Country.findByPk(country_id);
            res.status(200).json(updatedCountry);
        } else {
            res.status(404).json({ message: `Cannot find Country with id=${country_id}.` });
        }
    } catch (error) {
        res.status(500).json({ message: error.message || "Error updating Country." });
    }
};

// Delete a Country by ID
exports.delete = async (req, res) => {
    const country_id = req.params.id;
    try {
        const deleted = await Country.destroy({
            where: { country_id: country_id }
        });
        if (deleted) {
            res.status(204).send();
        } else {
            res.status(404).json({ message: `Cannot find Country with id=${country_id}.` });
        }
    } catch (error) {
        res.status(500).json({ message: error.message || "Error deleting Country." });
    }
};
