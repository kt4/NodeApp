const User = require('../database/models/User')


module.exports = (req, res, next) => {


    if (req.session.author) {

        return res.redirect('/')

    }


    next()

}