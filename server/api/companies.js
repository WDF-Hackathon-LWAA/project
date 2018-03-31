const router = require("express").Router();
const companies = require("../db/models").Company;
const positions = require("../db/models").Position;
const users = require('../db/models').User

router.get('/', (req, res, next) => {
    companies.findAll({
            include: [{ all: true }]
        })
        .then(comps => {
            res.json(comps);
        })
        .catch(next);
});

router.post('/', (req, res, next) => {
    users.create({
            type: 'company'
        })
        .then(comp => {
            req.body.UserId = comp.id
            return companies.create(req.body)
        })
        .then(resul => {
            res.json(resul)
        })
        .catch(next);
})

router.post('/newPosition', (req, res, next) => {
    users.findById(req.user.id)
        .then(user => {
            return companies.findOne({
                where: {
                    UserId: user.id
                }
            })
        })
        .then(com => {
            req.body.companyId = com.id
            return positions.create(req.body)
        })
        .then(position => {
            res.json(position)
        })
        .catch(next);
})

router.get('/:size', (req, res, next) => {
    companies.findAll({
            where: {
                size: req.params.size
            }
        }, {
            include: [{ all: true }]
        })
        .then(comps => {
            res.json(comps)
        })
        .catch(next);
});

router.get('/:industry', (req, res, next) => {
    companies.findAll({
            where: {
                size: req.params.industry
            }
        }, {
            include: [{ all: true }]
        })
        .then(comps => {
            res.json(comps)
        })
        .catch(next);
});

module.exports = router;