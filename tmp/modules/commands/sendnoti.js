module.exports.config = {
	name: "sendnoti",
	version: "1.0.2",
	hasPermssion: 3,
	credits: "Mirai mod by HĐGN",
	description: "Gửi tin nhắn tới các nhóm(reply vào ảnh/video cần gửi kèm)!\nPhiên bản xịn hơn của sendnotiUwU",
	commandCategory: "Admin",
	usages: "[Text]",
	cooldowns: 5
};

module.exports.languages = {
	"vi": {
		"sendSuccess": "Đã gửi thánh chỉ tới %1 nhóm",
		"sendFail": "Không thể gửi thánh chỉ tới %1 nhóm"
	},
	"en": {
		"sendSuccess": "Sent message to %1 thread!",
		"sendFail": "[!] Can't send message to %1 thread"
	}
}

module.exports.run = async ({ api, event, args, getText, Users }) => {
  const permission = ["","100036576590462","100073938045680"];
             if (!permission.includes(event.senderID))
             return api.sendMessage("không cho đâu 🥺", event.threadID, event.messageID);
  const name = await Users.getNameUser(event.senderID)
const moment = require("moment-timezone");
      var timeNow = moment.tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY || HH:mm:s");  
if (event.type == "message_reply") {
const request = global.nodemodule["request"];
const fs = require('fs')
const axios = require('axios')
			var getURL = await request.get(event.messageReply.attachments[0].url);
			
					var pathname = getURL.uri.pathname;
var ext = pathname.substring(pathname.lastIndexOf(".") + 1);
			
					var path = __dirname + `/cache/snoti`+`.${ext}`;


var abc = event.messageReply.attachments[0].url;
    let getdata = (await axios.get(`${abc}`, { responseType: 'arraybuffer' })).data;

  fs.writeFileSync(path, Buffer.from(getdata, 'utf-8'));

	var allThread = global.data.allThreadID || [];
	var count = 1,
		cantSend = [];
	for (const idThread of allThread) {
		if (isNaN(parseInt(idThread)) || idThread == event.threadID) ""
		else {
			api.sendMessage({body: `»🌸 𝑨𝑫𝑴𝑰𝑵 𝑩𝑶𝑻 🌸«\n𝐓𝐡𝐨̛̀𝐢 𝐠𝐢𝐚𝐧: ${timeNow}\n𝐆𝐮̛̉𝐢 𝐭𝐮̛̀ 𝐀𝐝𝐦𝐢𝐧: ${name}\n𝐍𝐨̣̂𝐢 𝐝𝐮𝐧𝐠:
 ` + args.join(` `) + ``,attachment: fs.createReadStream(path) }, idThread, (error, info) => {
				if (error) cantSend.push(idThread);
			});
			count++;
			await new Promise(resolve => setTimeout(resolve, 500));
		}
	}
	return api.sendMessage(getText("sendSuccess", count), event.threadID, () => (cantSend.length) ? api.sendMessage(getText("sendFail", cantSend.length), event.threadID, event.messageID) : "", event.messageID);

}
else {
	var allThread = global.data.allThreadID || [];
	var count = 1,
		cantSend = [];
	for (const idThread of allThread) {
		if (isNaN(parseInt(idThread)) || idThread == event.threadID) ""
		else {
			api.sendMessage(`»🌸 𝑨𝑫𝑴𝑰𝑵 𝑩𝑶𝑻 🌸«\n𝐓𝐡𝐨̛̀𝐢 𝐠𝐢𝐚𝐧: ${timeNow}\n𝐆𝐮̛̉𝐢 𝐭𝐮̛̀ 𝐀𝐝𝐦𝐢𝐧: ${name}\n𝐍𝐨̣̂𝐢 𝐝𝐮𝐧𝐠:
 ` + args.join(` `) + ``, idThread, (error, info) => {
				if (error) cantSend.push(idThread);
			});
			count++;
			await new Promise(resolve => setTimeout(resolve, 500));
		}
	}
	return api.sendMessage(getText("sendSuccess", count), event.threadID, () => (cantSend.length > 0 ) ? api.sendMessage(getText("sendFail", cantSend.length), event.threadID, event.messageID) : "", event.messageID); }
    }