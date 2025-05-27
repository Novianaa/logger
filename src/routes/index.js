const express = require("express");
const app = express()
const logger = require('./loggerRoute')

app.use('/logger', logger)

module.exports = app