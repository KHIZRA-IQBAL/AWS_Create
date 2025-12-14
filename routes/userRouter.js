const express = require("express")
const {createFunc} = require("../controller/controller")
const {createmiddleware} = require("../middlewares/create.validation.middleware")

const router = express.Router()

router.post("/create",createmiddleware , createFunc)

module.exports = router