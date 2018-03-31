const router = require('express').Router();
module.exports = router;
const Seeker = require('../db/models/seeker')
const Company = require('../db/models/company')
const User = require('../db/models').User


router.post('/login/applicant', (req, res, next) => {
  Seeker.findOne({
    where: {email: req.body.email},
    include: [{
      all: true,
      nested: true
    }]
  })
    .then(user => {
      console.log('req.body', req.body)
      if (!user) {
        res.status(401).send('User not found')
      } else if (!user.correctPassword(req.body.password)) {
        res.status(401).send('Incorrect password')
      } else {
        req.login(user, err => (err ? next(err) : res.json(user)))
      }
    })
    .catch(next)
})

router.post('/login/company', (req, res, next) => {
  Company.findOne({
    where: {email: req.body.email},
    include: [{
      all: true,
      nested: true
    }]
  })
    .then(user => {
      console.log('req.body', req.body)
      if (!user) {
        res.status(401).send('User not found')
      } else if (!user.correctPassword(req.body.password)) {
        res.status(401).send('Incorrect password')
      } else {
        req.login(user, err => (err ? next(err) : res.json(user)))
      }
    })
    .catch(next)
})

router.post('/signup/applicant', (req, res, next) => {
  User.create({
    userType: 'company'
  })
  .then(person => {
    req.body.UserId = person.id
    return req.body
  })
  .then(body => {
    Seeker.create(body)
      .then(user => {
        req.login(user, err => (err ? next(err) : res.json(user)))
      })
      .catch(err => {
        if (err.name === 'SequelizeUniqueConstraintError') {
          res.status(401).send('User already exists')
        } else {
          next(err)
        }
      })
  })
  .catch(next);
})

router.post('/signup/company', (req, res, next) => {
  User.create({
    userType: 'company'
  })
  .then(person => {
    req.body.UserId = person.id
    return req.body
  })
  .then(body => {
    Company.create(body)
      .then(user => {
        req.login(user, err => (err ? next(err) : res.json(user)))
      })
      .catch(err => {
        if (err.name === 'SequelizeUniqueConstraintError') {
          res.status(401).send('User already exists')
        } else {
          next(err)
        }
      })
  })
  .catch(next);
})

router.post('/logout', (req, res) => {
  req.logout()
  res.redirect('/')
})
