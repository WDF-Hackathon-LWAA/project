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

router.post('/', (req, res, next) => {
    seekers.create(req.body.user)
        .then(person => {
            req.body.resume.seekerId = person.id
            resumes.create(req.body.resume)
            return person
        })
        .then(cand => {
            res.json(cand)
        })
        .catch(next);
})

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