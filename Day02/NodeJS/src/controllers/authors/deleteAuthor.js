/**
 * @type {import("express").RequestHandler}
 */
module.exports = function (req, res, next) {
    console.log(req.params);
    res.status(203).json({
        message: `authors deleted (id: ${req.params.id})` //req.params permet de récupérer les paramètres (id)
    })
}