const router = require('express').Router();
const apiRoute = require('./api');


router.use('/workouts', apiRoute);



module.exports = router;