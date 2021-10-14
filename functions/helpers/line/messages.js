const statusMessage = (me) => {
    const address = me.event.client.address
    let statusText = ''
    let alarmTime = '-'
    let checkerStaff = ''
    const messageAlarm = {
        [1]: 'มีผู้บุกรุก',
        [2]: 'เกิดเหตุเพลิงไหม้',
        [3]: 'เกิดเหตุฉุกเฉิน',
    }
    if (me.event.start_time && !me.event.end_time) {
        alarmTime = me.event.start_time
        statusText = messageAlarm[me.event.alarm_type]
        if (me.event.userchecker === null) {
            return {
                "type": "bubble",
                "body": {
                    "type": "box",
                    "layout": "vertical",
                    "contents": [
                        {
                            "type": "text",
                            "text": `ข้อมูลบ้านของฉัน`,
                            "color": "#e63946",
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
                                            "text": `กำลังดำเนินการตรวจสอบ`,
                                            "wrap": true,
                                            "color": "#f77f00",
                                            "size": "sm",
                                            "flex": 5
                                        }
                                    ]
                                },
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
        } else {
            checkerStaff = me.event.userchecker.name
            return {
                "type": "bubble",
                "body": {
                    "type": "box",
                    "layout": "vertical",
                    "contents": [
                        {
                            "type": "text",
                            "text": `ข้อมูลบ้านของฉัน`,
                            "color": "#e63946",
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
                                            "text": `กำลังดำเนินการตรวจสอบ`,
                                            "wrap": true,
                                            "color": "#f77f00",
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
                                            "text": "ผู้ตรวจสอบ",
                                            "color": "#aaaaaa",
                                            "size": "sm",
                                            "flex": 3
                                        },
                                        {
                                            "type": "text",
                                            "text": `${checkerStaff}`,
                                            "wrap": true,
                                            "color": "#212529",
                                            "size": "sm",
                                            "flex": 5
                                        }
                                    ]
                                },
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
    } else if (me.event.start_time && me.event.end_time && !me.event.userchecker){
        statusText = messageAlarm[me.event.alarm_type]
        return {
            "type": "bubble",
            "body": {
                "type": "box",
                "layout": "vertical",
                "contents": [
                    {
                        "type": "text",
                        "text": `ข้อมูลบ้านของฉัน`,
                        "color": "#f77f00",
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
                                        "text": `${me.event.start_time}`,
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
                                        "text": "เวลาหยุด",
                                        "color": "#aaaaaa",
                                        "size": "sm",
                                        "flex": 3
                                    },
                                    {
                                        "type": "text",
                                        "text": `${me.event.end_time}`,
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
                                        "text": `กำลังดำเนินการตรวจสอบ`,
                                        "wrap": true,
                                        "color": "#f77f00",
                                        "size": "sm",
                                        "flex": 5
                                    }
                                ]
                            },
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
                                    "text": `บ้านของคุณปลอดภัย`,
                                    "wrap": true,
                                    "color": "#2d6a4f",
                                    "size": "md",
                                    "flex": 5
                                }
                            ]
                        },
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