const moment = require("moment");
const dateFormat = "YYYY-MM-DD HH:mm:ss";

module.exports = function(req, res, next) {
    req.timestamp = moment().format(dateFormat);
    next();
};