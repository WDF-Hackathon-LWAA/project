const Sequelize = require('sequelize');
const crypto = require('crypto')
const db = require('../db')

const Seeker = db.define('seeker', {
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
    validate: {
      isEmail: true,
      notEmpty: true
    }
  },
  industries: {
    type: Sequelize.STRING
  },
  password: {
    type: Sequelize.STRING
  },
  salt: {
    type: Sequelize.STRING
  }
});

module.exports = Seeker

Seeker.prototype.correctPassword = function (candidatePwd) {
  return Seeker.encryptPassword(candidatePwd, this.salt) === this.password
}

Seeker.generateSalt = function () {
  return crypto.randomBytes(16).toString('base64')
}

Seeker.encryptPassword = function (plainText, salt) {
  return crypto
    .createHash('RSA-SHA256')
    .update(plainText)
    .update(salt)
    .digest('hex')
}

const setSaltAndPassword = seeker => {
  if (seeker.changed('password')) {
    seeker.salt = Seeker.generateSalt()
    seeker.password = Seeker.encryptPassword(seeker.password, seeker.salt)
  }
}

Seeker.beforeCreate(setSaltAndPassword)
Seeker.beforeUpdate(setSaltAndPassword)
