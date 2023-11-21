const express = require('express');
const route = express.Router()

const artikelRoute = require('./artikel.route');


route.get ("/", (req, res) => {
    res.json("selamat datang di express sequelize migration")
})

route.use("/artikel", artikelRoute)

module.exports = route