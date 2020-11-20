const express = require("express")
const router = express.Router()

const {
    getAuthor,
    createAuthor,
    deleteAuthor,
    patchAuthor
} = require("../controllers/authors/index")


//ENDPOINT
router.get("/", getAuthor);
router.post("/", createAuthor);
router.delete("/:id", deleteAuthor);
router.patch("/:id", patchAuthor);

module.exports = router;