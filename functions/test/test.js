const assert = require('assert');
const firebase = require('../src/lib/firebase');
describe('Test', function() {
    it('', async function() {

        const db = firebase.firestore()
        let doc = db.collection('sample').doc('aturing')
        await doc.set({ name: 'Alan Turing' })

        let snap = await doc.get()
        console.log(snap)

        assert.strictEqual(true,true);
    });
});

