const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const moment = require("moment-timezone");
moment.tz.setDefault("Asia/Ho_Chi_Minh");
const users = new Schema(
  {
    fullName: { type: String, default: "" },
    passWord: { type: String, default: "" },
    email: { type: String, default: "" },
    address: { type: String, default: "" },
    phone: { type: String, default: "" },
  },
  { timestamps: true }
);
module.exports = mongoose.model("users", users);
