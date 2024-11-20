const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const moment = require("moment-timezone");
moment.tz.setDefault("Asia/Ho_Chi_Minh");
const orders = new Schema(
  {
    food_id: { type: String, default: "" },
    name: { type: String, default: "" },
    describe: { type: String, default: "" },
    category: { type: String, default: "" },
    price: { type: Number, default: 0 },
    img: { type: String, default: "" },
    quantity: { type: Number, default: 0 },
    status: { type: Boolean, default: false },
  },
  { timestamps: true }
);
module.exports = mongoose.model("orders", orders);
