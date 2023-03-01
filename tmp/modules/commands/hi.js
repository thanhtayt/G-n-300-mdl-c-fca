module.exports.config = {
    name: "hi",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "Ryo 🐧",
    description: "",
    commandCategory: "Noprefix",
    usages: "",
    cooldowns: 0,
    denpendencies: {
        "fs": "",
        "request": ""
    }
};

module.exports.handleEvent = async ({ event, api , Users }) => {
    const fs = require("fs");
    let name = await Users.getNameUser(event.senderID)
    const time = require("moment-timezone").tz("Asia/Ho_Chi_Minh");
  const gio = time.format("HH");
  const moment = require("moment-timezone");
    var bok = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss");
  
  if (gio >= 5) get = "𝐌𝐨̣̂𝐭 𝐁𝐮𝐨̂̉𝐢 𝐒𝐚́𝐧𝐠"
  if (gio >= 11) get = "𝐌𝐨̣̂𝐭 𝐁𝐮𝐨̂̉𝐢 𝐓𝐫𝐮̛𝐚"
  if (gio >= 14) get = "𝐂𝐨́ 𝐌𝐨̣̂𝐭 𝐁𝐮𝐨̂̉𝐢 𝐂𝐡𝐢𝐞̂̀𝐮"
  if (gio >= 19) get = "𝐌𝐨̣̂𝐭 𝐁𝐮𝐨̂̉𝐢 𝐓𝐨̂́𝐢"
  if (gio >= 23) get = "𝐌𝐨̣̂𝐭 𝐁𝐮𝐨̂̉𝐢 𝐓𝐨̂́𝐢"  
  
  const icon = ["❤️","💖","💓","💛","💘","💝","💕","💞","🥰","🐒"];
  var rdIcon = icon[Math.floor(Math.random() * icon.length)];
  const dat = ["𝐕𝐮𝐢 𝐕𝐞̉","𝐁𝐢̀𝐧𝐡 𝐘𝐞̂𝐧","𝐌𝐚𝐲 𝐌𝐚̆́𝐧","𝐅𝐮𝐥𝐥 𝐍𝐚̆𝐧𝐠 𝐋𝐮̛𝐨̛̣𝐧𝐠","𝐓𝐮𝐲𝐞̣̂𝐭 𝐕𝐨̛̀𝐢", "𝐓𝐢̉𝐧𝐡 𝐓𝐚́𝐨"];
  var rdDat = dat[Math.floor(Math.random() * dat.length)];
  const value = [`${rdIcon} 𝐇𝐞𝐥𝐥𝐨 𝐗𝐢𝐧 𝐂𝐡𝐚̀𝐨 𝐁𝐞́ ${name} 𝐍𝐡𝐞́\n𝐁𝐚̂𝐲 𝐆𝐢𝐨̛̀ 𝐋𝐚̀ ${bok}\n𝐂𝐡𝐮́𝐜 𝐁𝐞́ 𝐂𝐨́ ${get} ${rdDat}  🥳`, `${rdIcon} 𝐇𝐞𝐥𝐥𝐨 𝐗𝐢𝐧 𝐂𝐡𝐚̀𝐨 𝐁𝐞́ ${name} 𝐍𝐡𝐞́\n𝐁𝐚̂𝐲 𝐆𝐢𝐨̛̀ 𝐋𝐚̀ ${bok}\n𝐂𝐡𝐮́𝐜 𝐁𝐞́ 𝐂𝐨́ ${get} ${rdDat}`, `🌸 ${rdIcon} 𝐇𝐞𝐥𝐥𝐨 𝐗𝐢𝐧 𝐂𝐡𝐚̀𝐨 𝐁𝐞́ ${name}\n𝐁𝐚̂𝐲 𝐆𝐢𝐨̛̀ 𝐋𝐚̀ ${bok}\n𝐂𝐡𝐮́𝐜 𝐁𝐞́ 𝐂𝐨́ ${name} ${get} ${rdDat}`];
  var rdValue = value[Math.floor(Math.random() * value.length)];
        var msg = {
                body: rdValue,
            }
    if ((event.body.toLowerCase() == "hi") || (event.body.toLowerCase() == "Hi")) {
  return api.sendMessage(msg,event.threadID,event.messageID);}
    if (event.body.toLowerCase().indexOf("chào") != -1) {
  return api.sendMessage(msg,event.threadID,event.messageID);}
    if ((event.body.toLowerCase() == "hí") || (event.body.toLowerCase() == "Hí")) {
  return api.sendMessage(msg,event.threadID,event.messageID);}
    if ((event.body.toLowerCase() == "hăiii") || (event.body.toLowerCase() == "Hăiii")) {
  return api.sendMessage(msg,event.threadID,event.messageID);}
    if ((event.body.toLowerCase() == "lô") || (event.body.toLowerCase() == "Lô")) {
  return api.sendMessage(msg,event.threadID,event.messageID);}
    };
module.exports.run = async ({ event, api }) => {
return api.sendMessage("Dùng sai cách rồi lêu lêu",event.threadID)
    }