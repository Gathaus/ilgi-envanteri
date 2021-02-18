/**
 * Module dependencies
 */
const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const routes = require("./routes");
const bodyParser = require("body-parser")
/**
 * Load environment variables
 */
dotenv.config({ path: "./config.env" });

const PORT = process.env.PORT;
const app = express();

/**
 * Routes
 */
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
