module.exports.config = {
  name: "ảnh",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Adonis",
  description: "xem ảnh hiện có trên bot",
  commandCategory: "Dành cho người dùng",
  usages: "image",
  cooldowns: 0,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
}

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies,getText}) => {
   
   const axios = require('axios');
    const request = require('request');
    const fs = require('fs-extra');

     if (args.length == 0) return api.sendMessage(` 🎭 Danh sách các ảnh hiện có  🎭 \n\n1. ảnh vú \n2. ảnh trai \n3. ảnh  hentai \n4. ảnh sexy \n5. ảnh nude\n6. ảnh cosplay\n7. ảnh mông\n8. ảnh gái\nDùng -ảnh  < ảnh bạn cần xem >\n
`, event.threadID, event.messageID);

     if (args[0] == "vú") {
    axios.get('https://Ryanair-Web-Api-Phan-Duy.chauminhtri2022.repl.co/api/gaivuto.php').then(res => {
        let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
        let callback = function() {
            return api.sendMessage({
                attachment: fs.createReadStream(__dirname + `/cache/vú.${ext}`)
            }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/vú.${ext}`), event.messageID);
        };
        request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/vú.${ext}`)).on("close", callback) });
  }
    if (args[0] == "trai") {
    axios.get('https://Ryanair-Web-Api-Phan-Duy.chauminhtri2022.repl.co/api/trai.php').then(res => {
        let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
        let callback = function() {
            return api.sendMessage({
                attachment: fs.createReadStream(__dirname + `/cache/trai.${ext}`)
            }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/trai.${ext}`), event.messageID);
        };
        request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/trai.${ext}`)).on("close", callback) });
  }
  if (args[0] == "hentai") {
    axios.get('https://Ryanair-Web-Api-Phan-Duy.chauminhtri2022.repl.co/api/hentai.php').then(res => {
        let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
        let callback = function() {
            return api.sendMessage({
                attachment: fs.createReadStream(__dirname + `/cache/hentai.${ext}`)
            }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/hentai.${ext}`), event.messageID);
        };
        request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/hentai.${ext}`)).on("close", callback) });
  }
  if (args[0] == "sexy") {
    axios.get('https://Ryanair-Web-Api-Phan-Duy.chauminhtri2022.repl.co/api/gaiditbu.php/api/gaisexy.php').then(res => {
        let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
        let callback = function() {
            return api.sendMessage({
                attachment: fs.createReadStream(__dirname + `/cache/gaisexy.${ext}`)
            }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/gaisexy.${ext}`), event.messageID);
        };
        request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/gaisexy.${ext}`)).on("close", callback) });
  }
  if (args[0] == "nude") {
    axios.get('https://Ryanair-Web-Api-Phan-Duy.chauminhtri2022.repl.co/api/nude.php').then(res => {
        let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
        let callback = function() {
            return api.sendMessage({
                attachment: fs.createReadStream(__dirname + `/cache/nude.${ext}`)
            }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/nude.${ext}`), event.messageID);
        };
        request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/nude.${ext}`)).on("close", callback) });
  }
  if (args[0] == "cosplay") {
    axios.get('https://Ryanair-Web-Api-Phan-Duy.chauminhtri2022.repl.co/api/cosplay.php').then(res => {
        let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
        let callback = function() {
            return api.sendMessage({
                attachment: fs.createReadStream(__dirname + `/cache/cosplay.${ext}`)
            }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/cosplay.${ext}`), event.messageID);
        };
        request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/cosplay.${ext}`)).on("close", callback) });
  }
  if (args[0] == "mông") {
    axios.get('https://Ryanair-Web-Api-Phan-Duy.chauminhtri2022.repl.co/api/gaiditbu.php').then(res => {
        let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
        let callback = function() {
            return api.sendMessage({
                attachment: fs.createReadStream(__dirname + `/cache/mông.${ext}`)
            }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/mông.${ext}`), event.messageID);
        };
        request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/mông.${ext}`)).on("close", callback) });
  }
 if (args[0] == "gái") {
axios.get('https://Ryanair-Web-Api-Phan-Duy.chauminhtri2022.repl.co/api/gai.php').then(res => {
        let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
        let callback = function() {
            return api.sendMessage({
                attachment: fs.createReadStream(__dirname + `/cache/gai.${ext}`)
            }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/gai.${ext}`), event.messageID);
        };
        request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/gai.${ext}`)).on("close", callback) });
  }
}