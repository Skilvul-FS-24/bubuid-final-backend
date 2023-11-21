const express = require('express');
const { getAllArtikel, getArtikelById, addNewArtikel, deleteArtikel, updateArtikel } = require('../controllers/artikel.controller');
const route = express.Router()


route.get ("/", getAllArtikel)
route. get ("/:id", getArtikelById)
route.post ("/", addNewArtikel)
route.delete ("/:id", deleteArtikel)
route.put ("/:id", updateArtikel)

module. exports = route