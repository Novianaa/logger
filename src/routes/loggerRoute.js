const express = require("express")
const router = express.Router()
const { postLogger} = require('../controllers/loggerController')

router.post('/', postLogger)


module.exports = router