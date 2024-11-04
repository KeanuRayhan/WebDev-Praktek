const { where } = require("sequelize");
const db = require("../models");
const multer = require("multer");
const path = require("path");
const Movie = db.movie;
const Genre = db.genre;
const Actor = db.actor;
const Op = db.Sequelize.Op;
const Review = db.review;
const User = db.user;
const Platform = db.platform;
const Country = db.country;
const Award = db.award;

// Konfigurasi penyimpanan file upload
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/movies/'); // Pastikan folder ini sudah ada
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Menambahkan timestamp untuk menghindari duplikasi
    }
});

// Inisialisasi multer dengan konfigurasi storage
const upload = multer({ storage: storage });

exports.findAll = (req, res) => {
    const query = req.query.query;

    var condition = query ? {
        [Op.or]: [
            { title: { [Op.iLike]: `%${query}%` } },
            { '$Actors.actor_name$': { [Op.iLike]: `%${query}%` } } // Pencarian berdasarkan nama aktor
        ]
    } : null;

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
            {
                model: Platform,
                through: {
                    attributes: [],
                },
            },
            {
                model: Country,
                as: "country",
                attributes: ["country_name"],
            },
        ]
    })
    .then(movies => {
        if (condition) {
            const movieIds = movies.map(movie => movie.movie_id);

            return Movie.findAll({
                where: { movie_id: movieIds },
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
                    {
                        model: Platform,
                        through: {
                            attributes: [],
                        },
                    },
                ],
            });
        }
        return movies;
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
            {
                model: Platform,
                through: {
                    attributes: [],
                },
            },
            {
                model: Review,
                as: "reviews",
                include: [
                    {
                        model: User,
                        as: "user",
                        attributes: ["username"],
                    }
                ]
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

exports.findYears = (req, res) => {
    Movie.findAll({
        attributes: [[db.Sequelize.fn('DISTINCT', db.Sequelize.col('year')), 'year']],
        order: [['year', 'DESC']]
    })
    .then(data => {
        const years = data.map(item => item.year); // Mengambil nilai tahun dari hasil query
        res.send({ years }); // Mengirim data tahun ke frontend
    })
    .catch(err => {
        console.error("Error saat mengambil tahun:", err);
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving years."
        });
    });
};

exports.findByYear = (req, res) => {
    const year = req.params.year;  // Ambil parameter tahun dari URL

    Movie.findAll({
        where: { year: year },  // Filter berdasarkan tahun
        include: [
            {
                model: Genre,
                through: { attributes: [] },
            },
            {
                model: Actor,
                through: { attributes: [] },
            },
            {
                model: Platform,
                through: { attributes: [] },
            },
        ]
    })
    .then(data => {
        if (data.length > 0) {
            res.send(data);
        } else {
            res.status(404).send({
                message: `No movies found for year ${year}.`
            });
        }
    })
    .catch(err => {
        console.error("Error saat mengambil data:", err);
        res.status(500).send({
            message: "Error retrieving movies for year " + year
        });
    });
};

exports.create = [
    upload.single('url_photo'),
    (req, res) => {
        const { title, year, synopsis, link_trailer, status } = req.body;

        // Ambil URL dari file yang diupload
        const url_photo = req.file ? req.file.path : null;

        // Mengonversi input menjadi array jika diperlukan
        const awardIds = req.body.awardIds ? req.body.awardIds.split(',').map(id => id.trim()) : [];
        const genres = req.body.genres ? req.body.genres.split(',').map(id => id.trim()) : [];
        const actors = req.body.actors ? req.body.actors.split(',').map(id => id.trim()) : [];
        const platforms = req.body.platforms ? req.body.platforms.split(',').map(id => id.trim()) : [];

        Movie.create({
            title,
            url_photo,
            year,
            synopsis,
            link_trailer,
            status: 'approved',
            country_id: req.body.country_id
        })
        .then(movie => {
            const promises = []; // Array untuk menyimpan promise

            if (awardIds && awardIds.length > 0) {
                promises.push(movie.addAwards(awardIds));
            }

            if (genres) {
                promises.push(movie.setGenres(genres)); 
            }

            if (actors) {
                promises.push(movie.setActors(actors));
            }

            if (platforms) {
                promises.push(movie.setPlatforms(platforms)); // setPlatforms menggunakan instance movie
            }

            return Promise.all(promises);
        })
        .then(() => {
            res.status(201).send({
                message: "Movie was created successfully."
            });
        })
        .catch(err => {
            console.error("Error saat membuat movie: ", err);
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Movie."
            });
        });
    }
];