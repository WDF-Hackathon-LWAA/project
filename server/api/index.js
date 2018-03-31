const router = require('express').Router();
module.exports = router;

router.use('/seekers', require('./seekers'));
router.use('/positions', require('./positions'));
router.use('/companies', require('./companies'));
// router.use('/auth', require('../auth'));
