const statusMessage = (me) => {
    const address = me.event.client.address
    let statusText = ''
    let alarmTime = '-'
    let processStatus = {}
    if (me.event.start_time) {
        alarmTime = me.event.start_time
        statusText = 'เกิดเหตุฉุกเฉิน'
        // if (me.event.userchecker){
        processStatus = {
            "type": "box",
            "layout": "baseline",
            "spacing": "sm",
            "contents": [
                {
                    "type": "text",
                    "text": "การดำเนินการ",
                    "color": "#aaaaaa",
                    "size": "sm",
                    "flex": 3
                },
                {
                    "type": "text",
                    "text": `กำลังตรวจสอบ`,
                    "wrap": true,
                    "color": "#666666",
                    "size": "sm",
                    "flex": 5
                }
            ]
        }
        // }
    } else {
        statusText = 'เหตุการณ์ปกติ'
    }
    return {
        "type": "bubble",
        "body": {
            "type": "box",
            "layout": "vertical",
            "contents": [
                {
                    "type": "text",
                    "text": `ข้อมูลบ้านของฉัน`,
                    "color": "#2a9d8f",
                    "weight": "bold",
                    "size": "md"
                },
                {
                    "type": "text",
                    "text": `บ้านเลขที่ ${address}`,
                    "weight": "bold",
                    "size": "xl"
                },
                {
                    "type": "box",
                    "layout": "vertical",
                    "margin": "lg",
                    "spacing": "sm",
                    "contents": [
                        {
                            "type": "box",
                            "layout": "baseline",
                            "spacing": "sm",
                            "contents": [
                                {
                                    "type": "text",
                                    "text": "สถานะ",
                                    "color": "#aaaaaa",
                                    "size": "md",
                                    "flex": 3
                                },
                                {
                                    "type": "text",
                                    "text": `${statusText}`,
                                    "wrap": true,
                                    "color": "#666666",
                                    "size": "md",
                                    "flex": 5
                                }
                            ]
                        },
                        {
                            "type": "box",
                            "layout": "baseline",
                            "spacing": "sm",
                            "contents": [
                                {
                                    "type": "text",
                                    "text": "เวลาเกิดเหตุ",
                                    "color": "#aaaaaa",
                                    "size": "sm",
                                    "flex": 3
                                },
                                {
                                    "type": "text",
                                    "text": `${alarmTime}`,
                                    "wrap": true,
                                    "color": "#666666",
                                    "size": "sm",
                                    "flex": 5
                                }
                            ]
                        },
                        // `${processStatus ? processStatus : null}`,
                        processStatus ? processStatus : null
                    ]
                }
            ]
        },
        "footer": {
            "type": "box",
            "layout": "vertical",
            "spacing": "sm",
            "contents": [
                {
                    "type": "spacer",
                    "size": "sm"
                }
            ],
            "flex": 0
        }
    }
}
module.exports = { statusMessage }