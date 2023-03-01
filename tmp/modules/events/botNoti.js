module.exports.config = {
	name: "joinNoti",
	eventType: ["log:subscribe"],
	version: "1.0.1",
	credits: "Mirai Team",
	description: "Thông báo bot hoặc người vào nhóm có random gif/ảnh/video",
	dependencies: {
		"fs-extra": "",
		"path": "",
		"pidusage": ""
	}
};

module.exports.onLoad = function () {
    const { existsSync, mkdirSync } = global.nodemodule["fs-extra"];
    const { join } = global.nodemodule["path"];

	const path = join(__dirname, "cache", "botNoti");
	if (existsSync(path)) mkdirSync(path, { recursive: true });	

	const path2 = join(__dirname, "cache", "ducryo", "deptry");
    if (!existsSync(path2)) mkdirSync(path2, { recursive: true });

    return;
}


module.exports.run = async function({ api, event }) {
	const { join } = global.nodemodule["path"];
	const { threadID } = event;
  ////////////////////////////////////////////////////////
  const thread = global.data.threadData.get(threadID) || {};
  if (typeof thread["joinNoti"] != "undefined" && thread["joinNoti"] == false) return;
  ///////////////////////////////////////////////////////
	if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
		api.changeNickname(`「 ${global.config.PREFIX} 」 • ${(!global.config.BOTNAME) ? "Made by Duy" : global.config.BOTNAME}`, threadID, api.getCurrentUserID());
		const fs = require("fs");
		return api.sendMessage("", event.threadID, () => api.sendMessage({body:`=== 𝗞𝗲̂́𝘁 𝗡𝗼̂́𝗶 𝗧𝗵𝗮̀𝗻𝗵 𝗖𝗼̂𝗻𝗴 ===\n•  [ 𝗕𝗼𝘁 𝗥𝘆𝗼 ] •\n𝐒𝐮𝐜𝐜𝐞𝐬𝐬 𝐋𝐨𝐚𝐝 𝐃𝐚𝐭𝐚 𝐁𝐨𝐱 🌸\n◆━━━━━━━━━━◆\n𝘾𝙝𝙪́𝙘 𝘼𝙣𝙝 𝙀𝙢 𝙑𝙪𝙞 𝙑𝙚̉ 𝙏𝙧𝙤𝙣𝙜 𝙌𝙪𝙖́ 𝙏𝙧𝙞̀𝙣𝙝 𝘿𝙪̀𝙣𝙜 𝘽𝙤𝙩 𝙉𝙝𝙚́ 𝗠𝗼𝗮𝗵 🌸`, attachment: fs.createReadStream(__dirname + "/cache/botNoti/bot.mp4")} ,threadID));
	}
	else {
		try {
			const { createReadStream, existsSync, mkdirSync, readdirSync } = global.nodemodule["fs-extra"];
			let { threadName, participantIDs } = await api.getThreadInfo(threadID);

			const threadData = global.data.threadData.get(parseInt(threadID)) || {};
			const path = join(__dirname, "cache", "joinGif");
			const pathGif = join(path, `join.mp4`);

			var mentions = [], nameArray = [], memLength = [], i = 0;
			
			for (id in event.logMessageData.addedParticipants) {
				const userName = event.logMessageData.addedParticipants[id].fullName;
				nameArray.push(userName);
				mentions.push({ tag: userName, id });
				memLength.push(participantIDs.length - i++);
			}
			memLength.sort((a, b) => a - b);
			
			(typeof threadData.customJoin == "undefined") ? msg = "━━━━━━━━━\n𝐖𝐞𝐥𝐜𝐨𝐦𝐞 𝐓𝐡𝐚̀𝐧𝐡 𝐕𝐢𝐞̂𝐧 𝐌𝐨̛́𝐢\n𝐏𝐫𝐞𝐟𝐢𝐱 𝐂𝐮̉𝐚 𝐁𝐨𝐭 𝐑𝐲𝐨 𝐋𝐚̀  [  !  ]\n𝐂𝐡𝐮́𝐜 𝐁𝐚̣𝐧 𝐒𝐮̛̉ 𝐃𝐮̣𝐧𝐠 𝐕𝐮𝐢 𝐕𝐞̉\n━━━━━━━━━" : msg = threadData.customJoin;
			msg = msg
			.replace(/\{name}/g, nameArray.join(', '))
			.replace(/\{type}/g, (memLength.length > 1) ?  'các bạn' : 'bạn')
			.replace(/\{soThanhVien}/g, memLength.join(', '))
			.replace(/\{threadName}/g, threadName);

			if (existsSync(path)) mkdirSync(path, { recursive: true });

			const randomPath = readdirSync(join(__dirname, "cache", "ducryo", "deptry"));

			if (existsSync(pathGif)) formPush = { body: msg, attachment: createReadStream(pathGif), mentions }
			else if (randomPath.length != 0) {
				const pathRandom = join(__dirname, "cache", "joinGif", "randomgif", `${randomPath[Math.floor(Math.random() * randomPath.length)]}`);
				formPush = { body: msg, attachment: createReadStream(pathRandom), mentions }
			}
			else formPush = { body: msg, mentions }

			return api.sendMessage(formPush, threadID);
		} catch (e) { return console.log(e) };
	}
}
