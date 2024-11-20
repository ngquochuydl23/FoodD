const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const moment = require("moment-timezone");
moment.tz.setDefault("Asia/Ho_Chi_Minh");
const foods = new Schema(
  {
    name: { type: String, default: "" },
    describe: { type: String, default: "" },
    category: { type: String, default: "" },
    price: { type: Number, default: 0 },
    img: { type: String, default: "" },
  },
  { timestamps: true }
);
module.exports = mongoose.model("foods", foods);
