/**
 * @type {import("express").RequestHandler}
 */
module.exports = function (req, res, next) {
    res.status(203).json({
        books: `Book modified id: ${req.params.id}`
    })
}