const { exampleObjectMetadata } = require('firebase-functions-test/lib/providers/storage')
const { GraphQLClient } = require('kikstart-graphql-client')
const { reply } = require('./line/push')

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
        if (lostEvent.macaddress !== undefined && lostEvent.is_online !== true) {
            const lostCheck = await check(lostEvent.macaddress)
            // for (let i = 0; i < 3600; i++) {
            //     if (i % 3600 === 0) {
            //         replymessage(lostCheck, res, 'ขาดการเชื่อมต่ออินเทอร์เน็ต')
            //     }
            // }
            // replymessage(lostCheck, res, 'ขาดการเชื่อมต่ออินเทอร์เน็ต')
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