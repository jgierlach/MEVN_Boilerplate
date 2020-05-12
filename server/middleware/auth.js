const Users = require("../models/User")

module.exports = async (req, res, next) => {
    let token;
    try {
        token = req.header("authorization").split(" ")[1]
    } catch (err) {
        console.error(err)
        return res.status(401).send({ message: "Authorization token invalid" })
    }
    try {
        req.user = await Users.findByToken(token)
        req.token = token
        next()
    } catch (err) {
        res.status(401).send({ message: "Authorization token invalid" })
    }
}