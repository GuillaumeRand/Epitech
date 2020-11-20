const express = require("express");
const router = express.Router()

const {
    getBook,
    deleteBook,
    patchBook,
    createBook
} = require('../controllers/books/index'); //Déconstruction de l'objet contenu dans module.js


router.get("/", getBook);
router.post("/", createBook);
router.patch("/:id", patchBook);
router.delete("/:id", deleteBook);

module.exports = router;