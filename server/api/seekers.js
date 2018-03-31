const router = require('express').Router();
const seekers = require('../db/models').Seeker;


router.get('/', (req, res, next) => {
    seekers.findAll()
        .then(people => {
            res.json(people)
        })
        .catch(next);
});

router.get('/:seekerId', (req, res, next) => {
    seekers.findById(req.params.seekerId)
        .then(person => {
            res.json(person)
        })
        .catch(next);
});

router.get('/:level', (req, res, next) => {
    seekers.findAll({
            where: {
                level: req.params.level
            }
        })
        .then(people => {
            res.json(people)
        })
        .catch(next);
});

module.exports = router;