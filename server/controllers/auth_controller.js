const passport = require('passport')
const User = require('../models/user')

const register = (req, res) => {
    User.register(
        new User({
            username: req.body.username, email: req.body.email
        }),
        req.body.password,
        (err) => {
            if (err) {
                res.status(500)
                res.json({
                    error: err
                })
            } else {
                login(req, res)
            }
        }
    )
}


const login = (req, res) => {
    passport.authenticate("local")(req, res, () => {
        res.status(200)
        res.json(req.user)
    })
}

const logout = (req, res) => {
  req.logout()
  res.sendStatus(200)
}



module.exports = { register, login, logout }


