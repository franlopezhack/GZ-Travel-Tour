const createError = require('http-errors')
const express = require('express');
const router = express.Router();
const places = require('../controllers/places.controller.js')


router.get("/places", places.list);
router.post("/places", places.create);



router.use((req, res, next) => next(createError(404, 'Route not found')));


router.use((error, req, res, next) => {
    const data= {
        message: error.message
    };
    res.status(error.status).json(data)
})

module.exports = router;