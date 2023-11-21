const express = require('express');
const route = express.Router()

const artikelRoute = require('./artikel.route');
const userRoute = require('./user.route');
const authRoute = require('./auth.route');

route.get ("/", (req, res) => {
    res.json("selamat datang di express sequelize migration")
})

route.use("/artikel", artikelRoute)
route.use("/users", userRoute)
route.use("/auth", authRoute)

module.exports = route