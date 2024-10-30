const express = require("express");
const launchesRouter = require("./launches/launches.router");
const planetRouter = require("./planets/planets.router");

const api = express.Router();

api.use("/planets", planetRouter);
api.use("/launches", launchesRouter);

module.exports = api;
