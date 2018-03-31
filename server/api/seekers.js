const router = require("express").Router();
const seekers = require("../db/models").Seeker;
const resumes = require("../db/models").Resume;

router.get('/', (req, res, next) => {
    seekers
        .findAll({
            include: [{ model: resumes }]
        })
        .then(people => {
            res.json(people);
        })
        .catch(next);
});

router.get('/:seekerId', (req, res, next) => {
    seekers
        .findById({
            where: {
                id: req.params.seekerId
            }
        }, {
            include: [{ model: resumes }]
        })
        .then(person => {
            res.json(person);
        })
        .catch(next);
});

router.get('/:level', (req, res, next) => {
    seekers
        .findAll({
            where: {
                level: req.params.level
            }
        }, {
            include: [{ model: resumes }]
        })
        .then(people => {
            res.json(people);
        })
        .catch(next);
});

module.exports = router;