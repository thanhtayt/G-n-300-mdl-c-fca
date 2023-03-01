module.exports.config = {
	name: "age", // Tên lệnh, được sử dụng trong việc gọi lệnh
	version: "1.0.0", // phiên bản của module này
	hasPermssion: 0, // Quyền hạn sử dụng, với 0 là toàn bộ thành viên, 1 là quản trị viên trở lên, 2 là admin/owner
	credits: "Senproject", // Công nhận module sở hữu là ai
	description: "test", // Thông tin chi tiết về lệnh
	commandCategory: "Dành cho admin", // Thuộc vào nhóm nào: system, other, game-sp, game-mp, random-img, edit-img, media, economy, ...
	usages: "", // Cách sử dụng lệnh
	cooldowns: 5, // Thời gian một người có thể lặp lại lệnh
	dependencies: {
		"axios": "",
	}
};


module.exports. run = async function({ api, event, args }) {
  const axios = require("axios");
  const date = (args[0] || "").split('/');
  if (date.length < 3) return api.sendMessage('Vui lòng nhập ngày tháng năm hợp lệ theo định dạng DD/MM/YYYY', event.threadID, event.messageID);
  axios.get('https://goatbot.tk/taoanhdep/age', {
    params: {
      day: date[0],
      month: date[1],
      year: date[2],
      apikey: "xksatvansyvahsh"
    },
    responseType: "stream"
  })
  .then(response => {
    api.sendMessage({
      attachment: response.data
    }, event.threadID, event.messageID);
  })
  .catch(error => {
    if ((error).response) error.response.data.on("data", function(e) {
      const err = JSON.parse(e);
      api.sendMessage(`Đã xảy ra lỗi ${err.name}: ${err.message}`, event.threadID, event.messageID);
    });
    else api.sendMessage(`Đã xảy ra lỗi ${error.name}: ${error.message}`, event.threadID, event.messageID);
  });
};