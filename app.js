/**
 * Module dependencies
 */
const express = require("express");
const path = require("path");
const dotenv = require("dotenv").config({
  path: path.join(__dirname, "config.env"),
});
const routes = require("./routes");
const bodyParser = require("body-parser");
const session = require("express-session")
/**
 * Load environment variables
 */
const PORT = process.env.PORT;
var cors = require('cors')
const app = express();

/**
 * Express configuration
 */
app.set('trust proxy', 1)

app.use(cors())
app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: process.env.SESSION_SECRET,
  cookie: { maxAge: 1209600000 }, // two weeks in milliseconds
}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/", routes);

/**
 * Express configuration
 */
app.use(express.static(path.join(__dirname, "public")));
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'pug');

app.listen(PORT || 8080, () => {
  console.log(`App started on ${PORT} `);
});
