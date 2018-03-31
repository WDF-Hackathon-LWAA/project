const router = require("express").Router();
const companies = require("../db/models").Company;
const positions = require("../db/models").Position;


router.get('/', (req, res, next) => {
    companies.findAll({
            include: [{ model: positions }]
        })
        .then(comps => {
            res.json(comps);
        })
        .catch(next);
});

router.get('/:size', (req, res, next) => {
    companies.findAll({
            where: {
                size: req.params.size
            }
        }, {
            include: [{ model: positions }]
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
            include: [{ model: positions }]
        })
        .then(comps => {
            res.json(comps)
        })
        .catch(next);
});

module.exports = router;