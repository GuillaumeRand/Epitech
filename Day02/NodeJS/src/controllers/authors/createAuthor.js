/**
 * @type {import("express").RequestHandler}
 */
module.exports = function (req, res, next) {
    res.status(201).json({
        message: "new authors created"
    })
}