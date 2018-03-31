const router = require("express").Router();
const seekers = require("../db/models").Seeker;
const resumes = require("../db/models").Resume;
const users = require('../db/models').User

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
    users.create({
            type: 'seeker'
        })
        .then(coder => {
            req.body.user.UserId = coder.id
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
        .catch(next);
})

router.get('/:seekerId', (req, res, next) => {
    seekers
        .findById({
            where: {
                id: req.params.seekerId
            }
        }, {
            include: [{ all: true }]
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
            include: [{ all: true }]
        })
        .then(people => {
            res.json(people);
        })
        .catch(next);
});

module.exports = router;