const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;

db.users = require("./user.model.js");
db.activity = require("./activity.model.js");
db.doNFT = require("./doNFT.model.js");
db.item = require("./item.model.js");
db.originNFT = require("./originNFT.model.js");
db.rent = require("./rent.model.js");
db.vipNFT = require("./vipNFT.model.js");

module.exports = db;
