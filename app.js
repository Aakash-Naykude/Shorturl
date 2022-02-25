const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }))
const shortUrlController = require("./src/controller/short.controller");
app.use("/short", shortUrlController);

module.exports = app;
