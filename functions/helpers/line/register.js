const registerMessage = () => {
    return {
        "type": "bubble",
        "hero": {
            "type": "image",
            "url": "https://s3-ap-southeast-1.amazonaws.com/o77site/anasiri-khon-kaen-house-portrait-810x890.jpg",
            "size": "full",
            "aspectRatio": "20:13",
            "aspectMode": "cover",
            "action": {
                "type": "uri",
                "uri": "http://linecorp.com/"
            }
        },
        "body": {
            "type": "box",
            "layout": "vertical",
            "contents": [
                {
                    "type": "text",
                    "text": "ลงทะเบียนเสร็จสิ้น",
                    "weight": "regular",
                    "size": "md"
                },
                {
                    "type": "text",
                    "text": "ยินดีต้อนรับ",
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
                                    "text": "กดที่ \"บ้านของฉัน\" เพื่อดูข้อมูลของบ้าน",
                                    "color": "#495057",
                                    "size": "sm",
                                    "flex": 1
                                }
                            ]
                        }
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
                },
                // {
                //     "type": "button",
                //     "style": "link",
                //     "height": "sm",
                //     "action": {
                //         "type": "uri",
                //         "label": "CALL",
                //         "uri": "https://aheadallsolution.com/"
                //     }
                // }
            ],
            "flex": 0
        },
    }
}
module.exports = { registerMessage }