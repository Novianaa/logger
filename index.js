require('dotenv').config();
const express = require('express');
const bodyParser = require("body-parser");
const helmet = require('helmet');

const app = express()
const PORT = process.env.PORT || 5000
// const PORT = port
const router = require('./src/routes/index')

app.use(helmet({
  crossOriginResourcePolicy: false,
}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', router)
app.use('/*logger', (req, res) => {
  res.status(404).send('URL not found!')
})

app.listen(PORT, () => {
  console.log(`logger listening on port ${PORT}`)
})