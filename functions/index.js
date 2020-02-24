require('dotenv').config()
const functions = require('firebase-functions')
const server = require('./src/server')
const triggers = require('./src/triggers')
const api = functions
            .runWith({ memory: '256MB', timeoutSeconds: 120 })
            .https.onRequest(server)

module.exports = Object.assign({ api }, triggers)