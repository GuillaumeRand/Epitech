const authors = require(".");
const Author = require("../../../models/Author");

/**
 * @type {import("express").RequestHandler}
 */
module.exports = function (req, res, next) {
    Author.find().exec().then(users => {
        then(authors => {
                res.status(200).json({
                    authors: []
                });
            })
            .catch(new error())
    })
}