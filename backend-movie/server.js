const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");
const MovieController = require("./app/controllers/movie.controller");

// Model untuk Users
const User = db.sequelize.define("Users", {
  user_id: {
    type: db.Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  username: {
    type: db.Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: db.Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: db.Sequelize.STRING,
    allowNull: false
  },
  role: {
    type: db.Sequelize.ENUM('USER', 'ADMIN'),
    allowNull: false
  },
  created_at: {
    type: db.Sequelize.DATE,
    defaultValue: db.Sequelize.NOW
  }
});

// Sinkronisasi database
db.sequelize.sync({ force: false }).then(() => {
    console.log("Synced db.");
    initial(); // Panggil fungsi inisialisasi role
});

// Fungsi untuk inisialisasi role
function initial() {
  User.findOrCreate({
    where: { username: "defaultUser", email: "user@example.com", password: "password", role: "USER" },
  });

  User.findOrCreate({
    where: { username: "adminUser", email: "admin@example.com", password: "password", role: "ADMIN" },
  });
}

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

// Routes
require("./app/routes/movie.routes")(app);
require("./app/routes/genre.routes")(app);
require("./app/routes/platform.routes")(app);
require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

