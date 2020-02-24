const functions = require('firebase-functions')
const controller = require('./controller')

module.exports.languagesTrigger = functions.firestore
    .document('users/marie')
    .onWrite((change, context) => {
        // controller.getThing()
        // ... Your code here
    })