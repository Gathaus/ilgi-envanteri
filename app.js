/**
 * Module dependencies
 */
const express = require("express");
const path = require("path");
const dotenv = require("dotenv").config({
  path: path.join(__dirname, "config.env"),
});
const routes = require("./routes");
const session = require("express-session");
const passport = require("passport");
/**
 * Load environment variables
 */
const PORT = process.env.PORT;
var cors = require("cors");
const app = express();

/**
 * Express configuration
 */

app.use(cors());

app.use(
  session({
    resave: true,
    saveUninitialized: true,
    secret: process.env.SESSION_SECRET || "kara basarak kaymam",
    cookie: {
      maxAge: 1 * 60 * 60 * 1000,
    },
  })
);

// Enable body parser post data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(passport.initialize());
app.use(passport.session());

app.use("/", routes);
app.use(express.static("admin-panel/build"));
app.use(express.static(path.join(__dirname, "public")));

/**
 * Express configuration
 */

// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'pug');

app.listen(8080, () => {
  console.log(`App started on ${PORT} `);
});
