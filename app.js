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
 const session = require("express-session");
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
     secret: process.env.SESSION_SECRET,
     cookie: { maxAge: 1209600000 }, // two weeks in milliseconds
   })
 );
 app.use(express.urlencoded({ extended: true }));
 app.use(express.json());
 
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
 