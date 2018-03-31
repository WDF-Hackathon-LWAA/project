const Sequelize = require('sequelize')
const db = require('../db')

const Company = db.define('company', {
  name: {
    type: Sequelize.STRING
  },
  industry: {
    type: Sequelize.STRING
  },
  size: {
    type: Sequelize.NUMBER
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
    validate: {
      isEmail: true,
      notEmpty: true
    }
  },
  password: {
    type: Sequelize.STRING
  },
  salt: {
    type: Sequelize.STRING
  }
})

module.exports = Company


Company.prototype.correctPassword = function (candidatePwd) {
  return Company.encryptPassword(candidatePwd, this.salt) === this.password
}

Company.generateSalt = function () {
  return crypto.randomBytes(16).toString('base64')
}

Company.encryptPassword = function (plainText, salt) {
  return crypto
    .createHash('RSA-SHA256')
    .update(plainText)
    .update(salt)
    .digest('hex')
}

const setSaltAndPassword = company => {
  if (company.changed('password')) {
    company.salt = Company.generateSalt()
    company.password = Company.encryptPassword(company.password, seeker.salt)
  }
}

Company.beforeCreate(setSaltAndPassword)
Company.beforeUpdate(setSaltAndPassword)
