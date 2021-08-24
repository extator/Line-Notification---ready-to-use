/* eslint-disable no-case-declarations */
const functions = require('firebase-functions')
const { googleSheetCredential } = require('./config')
const { reply } = require('./helpers/line')
const { statusMessage } = require('./helpers/line/messages')
const { welcomeMessage } = require('./helpers/line/welcome')
const { validateRegistered, registerUser } = require('./helpers/firebase')
const { checkClient, checkStatus } = require('./helpers/graphql')
const { subscription, lostSignal } = require('./helpers/graphql-subscription')

// eslint-disable-next-line consistent-return
exports.lineWebhook = functions.https.onRequest(async (req, res) => {
    try {

        const { type, message, source: { userId: lineUserID } } = req.body.events[0]
        const isTextmessage = type === 'message' && message.type === 'text'
        if (isTextmessage) {
            const messagesFromUser = message.text.trim().toLowerCase()
            const checkRegister = messagesFromUser.split('register:', ' ')
            const needToRegister = checkRegister && checkRegister[1]
            console.log(messagesFromUser);
            if (needToRegister) {
                const macAddressForRegister = checkRegister[1]
                const hasBeenRegistered = await validateRegistered(lineUserID)
                if (hasBeenRegistered) {
                    return replymessage(req.body, res, 'ไม่สามารถลงทะเบียนซ้ำได้')
                }
                const hasHouseOwner = await checkClient(macAddressForRegister)

                if (hasHouseOwner.client === null) {
                    return replymessage(req.body, res, 'รหัสยืนยันไม่ตรงกับที่มีในระบบ')
                }

                registerUser(lineUserID, macAddressForRegister)
                return replymessage(req.body, res, welcomeMessage(), 'flex')
            } else {
                switch (messagesFromUser) {
                    case 'register':
                        return replymessage(req.body, res, 'กรุณากรอกรหัสยืนยันเพื่อลงทะเบียนดังนี้ Register:(รหัสอุปกรณืของท่าน)')
                    case 'home status':
                        const hasBeenRegistered = await validateRegistered(lineUserID)
                        if (!hasBeenRegistered) {
                            return replymessage(req.body, res, 'กรุณากรอกรหัสยืนยันเพื่อลงทะเบียนดังนี้ Register:(รหัสอุปกรณืของท่าน)')
                        }
                        const { macAddress } = hasBeenRegistered
                        const getId = await checkClient(macAddress)
                        const me = await checkStatus(getId.client._id)
                        return replymessage(req.body, res, statusMessage(me), 'flex')
                    // case 'วิธีการใช้งาน':
                    //     return replymessage(req.body, res, 'Not available, Please try again later.')
                    // case 'คู่มือการใช้':
                    //     return replymessage(req.body, res, 'Not available, Please try again later.')
                }
            }
        }

        res.status(200).send('ok')
    } catch (error) {
        console.error(error.message)
        res.status(400).send('error')
    }

})

const replymessage = (bodyRequest, res, messages, type) => {
    reply(bodyRequest, messages, type)

    return res.status(200).send('ok')
}
subscription()
lostSignal()