const axios = require('axios')
const { lineCredential } = require('../../config')
const LINE_MESSAGING_API = 'https://api.line.me/v2/bot/message'
const LINE_HEADER = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${lineCredential.ACCESS_TOKEN}`

}
const reply = async (bodyResponse, message, type, altText = 'การแจ้งเตือน') => {

    const reply = bodyResponse
    let messages = [{ type: `text`, text: message }]
    if (type === 'flex') {
        messages = [{ type: 'flex', altText, contents: message }]
    }
    try {
        const response = await axios({
            method: 'post',
            url: `${LINE_MESSAGING_API}/push`,
            data: {
                to: reply,
                messages
            },
            headers: LINE_HEADER
        })
        return response
    } catch (error) {
        console.log(error.message)
        return null
    }
}
module.exports = { reply }