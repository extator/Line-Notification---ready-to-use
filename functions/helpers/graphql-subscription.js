const { GraphQLClient } = require('kikstart-graphql-client')
const { reply } = require('./line/push')
const moment = require('moment')
const { notificationMessage } = require('./line/notification')
const admin = require('firebase-admin')
const { check } = require('./firebase')
// const { firebaseCredential } = require('../config')
// const serviceAccount = require('../credential.json')
// admin.initializeApp({
//     credential: admin.credential.cert(serviceAccount),
//     databaseURL: firebaseCredential.DATABASE_URL
// })
const client = new GraphQLClient({
    uri: 'https://api.aheadallsolution.com/graphql',
    wsUri: 'wss://api.aheadallsolution.com/graphql'
})

const subscription = async () => {
    const query = {
        subscription: `
        subscription {
            eventCreated {
              _id
              client{
                  macaddress
                  address
              }
              sensor_index
              start_time
              end_time
              alarm_type
              userchecker{_id,name}
            }
          }      
        `
    }

    client.runSubscription(query.subscription).subscribe(async (res) => {
        const notiEvent = res.data.eventCreated
        if (notiEvent.client.macaddress !== undefined) {
            const eventCheck = await check(notiEvent.client.macaddress)
            replymessage(eventCheck, res, notificationMessage(notiEvent), 'flex')
        }
    })
}

const lostSignal = async () => {
    const query = {
        subscription: `
        subscription{
            clientUpdated (is_online:false) {
              serialboard
              macaddress
              chktime
              is_online
            }
          } 
        `
    }

    client.runSubscription(query.subscription).subscribe(async (res) => {
        const lostEvent = res.data.clientUpdated
        const checkTime = lostEvent.chktime
        const thisTime = moment().add(7, 'hour').format()
        const diffTime = moment(thisTime).diff(checkTime, 'minutes')
        if (lostEvent.macaddress !== undefined && lostEvent.is_online !== true) {
            if (diffTime <= 5) {
                const lostCheck = await check(lostEvent.macaddress)
                replymessage(lostCheck, res, 'ขาดการเชื่อมต่ออินเทอร์เน็ต')
            }
        }
    })
}

const replymessage = (bodyRequest, res, messages, type) => {
    reply(bodyRequest, messages, type)

    // return res.status(200).send('ok')
}
module.exports = {
    subscription,
    lostSignal
}