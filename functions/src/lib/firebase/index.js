
const admin = require('firebase-admin');
const functions = require('firebase-functions');
require('dotenv').config()

module.exports = (() => {
    // local test environment
    if(process.env.GOOGLE_APPLICATION_CREDENTIALS) {
        const auth = {
            credential: admin.credential.applicationDefault(),
            databaseURL: `https://${process.env.GCLOUD_PROJECT}.firebaseio.com`
        }
        return !admin.apps.length ? admin.initializeApp(auth) : admin.app();
    }
    else {
        // production environment
        return !admin.apps.length ? admin.initializeApp() : admin.app();
    }
})();
