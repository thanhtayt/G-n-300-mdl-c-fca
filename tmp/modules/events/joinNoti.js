module.exports.config = {
	name: "joinNoti",
	eventType: ["log:subscribe"],
	version: "1.0.1",
	credits: "Mirai Team",
	description: "Thông báo bot hoặc người vào nhóm",
	dependencies: {
		"fs-extra": ""
	}
};

module.exports.run = async function({ api, event, Users }) {
	 const { join } = global.nodemodule["path"];
    const { threadID } = event;
  const { PREFIX } = global.config;
	if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
		api.changeNickname(`[ ${global.config.PREFIX} ] • ${(!global.config.BOTNAME) ? "Made by CatalizCS and SpermLord" : global.config.BOTNAME}`, threadID, api.getCurrentUserID());
          	api.sendMessage(`Hiện tại mình đang có ${client.commands.size} lệnh có thể sử dụng được.\nPrefix hiện tại khả dụng là: ${PREFIX}`, threadID);
		}); 
	}
	else {
		try {
			const { createReadStream, existsSync, mkdirSync } = global.nodemodule["fs-extra"];
			let { threadName, participantIDs } = await api.getThreadInfo(threadID);

			const threadData = global.data.threadData.get(parseInt(threadID)) || {};
			const path = join(__dirname, "cache", "joinGif");
//	 const a = path[Math.floor(Math.random() * path.length)]
			const a = Math.floor(Math.random() * 5) + 1;
			const pathGif = join(path, `${1}.mp4`);

			var mentions = [], nameArray = [], memLength = [], i = 0;
			
			for (id in event.logMessageData.addedParticipants) {
				const userName = event.logMessageData.addedParticipants[id].fullName;
				nameArray.push(userName);
				mentions.push({ tag: userName, id });
				memLength.push(participantIDs.length - i++);

				if (!global.data.allUserID.includes(id)) {
					await Users.createData(id, { name: userName, data: {} });
					global.data.userName.set(id, userName);
					global.data.allUserID.push(id);
				}
			}
			memLength.sort((a, b) => a - b);
			
			(typeof threadData.customJoin == "undefined") ? msg = "𝐂𝐡𝐮́𝐜 𝐁𝐞́ {get} 𝐕𝐮𝐢 𝐕𝐞̉\n𝐇𝐞𝐥𝐥𝐨 𝐗𝐢𝐧 𝐂𝐡𝐚̀𝐨 𝐁𝐞́ {name} 🌸\n𝐖𝐞𝐥𝐜𝐨𝐦𝐞 𝐁𝐨𝐱 {threadName}!\n𝐁𝐞́ 𝐇𝐢𝐞̣̂𝐧 𝐓𝐚̣𝐢 𝐋𝐚̀ 𝐂𝐮̣𝐜 𝐂𝐮̛𝐧𝐠 𝐓𝐡𝐮̛́ {soThanhVien} 𝐂𝐮̉𝐚 𝐁𝐨𝐱\n𝐍𝐠𝐚̀𝐲 𝐯𝐚̀𝐨 {bok}" : msg = threadData.customJoin;
			const time = require("moment-timezone").tz("Asia/Ho_Chi_Minh");
			const gio = time.format("HH");
			const moment = require("moment-timezone");
			  var bok = moment.tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY" || "HH:mm:ss");
			
			if (gio >= 5) get = "𝐁𝐮𝐨̂̉𝐢 𝐒𝐚́𝐧𝐠"
			if (gio >= 11) get = "𝐁𝐮𝐨̂̉𝐢 𝐓𝐫𝐮̛𝐚"
			if (gio >= 14) get = "𝐁𝐮𝐨̂̉𝐢 𝐂𝐡𝐢𝐞̂̀𝐮"
			if (gio >= 19) get = "𝐁𝐮𝐨̂̉𝐢 𝐓𝐨̂́𝐢"

			msg = msg
			.replace(/\{name}/g, nameArray.join(', '))
			.replace(/\{type}/g, (memLength.length > 1) ?  '𝐂𝐚́𝐜 𝐁𝐞́' : '𝐁𝐞́')
			.replace(/\{soThanhVien}/g, memLength.join(', '))
			.replace(/\{threadName}/g, threadName)
			.replace(/\{get}/g, get)
      .replace(/\{bok}/g, bok);

			if (existsSync(path)) mkdirSync(path, { recursive: true });

			if (existsSync(pathGif)) formPush = { body: msg, attachment: createReadStream(pathGif), mentions }
			else formPush = { body: msg, mentions }

			return api.sendMessage(formPush, threadID);
		} catch (e) { return console.log(e) };
	}
      }