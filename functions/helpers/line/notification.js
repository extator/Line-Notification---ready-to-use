const notificationMessage = (notiEvent) => {
    const address = notiEvent.client.address
    let alarmTime = notiEvent.start_time
    let endTime = notiEvent.end_time
    let checkerStaff = ''
    const messageAlarm = {
        [1]: 'มีผู้บุกรุก',
        [2]: 'เกิดเหตุเพลิงไหม้',
        [3]: 'เกิดเหตุฉุกเฉิน',
    }
    let statusText = messageAlarm[notiEvent.alarm_type]
    if (notiEvent.start_time && !notiEvent.end_time) {
        if (notiEvent.userchecker === null) {
            return {
                "type": "bubble",
                "body": {
                    "type": "box",
                    "layout": "vertical",
                    "contents": [
                        {
                            "type": "text",
                            "text": `การแจ้งเหตุ`,
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
                                            "text": "ประเภท",
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
                                            "text": `กำลังไปตรวจสอบ`,
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
        } else if (notiEvent.userchecker.name) {
            checkerStaff = notiEvent.userchecker.name
            return {
                "type": "bubble",
                "body": {
                    "type": "box",
                    "layout": "vertical",
                    "contents": [
                        {
                            "type": "text",
                            "text": `การแจ้งเหตุ`,
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
                                            "text": "ประเภท",
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
                                            "text": `กำลังตรวจสอบ`,
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
    } else if (notiEvent.start_time && notiEvent.end_time && !notiEvent.userchecker) {
        return {
            "type": "bubble",
            "body": {
                "type": "box",
                "layout": "vertical",
                "contents": [
                    {
                        "type": "text",
                        "text": `การแจ้งเหตุ`,
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
                                        "text": "ประเภท",
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
                                        "text": "เวลาเกิดหยุด",
                                        "color": "#aaaaaa",
                                        "size": "sm",
                                        "flex": 3
                                    },
                                    {
                                        "type": "text",
                                        "text": `${endTime}`,
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
                                        "text": `หยุดการแจ้งเตือน`,
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
                    "text": `การแจ้งเหตุ`,
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
                        {
                            "type": "box",
                            "layout": "baseline",
                            "spacing": "sm",
                            "contents": [
                                {
                                    "type": "text",
                                    "text": "ประเภท",
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
                                    "text": "เวลาเกิดหยุด",
                                    "color": "#aaaaaa",
                                    "size": "sm",
                                    "flex": 3
                                },
                                {
                                    "type": "text",
                                    "text": `${endTime}`,
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
                                    "text": "ผู้ตรวจสอบ",
                                    "color": "#aaaaaa",
                                    "size": "sm",
                                    "flex": 3
                                },
                                {
                                    "type": "text",
                                    "text": `${notiEvent.userchecker.name}`,
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
module.exports = { notificationMessage }
