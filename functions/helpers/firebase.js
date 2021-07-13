const admin = require('firebase-admin')
const { firebaseCredential } = require('../config')
const serviceAccount = require('../credential.json')
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: firebaseCredential.DATABASE_URL
})
const db = admin.database()
const validateRegistered = (lineUserID) => {
    return new Promise((resolve, reject) => {
        const ref = db.ref(`/users/${lineUserID}`)
        ref.once('value')
            .then(snapshot => resolve(snapshot.val()))
            .catch(error => reject(error))
    })
}
const registerUser = async (lineUserID, macAddress) => {
    return new Promise((resolve, reject) => {
        const ref = db.ref(`/users/${lineUserID}`)
        ref.transaction(() => ({ macAddress }))
            .then((data) => resolve(data))
            .catch((error) => reject(error))
    })
}
const check = (macAddress) => {
    let result = null
    return new Promise((resolve, reject) => {
        const ref = db.ref(`/users`)
        // ref.orderByChild('macAddress').once('value')
        //     .then(snapshot => resolve(console.log('snapshot', snapshot.val().macAddress)))
        //     .catch(error => reject(error))
        ref.orderByChild('macAddress').once('child_added', (snapshot) => {
            if (snapshot.val().macAddress === macAddress) {
                resolve(snapshot.key)
            }
            // console.log(snapshot.key + ' was ' + snapshot.val().macAddress + ' meters tall');
        });
    })
}
module.exports = { validateRegistered, registerUser, check }