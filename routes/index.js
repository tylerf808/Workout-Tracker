const router = require('express').Router();
const apiRoute = require('./api');
const homeRoutes = require('./home');

router.use('/', homeRoutes);
router.use('/api', apiRoute);

module.exports = router;