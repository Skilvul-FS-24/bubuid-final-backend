const express = require("express");
const { getAllUser, getUserById } = require("../controllers/user.controller");
const route = express.Router()

route.get("/", getAllUser)
route.get("/:id", getUserById)

module.exports = route