const fs = require('fs');
const request = require('request');

module.exports.config = {
    name: "snoti",
    version: "1.0.0",
    hasPermssion: 2,
    credits: "MOD",
    description: "",
    commandCategory: "Tiện ích",
    usages: "[msg]",
    cooldowns: 5,
}

let atmDir = [];

const getAtm = (atm, body) => new Promise(async (resolve) => {
    let msg = {}, attachment = [];
    msg.body = body;
    for(let eachAtm of atm) {
        await new Promise(async (resolve) => {
            try {
                let response =  await request.get(eachAtm.url),
                    pathName = response.uri.pathname,
                    ext = pathName.substring(pathName.lastIndexOf(".") + 1),
                    path = __dirname + `/cache/${eachAtm.filename}.${ext}`
                response
                    .pipe(fs.createWriteStream(path))
                    .on("close", () => {
                        attachment.push(fs.createReadStream(path));
                        atmDir.push(path);
                        resolve();
                    })
            } catch(e) { console.log(e); }
        })
    }
    msg.attachment = attachment;
    resolve(msg);
})

module.exports.handleReply = async function ({ api, event, handleReply, Users, Threads }) {
    const moment = require("moment-timezone");
      var gio = moment.tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY - HH:mm:s");
    const { threadID, messageID, senderID, body } = event;
    let name = await Users.getNameUser(senderID);
    switch (handleReply.type) {
        case "sendnoti": {
            let text = `『 𝐓𝐢𝐧 𝐍𝐡𝐚̆́𝐧 𝐇𝐞̣̂ 𝐓𝐡𝐨̂́𝐧𝐠 』\n==== 『 𝐒𝐄𝐍𝐃𝐍𝐎𝐓𝐈 』 ====\n『 𝐔𝐬𝐞𝐫 』${name}\n『 𝐁𝐨𝐱 』${(await Threads.getInfo(threadID)).threadName || "Unknow"}\n━━━━━━━━\n『 𝐍𝐨𝐭𝐞 』${body}\n━━━━━━━━\n『 𝐓𝐢𝐦𝐞 』${gio}\n━━━━━━━━\n『 𝐑𝐄𝐏𝐋𝐘 』=>  𝐓𝐢𝐧 𝐍𝐡𝐚̆́𝐧 𝐕𝐞̂̀ 𝐀𝐝𝐦𝐢𝐧\n━━━━━━━━`;
            if(event.attachments.length > 0) text = await getAtm(event.attachments, `『 𝐓𝐢𝐧 𝐍𝐡𝐚̆́𝐧 𝐇𝐞̣̂ 𝐓𝐡𝐨̂́𝐧𝐠 』\n==== 『 𝐒𝐄𝐍𝐃𝐍𝐎𝐓𝐈 』 ====\n『 𝐔𝐬𝐞𝐫 』${name}\n『 𝐁𝐨𝐱 』${(await Threads.getInfo(threadID)).threadName || "Unknow"}\n━━━━━━━━\n『 𝐍𝐨𝐭𝐞 』${body}\n━━━━━━━━\n『 𝐓𝐢𝐦𝐞 』${gio}\n━━━━━━━━\n『 𝐑𝐄𝐏𝐋𝐘 』=>  𝐓𝐢𝐧 𝐍𝐡𝐚̆́𝐧 𝐕𝐞̂̀ 𝐀𝐝𝐦𝐢𝐧\n━━━━━━━━`);
            api.sendMessage(text, handleReply.threadID, (err, info) => {
                atmDir.forEach(each => fs.unlinkSync(each))
                atmDir = [];
                global.client.handleReply.push({
                    name: this.config.name,
                    type: "reply",
                    messageID: info.messageID,
                    messID: messageID,
                    threadID
                })
            });
            break;
        }
        case "reply": {
            let text = `『 𝐓𝐢𝐧 𝐍𝐡𝐚̆́𝐧 𝐇𝐞̣̂ 𝐓𝐡𝐨̂́𝐧𝐠 』\n==== 『 𝐒𝐄𝐍𝐃𝐍𝐎𝐓𝐈 』 ====\n『 𝐀𝐝𝐦𝐢𝐧 』${name}\n━━━━━━━━\n『 𝐍𝐨𝐭𝐞 』${body}\n━━━━━━━━\n『 𝐓𝐢𝐦𝐞 』${gio}\n━━━━━━━━\n『 𝐑𝐄𝐏𝐋𝐘 』=>  𝐓𝐢𝐧 𝐍𝐡𝐚̆́𝐧 𝐕𝐞̂̀ 𝐀𝐝𝐦𝐢𝐧\n━━━━━━━━`;
            if(event.attachments.length > 0) text = await getAtm(event.attachments, `${body}『 𝐓𝐢𝐧 𝐍𝐡𝐚̆́𝐧 𝐇𝐞̣̂ 𝐓𝐡𝐨̂́𝐧𝐠 』\n==== 『 𝐒𝐄𝐍𝐃𝐍𝐎𝐓𝐈 』 ====\n『 𝐀𝐝𝐦𝐢𝐧 』${name}\n━━━━━━━━\n『 𝐍𝐨𝐭𝐞 』${body}\n━━━━━━━━\n『 𝐓𝐢𝐦𝐞 』${gio}\n━━━━━━━━\n『 𝐑𝐄𝐏𝐋𝐘 』=>  𝐓𝐢𝐧 𝐍𝐡𝐚̆́𝐧 𝐕𝐞̂̀ 𝐀𝐝𝐦𝐢𝐧\n━━━━━━━━`);
            api.sendMessage(text, handleReply.threadID, (err, info) => {
                atmDir.forEach(each => fs.unlinkSync(each))
                atmDir = [];
                global.client.handleReply.push({
                    name: this.config.name,
                    type: "sendnoti",
                    messageID: info.messageID,
                    threadID
                })
            }, handleReply.messID);
            break;
        }
    }
}

