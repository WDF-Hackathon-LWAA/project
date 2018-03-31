const Sequelize = require('sequelize')
const db = require('../db')

const Position = require('./position') 
const Seeker = require('./seeker') 
const Resume = require('./resume')
const Company = require('./company')

Seeker.hasOne(Resume)

Company.hasMany(Position)

Seeker.belongsToMany(Position, {through: 'Applicants'})

module.exports = {
  Seeker,
  Company,
  Resume,
  Position
}
