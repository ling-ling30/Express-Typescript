import { notFound } from "../middleware/notfound";
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const routes = require("./routes");

const app = express();

/**
 * middleware
 */
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);
app.use(notFound);
module.exports = app;