module.exports.run = async function ({ api, event, args, Users }) {
    const moment = require("moment-timezone");
      var gio = moment.tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY - HH:mm:s");
    const { threadID, messageID, senderID, messageReply } = event;
    if (!args[0]) return api.sendMessage("Please input message", threadID);
    let allThread = global.data.allThreadID || [];
    let can = 0, canNot = 0;
    let text = `『 𝐓𝐢𝐧 𝐍𝐡𝐚̆́𝐧 𝐇𝐞̣̂ 𝐓𝐡𝐨̂́𝐧𝐠 』\n==== 『 𝐒𝐄𝐍𝐃𝐍𝐎𝐓𝐈 』 ====\n『 𝐀𝐝𝐦𝐢𝐧 』${await Users.getNameUser(senderID)}\n━━━━━━━━\n『 𝐍𝐨𝐭𝐞 』${args.join(" ")}\n━━━━━━━━\n『 𝐓𝐢𝐦𝐞 』${gio}\n━━━━━━━━\n『 𝐑𝐄𝐏𝐋𝐘 』=>  𝐓𝐢𝐧 𝐍𝐡𝐚̆́𝐧 𝐕𝐞̂̀ 𝐀𝐝𝐦𝐢𝐧\n━━━━━━━━`;
    if(event.type == "message_reply") text = await getAtm(messageReply.attachments, `『 𝐓𝐢𝐧 𝐍𝐡𝐚̆́𝐧 𝐇𝐞̣̂ 𝐓𝐡𝐨̂́𝐧𝐠 』\n==== 『 𝐒𝐄𝐍𝐃𝐍𝐎𝐓𝐈 』 ====\n『 𝐀𝐝𝐦𝐢𝐧 』${await Users.getNameUser(senderID)}\n━━━━━━━━\n『 𝐍𝐨𝐭𝐞 』${args.join(" ")}\n━━━━━━━━\n『 𝐓𝐢𝐦𝐞 』${gio}\n━━━━━━━━\n『 𝐑𝐄𝐏𝐋𝐘 』=>  𝐓𝐢𝐧 𝐍𝐡𝐚̆́𝐧 𝐕𝐞̂̀ 𝐀𝐝𝐦𝐢𝐧\n━━━━━━━━`);
    await new Promise(resolve => {
        allThread.forEach((each) => {
            try {
                api.sendMessage(text, each, (err, info) => {
                    if(err) { canNot++; }
                    else {
                        can++;
                        atmDir.forEach(each => fs.unlinkSync(each))
                        atmDir = [];
                        global.client.handleReply.push({
                            name: this.config.name,
                            type: "sendnoti",
                            messageID: info.messageID,
                            messID: messageID,
                            threadID
                        })
                        resolve();
                    }
                })
            } catch(e) { console.log(e) }
        })
    })
    api.sendMessage(`Send to ${can} thread, not send to ${canNot} thread`, threadID);
}        