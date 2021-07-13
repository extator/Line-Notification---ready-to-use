const notificationMessage = (notiEvent) => {
    const address = notiEvent.client.address
    let statusText = ''
    let alarmTime = notiEvent.start_time
    let processStatus = null
    const messageAlarm = {
        [1]: 'มีผู้บุกรุก',
        [2]: 'เกิดเหตุเพลิงไหม้',
        [3]: 'เกิดเหตุฉุกเฉิน',
    }

    if (notiEvent.end_time === null) {
        alarmTime = notiEvent.start_time
        if (notiEvent.userchecker === null) {
            processStatus = 'กำลังเดินทางไปตรวจสอบ' // {accept status}
        } else {
            processStatus = 'กำลังดำเนินการตรวจสอบ'
        }
        statusText = messageAlarm[notiEvent.alarm_type]
    } else {
        processStatus = 'ตรวจสอบเรียบร้อย'
    }
    return {
        "type": "bubble",
        "body": {
            "type": "box",
            "layout": "vertical",
            "contents": [
                {
                    "type": "text",
                    "text": `การแจ้งเตือน`,
                    "color": "#e63946",
                    "weight": "bold",
                    "size": "md"
                },
                {
                    "type": "text",
                    "text": `บ้านเลขที่ ${address}`,
                    "color": "#323232",
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
                                    "color": "#e63946",
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
                        {
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
                                    "text": `${processStatus}`,
                                    "wrap": true,
                                    "color": "#FCA111",
                                    "size": "sm",
                                    "flex": 5
                                }
                            ]
                        },
                        // {
                        //     "type": "box",
                        //     "layout": "baseline",
                        //     "spacing": "sm",
                        //     "contents": [
                        //         {
                        //             "type": "text",
                        //             "text": "โซนที่แจ้งเตือน",
                        //             "color": "#aaaaaa",
                        //             "size": "md",
                        //             "flex": 3
                        //         },
                        //         {
                        //             "type": "text",
                        //             "text": `${homeStatus}`,
                        //             "wrap": true,
                        //             "color": "#666666",
                        //             "size": "md",
                        //             "flex": 5
                        //         }
                        //     ]
                        // },
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
module.exports = { notificationMessage }