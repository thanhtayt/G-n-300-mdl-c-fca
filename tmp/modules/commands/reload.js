module.exports.config = {
	name: "reload",
	version: "1.0.0",
	hasPermssion: 1,
	credits: "Chill with Tea",
	description: "Khởi động lại Bot",
	commandCategory: "Penguin",
	usages: "reload + time",
	cooldowns: 5
};

module.exports.run = async ({ api, event, args }) => {
 const permission = ["100002637836730","100036576590462"];
             if (!permission.includes(event.senderID))
             return api.sendMessage("𝗤𝘂𝘆̀ 𝗫𝘂𝗼̂́𝗻𝗴 𝗕𝘂́ 𝗖𝘂 𝗔𝗻𝗵 𝗥𝗼̂̀𝗶 𝗔𝗻𝗵 𝗖𝗵𝗼 𝗥𝗲𝗹𝗼𝗮𝗱", event.threadID, event.messageID);
	const { threadID, messageID } = event;
	var time = args.join(" ");
	var rstime = "68";
	if (!time) rstime = "69";
	else rstime = time;
	api.sendMessage(`𝐂𝐡𝐮𝐚̂̉𝐧 𝐁𝐢̣ 𝐑𝐞𝐬𝐞𝐭 𝐁𝐨𝐭 𝐒𝐚𝐮 ${rstime} 𝗚𝗶𝗮̂𝘆 𝗡𝘂̛̃𝗮   !`, threadID);
	return setTimeout(() => { api.sendMessage("𝐓𝐢𝐞̂́𝐧 𝐇𝐚̀𝐧𝐡 𝐐𝐮𝐚́ 𝐓𝐫𝐢̀𝐧𝐡 𝐑𝐞𝐥𝐨𝐚𝐝 𝐁𝐨𝐭",event.threadID,() => process.exit(1) )},	rstime * 1000);
               }