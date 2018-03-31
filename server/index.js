const path = require('path')
const express = require('express')
const router = express.Router();
const morgan = require('morgan')
const bodyParser = require('body-parser')
const db = require('./db')
const PORT = process.env.PORT || 8080
const app = express()
module.exports = app


const createApp = () => {
    // logging middleware
    app.use(morgan('dev'))

    // body parsing middleware
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: true }))

    app.use((req, res, next) => {
        console.log('session', req.session)
        next();
    })

    // auth and api routes
    // app.use('/auth', require('./auth'))
    app.use('/api', require('./api'))

    // static file-serving middleware
    app.use(express.static(path.join(__dirname, '..', 'public')))


    // any remaining requests with an extension (.js, .css, etc.) send 404
    .use((req, res, next) => {
        if (path.extname(req.path).length) {
            const err = new Error('Not found')
            err.status = 404
            next(err)
        } else {
            next()
        }
    })

    // sends index.html
    app.use('*', (req, res) => {
        res.sendFile(path.join(__dirname, '..', 'public/index.html'))
    })

    // error handling endware
    app.use((err, req, res, next) => {
        console.error(err)
        console.error(err.stack)
        res.status(err.status || 500).send(err.message || 'Internal server error.')
    })
}

const startListening = () => {
    // start listening (and create a 'server' object representing our server)
    const server = app.listen(PORT, () => console.log(`Mixing it up on port ${PORT}`))

}

const syncDb = () => db.sync({ force: false })

syncDb()
    .then(createApp)
    .then(startListening);