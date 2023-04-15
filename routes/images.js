const express = require("express")
const router  =  express.Router()
const { generateImg } = require("../controllers/openaicontroller")


router.post("/", generateImg)

module.exports = router