const Places = require('../models/places.model')
const createError = require('http-errors')

module.exports.list = (req, res, next) => {
    Places.find()
    .then(place => res.json(place))
    .catch(error => next(error))
};


// module.exports.create = (req, res, next) => {
//     Places.create(req.body)
//     .then(places => res.status(201).json(places))
//     .catch(error => next(error))
// }

module.export.create = (req, res, next) => {
    
}