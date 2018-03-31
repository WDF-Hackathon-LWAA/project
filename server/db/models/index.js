const Sequelize = require('sequelize')
const db = require('../db')

const Position = require('./position') 
const Seeker = require('./seeker') 
const Resume = require('./resume')
const Company = require('./company')

const User = db.define('User', {
  userType: {
    type: Sequelize.ENUM,
    values: ['company', 'seeker']
  }
})

Seeker.hasOne(Resume)
User.hasOne(Seeker)
User.hasOne(Company)
Company.hasMany(Position)

Seeker.belongsToMany(Position, {through: 'Applicants'})

module.exports = {
  User,
  Seeker,
  Company,
  Resume,
  Position
}
