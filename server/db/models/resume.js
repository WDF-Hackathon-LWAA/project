const Sequelize = require('sequelize')
const db = require('../db')

const Resume = db.define('resume', {
  experience: {
    type: Sequelize.TEXT
  },
  skills: {
    type: Sequelize.TEXT
  },
  education: {
    type: Sequelize.TEXT
  }
})

module.exports = Resume
