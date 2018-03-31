const Sequelize = require('sequelize')
const db = require('../db')

const Position = db.define('position', {
  title: {
    type: Sequelize.STRING
  },
  level: {
    type: Sequelize.ENUM,
    values: ['junior', 'mid', 'senior', 'manager']
  },
  description: {
    type: Sequelize.TEXT
  }
})

module.exports = Position
