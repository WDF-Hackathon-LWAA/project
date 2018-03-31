const router = require("express").Router();
const positions = require("../db/models").Position;
const company = require("../db/models").Company;

router.get('/', (req, res, next) => {
    positions
        .findAll({
            include: [{ model: company }]
        })
        .then(jobs => {
            res.json(jobs)
        })
        .catch(next);
});

// router.post('/:id', (res, req, next) => {
//   req.body.companyId =
//   positions.create(req.body)

// })

router.get('/:level', (req, res, next) => {
    positions.findAll({
            where: {
                level: req.params.level
            }
        }, {
            include: [{ model: company }]
        })
        .then(jobs => {
            res.json(jobs)
        })
        .catch(next);
});


module.exports = router;